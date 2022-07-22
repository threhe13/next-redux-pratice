import Head from 'next/head';
import NextLink from 'next/link';
import { Card, Box, CardContent, Typography, Grid, Link } from '@mui/material';

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
            <Typography variant={'h5'}>React Components</Typography>
          </CardContent>
        </Card>
      </Box>
      <Grid container spacing={4} sx={{ p: 4 }}>
        <Grid item md={6} xs={6}>
          <Card
            sx={{
              minWidth: 300,
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NextLink href="/card" passHref>
              <Link variant="subtitle2">Card Home</Link>
            </NextLink>
          </Card>
        </Grid>
        <Grid item md={6} xs={6}>
          <Card
            sx={{
              minWidth: 300,
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NextLink href="/wave" passHref>
              <Link variant="subtitle2">WaveForm</Link>
            </NextLink>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
