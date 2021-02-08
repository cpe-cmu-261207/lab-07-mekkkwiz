import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
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
    <section class = "main"> 
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
		
		<div class = "name">
			<p><b>HELLO</b></p>
			<h1>I'm <font color="#17d1ac">Mek</font> Wisarut</h1>
			<p class = "details">
			this is my first personal website 
			that mead by html css and javascript hope 
			you enjoy it</p>
		</div>
	</section>
  )
}

export default Home