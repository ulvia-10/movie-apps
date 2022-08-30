import Head from 'next/head'
import { server } from '../config';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Watching Me | Movie Apps</title>
        <link rel="shortcut icon" href="/logomovie.png" />
      </Head>
    </div>
  )
}





