import Head from 'next/head';
import { Box, Card, CardContent, Typography } from '@mui/material';
import CreditCardForm from '../../components/card/credit-card-form';

const CardHome = () => {
  return (
    <>
      <Head>
        <title>Card</title>
      </Head>
      <Box>
        <Card sx={{ display: 'flex', flexDirection: 'column', m: 4 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant={'h5'}>Card Home</Typography>
          </CardContent>
        </Card>
      </Box>
      <CreditCardForm />
    </>
  );
};

export default CardHome;
