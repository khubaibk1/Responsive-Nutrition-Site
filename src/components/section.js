import Image from "next/image";
import box from "../../public/images/pngegg.png";
const Section = () => {
  return (
    <div className="bg-[#D0EAF536] sm:h-[644px] h-[444px] overflow-hidden ">
      <div className="bg-contain sm:w-[200px] w-[155px] h-[644px] absolute inset-0 bg-left-top  bg-[url('/images/kisspng-leaf-green-blog-mint-leaf.png')] bg-no-repeat transform translate-y-[-130px] "></div>

      <div className=" sm:h-[644px] sm:w-full bg-contain w-[521px]  h-[544px] absolute inset-0 bg-right  bg-[url('/images/green-leaves-organic-png-file-hd.png')] bg-no-repeat  "></div>

      <div className="flex sm:flex-row  flex-col">
        <div className="text-black sm:pl-[100px] pl-[70px] sm:pt-[175px] pt-[70px] ">
          <h1 className="sm:text-[64px] text-[28px] font-[700] text-[#146356] leading-[33px]    sm:mb-[45px] mb-[6px]">
            Unlock Your Health
          </h1>

          <h1 className="text-[#FF7F3F] sm:text-[111px]  text-[30px] font-[800] sm:leading-[68px] leading-[28px]  sm:tracking-[9px] tracking-[4px] sm:mb-[45px] mb-[6px]">
            Potential
          </h1>

          <p className=" text-[#146356] font-[700] sm:text-[24px] text-[12px] leading-[13px] tracking-[4.5%] sm:mb-[45px] mb-[6px]">
            Personalized nutrition powered by your DNA
          </p>

          <button className="btn bg-[#FF7F3F] text-white">Get Started</button>
        </div>
        <div className="z-10 sm:mt-[120px] mt-[56px] ml-[88px]  sm:w-[512px] sm:h-[563] w-[180px]">
          <Image src={box} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};
export default Section;
