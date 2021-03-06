export default function Youtube(props) {
  const { videoId, width = "100%", height = 366 } = props;
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="youtube-container">
      <iframe
        width={width}
        height={height}
        src={src}
        frameborder="0"
        allow="autoplay; encripted-media"
        allowFullScreen="1"
      />
    </div>
  );
}

//  https://www.youtube.com/embed/Gjnup-PuquQ
