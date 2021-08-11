import { SeeMore } from "./SeeMore";

export const LinkedinFeed = ({ ids }) => {
    return (
        <div>
            {ids.map((id, i) => <LinkedinPost key={i} linkID={id}/>)}
            <SeeMore author={"@LinkedIn"} authorLink={"https://www.linkedin.com/company/linkedin/posts/"}/>
        </div>
    )
}

const LinkedinPost = ({ linkID }) => {
    return (
        <div style={{"padding": "0.5vh 0"}}>
        <iframe 
            src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${linkID.id}`} 
            height={linkID.height} 
            width="95%" 
            frameBorder="0" 
            scrolling="no"
            allowFullScreen={false} 
            title="Embedded post"></iframe>
        </div>
    )
}