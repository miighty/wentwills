import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
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
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle title="Lasting Powers of Attorney">
        <p className="whitespace-pre-wrap">
          {`Ok queens, so what you need to know is that there are two types we encourage all of our clients to consider. They are Health and Welfare and Property and Finance.
          
Having these documents in places means you can put someone you trust in the ‘driving seat,’ when you’re not able to. This could be for use if you’re out of the country, or if you ever became incapacitated through illness or an accident. 

These are very powerful documents and help protect you while you’re still here. You can choose up to four attorneys, and you can state how and when they can act. 

Have a chat with us today about your options. 
`}
        </p>
      </SectionTitle>
      <SectionTitle title="Executor / Probate Assistance">
        <p className="whitespace-pre-wrap">
          {`If you have to help close an estate down after the loss of a loved one we know this can be a daunting job. We understand you’re already grieving and have a lot of paperwork to sort through. 

We’re happy to help discuss the case and provide a professional service to help you through probate with one of our partners.
`}
        </p>
      </SectionTitle>
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
