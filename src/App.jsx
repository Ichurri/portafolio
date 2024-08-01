import { AboutMe } from './components/AboutMe';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import './styles/app.css';

export const App = () => {
  return (
    <>
      <NavBar/>
      <Skills/>
      <AboutMe/>
    </>
  )
}
