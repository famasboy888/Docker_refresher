import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");

    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        setIsPending(true);
        postFunction(blog);
    }

    const postFunction = (blog) => {
        setTimeout(() => {
            fetch("http://192.168.2.77:8080/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })
            .then(() => {
                setIsPending(false);
                console.log("New Blog added");
                // history.go(-1);
                history.push("/");
            });
        },1000);
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => (setTitle(e.target.value))} />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => (setBody(e.target.value))}>
                </textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => (setAuthor(e.target.value))}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="wario">wario</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Loading...</button>}
            </form>
        </div>
    );
}

export default Create;