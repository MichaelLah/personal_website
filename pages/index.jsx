import Head from "next/head";
import Header from "../components/header";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Michael Lah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header></Header>
        <h1>Michael Lah</h1>
      </body>
    </>
  );
};
export default Home;
