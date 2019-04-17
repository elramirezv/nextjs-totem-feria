import Header from './Header'
import LogoSlider from './logo-slider'
import Link from 'next/link'
import data from "../static/data.json";
import { resolve } from '../helpers';

const logos = data.logos;
const linkStyle = {
  marginRight: 15
}
export default function Layout(props) {
  return (
    <div>
      <Header />
      <LogoSlider logos={logos}/>
      <Link href={resolve('home')}>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href={resolve('next')}>
        <a style={linkStyle}>About</a>
      </Link>
      {props.children}
    </div>
  )
}
