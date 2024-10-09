
import Link from "next/link";

import styles from "../styles/Skills.module.css";

const SkillsPage=()=>
{
    return(
        <div>
            <h1 className={styles.heading}>My Skills</h1><br></br>
             <ol  className={styles.skills_list}>
             <li><Link href="/skills/html">Html</Link></li><br></br>
             <li><Link href="/skills/">CSS</Link></li><br></br>
             <li><Link href="/skills/">Typescript</Link></li> <br></br>
             <li><Link href="/skills/">Next JS</Link></li> <br></br>
            </ol>
            <br></br>
           <footer>
           <center><b><Link href="/">Back to Home Page</Link></b></center>
           </footer>
        </div>
       
    )
}

export default SkillsPage;