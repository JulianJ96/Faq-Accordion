"use client";

import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  // Tracking Visibility of each answer
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle Visibility
  };

  // FAQ Content Array
  const faqContent = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Frontend Mentor offers both free and premium plans to suit various learning needs.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can showcase your Frontend Mentor projects in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <div className="w-[327px] h-[525px] md:w-[542px] md:h-[507px] rounded-lg bg-white shadow-lg flex flex-col flex-grow mt-[91px] p-6">
        {/* FAQ Accordion Header */}
        <div className="relative flex justify-start gap-[24px] mt-3 pl-1 md:m-2">
          <Image src="/icon-star.svg" width={26} height={31} alt="Star Icon" />
          <h1 className="font-extrabold text-4xl text-dark-purple">FAQs</h1>
        </div>

        {/* FAQ Accordion Content */}
        <div className="mt-7 space-y-4">
          <ul>
            {faqContent.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 md:mb-2"
              >
                <div className="flex justify-between h-[40px] w-full items-center space-y-2 pb-4 pt-6 pr-4 m-[7.5px] md:m-3">
                  <h2 className=" flex font-semibold  text-dark-purple hover:text-grayish-purple w-full">
                    {item.question}
                  </h2>
                  <button
                    className={`${
                      openIndex === index
                        ? "text-dark-purple"
                        : "text-grayish-purple"
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    <Image
                      src={
                        openIndex === index
                          ? "/icon-minus.svg"
                          : "/icon-plus.svg"
                      }
                      width={30}
                      height={31}
                      alt="Toggle answer"
                    />
                  </button>
                </div>
                {/* Conditional rendering for the answer */}
                {openIndex === index && (
                  <p className="text-grayish-purple pt-2 pb-2 m-1.5 md:m-[7.5px] w-full flex text-sm">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
