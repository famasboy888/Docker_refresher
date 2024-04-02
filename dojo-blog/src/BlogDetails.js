import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch("http://192.168.2.77:8080/blogs/" + id);
    const history = useHistory();

    const handleDelete = () =>{
        fetch("http://192.168.2.77:8080/blogs/"+ blog.id, {
            method: "DELETE",  
        }).then(()=>{
            history.push("/");
        });
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;