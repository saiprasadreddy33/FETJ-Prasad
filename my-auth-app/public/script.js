document.addEventListener('DOMContentLoaded', function () {
  const displayButton = document.getElementById('displayButton');
  displayButton.addEventListener('click', () => {
    const numLines = parseInt(document.getElementById('numLines').value, 10);

    setInterval(updateTime, 1000);

    function updateTime() {
      const currentTimeElement = document.getElementById('currentTime');

      if (currentTimeElement) {
        const currentIndianTime = new Date();
        const hours = currentIndianTime.getHours();
        const minutes = currentIndianTime.getMinutes();
        const seconds = currentIndianTime.getSeconds();
        const formattedTime = `${hours}:${minutes}:${seconds}`;

        currentTimeElement.textContent = `Current Indian Time: ${formattedTime}`;
      } else {
        console.error('Element with ID "currentTime" not found.');
      }
    }

    if (numLines >= 1 && numLines <= 100) {
      const designContainer = document.getElementById('designContainer');
      designContainer.innerHTML = '';

      const word = 'FORMULAQSOLUTIONS';
      const wordLength = word.length;

      for (let i = 0; i < numLines; i++) {
        const line = document.createElement('p');
        line.style.textAlign = 'center';

        const chars = [];

        for (let j = 0; j < numLines - i - 1; j++) {
          chars.push(' ');
        }

        for (let j = 0; j < 2 * i + 1; j++) {
          chars.push(word[(wordLength + i + j) % wordLength]);
        }

        line.innerText = chars.join('');
        designContainer.appendChild(line);
      }

      for (let i = numLines - 2; i >= 0; i--) {
        const line = document.createElement('p');
        line.style.textAlign = 'center';

        const chars = [];

        for (let j = 0; j < numLines - i - 1; j++) {
          chars.push(' ');
        }

        for (let j = 0; j < 2 * i + 1; j++) {
          chars.push(word[(wordLength + i + j) % wordLength]);
        }

        line.innerText = chars.join('');
        designContainer.appendChild(line);
      }
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
});
