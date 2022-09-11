import {TextField, Grid, Button, Box, Alert} from "@mui/material";
import {useState} from 'react';
function Sendpassemail() {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
      })
        const handleSubmit = (e)=>{
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const actualData={
              email: data.get("email"),
            }
            
            if(actualData.email){
                console.log(actualData);
                document.getElementById("password-reset-form").reset()
                setError({status:true, msg:"Password Reset Email Sent. Check Your Email!!", type:'success'})
            }else{
              setError({status:true, msg:"Please Provide Email!!", type:'error'})
            }
        }
      return (
        <>
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={12}>
            <Box component='form' noValidate sx={{mt:2}} id="password-reset-form" onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id="email" name="email" label="E-Mail Address"/>
            <Box textAlign="center">
            <Button type="submit" variant="contained" sx={{mt:3, mb:2,px:5}}>Send Verification E-mail</Button>
            </Box>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
            </Box>
            </Grid>
        </Grid>
        </>
      )
}

export default Sendpassemail