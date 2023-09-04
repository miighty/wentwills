import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/20230710(2).jpeg";

const services = [
  {
    label: "Wills",
    sectionId: "wills",
  },
  {
    label: "Trusts",
    sectionId: "trusts",
  },
  {
    label: "Lasting Power of Attorney",
    sectionId: "lastingPowerOfAttorney",
  },
  {
    label: "Severance of Tenancy",
    sectionId: "severanceOfTenancy",
  },
  {
    label: "Executor and Probate Assistance",
    sectionId: "executorAndProbateAssistance",
  },
  {
    label: "Courses, Education and Speaking Events",
    sectionId: "coursesEducationAndSpeakingEvents",
  },
];

const Hero = () => {
  return (
    <>
      <div className="bg-pink-600">
        <Container>
          <h1 className="text-5xl font-bold leading-snug tracking-tight text-yellow-400 lg:text-5xl lg:leading-tight xl:text-7xl xl:leading-tight">
            Wentworth Wills
          </h1>
        </Container>
      </div>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Our mission is to help ladies protect themselves, their families
              and their generational wealth through the use of Wills, Lasting
              Power of Attorney and Trusts.
            </p>

            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Book in a call with us to discuss your needs, bust the myths and
              learn about Estate planning through our podcasts and workshops.
            </p>

            <p className="py-2 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Things we can help with:
            </p>
            <ul className="list-disc mb-8 ml-4">
              {services.map((service) => (
                <li className="py-1 text-xl leading-normal lg:text-xl xl:text-2xl text-pink-400 ">
                  <a href={`#${service.sectionId}`}>{service.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://calendly.com/info-1065/30-minute-meeting"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-white bg-pink-600 rounded-md "
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Charlene and Antoinette"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
