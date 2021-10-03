import Head from "next/head";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Testimonials Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </section>
    </>
  );
}
