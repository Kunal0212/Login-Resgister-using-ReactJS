import {AppBar, Box, Toolbar,Typography,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
const Navbar = () => {
  return (
    <>
    <Box sx={{flexGrow:1}}>
        <AppBar position="static" color="secondary">
            <Toolbar>
                <MenuBookTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , fontSize:60}}/>
                <Typography variant='h5' component="div" sx={{display:{xs:'none',md:'flex'},fontFamily:'monospace',fontWeight:700,color:'inherit',textDecoration:'none',mr:125}}>
                    Education
                </Typography>
                <Button component={NavLink} to='/' style={({isActive}) =>{return {backgroundColor: isActive? '#6d1b7b' : ''}}} sx={{color:'white',textTransform:'none'}}>Home</Button>
                <Button component={NavLink} to='/Contact' style={({isActive}) =>{return {backgroundColor: isActive? '#6d1b7b' : ''}}} sx={{color:'white',textTransform:'none'}}>Contact</Button>
                <Button component={NavLink} to='/login' style={({isActive}) =>{return {backgroundColor: isActive? '#6d1b7b' : ''}}} sx={{color:'white',textTransform:'none'}}>Login/Registration</Button>
            </Toolbar>
        </AppBar>
    </Box>
    </>
  )
}

export default Navbar;