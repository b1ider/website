const button = document.querySelector('button');
const squares = document.querySelector('div.square');

button.addEventListener('click', () => {
   squares.forEach((square) => {
       const rand = Math.random() * 5000;
       setTimeout(() =>  {
          square.classList.toggle('animation');
         },2000 
       }, rand)
   })
})

