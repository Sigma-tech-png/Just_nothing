import { Link } from "react-router-dom"
import App from "../App"

export default function NotFound(){
    return (
        <>
            <h1>404 Error</h1>
            <p>Page is not found</p>

            <Link to={"/"}>
                <button>Go Home</button>
            </Link>
        </>
    )   

}