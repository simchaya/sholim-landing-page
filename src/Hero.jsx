import balloonImg from './assets/hotairballoon.png'

function Hero({ name, tagline, about }) {
  return (
    <section className="pillar-hero">
      <div className="hero-clouds"></div>
      <div className="hero-text">
        <p className="eyebrow">חינוך · קריאה · ילדים</p>
        <h1>{name}</h1>
        <p className="hero-tagline">{tagline}</p>
        <div className="divider"></div>
        <p className="about-text">{about}</p>
        <div className="dots">
          <div className="dot" style={{ background: '#ffcc00' }}></div>
          <div className="dot" style={{ background: '#e07b9a' }}></div>
          <div className="dot" style={{ background: '#4a3a9a' }}></div>
          <div className="dot" style={{ background: '#5bbfaa' }}></div>
        </div>
      </div>
      <div className="hero-balloon">
        <img src={balloonImg} alt="balloon" />
      </div>
    </section>
  )
}

export default Hero