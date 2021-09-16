import { Box, Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { firebaseGetUsers } from '../../utils/firebase';
import UserListToolbar from '../../GetDataFirebase/UserListToolbar';
import UserResults from '../../GetDataFirebase/UserResults';


export const Leads = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetUsers();
  }, []);

  const GetUsers = async () => {
    let resultado = await firebaseGetUsers('users');
    setUsers(resultado);
  }

  return <>
    <Helmet>
      <title>Data Table</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <UserListToolbar />
        <Box sx={{ pt: 3 }}>
          <UserResults users={users} />
        </Box>
      </Container>
    </Box>
  </>;
}

