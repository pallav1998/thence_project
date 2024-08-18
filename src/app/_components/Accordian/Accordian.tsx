"use client";

import React, { useState } from "react";

export default function Accordian() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const items = [
    {
      question: "Do you offer freelancers?",
      answer:
        "These steps help align expectations and improve the chances of a successful hire. To ensure satisfaction with hired talent.",
    },
    {
      question:
        "What's the guarantee that I will be satisfied with the hired talent?",
      answer:
        "To ensure satisfaction with hired talent, clearly define the job role, use a thorough screening process, check cultural fit, conduct reference checks, provide structured onboarding, establish regular feedback, and consider a probation period.",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Why should I not go to an agency directly?",
      answer:
        "Using an agency can be more expensive, give you less control over candidate selection, and may lead to misalignment with your company's needs and culture.",
    },
    {
      question: "Who can help me pick a right skillset and duration for me?",
      answer:
        "Direct hiring often provides more control and can be more cost-effective if you have the internal resources.",
    },
  ];

  const toggleAccordion = (index: null | number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-[550px] flex p-6 border-2 bg-stone-300 rounded-3xl mb-16">
      <div className="w-[40%] p-16">
        <p className="font-mono mb-4 text-gray-700">What&apos;s on your Mind</p>
        <h1 className="text-5xl">Ask Questions</h1>
      </div>

      <div className="p-10 w-[60%] mx-auto">
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
  isLast,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
}) => {
  return (
    <div className={`${!isLast && "border-b border-red-300"}`}>
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-left text-lg"
        onClick={onClick}
      >
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 font-thin">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
