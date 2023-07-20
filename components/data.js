import { FaceSmileIcon } from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/20230710.jpeg";
import benefitTwoImg from "../public/img/20230717(2).jpeg";

const benefitOne = {
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

const benefitTwo = {
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

export { benefitOne, benefitTwo };
