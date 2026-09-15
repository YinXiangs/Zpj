// 当前网站主要依赖 CSS 的 scroll-behavior 实现页面内平滑跳转。
// 如果后续需要加入 GSAP / Three.js / 鼠标跟随效果，可以在这里继续扩展。

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
