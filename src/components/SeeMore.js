import { Button } from "react-bootstrap";

export const SeeMore = ({ author, authorLink }) => {
    return (
        <Button variant="outline-secondary" style={{"width": "100%"}} href={authorLink}>
            {`See more at ${author}`}
        </Button>
    )
}