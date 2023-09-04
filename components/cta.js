import React from "react";
import Container from "./container";

const Cta = ({ message, ctaMessage, link, tint='pink' }) => {
  return (
    <Container>
      <div
        className={`bg-${tint}-600 flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl`}
      >
        <div className="flex-grow">
          <h2 className="text-2xl font-medium lg:text-3xl">{message}</h2>
        </div>
        <div className="flex-shrink-0 w-full   lg:w-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener"
            className={`text-${tint}-600 cursor-pointer inline-block py-3 mx-auto text-lg font-medium bg-white rounded-md px-7 lg:px-10 lg:py-5`}
          >
            {ctaMessage}
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
