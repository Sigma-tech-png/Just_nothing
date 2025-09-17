import { useNavigate, useParams } from "react-router-dom"

export default function History(){
    const {id} = useParams()
    const navigate = useNavigate()

    return <h1>History was start in 1974 {id} <button onClick={navigate(-1)}>Comeback</button></h1>
}