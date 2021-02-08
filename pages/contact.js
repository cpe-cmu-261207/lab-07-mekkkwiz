import Link from 'next/link'

const Contact = () => {
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
            <table border="1px" class = "main-table" >
                    <tr >
                        <td><h4>Subject:</h4></td>
                        <td><input type="text" size="60px" /></td>
                    </tr>
                    <tr >
                        <td><h4>Massage:</h4></td>
                        <td><textarea name="message" id="massage" cols="30" rows="10" ></textarea></td>
                    </tr>
                    <tr >
                        <td><h4>Name:</h4></td>
                        <td><input type="text" size="60px"/></td>
                    </tr>
                    <tr>
                        <td><h4>Gender:</h4></td>
                        <td>
                            <form>
                                <input type="radio" name="gender"/>male
                                <input type="radio" name="gender"/>female
                                <input type="radio" name="gender"/>others
                            </form></td>
                    </tr>
                    <tr >
                        <td><h4>Phone:</h4></td>
                        <td><input type="text" size="60px"/></td>
                    </tr>
                    <tr >
                        <td><h4>Email:</h4></td>
                        <td><input type="text" size="60px"/></td>
                    </tr>
                    <tr >
                        <td></td>
                        <td><button type="submit" id="submit">submit</button></td>
                    </tr>
                </table>	
        </section>
      </>
  )
}

export default Contact