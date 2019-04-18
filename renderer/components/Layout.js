import Header from './Header';
import LogoSlider from './logo-slider';
import Link from 'next/link';
import data from "../static/data.json";
import { resolve } from '../helpers';

const logos = data.logos;
const linkStyle = {
  html: 15
}
export default function Layout(props) {
  return (
    <div>
      <Header />
      <LogoSlider logos={logos}/>
      {props.children}
    </div>
  )
}
