import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/dist/shared/lib/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Watching Me | Movie Apps</title>
    <link rel="shortcut icon" href="/logomovie.png" />
  </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
