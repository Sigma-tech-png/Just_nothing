import { Navigate, useNavigate, useParams } from "react-router-dom"


export default function Book(){
    const { id } = useParams()
    const navigate = useNavigate()

    function handleNavigate(){
       navigate("/")
    }

    return(
        <>
            <button onClick={handleNavigate}>Go Home</button>
            <h1>Book {id}</h1>
        </>
    )
}