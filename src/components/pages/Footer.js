import { Container } from "@mui/system";
import { Grid, Box, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#7f137e"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={2} fontSize="large"><b>Help</b></Box>
              <Box>
                <Link mt={50} href="Contact" color="inherit" sx={{textDecoration:'none'}}>
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={2} fontSize="large">Account</Box>
              <Box>
                <Link href="#" color="inherit" sx={{textDecoration:'none'}}>
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="#" color="inherit" sx={{textDecoration:'none'}}>
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={2} fontSize="large">Follow us</Box>
              <Box>
                  <FacebookIcon fontSize="large" sx={{cursor:'pointer'}}></FacebookIcon>
              </Box>
              <Box>
                  <InstagramIcon fontSize="large" sx={{cursor:'pointer'}}></InstagramIcon>
              </Box>
              <Box>
                  <TwitterIcon fontSize="large" sx={{cursor:'pointer'}}></TwitterIcon>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            All Rights are reserved  &reg; {new Date().getFullYear()}&copy;
          </Box>
        </Container>
      </Box>
    </footer>
  );
}