//packages
import { useInView } from 'react-intersection-observer';

//components
import Layout from '../components/Layout'
import TopNav from '../components/TopNav'
import BoxHeading from '../components/BoxHeading'
import BigTextHero from '../components/BigTextHero'
import BigText from '../components/BigText'
import ArrowLinkExternal from '../components/ArrowLinkExternal'
import ArrowLinkInternal from '../components/ArrowLinkInternal';
import ArrowLinkSet from '../components/ArrowLinkSet';
import Works from '../components/Works'
import Footer from '../components/Footer'


//assets
import LogoDribbble from '../logos/LogoDribbble'
import LogoAngel from '../logos/LogoAngel'
import LogoGithub from '../logos/LogoGithub'
import LogoLinkedin from '../logos/LogoLinkedin'

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
        <Layout>
            <TopNav></TopNav>
            {/* Intro Section 👋 */}
            <main ref={heroRef} className="mt-20 xl:mt-32 flex flex-col items-start">
                <BoxHeading inView={inViewHero}>AABHINAV VERMA</BoxHeading>
                <p className="mt-8 xl:mt-12 leading-[180%] opacity-0 animate-fadein">A front-end developer and product designer. I spend my time ideating, designing, and coding polished digital interactions.</p>
                <ArrowLinkSet>
                    <li className="">
                        <ArrowLinkInternal text="MORE ABOUT ME" to="/about"></ArrowLinkInternal>
                    </li>
                    <li className="">
                        <ArrowLinkInternal text="SEE MY WORK" to="/work"></ArrowLinkInternal>
                    </li>
                </ArrowLinkSet>
                <div className="mt-12 xl:mt-16 self-center animate-slideright">
                    <BigTextHero><span className="">CREATIVE</span> ENGINEER</BigTextHero>
                </div>
            </main>
            {/* Superpowers Section ⚡️ */}
            <section ref={superRef} className="mt-64 2xl:mt-72 flex flex-col items-start text-base xl:text-2xl 2xl:text-3xl">
                <BoxHeading inView={inViewSuper}>SUPERPOWERS</BoxHeading>
                <div className={"mt-7 xl:mt-12 w-full grid grid-cols-2 gap-y-10 xl:flex xl:flex-row xl:justify-between leading-[160%] opacity-0 " + (inViewSuper ? 'animate-fadein' : 'animate-none')}>
                    <ul className="group flex flex-col space-y-5 xl:space-y-10">
                        <li className="">UX <span className="font-lora font-bold group-hover:text-yellow-base">Design</span></li>
                        <li className="">Interface Design</li>
                        <li className="">Figma Mastery</li>
                    </ul>
                    <ul className="group flex flex-col space-y-5 xl:space-y-10">
                        <li className=" whitespace-nowrap"><span className="group-hover:text-yellow-base font-lora font-bold">Front-end</span> Architecture</li>
                        <li className="">React Development</li>
                        <li className="">CSS Mastery</li>
                    </ul>
                    <ul className="group flex flex-col space-y-5 xl:space-y-10">
                        <li className=""><span className="group-hover:text-yellow-base font-lora font-bold">Art</span> Direction</li>
                        <li className="">Photography</li>
                    </ul>
                </div>
                <span className="mt-12 xl:mt-24 self-center">
                    <BigText>VERSATILITY</BigText>
                </span>
                <address className="mt-4 xl:mt-6 self-center flex flex-row space-x-6 xl:space-x-9">
                    <LogoGithub></LogoGithub>
                    <LogoDribbble></LogoDribbble>
                </address>
            </section>
            {/* Work Section 💻 */}
            <section ref={workRef} className="mt-64 2xl:mt-72 flex flex-col items-start">
                <BoxHeading inView={inViewWork}>PROJECTS</BoxHeading>
                <Works inView={inViewWork}></Works>
                <span className="mt-12 xl:mt-24 self-center">
                    <BigText>WORK</BigText>
                </span>
            </section>
            {/* Contact Section 🤙 */}
            <section ref={contactRef} className="mt-64 2xl:mt-72 pb-24 flex flex-col items-start">
                <BoxHeading inView={inViewContact}>AVAILABILITY</BoxHeading>
                <div className={"opacity-0 " + (inViewContact ? 'animate-fadein' : 'animate-none')}>
                    <p className="mt-8 xl:mt-12 leading-[180%]">I'm working full time @<span className="font-lora font-bold">BOXHUB. </span>Don't be shy though, I'm always up for a chat about front-end architecture, product design, or cats!</p>
                    <ArrowLinkSet>
                        <li className="">
                            <ArrowLinkExternal text="EMAIL ME" link="mailto:nav.verma.work@gmail.com" />
                        </li>
                        <li className="">
                            <ArrowLinkExternal text="MY ANGEL PROFILE" link="https://angel.co/u/nav-verma" />
                        </li>
                    </ArrowLinkSet>
                </div>
                <span className="mt-12 xl:mt-24 self-center">
                    <BigText>CONNECT</BigText>
                </span>
                <address className="mt-6 self-center flex flex-row space-x-9">
                    <LogoLinkedin></LogoLinkedin>
                    <LogoAngel></LogoAngel>
                </address>
            </section>
            <Footer></Footer>
        </Layout>
    );
}

export default Landing;