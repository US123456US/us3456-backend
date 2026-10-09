document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = '请填写完整信息后再提交。';
    return;
  }

  status.textContent = '消息已收到（这是一个前端示例页面，未发送到真实后端）。';
  form.reset();
});
