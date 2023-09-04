import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";

import {
  wills,
  trusts,
  lastingPowersOfAttorney,
  executorAndProbateAssistance,
  severanceOfTenancy,
  coursesEducationAndSpeakingEvents,
} from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta, { ContactUsCta } from "../components/cta";
import PopupWidget from "../components/popupWidget";
import Testimonials from "../components/testimonials";

const Home = () => {
  return (
    <>
      <Head>
        <title>Wentworth Wills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      <div id="severanceOfTenancy">
        <Benefits imgPos="left" data={severanceOfTenancy} />
      </div>
      <div id="lastingPowerOfAttorney">
        <Benefits imgPos="right" data={lastingPowersOfAttorney} />
      </div>
      <div id="executorAndProbateAssistance">
        <Benefits imgPos="left" data={executorAndProbateAssistance} />
      </div>
      <div id="coursesEducationAndSpeakingEvents">
        <Benefits imgPos="right" data={coursesEducationAndSpeakingEvents} />
      </div>

      <ContactUsCta />

      <SectionTitle title="What our Clients say" pretitle="Testimonials" />
      <Testimonials />

      <Cta />
      <Footer />
    </>
  );
};

export default Home;
