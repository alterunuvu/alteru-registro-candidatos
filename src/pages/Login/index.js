import {
  Box,
  Button,
  Container, Link,
  TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { Link as RouterLink} from 'react-router-dom';
import { useHistory } from 'react-router';
import { firebaseIniciarSesion } from '../../utils/firebase';
import * as Yup from 'yup';



export const Admin = () => {
  
  
  const history = useHistory();

  const handleClick =() =>{
    history.push("/Leads")
  }
  const iniciarSesion = async credenciales => {
    let sesionIniciada = await firebaseIniciarSesion(credenciales.email, credenciales.password);
    if (sesionIniciada) {
      console.log();
      
    } else {
      alert('Las credenciales no son correctas');
    }
    
  }
  return (
    <>
      <Helmet>
        <title>Iniciar Sesión </title>
      </Helmet>
      <Box
        sx={{
          
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'erika.blanco@alteru.co',
              password: 'password'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={iniciarSesion}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                   
                  </Typography>
                 </Box>

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Correo Electrónico"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Contraseña"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={handleClick}
                  >
                    Iniciar sesión
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  ¿No tienes una cuenta?
                  {' '}
                  <Link component={RouterLink} to="/SignUp" variant="h6" underline="hover">
                    Registrarse Aqui
                  </Link>     
                 
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};


