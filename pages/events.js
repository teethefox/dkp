import Layout from '../components/MyLayout';

export default function Events() {
  const aboutStyle = {
    textAlign: 'center',
    fontFamily: '"Arial Black", Gadget, sans-serif',
    marginTop: '30em'
  }
  return (
    <Layout >
      <div style={aboutStyle}>
      <iframe src="https://calendar.google.com/calendar/embed?src=3082j1ajugf6ndi9t4drar92fc%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: 0, width:"100em", height:"80em",frameborder:"0",scrolling:"no"}}></iframe>
      </div>
    </Layout>
  );
}