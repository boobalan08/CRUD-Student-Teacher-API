import React from "react";
import "./PartnerCard.css";

export const PartnerCard = () => {
  const cardData = [
    {
      name: "google",
      src: "https://www.guvi.in/build/images/iitmlogo.52aac90085e6871aa468bdbbb06d71f7.svg",
    },
    {
      name: "Au",
      src: "https://www.guvi.in/build/images/iso.1dda8dadd8dc79fba0caf869d7513799.svg",
    },
    {
      name: "meta",
      src: "https://www.guvi.in/build/images/googlePartner-logo.f3e996facc568e400e83a9230eb24c4f.svg",
    },
    {
      name: "anna",
      src: "https://www.guvi.in/build/images/aicte-logo.d266d7fbd31204e6ae6f8371dd0dc103.svg",
    },
  ];
  return (
    <section className="my-5">
      <h2 className="text-center p-2 my-3">Our Accreditations</h2>
      <div className="row mx-2">
        {cardData.map((data, index) => (
          <div className="col" key={index}>
            <ul className="d-flex">
              <li>
                <img src={data.src} alt={data.name} />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
