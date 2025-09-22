import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="container section" style={{ textAlign: "center" }}>
      <h1 className="hero-title" style={{ fontSize: "7rem", marginBottom: "0.5em" }}>
        404
      </h1>
      <h2 className="hero-sub" style={{ marginBottom: "3em" }}>
        Oops! Page not found.
      </h2>
      <p className="hero-sub" style={{ marginBottom: "4em" }}>
        Looks like you strayed from the Squad’s path.
      </p>
      <Link to="/home" className="btn primary">
        GO BACK HOME
      </Link>
    </section>
  );
}
