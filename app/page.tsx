
import Link from "next/link";

import styles from "./styles/Home.module.css";

const HomePage = () =>{
  return(
    <>
      <div >
        <h3>Welcome to my Nextjs Portfolio</h3>
        <header>
          <div>
        <ul className={styles.navbar}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>

        </ul>
        </div>
        </header>
      </div>
    </>
  )
}
export default HomePage;
