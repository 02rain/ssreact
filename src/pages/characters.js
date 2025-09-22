import "../styles/styles.css";
import harleyImg from "../assets/images/harley.jpg";
import deadshotImg from "../assets/images/deadshot.jpg";
import captainBoomerangImg from "../assets/images/boomerang.jpg";
import killercrocImg from "../assets/images/killercroc.jpg";
import katanaImg from "../assets/images/katana.jpg";
import jokerImg from "../assets/images/joker.jpg";

const squadMembers = [
  {
  name: "Harley Quinn",
  alias: "Dr. Harleen Quinzel",
  img: harleyImg,
  bio: "Unpredictable, acrobatic, and armed with a baseball bat or mallet, Harley brings chaotic energy to the team."
},
{
  name: "Deadshot",
  alias: "Floyd Lawton",
  img: deadshotImg,
  bio: "The world’s greatest marksman, known for never missing a shot and for his complicated moral code."
},
{
  name: "Joker",
  alias: "Unknown",
  img: jokerImg,
  bio: "The Clown Prince of Crime—an unpredictable criminal mastermind with a twisted sense of humor and a love of chaos."
},
{
  name: "Killer Croc",
  alias: "Waylon Jones",
  img: killercrocImg,
  bio: "A reptilian powerhouse with immense strength and durability, feared for his ferocity and resilience."
},
{
  name: "Katana",
  alias: "Tatsu Yamashiro",
  img: katanaImg,
  bio: "A skilled swordswoman whose Soultaker blade is said to capture the souls of its victims."
},
{
  name: "Captain Boomerang",
  alias: "George Harkness",
  img: captainBoomerangImg,
  bio: "Expert with a variety of trick boomerangs and a knack for troublemaking humor."
}

];

function Characters() {
  return (
    <div className="characters-bg">
      <main className="section container">
      <h1 className="hero-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
        Suicide Squad
      </h1>

      <div className="grid">
        {squadMembers.map((member) => (
          <article key={member.name} className="project-card">
            <img src={member.img} alt={member.name} />
            <div className="project-info">
              <h3>{member.name}</h3>
              <p><strong>Alias:</strong> {member.alias}</p>
              <p>{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
      </main>
    </div>
  );
}

export default Characters;
