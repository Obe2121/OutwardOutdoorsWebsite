import React, { useState, useEffect } from 'react';
import AlbumView from './AlbumView.js';
import './Gallery.css';

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Import all images from each folder
    const deerImages = importAll(require.context('../Images/Deer', false, /\.(png|jpeg|jpg|JPG|JPEG)$/));
    const duckImages = importAll(require.context('../Images/Duck', false, /\.(png|jpeg|jpg|JPG|JPEG)$/));
    const fishingImages = importAll(require.context('../Images/Fishing', false, /\.(png|jpeg|jpg|JPG|JPEG)$/));
    const farmImages = importAll(require.context('../Images/OnTheFarm', false, /\.(png|jpeg|jpg|JPG|JPEG)$/));
    const trailCamImages = importAll(require.context('../Images/TrailCam', false, /\.(png|jpeg|jpg|JPG|JPEG)$/));
    const turkeyImages = importAll(require.context('../Images/Turkey', false, /\.(png|jpeg|jpg|JPG|JPEG)$/));

    // Create albums array with imported images
    setAlbums([
      {
        id: 1,
        title: 'Deer',
        coverImage: deerImages[0], // Uses first image as cover
        description: 'Our best deer hunting moments',
        images: deerImages.map((url, index) => ({
          url,
          caption: `Deer hunting photo ${index + 1}`
        }))
      },
      {
        id: 2,
        title: 'Duck',
        coverImage: duckImages[0],
        description: 'Adventures in duck hunting',
        images: duckImages.map((url, index) => ({
          url,
          caption: `Duck hunting photo ${index + 1}`
        }))
      },
      {
        id: 3,
        title: 'Turkey',
        coverImage: turkeyImages[0],
        description: 'Spring and fall turkey hunting adventures',
        images: turkeyImages.map((url, index) => ({
          url,
          caption: `Turkey hunting photo ${index + 1}`
        }))
      },
      {
        id: 4,
        title: 'Fishing',
        coverImage: fishingImages[2],
        description: 'Memorable catches and fishing trips',
        images: fishingImages.map((url, index) => ({
          url,
          caption: `Fishing photo ${index + 1}`
        }))
      },
      {
        id: 5,
        title: 'On The Farm',
        coverImage: farmImages[0],
        description: 'Life on the farm',
        images: farmImages.map((url, index) => ({
          url,
          caption: `Farm photo ${index + 1}`
        }))
      },
      {
        id: 6,
        title: 'Trail Cam',
        coverImage: trailCamImages[0],
        description: 'Wildlife caught on camera',
        images: trailCamImages.map((url, index) => ({
          url,
          caption: `Trail cam photo ${index + 1}`
        }))
      }
    ]);
  }, []);

  // Helper function to import all images from a context
  function importAll(r) {
    return r.keys().map(r);
  }

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleClose = () => {
    setSelectedAlbum(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Photo Albums</h1>
      {selectedAlbum ? (
        <AlbumView album={selectedAlbum} onClose={handleClose} />
      ) : (
        <div className="albums-grid">
          {albums.map((album) => (
            <div 
              key={album.id} 
              className="album-card"
              onClick={() => handleAlbumClick(album)}
            >
              <div className="album-image-container">
                <img 
                  src={album.coverImage} 
                  alt={album.title}
                  className="album-cover"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="album-info">
                <h2 className="album-title">{album.title}</h2>
                <p className="album-description">{album.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
    