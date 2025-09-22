import sspic1 from "../assets/images/sspic1.jpg";
import sspic3 from "../assets/images/sspic3.jpg";
import "../styles/styles.css";

function Home() {
  return (
    <div>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-left">
              <h1 className="hero-title">Suicide Squad</h1>
              <p className="hero-sub">
                A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. 
              </p>

              <div className="hero-actions">
                <a href="/characters" className="btn primary">See Characters</a>
                <a href="/about" className="btn ghost">Learn More</a>
              </div>
            </div>

            <div className="hero-right">
              <div className="card">
                <img src={sspic1} alt="Suicide Squad 1" />
                <div className="card-body">
                  <h3>Suicide Squad 1</h3>
                  <p>Team in action.</p>
                </div>
              </div>

              <div className="card">
                <img src={sspic3} alt="Suicide Squad 2" />
                <div className="card-body">
                  <h3>Suicide Squad 2</h3>
                  <p>Squad members assembled.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container">
          <h2>Characters Preview</h2>
          <div className="grid">
<article className="project-card">
  <img src={require('../assets/images/harley.jpg')} alt="Harley Quinn" />
  <div className="project-info">
    <h3>Harley Quinn</h3>
    <p>Unpredictable and acrobatic, Harley wields her bat or mallet with chaotic flair.</p>
  </div>
</article>

<article className="project-card">
  <img src={require('../assets/images/deadshot.jpg')} alt="Deadshot" />
  <div className="project-info">
    <h3>Deadshot</h3>
    <p>The world’s greatest marksman, never missing a shot and balancing a complex moral code.</p>
  </div>
</article>

<article className="project-card">
  <img src={require('../assets/images/joker.jpg')} alt="Joker" />
  <div className="project-info">
    <h3>Joker</h3>
    <p>The Clown Prince of Crime—an unpredictable mastermind who thrives on chaos and dark humor.</p>
  </div>
</article>

          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Suicide Squad Web</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
