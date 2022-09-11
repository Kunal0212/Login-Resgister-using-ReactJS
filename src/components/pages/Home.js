import {Grid } from '@mui/material';
import Pic3 from '../../images/pic3.png';
function Home() {
  
  return (
    <>
        <Grid container sx={{ height: '90vh' }}>
      <Grid item lg={7} sm={5} mt={5} sx={{
        backgroundImage: `url(${Pic3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'block' }
      }}>
      </Grid>
      <Grid item lg={5} sm={7} mt={5} className='firm'>
        <h1>Education...</h1>
        <p>Education is the backbone of a country. Education is like a burning lamp through which one is able to see himself and the world around him.Life becomes valueless without education. Education makes one self reliant and develops ones self confidence as knowledge is believed to be power.Education begins at home and in the process of Education ones mind gets opened up. After receiving informal Education the child enters school to receive formal education. The true function of Education is to build an integrated personality. Education does not mean accumulation of knowledge. The mind should learn to deem and discriminate. Education is a lifelong process.Education makes you knowledgeable, intelligent and independent. With education, we build specialized knowledge, increase awareness, develop the ability of making fair judgment and become self dependent.</p>
        <h3>Education is priceless. Nothing can actually replace its importance!!! </h3>  
      </Grid>
      </Grid>
      <Grid lg={12} sm={7} ml={45} mt={15} mr={35} sx={{ width: '50rem', height: 400  }}>
        <center><h2>What was unique about ancient Indian education?</h2></center>
        <p>Education in ancient India was quite different from the rest of the world back then. The society and state couldn’t interfere with the curriculum or the administration. To get an education, a child had to leave home and live with a teacher in a gurukul for the entire duration of his studies. No fee was charged for education; in fact, the teacher took care of everything, including food, clothing and housing. According to this system, physical labor was of utmost importance. So, even if a child was interested in acquiring philosophical knowledge, he would still have to do some manual work every day. Debates and discussions were a part of education, even in ancient days.</p>
      </Grid>
      
    </>
  )
  
}

export default Home;