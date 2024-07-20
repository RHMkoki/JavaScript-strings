document.getElementById('processButton').addEventListener('click', function () {
  const input = document.getElementById('userInput').value;
  const upperCaseInput = input.toUpperCase();
  const length = input.length;
  document.getElementById(
    'result'
  ).innerText = `Uppercase: ${upperCaseInput}, Length: ${length}`;
});
