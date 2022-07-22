import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Box, Grid, List, ListItem, styled, Typography, useTheme } from '@mui/material';
import { DataNormalize, LoadAudio } from '../../util/AudioUtils';

const Input = styled('input')(() => ({
  width: '100%',
}));

const Canvas = styled('canvas')(() => ({
  width: '100%',
  height: 200,
}));

const WaveCanvas = (props) => {
  const { canvasData, sps } = props;

  const canvasRef = useRef(null);
  // const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = '#ff0000'; //theme.palette.divider;
    context.lineWidth = Math.min(canvasData);

    context.beginPath();
    for (let i = 0; i < canvasData.length; i++) {
      const x = i / sps;
      const y = canvasData[i];

      context.lineTo(x, y);
    }

    context.stroke();
  }, [canvasData]);

  return <Canvas ref={canvasRef} />;
};

const WaveForm = () => {
  const [file, setFile] = useState(null);
  const [canvasData, setCanvasData] = useState([]);
  const samplePerSec = 100;

  const onChangeFiles = (e) => {
    const files = e.target.files[0];
    setFile(files);
  };

  useEffect(() => {
    if (file) {
      LoadAudio(file).then(([raw, sr, duration]) => {
        const totalSample = duration * samplePerSec;

        const blockSize = Math.floor(sr / samplePerSec);

        const dataFilter = [];

        for (let i = 0; i < totalSample; i++) {
          const blockStart = blockSize * i;
          let blockSum = 0;

          for (let j = 0; j < blockSize; j++) {
            if (raw[blockStart + j]) {
              blockSum += Math.abs(raw[blockStart + j]);
            }
          }

          dataFilter.push(blockSum);
        }

        DataNormalize(dataFilter).then((normalizedData) => {
          setCanvasData(normalizedData);
        });
      });
    }
  }, [file]);

  useEffect(() => {
    console.log('Canvas Data', canvasData);
  }, [canvasData]);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: '100%',
      }}>
      <Grid
        item
        md={12}
        xs={12}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>WaveHome</Typography>
      </Grid>
      <Grid
        item
        md={6}
        xs={6}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Input type="file" onChange={onChangeFiles}></Input>
      </Grid>
      <Grid
        item
        md={6}
        xs={6}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <List>
          {!!file && (
            <ListItem key={file.lastModified}>
              <Typography>{file.name}</Typography>
            </ListItem>
          )}
        </List>
      </Grid>
      <Grid
        item
        md={12}
        xs={12}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <WaveCanvas canvasData={canvasData} sps={samplePerSec} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default WaveForm;
