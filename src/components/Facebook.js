export const FacebookFeed = ({ facebookPage }) => {
    // const url = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${facebookPage}&tabs=timeline%2C%20events%2C%20messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`
    const width = "355px"
    const height = "420px"
    const url = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${facebookPage}&tabs=timeline%2C%20events%2C%20messages&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`
    return (
        <iframe 
            title="fbembedpage"
            src={url} 
            width="100%" 
            height="425px" 
            style={{"border": "none", "overflow":"hidden"}} 
            scrolling={false}
            frameBorder="0" 
            allowFullScreen={true} 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    )
}