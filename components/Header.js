import Link from 'next/link';

const navStyle = {
	textAlign: 'right',
	position: 'relative',
	top: '-1.7em'
	// marginTop: '10%',
 
};
const linkStyle = {
	// margin: '75px',
	// textDecoration: 'none',
	// color: 'black'
};
const imgStyle = {
	height: '10%',
	textAlign: 'left',
	display: 'block',
	marginLeft: '10px',
	// marginRight: 'auto',
	width: '25%'
}
const appStyle = {
	textAlight: 'center' ,
	fontSize: '2em',
	fontFamily: '"Arial Black", Gadget, sans-serif',
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: '999',
	backgroundColor: 'white'
}
// const openContactForm = () =>{
// 	window.open('https://www.honeybook.com/widget/dkp_entertainment/cf_id/5a76e184dc145200031219c4')
// }
const Header = () => (
	<div style={appStyle}>
		<img src="/dkp.png" style={imgStyle}/>
		<div style={navStyle}> 
			<Link href="/">
				<button class="navStyle">Home</button>
			</Link>
			<Link href="/about">
				<button style={linkStyle} class="navStyle">About</button>
			</Link>
			<Link href="/events">
				<button style={linkStyle} class="navStyle">Event Calendar</button>
			</Link>
			<Link href="/fotoxl">
				<button style={linkStyle} class="navStyle">FotoXL</button>
			</Link>
			<Link href="/solutions">
				<button style={linkStyle} class="navStyle">Business Solutions</button>
			</Link>
			<Link href="">
				<button style={linkStyle} class="navStyle" onClick={() => {window.open('https://www.honeybook.com/widget/dkp_entertainment/cf_id/5a76e184dc145200031219c4')}}>Contact Us</button>
			</Link>
		</div>
	</div>
);

export default Header;