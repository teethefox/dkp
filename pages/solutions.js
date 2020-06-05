import Layout from '../components/MyLayout';
import Link from 'next/link';

export default function Solutions() {
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
      <div class="parallax7"></div>
    <div  style={aboutContainer}>
      <ul class="fotoxl-list">      
      <div style={aboutHeading}>Business Solutions</div>

      <li class="fotoxl-list-item" style={aboutStyle}>
        Media Transfer
      </li>
      <li class="fotoxl-list-item" style={aboutStyle}>
        PA Rentals
      </li>
      <li class="fotoxl-list-item" style={aboutStyle}>
        Projector Rentals
      </li>
      {/* <Link href="https://www.honeybook.com/widget/dkp_entertainment/cf_id/5a76e184dc145200031219c4">
        <a class="fotoxl-list-item" style={aboutStyle}>Contact Us</a>
      </Link> */}
      </ul>
      </div>     
       <div class="parallax7"></div>
    </Layout>
  );
}