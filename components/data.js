import { FaceSmileIcon } from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/20230710.jpeg";
import executorAndProbateAssistanceImg from "../public/img/20230710(2).jpeg";
import benefitTwoImg from "../public/img/20230717(2).jpeg";
import lastingPowersOfAttorneyImg from "../public/img/charlene-bnw.jpg";
import severanceOfTenancyImg  from "../public/img/20230710(3).jpeg";
import coursesEducationAndSpeakingEventsImg from "../public/img/20230710(1).jpeg";

const wills = {
  title: "Our Wills",
  desc: `Sis, whether it’s a Will just for yourself or for you and your spouse/civil partner we got you covered.

You can state any guardians to your child(ren) specific gifts and who will be your executor(s) (the person who administrates your estate).
`,
  image: benefitOneImg,
  bullets: [],
};

const trusts = {
  title: "Trusts",
  desc: `Ladies, an area we encourage people to become more familiar with are, Trusts.

A Trust is a way to ensure your assets, (properties, land or cash etc) are left to your loved ones and are looked after by someone whom you trust - once you’re no longer here. 

You (the Settlor) will entrust your assets to the Trustee(s). Their responsibility will be to look after these assets for the good of the beneficiaries (the people you wish to inherit). 

We’d be happy to discuss which Trust may be best for you and your family. 
`,
  image: benefitTwoImg,
  bullets: [
    {
      title: "The beneficiaries and Trustees can be the same people!",
      desc: "There are many types of Trusts for various family setups and circumstances, which can be useful to ensuring assets remain in the family bloodline, safeguard properties and many other uses.",
      icon: <FaceSmileIcon />,
    },
  ],
};

const severanceOfTenancy = {
  title: "Severance of Tenancy",
  desc: `You may own a property with a friend, family member, or spouse in the traditional way of joint tenants. This means that should one person pass away; ownership belongs to the other person.
  
This is usually normal with spousal ownership where you share children and wish for everything to go to your spouse. On the other hand, if there are children from previous relationships, you may wish for them also to inherit.

You may also own properties in joint ventures, with business associates, who 
equally you may not wish them to inherit your share within the property on 
your demise.

This is why you may wish to sever the tenancy at Land Registry, and we can 
help with this. 
  `,
  image: severanceOfTenancyImg,
  bullets: [],
};

const lastingPowersOfAttorney = {
  title: "Lasting Powers of Attorney",
  desc: `Ok, so what you need to know is that there are two types we encourage all of our clients to consider. They are Health and Welfare and Property and Finance.
          
Having these documents in place means you can put someone you trust in the ‘driving seat,’ when you’re not able to. This could be for use if you’re out of the country, or if you ever became incapacitated through illness or an accident. 
  
These are very powerful documents and help protect you while you’re still here. You can choose up to four attorneys, and you can state how and when they can act. 
  
Have a chat with us today about your options. 
  `,
  image: lastingPowersOfAttorneyImg,
  bullets: [],
};

const executorAndProbateAssistance = {
  title: "Executor and Probate Assistance",
  desc: `If you are the chosen executor or you have volunteered to be the administrator (to close an estate down after the loss of a loved one) we know this can be a daunting job. We understand you’re already grieving and have a lot of paperwork to sort through. 

We’re happy to help discuss the case and provide a professional service to help you through probate with one of our partners.`,
  image: executorAndProbateAssistanceImg,
  bullets: [],
};

const coursesEducationAndSpeakingEvents = {
  title: "Courses, Education and Speaking Events",
  desc: `We have a series of courses and workshops that have been pre- recorded and also live training and support groups to ensure that you have exactly what you need in place.

We are also available for speaking events. Please get in touch with us to discuss these services.`,
  image: coursesEducationAndSpeakingEventsImg,
  bullets: [],
};

export {
  wills,
  trusts,
  lastingPowersOfAttorney,
  executorAndProbateAssistance,
  severanceOfTenancy,
  coursesEducationAndSpeakingEvents,
};
