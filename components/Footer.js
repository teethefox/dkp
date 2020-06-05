// import Layout from './MyLayout';

export default function FooterComponent() {
  const imagesStyle = {
    // textAlign: 'center',
    // width: '50%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    height: '2.5em',
    margin: '5rem',

  }
  const aboutContainer = {
    padding: '5em',
    textAlign: 'center'
  }
  const aboutHeading = {
    fontSize: '3em',
    fontWeight: 'bold',
    padding: '5rem',
    fontFamily: '"Arial Black", Gadget, sans-serif'
  }

  
  return (
    <div style={aboutContainer}>
      <div style={aboutHeading}>Book Your Next Event With Us</div>
      <a class="buttonStyle" href="https://www.honeybook.com/widget/dkp_entertainment/cf_id/5a76e184dc145200031219c4">Start Now</a>
      <p>
        <img style={imagesStyle} src="/facebook.png" href="https://www.facebook.com/dkpent/" class="social-media" />
        <img style={imagesStyle} src="/instagram.png" href="https://www.instragram.com/dkpent/" class="social-media" />
        <img style={imagesStyle} src="/youtube.png" href="https://www.youtube.com/channel/UCwQKus3t4x_ksmzBRp2vJxg" class="social-media"/>
      </p>
    </div>
  );
}