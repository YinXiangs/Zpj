// 页面内锚点平滑滚动：兼容首页 #skills 以及详情页 index.html#skills。
document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hashIndex = href.indexOf('#');
    if (hashIndex < 0) return;
    const hash = href.slice(hashIndex);
    const target = document.querySelector(hash);

    // 只有目标就在当前页面时才拦截；详情页仍正常跳回 index.html#skills。
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (history.replaceState) history.replaceState(null, '', hash);
    }
  });
});

// 向下滚动时淡入 + 轻微上移；滚出视口后恢复，重新进入会再次淡入。
const revealTargets = document.querySelectorAll(
  '.section-title, .section-desc, .about-grid, .project-card, .skill-card, .contact > *, .project-hero, .project-block'
);
revealTargets.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${Math.min(index % 3, 2) * 80}ms`;
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => console.warn(`图片加载失败：${img.getAttribute('src')}`));
});
