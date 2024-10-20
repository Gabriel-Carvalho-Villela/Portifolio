import { Box, Container, Grid, styled, Typography } from '@mui/material'
import Avatar from '../../../../assets/images/Avatar.jpeg'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/Style/StyledButton';
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';
const Home = () => {
  const StyleHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }))
  const StyleImg = styled("img")(({ theme }) => ({
    width: "50%",
    borderRadius: "50%",
    border: ` 1px solid ${theme.palette.primary.contrastText}`
  }))
  return (
    <>
      <StyleHero>
        <Container>


          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>

              <Box position="relative">
                <Box position="absolute" width={"100%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyleImg src={Avatar} />
                </Box>
              </Box>




            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color='primary.contrastText' textAlign='center' variant='h1' pb={2}>Gabriel Carvalho</Typography>
              <Typography color='primary.contrastText' textAlign='center' variant='h2'>I'm a Software Engineer</Typography>
              <Grid container display='flex' justifyContent='center' spacing={3} pt={3}>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>

                  <StyledButton>
                    <DownloadIcon />
                    <Typography>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                  <StyledButton>
                    <EmailIcon />
                    <Typography>
                      Contact me
                    </Typography>
                  </StyledButton>
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
