import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-pink-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to have a conversation?
          </h2>
        </div>
        <div className="flex-shrink-0 w-full   lg:w-auto">
          <a
            href="https://calendly.com/info-1065/30-minute-meeting"
            target="_blank"
            rel="noopener"
            className="cursor-pointer inline-block py-3 mx-auto text-lg font-medium   text-pink-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Book a Consultation with us
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
