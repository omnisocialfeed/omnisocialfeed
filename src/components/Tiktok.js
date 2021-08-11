import { SeeMore } from "./SeeMore";

export const TiktokFeed = ({ ids }) => {
    return (
        <div>
            {ids.map((id) => <TiktokVideo videoID={id}/>)}
            <SeeMore author={"@Tiktok"} authorLink={"https://www.tiktok.com/@tiktok?"}/>
        </div>
    )
}


const TiktokVideo = ({ videoID }) => {
    return (
        <div>
            <iframe 
                name="__tt_embed__v96293671169354830" 
                src={`https://www.tiktok.com/embed/v2/${videoID}?lang=en-US`}
                style={{"width": "325px", "height": "775px", "display": "inline-block", "visibility": "unset"}}
                title="Tiktok"
                >
            </iframe>
        </div>
    )
}