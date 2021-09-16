import {
    Box,
    Button,
    Card,
    CardContent, InputAdornment,
    SvgIcon, TextField
  } from '@material-ui/core';
  import { Search as SearchIcon } from 'react-feather';
  import { useHistory } from 'react-router';
  
const UserListToolbar = (props) => {
  
  const history = useHistory();

  const handleClick =() =>{
    history.push("/FormSignup")
  }
  
    return <Box {...props}>
      <Box 
        onClick={handleClick}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
  
        <Button
          onClick={() => {
            //navigate('/app/customer-new', { replace: true });
          }}
          color="#9c27b0"
          variant="contained"
        >
          Registrar Mas Usuarios
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="#9c27b0"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
};

export default UserListToolbar;