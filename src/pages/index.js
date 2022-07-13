import Head from 'next/head';
import { Card, Button, Box, CardContent, Typography } from '@mui/material';
import CreditCardForm from '../components/card/credit-card-form';

export const getServerSideProps = (context) => {
  console.log(context.req.cookies);
  return {
    props: {},
  };
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Test Server</title>
      </Head>
      <Box>
        <Card sx={{ display: 'flex', flexDirection: 'column', m: 4 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant={'h5'}>Hello, world</Typography>
          </CardContent>
        </Card>
      </Box>
      <CreditCardForm />
    </>
  );
};

export default Home;
