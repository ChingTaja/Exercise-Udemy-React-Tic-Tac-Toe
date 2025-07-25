import { log } from './log';
import logoImg from '../../assets/counter-logo.png';

export default function Header() {
  log('<Header /> rendered', 1);

  return (
    <header id="main-header">
      <img src={logoImg} alt="Magnifying glass analyzing a document" />
      <h1>React - Behind The Scenes</h1>
    </header>
  );
}
