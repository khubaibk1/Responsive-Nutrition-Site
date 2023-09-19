"use client"
const Steps = ({ stepNo, heading, detail }) => {
  let containerStyle = {};

  if (stepNo === "Step 1") {
    containerStyle = {
      width: "646px",
    };
  } else if (stepNo === "Step 2") {
    containerStyle = {
      width: "474px",
    };
  } else if (stepNo === "Step 3") {
    containerStyle = {
      width: "674px",
    };
  }

  return (
    <div className="step-container mt-[20px] sm:ml-[0] ml-[35px]" style={containerStyle}>
      <button className="stepbtn ">{stepNo}</button>
      <h1 className="heading sm:mt-[5px] mt-[20px]">{heading}</h1>
      <p>{detail}</p>
      <button className="btn bg-[#FF7F3F] text-white mt-[20px] border-[#FF7F3F]">
        Get Started
      </button>
      <style jsx>{`
        .step-container {
          /* Default styles for all screen sizes */
          width: 100%;
          max-width: 326px; /* Adjust the max-width as needed */

          /* Additional styles for larger screens (adjust the breakpoint as needed) */
          @media (min-width: 768px) {
            max-width: 274px;
          }

          /* Additional styles for even larger screens (adjust the breakpoint as needed) */
          @media (min-width: 1024px) {
            max-width: 674px;
          }
        }        
      `}</style>
    </div>
  );
};
export default Steps;
