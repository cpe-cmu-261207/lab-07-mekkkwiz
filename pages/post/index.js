import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '600c7291c6c192230c7d3fc6'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const fetch = async () => {
        const response = await axios.get(`${baseURL}/post`, { headers: { 'app-id': APP_ID } })
        setPosts(response.data.data)
        console.log(response.data.data)
    }
    const style = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '10px 10px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
      }

    useEffect(fetch,[])
    return (
        <>
        <section class = "main-post">
        <nav>
            <div class = "logo">
                <name>MEK WISARUT</name>
                <sl>&nbsp;/&nbsp;</sl>
                <pos>SOFTWARE DEV</pos>
            </div>
            <div class = "nav-links">
                <ul class = "menu">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/gallery">GALLERY</a></li>
                    <li><a href="/gpa">GPA</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                    <li><a href="/post">POST</a></li>
                </ul>
            </div>
        </nav>
            <h1>All Posts</h1>
            <ul>
            {posts.map(post => {
                console.log(post)
                return (
                    <li>
                        <h3>post : {post.text}</h3>
                        <img src = {post.image} alt = "fail to load"/>
                        <p>Likes : {post.likes}</p>
                        <Link  key={post.id} href={`/post/${post.id}`}>
                            <button style={{margin:10}}>Go to this post</button>
                        </Link>
                    </li>
                ) 
            })}
            </ul>
        </section>
        </>
    )
}

export default  Posts