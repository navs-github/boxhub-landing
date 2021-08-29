//packages
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer';

//components
import TopNav from '../components/TopNav'
import BoxHeading from '../components/BoxHeading'
import BigText from '../components/BigText'
import ArrowLinkInternal from '../components/ArrowLinkInternal'
import ArrowLinkExternal from '../components/ArrowLinkExternal'
import Works from '../components/Works'
import Footer from '../components/Footer'


//assets
import Logo from '../logos/Logo'
import LogoDribbble from '../logos/LogoDribbble'
import LogoAngel from '../logos/LogoAngel'
import LogoGithub from '../logos/LogoGithub'
import LogoLinkedin from '../logos/LogoLinkedin'
import LogoSpotify from '../logos/LogoSpotify'

function Landing() {
    //interesction observers for each section
    const [heroRef, inViewHero] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    const [superRef, inViewSuper] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    const [workRef, inViewWork] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    const [contactRef, inViewContact] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <div className="text-warm font-inter text-2xl overflow-hidden">
            <div className="px-40 bg-grain bg-contain">
                <TopNav></TopNav>
                {/* Intro Section 👋 */}
                <main ref={heroRef} className="mt-32 flex flex-col items-start">
                    <BoxHeading inView={inViewHero}>ABHINAV VERMA</BoxHeading>
                    <p className="mt-12 leading-[180%] opacity-0 animate-fadein">A full stack designer — I spend my time designing smooth experiences, covering them in polished interfaces, and bringing them to life with clean code.</p>
                    <div className="animate-slideright mt-24 -mx-52">
                        <BigText><span className="">CREATIVE</span> ENGINEER</BigText>
                    </div>
                </main>
                {/* Superpowers Section ⚡️ */}
                <section ref={superRef} className="mt-52 flex flex-col items-start">
                    <BoxHeading inView={inViewSuper}>SUPERPOWERS</BoxHeading>
                    <div className={"mt-12 flex flex-row w-full justify-between leading-[160%] opacity-0  " + (inViewSuper ? 'animate-fadein' : 'animate-none')}>
                        <ul className="flex flex-col space-y-10">
                            <li className="">UX <span className=" font-lora font-bold">Design</span></li>
                            <li className="">Interface Design</li>
                            <li className="">Figma Mastery</li>
                        </ul>
                        <ul className="flex flex-col space-y-10">
                            <li className=""><span className="font-lora font-bold">Front-end</span> Architecture</li>
                            <li className="">React Development</li>
                            <li className="">CSS Mastery</li>
                        </ul>
                        <ul className="flex flex-col space-y-10">
                            <li className=""><span className="font-lora font-bold">Art</span> Direction</li>
                            <li className="">Photography</li>
                        </ul>
                    </div>
                    <span className="mt-24 self-center">
                        <BigText>VERSATILITY</BigText>
                    </span>
                    <address className="mt-6 self-center flex flex-row space-x-9">
                        <LogoGithub></LogoGithub>
                        <LogoDribbble></LogoDribbble>
                    </address>
                </section>
                {/* Work Section 💻 */}
                <section ref={workRef} className="mt-52 flex flex-col items-start">
                    <BoxHeading inView={inViewWork}>WORK</BoxHeading>
                    <Works inView={inViewWork}></Works>
                    <span className="mt-24 self-center">
                        <BigText>TALENT</BigText>
                    </span>
                </section>
                {/* Contact Section 🤙 */}
                <section ref={contactRef} className="mt-52 pb-24 flex flex-col items-start">
                    <BoxHeading inView={inViewContact}>AVAILABILITY</BoxHeading>
                    <div className={"opacity-0 " + (inViewContact ? 'animate-fadein' : 'animate-none')}>
                        <p className="mt-12 leading-[180%]">I’m on the hunt for a full-time gig at an agency or startup. I fit in best with teams that value versatility — allowing me to freely pivot between my chosen <span className="font-lora font-bold">disciplines.</span></p>
                        <ul className="mt-12 space-y-6 text-xl tracking-wide font-work font-medium">
                            <li className="">
                                <ArrowLinkExternal text="EMAIL ME" link="mailto:nav.verma.work@gmail.com" />
                            </li>
                            <li className="">
                                <ArrowLinkExternal text="MY ANGEL PROFILE" link="https://angel.co/u/nav-verma" />
                            </li>
                        </ul>
                    </div>
                    <span className="mt-24 self-center">
                        <BigText>CONTACT</BigText>
                    </span>
                    <address className="mt-6 self-center flex flex-row space-x-9">
                        <LogoLinkedin></LogoLinkedin>
                        <LogoAngel></LogoAngel>
                    </address>
                </section>
                {/* Footer - EXTRACT this as component soon ✅ */}
                <Footer></Footer>
            </div>

        </div >
    );
}

export default Landing;