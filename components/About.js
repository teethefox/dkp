// import Layout from './MyLayout';
import Link from 'next/link';

export default function AboutComponent() {
  const aboutStyle = {
    // textAlign: 'center',
    // width: '50%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    fontSize: '2em',
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
    <div style={aboutContainer}>
      <div style={aboutHeading}>About Us</div>
      <p style={aboutStyle}>
        DKP Entertainment is entertainment with personality!  
      </p>
      <p style={aboutStyle}>
        We have over 25 years of experience working to tailor our presentation to fit our clients needs and providing them with fun, interactive entertainment.
      </p>
      <Link href="/about">
        <button class="buttonStyle">Learn More About Us</button>
      </Link>
    </div>
  );
}