// Micro-templates and UI helpers
window.Templates = {
  alert: (type, text) => {
    const colors = {
      info: ['#e8f4ff', '#2a7bd6'],
      success: ['#eaffea', '#0a8d35'],
      warn: ['#fff7e6', '#b26a00'],
      error: ['#ffecec', '#b00000']
    }[type] || ['#eee', '#333'];
    return `
      <div role="alert" style="background:${colors[0]};border-left:4px solid ${colors[1]};padding:12px 14px;border-radius:8px;margin:12px 0;">
        ${text}
      </div>`;
  },
  card: (title, content) => `
    <article class="card">
      <h3>${title}</h3>
      <div>${content}</div>
    </article>`
};