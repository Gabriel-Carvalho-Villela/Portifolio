import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyleToolbar = styled(Toolbar)(({ theme }) => ({
       display:"flex",
       justifyContent:"space-evenly"
      }))

    return(
        <>
            <AppBar position="absolute">
            <StyleToolbar>
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
            </StyleToolbar>
            </AppBar>
        </>
    )
}

export default NavBar