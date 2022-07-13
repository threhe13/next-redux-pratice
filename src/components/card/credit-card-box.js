import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

/**
 * Credit Enrollment Request
 *
 * @param string Card Number
 * @param string Card Expiration Year
 * @param string Card Expiration Month
 * @param string Customer Identity Number(Birth)
 */

/**
 * Credit Info Response
 *
 * @param string Card Company
 * @param string Card Number
 * @param string Card Type
 * @param string Card Owner Type
 */

const CreditCardBox = (props) => {
  const { cardInfo } = props;

  /**
   * TODO: CardNumber Validator
   */

  /**
   * TODO: Expiration Date
   */

  /**
   * TODO: Birth
   */

  return (
    <Box>
      <Grid container spacing={1} justifyContent="space-around">
        <Card
          elevation={0}
          variant="outlined"
          sx={{
            cursor: 'pointer',
            width: 350,
            height: 200,
            borderColor: 'primary.main',
            borderWidth: 2,
            m: 2,
          }}>
          <CardContent
            sx={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}>
            <Box>
              {/* CARD LOGO IMAGE */}
              <Typography sx={{ textAlign: 'right' }}>LOGO</Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                mb: 1,
                mt: 1,
              }}>
              <Typography variant="h6">COMPANY NAME</Typography>
              <Typography
                color="textSecondary"
                sx={{
                  mt: 'auto',
                  fontSize: 32,
                }}
                variant="body2">
                {cardInfo.cardNumber}
              </Typography>
            </Box>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Typography variant="overline" sx={{ fontSize: 24 }}>
                {cardInfo.cardExpirationDate}
              </Typography>
              <Typography variant="overline" sx={{ fontSize: 24 }}>
                {cardInfo.customerIdentityNumber}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default CreditCardBox;
