import { Card, Button, Box, CardContent, Typography } from '@mui/material';

export const getServerSideProps = (context) => {
  console.log(context);
  return {
    props: {},
  };
};

export default function Home() {
  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: 'column', m: 4, p: 4 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography>Hello, world</Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant={'outlined'}>OK</Button>
        </Box>
      </Card>
    </>
  );
}
