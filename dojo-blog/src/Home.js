
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("/blogs"); 

    return (
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => (blog.author === "mario"))} title="Yoshi's Blogs!"/>}
        </div>
    );
}

export default Home;