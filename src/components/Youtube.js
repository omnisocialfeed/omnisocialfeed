import { SeeMore } from "./SeeMore" 

export const YoutubeChannel = ({ ids }) => {
    return (
        <div>
            {ids.map((id) => <YoutubeVideo videoID={id}/>)}
            <SeeMore author={"@Youtube"} authorLink={"https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ"}/>
        </div>
    )
}

const YoutubeVideo = ({ videoID }) => {
    return (
        <iframe 
            width="100%"
            height="207" 
            src={`https://www.youtube.com/embed/${videoID}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            >
        </iframe>
    )
}