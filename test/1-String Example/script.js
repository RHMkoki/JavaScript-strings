document.getElementById('greetButton').addEventListener('click', function () {
  const name = document.getElementById('nameInput').value;
  //   const greetingMessage = `Hello, ${name}! Welcome to our website.`;
  const greetingMessage = 'Hello ' + name + ' welcome to our website';
  document.getElementById('greeting').innerText = greetingMessage;
});
