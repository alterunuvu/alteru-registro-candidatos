import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Leads from '../../GetDataFirebase/UserResults';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Leads/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
           
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
