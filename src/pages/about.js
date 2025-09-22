export default function About() {
  return (
    <section className="container section">
      <h1 className="hero-title">About Us</h1>

      <p className="hero-sub">
        This app is a fan-made React project inspired by the bold, chaotic style
        of the <strong>Suicide Squad</strong>.  
        It demonstrates routing, authentication context, and a dynamic UI using
        a custom color palette.
      </p>

      <div className="project-card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
        <img src={require('../assets/images/sspic1.jpg')} alt="Suicide Squad" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} />
        <h2 style={{ marginTop: 0 }}>What is the Suicide Squad?</h2>
        <p>
          The <strong>Suicide Squad</strong> is a team of DC Comics anti-heroes
          and villains—such as Harley Quinn, Deadshot, and King Shark—who are
          recruited by the government to undertake high-risk missions in exchange
          for reduced prison sentences. Known for their unpredictable
          personalities and explosive action, the Squad blends dark humor with
          thrilling adventures in comics, animation, and film.
        </p>
      </div>

      <div className="project-card" style={{ marginTop: "2rem", padding: "1.5rem", textAlign: "center" }}>
        <h2 style={{ marginTop: 0 }}>Developer Team</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <img src={require('../assets/images/jethro.jpg')} alt="Jethro Carcedo" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "0.5rem" }} />
            <div>Jethro Carcedo</div>
          </div>
          <div>
            <img src={require('../assets/images/alvin.jpg')} alt="Alvin Boncato" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "0.5rem" }} />
            <div>Alvin Boncato</div>
          </div>
          <div>
            <img src={require('../assets/images/julianne.jpg')} alt="Julianne Dolor" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "0.5rem" }} />
            <div>Julianne Dolor</div>
          </div>
        </div>
      </div>

      <p style={{ marginTop: "2rem", color: "var(--muted)" }}>
        This project is for educational and demonstration purposes only and is
        not an official DC Comics or Warner Bros. product.
      </p>
    </section>
  );
}
