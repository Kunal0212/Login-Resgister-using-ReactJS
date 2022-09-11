import {Grid, TextField, FormControlLabel, Checkbox, Button, Box, Alert} from '@mui/material';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Pic4 from '../../images/pic4.png';
function Contact() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData={
          name: data.get("name"),
          mobile: data.get("mobile"),                                                                   
          email: data.get("email"),
          course: data.get("course"),
          msg: data.get("msg"),
          tc: data.get("tc"),
        }
        
        if(actualData.name && actualData.mobile && actualData.email && actualData.course && actualData.msg && actualData.tc!==null)
        {
            console.log(actualData);
            document.getElementById("contact-form").reset()
            setError({status:true, msg:"We'll contact you shortly", type:'success'})
            setTimeout(()=>{
            navigate('/login')
            }, 3000)
            
        }else{
          setError({status:true, msg:"All Fields are Required", type:'error'})
        }
    }
    return (
      <>
      <Grid container sx={{ height: '90vh' }}>
      <Grid item lg={7} sm={5} mt={5} sx={{
        backgroundImage: `url(${Pic4})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'block' }
      }}>
      </Grid>
      <Grid item lg={5} sm={7} mt={1} component='form' noValidate  id="contact-form" onSubmit={handleSubmit}>
        <center><h1>Feel Free to Contact Us</h1></center>
        <TextField margin='normal' required fullWidth id="name" name="name" label="Full Name"/>
        <TextField margin='normal' required fullWidth id="mobile" name="mobile" type="tele" label="Contact Number"/>
        <TextField margin='normal' required fullWidth id="email" name="email" label="E-Mail Address"/>
        <TextField margin='normal' required fullWidth id="course" name="course" label="Please Enter Your Course"/>
        <TextField margin='normal' required fullWidth id="msg" name="msg" label="Enter Your Message"/>
        <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc"/>} label="All information entered by me are correct."/>
        <Box textAlign="center">
        <Button type="submit" variant="contained" sx={{mt:3, mb:2,px:5}}>Send</Button>
        </Box>
       {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} sm={7} xs={5}>

        <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.031923142784!2d77.87176171492399!3d29.863353181948465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb347e0a15785%3A0x44149ff83806cc72!2sChandrawati%20PG!5e0!3m2!1sen!2sin!4v1662862428194!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>

      </Grid>
      </>
    )
  }
  
  export default Contact;