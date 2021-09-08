//packages
import { Link } from 'react-router-dom'



//components
import ArrowLinkInternal from './ArrowLinkInternal'
import ArrowLinkExternal from './ArrowLinkExternal'

function Project(props) {

    return (
        <div className="">
            <div className="flex flex-row items-center space-x-2">
                <h2 className="font-work font-medium text-lg xl:text-xl 2xl:text-2xl">{props.title}</h2>
                <div className="w-full h-[1px] bg-warm opacity-30"></div>
            </div>
            <p className="mt-4 xl:mt-6">{props.body}</p>
            <Link to={props.to}>
                <img src={props.thumb} className="2xl:h-[400px] w-[1400px] mt-6 xl:mt-12 p-1 border border-warm border-opacity-30 xl:opacity-80 xl:hover:opacity-100" width="700" height="200" alt="" srcset="" />
            </Link>
            <div className="mt-5 xl:mt-10 flex flex-col space-y-4 2xl:space-y-6">
                <ArrowLinkInternal text="LEARN MORE" to={props.to}></ArrowLinkInternal>
                {props.link &&
                    <ArrowLinkExternal text="VISIT WEBSITE" link={props.link}></ArrowLinkExternal>
                }
            </div>
        </div>
    )
}

export default Project
