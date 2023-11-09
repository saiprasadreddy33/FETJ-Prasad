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
          let currentWordIndex = i % wordLength;
  
          for (let j = 0; j < numLines - i - 1; j++) {
            line.innerText += '  ';
          }
  
          for (let j = 0; j <= i; j++) {
            line.innerText += word[currentWordIndex];
            currentWordIndex = (currentWordIndex + 1) % wordLength;
          }
  
          designContainer.appendChild(line);
        }
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    });
  });
  
