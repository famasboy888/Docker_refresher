import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2> 404 Not found</h2>
            <Link to="/">Bask to Home Page</Link>
        </div>
     );
}
 
export default NotFound;