import React from 'react';
import './AlbumView.css';

function AlbumView({ album, onClose }) {
  return (
    <div className="album-view">
      <div className="album-view-header">
        <h2>{album.title}</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
      <div className="album-view-grid">
        {album.images?.map((image, index) => (
          <div key={index} className="album-image-item">
            <img src={image.url} alt={image.caption || album.title} />
            {image.caption && <p className="image-caption">{image.caption}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumView;