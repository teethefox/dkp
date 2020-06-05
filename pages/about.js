import Layout from '../components/MyLayout';

export default function About() {
  const aboutStyle = {
    // textAlign: 'center',
    // width: '50%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    lineHeight: '50px',
    fontFamily: '"Arial Black", Gadget, sans-serif'
  }
  const aboutContainer = {
    padding: '5em'
  }
  const aboutHeading = {
    fontSize: '5em',
    fontWeight: 'bold',
    fontFamily: '"Arial Black", Gadget, sans-serif'

  }
  
  return (
    <Layout>
    <div class="parallax3"></div>
    <div  style={aboutContainer}>
      <div style={aboutHeading}>About Us</div>
      <p style={aboutStyle}>
        DKP Entertainment brings the vision of your special event to life!  
      </p>
      <p style={aboutStyle}>
        We can put your mind  at ease and allow you to enjoy yourself at your special occasion. We do this by addressing all your questions with professional expertise creating a game plan that will run smoothly and successfully. 
        From grand ballrooms to casual home events our team is ready to work with you and your vendors so everything runs as planned.
      </p>
      <p style={aboutStyle}>
        We have over 25 years of experience working to tailor our presentation to fit our clients needs and providing them with fun, interactive entertainment. Our goal is to keep a smile on your face by making certain your guests have one on theirs.
      </p>
      <p style={aboutStyle}>
        We look forward to learning how we can make your next event a successful one.</p>
      </div>     
       <div class="parallax4"></div>

    </Layout>
  );
}