import Head from 'next/head';
import { Box, Card, CardContent, Typography } from '@mui/material';
import WaveForm from '../../components/wave/wave-form';

const WaveHome = () => {
  return (
    <>
      <Head>
        <title>Wave</title>
      </Head>
      <Box>
        <Card sx={{ display: 'flex', flexDirection: 'column', m: 4 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant={'h5'}>Wave Form</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ width: '100%', p: 4 }}>
        <WaveForm />
      </Box>
    </>
  );
};

export default WaveHome;
