import Layout from '../components/MyLayout';
import Link from 'next/link';

export default function FotoXL() {
  const aboutStyle = {
    textAlign: 'center',
    fontFamily: '"Arial Black", Gadget, sans-serif'

  }
  const aboutContainer = {
    padding: '5em'
  }
  const aboutHeading = {
    fontSize: '5em',
    fontWeight: 'bold',
    fontFamily: '"Arial Black", Gadget, sans-serif',
    marginRight: '5%'
  }
  return (
    <Layout >
      <div class="parallax5"></div>
    <div  style={aboutContainer}>
      <ul class="fotoxl-list">      
      <div style={aboutHeading}>FotoXL</div>

      <li class="fotoxl-list-item" style={aboutStyle}>
      Virtual Photo Booth
      </li>
      <li class="fotoxl-list-item" style={aboutStyle}>
        Digital marketing
      </li>
      <li class="fotoxl-list-item" style={aboutStyle}>
        Virtual events
      </li>
      <li class="fotoxl-list-item" style={aboutStyle}>    
        Text marketing
      </li>
      <Link href="https://www.honeybook.com/widget/dkp_entertainment/cf_id/5a76e184dc145200031219c4">
        <button class="buttonStyle">Contact Us</button>
      </Link>
      </ul>
      </div>     
       <div class="parallax6"></div>
    </Layout>
  );
}