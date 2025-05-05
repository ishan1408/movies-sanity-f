import React from "react";
import { urlFor } from "../imageUrlBuilder";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      {movie.poster && (
        <img
          src={urlFor(movie.poster).width(300).url()}
          alt={movie.title}
          className="poster-image"
        />
      )}

      <h2>{movie.title}</h2>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>

      <p>{movie.description}</p>

      {movie.genre?.length > 0 && (
        <p>
          <strong>Genres:</strong> {movie.genre.join(", ")}
        </p>
      )}

      <p>
        <strong>Rating:</strong> {movie.rating}/10
      </p>

      <p>
        <strong>Release:</strong>{" "}
        {new Date(movie.releaseDate).toLocaleDateString()}
      </p>

      {movie.isFeatured && <p className="featured">🌟 Featured</p>}

      {movie.gallery?.length > 0 && (
        <div className="gallery">
          <h4>Gallery</h4>
          <div className="gallery-images">
            {movie.gallery.map((image, idx) => (
              <img
                key={idx}
                src={urlFor(image).width(150).url()}
                alt={`Image in gallery ${idx + 1}`}
                className="gallery-img"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
