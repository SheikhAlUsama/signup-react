import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';

function Profile() {
    return (
        <div>
            <MenuAppBar title="Login" />
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <MyCard>
                            <h1>Profile</h1>
                        </MyCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Profile;