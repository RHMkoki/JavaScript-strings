document.getElementById('checkButton').addEventListener('click', function () {
  const input = document.getElementById('userInput').value;
  const startsWithA = input.startsWith('A');
  const includesHello = input.includes('hello');
  document.getElementById(
    'checkResult'
  ).innerText = `Starts with 'A': ${startsWithA}, Includes 'hello': ${includesHello}`;
});
