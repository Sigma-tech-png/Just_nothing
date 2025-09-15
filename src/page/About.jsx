import { Route,Router,Link,Outlet } from "react-router-dom"

export default function About(){
    return(
        <>
            <Link to={"/about/1"}>Book 1</Link>
            <br />
            <Link to={"/about/2"}>Book 1</Link>
            <br />
            <Link to={"/about/new"}>New Book</Link>
        </>
    )
}