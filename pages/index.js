import Link from 'next/link';
import Layout from '../components/MyLayout';
import AboutComponent from '../components/About';
import FooterComponent from '../components/Footer';
export default function Index() {
  const homeStyle = {

    textAlign: 'center',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  return (
    <Layout>
		<div class="parallax"></div>
		<div class="parallax-break">
			<AboutComponent></AboutComponent>
		</div>
		<div class="parallax2"></div>
    </Layout>
  );
}