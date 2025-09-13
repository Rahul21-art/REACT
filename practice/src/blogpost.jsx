function Blogpost(post){

    return (
        <div>
            <p>Author: {post.Author}</p>
            <p>Titile: {post.Title}</p>
            <p>Description: {post.Description}</p>
        </div>
    )
}
export default Blogpost