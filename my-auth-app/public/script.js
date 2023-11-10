document.addEventListener('DOMContentLoaded', function () {
  const displayButton = document.getElementById('displayButton');
  displayButton.addEventListener('click', () => {
    const numLines = parseInt(document.getElementById('numLines').value, 10);

    if (numLines >= 1 && numLines <= 100) {
      const designContainer = document.getElementById('designContainer');
      designContainer.innerHTML = '';

      const word = 'FORMULAQSOLUTIONS';
      const wordLength = word.length;

      for (let i = 0; i < numLines; i++) {
        const line = document.createElement('p');

        for (let j = 0; j <= i; j++) {
          line.innerText += word[j % wordLength];
        }

        designContainer.appendChild(line);
      }

      for (let i = numLines - 2; i >= 0; i--) {
        const line = document.createElement('p');

        for (let j = 0; j <= i; j++) {
          line.innerText += word[j % wordLength];
        }

        designContainer.appendChild(line);
      }
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
});
