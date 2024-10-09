import { Button, Container, Grid, styled, Typography } from '@mui/material'
import Avatar from '../../../../assets/images/Avatar.jpeg'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
const Home = () => {

  const StyleHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  }))
  const StyleImg = styled("img")(() => ({
    width: "75%",
    borderRadius: "50%"
  }))
  return (
    <>
      <StyleHero>
        <Container>


          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyleImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color='primary' textAlign='center' variant='h1'>Gabriel de Carvalho</Typography>
              <Typography color='primary' textAlign='center' variant='h2'>I'm a Software Engineer</Typography>
              <Grid container display='flex' justifyContent='center'>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <Button><DownloadIcon /> Download CV</Button>
                </Grid>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <Button> <EmailIcon /> Contact me</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Container>
      </StyleHero>
    </>
  )
}

export default Home
