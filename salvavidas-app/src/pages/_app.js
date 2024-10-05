// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css'; // Asegúrate de importar tus estilos globales si los tienes

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Bienvenido a la Calculadora Salvavidas</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
