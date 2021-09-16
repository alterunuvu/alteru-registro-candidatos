import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';
import { firebaseSignUpUsers } from '../../utils/firebase';
import * as Yup from 'yup';
import { useHistory } from 'react-router';

export const SignUp= (props) => {
 
  const history = useHistory();
  const handleClick =() =>{
    history.push("/")
  }

  const registrarUsuario = (usuario) => {
    firebaseSignUpUsers(usuario.email, usuario.password);
    alert("El usuario se registró con éxito.")
    
  }

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              fullName: '',
              Phone: '',
              password: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({                
                fullName: Yup.string().max(255).required('Ingrese la informacíon requerida requerido'),
                Phone: Yup.string().max(255).required('Ingrese la informacíon requerida requerido'),
                email: Yup.string().email('Debes validar su correo').max(255).required('Correo electronico requerido'),
                password: Yup.string().max(255).required('Ingrese la informacíon requerida requerido'),
                policy: Yup.boolean().oneOf([true], 'Ingrese la informacíon requerida requerido'),
              })
            }
            onSubmit={(usuario) => {
              registrarUsuario(usuario);
            }}
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
               <TextField
                  error={Boolean(touched.fullName && errors.fullName)}
                  fullWidth
                  helperText={touched.fullName && errors.fullName}
                  label="Nombre Completo"
                  margin="normal"
                  name="fullName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Phone && errors.Phone)}
                  fullWidth
                  helperText={touched.Phone && errors.Phone}
                  label="Phone"
                  margin="normal"
                  name="Phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Phone}
                  variant="outlined"
                />
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
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    
                    {' '}
                    <Link
                      color="#9c27b0"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terminos y condiciones 
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box sx={{ py: 2 }}>
                  <Button
                    color="#9c27b0"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={handleClick}
                  >
                   Registrarse ahora
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  
                  {' '}
                  <Link component={RouterLink} to="/" variant="h6" underline="hover">
                    Iniciar Sesión
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