import Link from 'next/link'

const Gallery = () => {
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
		<div class="row"> 
			<div class="column">
				<img width ="40%" src = "img/me.jpeg"></img>
				<img width ="40%" src = "img/1.jpeg"></img>
				<img width ="40%" src = "img/2.jpeg"></img>
			</div>
			<div class="column">
				<img width ="40%" src = "img/3.jpeg"></img>
				<img width ="40%" src = "img/4.jpeg"></img>
			</div>  
			<div class="column">
				<img width ="40%" src = "img/6.jpeg"></img>
				<img width ="40%" src = "img/7.jpeg"></img>
				<img width ="40%" src = "img/5.jpeg"></img>
			</div>
		</div>
      </>
  )
}

export default Gallery