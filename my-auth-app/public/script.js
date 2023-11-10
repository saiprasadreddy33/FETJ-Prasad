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
        line.style.textAlign = 'center';

        const spaces = ' '.repeat(numLines - i - 1);
        const chars = [];

        for (let j = 0; j <= i; j++) {
          chars.push(word[j % wordLength]);
        }

        line.innerText = spaces + chars.join(' ');
        designContainer.appendChild(line);
      }

      for (let i = numLines - 2; i >= 0; i--) {
        const line = document.createElement('p');
        line.style.textAlign = 'center';

        const spaces = ' '.repeat(numLines - i - 1);
        const chars = [];

        for (let j = 0; j <= i; j++) {
          chars.push(word[j % wordLength]);
        }

        line.innerText = spaces + chars.join(' ');
        designContainer.appendChild(line);
      }
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
});
