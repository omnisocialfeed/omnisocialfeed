import useScript from "../useScript";

export const TwitterTimeline = ({ twitterHandle }) => {
    useScript("https://platform.twitter.com/widgets.js");
    return (
        <div>
        <a className="twitter-timeline" href={`https://twitter.com/${twitterHandle}`}>Tweets by TwitterDev</a>
        </div>
    )
}