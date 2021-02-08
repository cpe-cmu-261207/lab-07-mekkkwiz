import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '600c7291c6c192230c7d3fc6'

const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])
    const fetch = async () => {
        if(postId){
            const response = await axios.get(`${baseURL}/post/${postId}`, { headers: { 'app-id': APP_ID } })
            const cmt = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })
            setPost(response.data)
            setComment(cmt.data.data)
            console.log(response.data)
            console.log(cmt.data.data)
        }
    }
    useEffect(fetch,[postId])
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
    return (
        <>
            {post !== null ? (
                <div style={{padding:20}}>
                    <h1>Post : {post.text}</h1>
                    <h2>tags : {[...post.tags].toString()}</h2>
                    <img src = {post.image} alt = "fail to load"></img>
                    <p>{post.owner.firstName} {post.owner.lastName}</p>
                    <p>Likes : {post.likes}</p>
                    <h3>Comments</h3>
                    <ul>
                    {comment.map((comm) => {    
                       return <li>{comm.owner.firstName} {comm.owner.lastName} : {comm.message}</li>
                    })}
                    </ul>
                    <div  style = {style}  >
                        <Link href="/post">Back</Link>
                    </div>
                    
                </div>
            ):null}
        </>
    )
}

export  default  Post