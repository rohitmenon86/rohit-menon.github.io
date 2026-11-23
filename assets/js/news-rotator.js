/* Show three homepage news items at a time with older/newer navigation. */
document.addEventListener('DOMContentLoaded', () => {
  const rotator = document.querySelector('.news-rotator');
  const items = Array.from(document.querySelectorAll('[data-news-item]'));
  const newerButton = document.querySelector('[data-news-newer]');
  const olderButton = document.querySelector('[data-news-older]');

  if (!rotator || !newerButton || !olderButton || items.length < 4) return;

  const visibleCount = 3;
  const lastStartIndex = items.length - visibleCount;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let startIndex = 0;
  let timerId;

  const showWindow = (index) => {
    startIndex = Math.max(0, Math.min(index, lastStartIndex));
    items.forEach((item, itemIndex) => {
      item.hidden = itemIndex < startIndex || itemIndex >= startIndex + visibleCount;
    });
    newerButton.disabled = startIndex === 0;
    olderButton.disabled = startIndex === lastStartIndex;
  };

  const stopRotation = () => window.clearInterval(timerId);
  const startRotation = () => {
    if (reducedMotion) return;
    stopRotation();
    timerId = window.setInterval(() => {
      showWindow(startIndex === lastStartIndex ? 0 : startIndex + 1);
    }, 6500);
  };

  newerButton.addEventListener('click', () => {
    showWindow(startIndex - 1);
    startRotation();
  });
  olderButton.addEventListener('click', () => {
    showWindow(startIndex + 1);
    startRotation();
  });

  if (!reducedMotion) {
    rotator.addEventListener('mouseenter', stopRotation);
    rotator.addEventListener('mouseleave', startRotation);
    rotator.addEventListener('focusin', stopRotation);
    rotator.addEventListener('focusout', startRotation);
    startRotation();
  }
});
