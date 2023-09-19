

import Section from "@/components/section";
import StepProgram from "@/components/steps-program";
import Sponser from "@/components/sponser";
import Footer from "@/components/footer";




export default function Home() {
  return (
    <main className="w-full  relative  overflow-x-hidden ">
      <Section/>
      <Sponser />
      <StepProgram/>
      <Footer />
    </main>
  );
}
