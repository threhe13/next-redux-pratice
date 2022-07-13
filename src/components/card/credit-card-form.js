import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import CreditCardBox from './credit-card-box';

const dateSplit = (value) => {
  const [month, year] = value.split('/');
  return [month, year];
};

const CreditCardForm = () => {
  const [creditInfo, setCreditInfo] = useState({
    cardNumber: '••••••••••••••••',
    cardExpirationDate: '••/••',
    customerIdentityNumber: '••••••',
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...creditInfo,
      submit: null,
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string(),
      cardExpirationDate: Yup.string(),
      customerIdentityNumber: Yup.string(),
    }),
    onSubmit: async (values, helpers) => {
      try {
        setCreditInfo({
          cardNumber: values.cardNumber,
          cardExpirationDate: values.cardExpirationDate,
          customerIdentityNumber: values.customerIdentityNumber,
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Box
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 1,
          mt: 3,
          textAlign: 'center',
        }}>
        <Box sx={{ m: 2 }}>
          <Typography variant={'h6'}>Credit Card Form</Typography>
        </Box>
        <CreditCardBox cardInfo={formik.values} />
        <form noValidate onSubmit={formik.handleSubmit}>
          <Box>
            <List>
              <ListItem>
                <ListItemText
                  disableTypography
                  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                  primary={<Typography sx={{ mr: 4, minWidth: 180 }}>Card Number</Typography>}
                />
                <Box>
                  <TextField
                    fullWidth
                    label={'Card Number'}
                    name={'cardNumber'}
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.cardNumber && formik.errors.cardNumber)}
                    helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                    size={'small'}
                  />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                  primary={
                    <Typography sx={{ mr: 4, minWidth: 180 }}>Card Expiration Date</Typography>
                  }
                />
                <Box>
                  <TextField
                    fullWidth
                    label={'Card Expiration Year'}
                    name={'cardExpirationYear'}
                    value={formik.values.cardExpirationDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      formik.touched.cardExpirationDate && formik.errors.cardExpirationDate,
                    )}
                    helperText={
                      formik.touched.cardExpirationDate && formik.errors.cardExpirationDate
                    }
                    size={'small'}
                  />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                  primary={<Typography sx={{ mr: 4, minWidth: 180 }}>Birth</Typography>}
                />
                <Box>
                  <TextField
                    fullWidth
                    label={'Card Number'}
                    name={'cardNumber'}
                    value={formik.values.customerIdentityNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      formik.touched.customerIdentityNumber && formik.errors.customerIdentityNumber,
                    )}
                    helperText={
                      formik.touched.customerIdentityNumber && formik.errors.customerIdentityNumber
                    }
                    size={'small'}
                  />
                </Box>
              </ListItem>
            </List>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreditCardForm;
