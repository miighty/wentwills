import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-3xl leading-normal mb-4">
              Wentworth Wills were very <Mark>professional</Mark>
            </p>

            <p className="text-xl leading-normal ">
              Wentworth Wills were very professional, informative and warm in
              relation to a rather difficult subject matter. The process has
              been seamless and undertaken in a timely manner. I would highly
              recommend Wentworth Wills, you will not be disappointed.
            </p>

            <p className="mt-4 text-xl leading-normal ">A. Purcell</p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-3xl leading-normal mb-4">
              I <Mark>highly recommend</Mark> Wentworth Wills
            </p>

            <p className="text-xl leading-normal ">
              I highly recommend Wentworth Wills! They did an outstanding job in
              helping me with my Lasting Power of Attorney. Their staff was
              incredibly knowledgeable and helpful throughout the entire
              process, answering all of my questions thoroughly and clearly. The
              documents they provided were timely and accurate, with clear
              instructions on how to complete them. Thanks again, Wentworth
              Wills! Highly recommended.
            </p>

            <p className="mt-4 text-xl leading-normal ">Ms. Myers</p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-3xl leading-normal mb-4">
              <Mark>Knowledgeable</Mark> and Friendly
            </p>

            <p className="text-xl leading-normal ">
              I instructed Wentworth Wills to help me navigate my way around
              this subject and found them to be extremely knowledgeable and
              friendly. We went through a couple of options and I was able to
              make an informed choice regarding my Will. I'm happy to refer
              others to Wentworth Wills for a great service. Thank you ladies.
            </p>

            <p className="mt-4 text-xl leading-normal ">K. Samuels</p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-3xl leading-normal mb-4">
              <Mark>Professional</Mark> service
            </p>

            <p className="text-xl leading-normal ">
              My experience with Wentworth Wills have been very positive indeed.
              They were very helpful even putting themselves out above and
              beyond to assist in delivering their service. I would definitely
              recommend them.
            </p>

            <p className="mt-4 text-xl leading-normal ">CF</p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-3xl leading-normal mb-4">
              Very professional, respectful and <Mark>honest</Mark>
            </p>

            <p className="text-xl leading-normal ">
              My Mother passed away last year quite suddenly due to her battle
              with kidney disease. The team was very professional in providing
              tailored funeral advice to suit my needs and up to date advice on
              payment options. They where very respectful and dealt with all the
              complicated areas for us. Honest and took the time to plan out
              what we needed. Highly recommend their services as they relieved a
              lot of the burden which gave us time to grieve.
            </p>

            <p className="mt-4 text-xl leading-normal ">T. Maynard</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-yellow-800 bg-yellow-100 rounded-md ring-yellow-100 ring-4 dark:ring-yellow-900 dark:bg-yellow-900 dark:text-yellow-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
