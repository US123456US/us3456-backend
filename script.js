document.getElementById('year').textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
const status = document.getElementById('form-status');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = '请填写完整信息后再提交。';
    return;
  }

  status.textContent = '消息已收到（示例表单，不会真正发送邮件）。';
  contactForm.reset();
});
