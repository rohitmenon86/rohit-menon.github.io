document.querySelectorAll('.video-embed').forEach((button) => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.videoId;
    const start = button.dataset.start || '0';
    const iframe = document.createElement('iframe');
    iframe.className = 'embedded-video';
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&start=${start}`;
    iframe.title = button.getAttribute('aria-label');
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    button.replaceWith(iframe);
  });
});
