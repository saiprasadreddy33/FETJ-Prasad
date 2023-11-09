document.addEventListener('DOMContentLoaded', function () {
  const displayButton = document.getElementById('displayButton');
  displayButton.addEventListener('click', () => {
    const numLines = parseInt(document.getElementById('numLines').value, 10);
//alert('clicked');
    if (numLines >= 1 && numLines <= 100) {
      const designContainer = document.getElementById('designContainer');
      //numLines.length
      designContainer.innerHTML = '';

      const word = 'FORMULAQSOLUTIONS';
      const wordLength = word.length;
      const middle = Math.floor(numLines / 2);
      //var flag = false;
      for (let i = 0; i < numLines * 2 - 1; i++) {
        const line = document.createElement('p');
        let currentWordIndex = Math.abs(middle - i) % wordLength;

        for (let j = 0; j < Math.abs(middle - i); j++) {
         // flag = true;
          line.innerText += '  ';
        }
       // alert('flag');
        for (let j = 0; j < numLines * 2 - 1 - 2 * Math.abs(middle - i); j++) {
          line.innerText += word[currentWordIndex];
          currentWordIndex = (currentWordIndex + 1) % wordLength;
        }
         console.log(currentWordIndex);
        designContainer.appendChild(line);
      }
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
});
