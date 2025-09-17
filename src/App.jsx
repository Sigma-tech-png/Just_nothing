import { Link, useNavigate } from "react-router-dom"

export default function App(){
  const navigate = useNavigate()

  function handleClick(){
    navigate(-1)
  }

  return(
    <>
      <h1>Main Home Page</h1>
      <p>It's own home page</p>

      <nav>
        <Link to={"/about"}>Go About</Link>
      </nav>

      <button onClick={handleClick}>Go About</button>

    </>
  )
}