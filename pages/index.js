import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import {
  wills,
  trusts,
  lastingPowersOfAttorney,
  executorAndProbateAssistance,
} from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Wentworth Wills</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle title="Why should you use us?">
        We are Antoinette and Charlene, sisters who are passionate about helping
        ladies to understand estate planning and put things into place - to
        protect themselves and their families.
        <br />
        <br />
        We have been serving ladies and their families since 2018. We will
        ensure you have all the information you need to put your Will, Lasting
        Powers of Attorney and Trusts into place, with no frills.
        <br />
        <br />
        It’s our mission is to help ladies and their families with the knowledge
        and know how, to protect themselves now and to keep their wealth for
        generations to come.
      </SectionTitle>
      <div id="wills">
        <Benefits id="wills" data={wills} />
      </div>
      <div id="trusts">
        <Benefits imgPos="right" data={trusts} />
      </div>
      <div id="lastingPowersOfAttorney">
        <Benefits imgPos="left" data={lastingPowersOfAttorney} />
      </div>
      <div id="exectuorAndProbateAssistance">
        <Benefits imgPos="right" data={executorAndProbateAssistance} />
      </div>
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
