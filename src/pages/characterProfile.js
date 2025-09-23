import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { useAuth } from "../App";
import { squadMembers } from "./characters";
import "../styles/styles.css";

function CharacterProfile() {
  const { slug } = useParams();
  const { isLoggedIn, user } = useAuth();

  const character = useMemo(() => {
    return squadMembers.find((m) => m.slug === slug);
  }, [slug]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!character) {
    return <Navigate to="/characters" replace />;
  }

  if (user?.characterSlug && user.characterSlug !== slug) {
    return <Navigate to={`/characters/${user.characterSlug}`} replace />;
  }

  return (
    <div className="characters-bg">
      <main className="section container">
        <h1 className="hero-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
          {character.name}
        </h1>

        <div className="grid">
          <article className="project-card" style={{ maxWidth: 480, margin: "0 auto" }}>
            <img src={character.img} alt={character.name} />
            <div className="project-info">
              <p><strong>Alias:</strong> {character.alias}</p>
              <p>{character.bio}</p>
              <p>
                <Link className="btn ghost" to="/characters">Back to all characters</Link>
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default CharacterProfile;


