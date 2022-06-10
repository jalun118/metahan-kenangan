// import logo from "../logo.svg";
import "../css/kosong.css";
import { motion } from "framer-motion";
import { TapTitle } from "../Utils/TapTitle";

export default function About() {
  TapTitle('About');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section>
        <h1 className="judul-about">Web Ini dibuat menggunakan Library  Dari reactjs</h1>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="logos"><i className="fa-brands fa-react react"></i></h1>
          <p>
            Jika ingin menggunakan React js bisa langsung ke link dibawah ini
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </section>
    </motion.div>
  )
}