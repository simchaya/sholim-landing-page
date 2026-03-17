import logoImg from './assets/logo.jpeg'

function Contact({ info }) {
    return (
      <section className="pillar-contact">
        <h2>אשמח לשמוע מכם</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <span>טלפון</span>
            <p>{info.phone}</p>
          </div>
          <div className="contact-card">
            <span>אימייל</span>
            <p>{info.email}</p>
          </div>
        </div>
        <img src={logoImg} alt="logo" className="contact-logo" />
      </section>
    )
  }
  
  export default Contact