import { Link,Outlet } from "react-router-dom"

export default function About(){
  return(
    <>
      <h1>Hello About Page</h1>
      <p>It's own about page</p>

      <nav>
        <Link to={"history/12"}>History</Link>
      </nav>
      <Outlet />
    </>
  )
}