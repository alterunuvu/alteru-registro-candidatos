import {
    Box,
    Link,
    Button,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
  } from '@material-ui/core';
  import PropTypes from 'prop-types';
  import { useState } from 'react';
  import PerfectScrollbar from 'react-perfect-scrollbar';
  import { useHistory } from 'react-router';
  import { Link as RouterLink} from 'react-router-dom';
  
const UserResults = ({ users, ...rest }) => {
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
  
    const handleSelectAll = (event) => {
      let newSelectedUserIds;
  
      if (event.target.checked) {
        newSelectedUserIds = users.map((user) => user.id);
      } else {
        newSelectedUserIds = [];
      }
  
      setSelectedUserIds(newSelectedUserIds);
    };

    const history = useHistory();
    const handleClick =() =>{
      history.push("/UserView")
    }
  
    const handleSelectOne = (event, id) => {
      const selectedIndex = selectedUserIds.indexOf(id);
      let newSelectedUserIds = [];
  
      if (selectedIndex === -1) {
        newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds, id);
      } else if (selectedIndex === 0) {
        newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds.slice(1));
      } else if (selectedIndex === selectedUserIds.length - 1) {
        newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelectedUserIds = newSelectedUserIds.concat(
          selectedUserIds.slice(0, selectedIndex),
          selectedUserIds.slice(selectedIndex + 1)
        );
      }
  
      setSelectedUserIds(newSelectedUserIds);
    };
  
    const handleLimitChange = (event) => {
      setLimit(event.target.value);
    };
  
    const handlePageChange = (event, newPage) => {
      setPage(newPage);
    };
  
    return (
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUserIds.length === users.length}
                      color="primary"
                      indeterminate={
                        selectedUserIds.length > 0
                        && selectedUserIds.length < users.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>
                    Nombre Completo
                  </TableCell>
                  <TableCell>
                    Email
                  </TableCell>
                  <TableCell>
                     Dirección 
                  </TableCell>
                  <TableCell>
                    Ciudad
                  </TableCell>
                  <TableCell>
                     Tipo de Documento
                  </TableCell>
                  <TableCell>
                     Numero de Documento
                  </TableCell>
                 <TableCell>
                     Fecha de Registro
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, limit).map((user) => (
                  <TableRow
                    hover
                    key={user.id}
                    selected={selectedUserIds.indexOf(user.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUserIds.indexOf(user.id) !== -1}
                        onChange={(event) => handleSelectOne(event, user.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                         
                        </Typography>
                      </Box>
                    {/* <TableCell>
                     {moment(users,createdAt).format('DD/MM/YYYY')}
                    </TableCell> */}
                    <TableCell>
                      {user.fullname}
                    </TableCell>
                    </TableCell>
                    <TableCell>
                      {user.email}
                    </TableCell>
                    <TableCell>
                      {user.address}
                    </TableCell>
                    <TableCell>
                      {user.residence}
                    </TableCell>
                    <TableCell>
                      {user.document.type}
                  </TableCell>
                  <TableCell>
                     {user.document.number}
                  </TableCell>
                    <TableCell>
                      <Button
                       
                      onClick={handleClick}> <Link component={RouterLink} to="/UserView" variant="h6" underline="hover"/>
                        Ver Mas Datos
                      </Button>
                    </TableCell>
  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={users.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    );
  };
  
    UserResults.propTypes = {
    users: PropTypes.array.isRequired
};
  
  export default UserResults;
  