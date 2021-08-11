import React, { useState } from "react"
import "./SocialFeed.css";
import { Timeline, TiktokVideo, LinkedinPost, InstagramPost, YoutubeVideo }     from "./Tweet"
import { TiktokFeed } from "./Tiktok";
import { TwitterTimeline } from "./Twitter";
import { YoutubeChannel } from "./Youtube";
import { InstagramFeed } from "./Instagram";
import { FacebookFeed } from "./Facebook";

import LogoBar from "./Logo"
import { LinkedinFeed } from "./Linkedin";

const inputParams = {
    tiktok: ["6985301663976279302", "6985171448541367557", "6984912873319304454", "6983019998151331077", "6982597526658583814"],
    twitter: "Twitter",
    youtube: ["MMy7G56SEFM", "adDA5VgM9O4", "gOpTxLfL8yY", "tLQvA18FpWU", "fLm91semKQE"],
    instagram: [{id: "CR1yPG0MRLW", height: "1211"}, {id: "CR1jJQMDoK0", height: "912"}, {id: "CRy-guFDhIt", height: "1229"}, {id: "CRrx9hgDrFv", height: "1074"}, {id: "CRrd5scjgOg", height: "824"}],
    linkedin: [{id: "6825871052392947712", height: "314"}, {id: "6825472887521067008", height: "334"}, {id: "6824043220687695872", height: "314"}, {id: "6823307135590379520", height: "314"}, {id: "6821468389081399296", height: "314"}],
    facebook: "facebook"
}

const SocialFeed = ({ logos }) => {

    const [feed, setFeed] = useState("instagram")
    // const logos = ["twitter", "instagram", "facebook", "tiktok", "linkedin", "youtube"]
    return (
        <div className="sHeader">
            <LogoBar logosToInclude={logos} feedSwitchFunc={setFeed} selected={feed}/>
            <div className="scroll">
                <FeedSwitch feed={feed}/>
            </div>
        </div>
    )
}

const FeedSwitch = ({ feed }) => {
    if (feed === "tiktok") {
        return <TiktokFeed ids={inputParams.tiktok}/>
    } else if (feed === "twitter") {
        return <TwitterTimeline twitterHandle={inputParams.twitter}/>
    } else if (feed === "youtube") {
        return <YoutubeChannel ids={inputParams.youtube}/>
    } else if (feed === "instagram") {
        return <InstagramFeed posts={inputParams.instagram}/>
    } else if (feed === "facebook") {
        return <FacebookFeed facebookPage={inputParams.facebook}/>
    } else if (feed === "linkedin") {
        return <LinkedinFeed ids={inputParams.linkedin}/>
    } else {
        return <div>help</div>
    }
}

export default SocialFeed