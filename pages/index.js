import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Contact Us</h1>
      <p className="sub-title">lorem ipsum</p>

      <div id="contact-container">
        <div className="contact-info">
          <h4>
            Contact Information
          </h4>
          <p>
            Fill up the form and then click send
          </p>

          <div className="icon-text">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>718-234-5678</span>
          </div>
          <div className="icon-text">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>admin@billys.com</span>
          </div>
          <div className="icon-text">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>435 Grand Ave, Ridgewood, NY 11385</span>
          </div>

          <div className="social-media">
            <a href="#" className="icon-circle">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" className="icon-circle">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" className="icon-circle">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" className="icon-circle">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <form>
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>E-Mail</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Phone #</label>
              <input type="tel" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>What Type of Website Do You Need?</label>
              <div className="radio-buttons">
                <input type="radio" name="type" value="E-commerce" /> <label>Ecommerce</label>
                <input type="radio" name="type" value="Personal" /> <label>Personal</label>
                <input type="radio" name="type" value="Landing Page" /> <label>Landing Page</label>
              </div>
            </div>
          </div>
        </form>

      </div>

    </>
  )
}
