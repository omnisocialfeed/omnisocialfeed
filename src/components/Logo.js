import {ReactComponent as TiktokLogo} from "../logos/tiktok.svg"
import {ReactComponent as TwitterLogo} from "../logos/twitter.svg"
import {ReactComponent as FacebookLogo} from "../logos/facebook.svg"
import {ReactComponent as InstagramLogo} from "../logos/instagram.svg"
import {ReactComponent as YoutubeLogo} from "../logos/youtube.svg"
import {ReactComponent as LinkedinLogo} from "../logos/linkedin.svg"
import { Timeline, TiktokVideo, FacebookFeed, LinkedinPost, InstagramPost, YoutubeVideo } from "./Tweet"

const LogoBar = ({ logosToInclude, feedSwitchFunc, selected }) => {

    const numLogos = logosToInclude.length

    const classSelect = (name) => (selected === name) ? "tiktokLogoSelected" : "tiktokLogo"

    const feedMap = {
        "twitter": <TwitterLogo onClick={() => {feedSwitchFunc("twitter")}} className={classSelect("twitter")}/>, 
        "instagram": <InstagramLogo onClick={() => {feedSwitchFunc("instagram")}} className={classSelect("instagram")}/>, 
        "tiktok": <TiktokLogo onClick={() => {feedSwitchFunc("tiktok")}} className={classSelect("tiktok")}/>, 
        "facebook": <FacebookLogo onClick={() => {feedSwitchFunc("facebook")}} className={classSelect("facebook")}/>, 
        "youtube": <YoutubeLogo onClick={() => {feedSwitchFunc("youtube")}} className={classSelect("youtube")}/>,
        "linkedin": <LinkedinLogo onClick={() => {feedSwitchFunc("linkedin")}} className={classSelect("linkedin")}/>
    }

    const logos = []
    logosToInclude.forEach((logo) => {
        logos.push(feedMap[logo])
    })

    
    return (
        <div style={{"textAlign": "center"}}>{logos}</div>
    )
}

export default LogoBar