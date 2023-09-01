import { FaceSmileIcon } from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/20230710.jpeg";
import benefitTwoImg from "../public/img/20230717(2).jpeg";
import lastingPowersOfAttorneyImg from "../public/img/20230710(3).jpeg";
import executorAndProbateAssistanceImg from "../public/img/20230710(1).jpeg";

const wills = {
  title: "Our Wills",
  desc: `Sis, whether it’s a Will just for yourself or for you and your spouse/civil partner we got you covered.

You can state any guardians to your child(ren) specific gifts and who will be your executor(s) (the person who administrates your estate).
`,
  image: benefitOneImg,
  bullets: [
    {
      title: "Easily amend Wills",
      desc: `The beauty of our Wills are they can be amended easily, as you will have access to a portal that should you wish to, you can make free life-time updates.*

So, if you move house, or have a new baby they can easily be amended, with the peace of mind you can talk to the team. 

*Please note costs maybe incurred for reprinting and binding.`,
      icon: <FaceSmileIcon />,
    },
  ],
};

const trusts = {
  title: "Trusts",
  desc: `Ladies, an area we encourage people to become more familiar with are, Trusts

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

const lastingPowersOfAttorney = {
  title: "Lasting Powers of Attorney",
  desc: `Ok queens, so what you need to know is that there are two types we encourage all of our clients to consider. They are Health and Welfare and Property and Finance.
          
Having these documents in places means you can put someone you trust in the ‘driving seat,’ when you’re not able to. This could be for use if you’re out of the country, or if you ever became incapacitated through illness or an accident. 
  
These are very powerful documents and help protect you while you’re still here. You can choose up to four attorneys, and you can state how and when they can act. 
  
Have a chat with us today about your options. 
  `,
  image: lastingPowersOfAttorneyImg,
  bullets: []
}

const executorAndProbateAssistance = {
  title: "Executor and Probate Assistance",
  desc: `If you have to help close an estate down after the loss of a loved one we know this can be a daunting job. We understand you’re already grieving and have a lot of paperwork to sort through. 

We’re happy to help discuss the case and provide a professional service to help you through probate with one of our partners.`,
  image: executorAndProbateAssistanceImg,
  bullets: []
}


export { wills, trusts, lastingPowersOfAttorney, executorAndProbateAssistance };
