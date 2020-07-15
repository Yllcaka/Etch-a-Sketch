var body, main, boxButton, numberOfBoxes, colors, pencil;

body = document.querySelector('body');
main = document.createElement('div');

pencil = "#292926"; // The color of the pencil at the start

colors = ["#ffffff", "#292926", "#8a42f5","#fff53b", "#33abde", "#e63b4c" ]; //The colors you can use to draw.
colorPicker = document.createElement('div');
colorPicker.setAttribute('style', `display: grid; grid-template-columns:repeat(${colors.length}, auto); width: 80%; margin: 0 auto`);
colors.forEach(color => {
    //Here the color choices will be added to the body of the html file.
    let colorBox = document.createElement('div');
    colorBox.setAttribute('style', `color:white;margin: 1px;background:${color}; padding:20%; border:4px solid #292926`);
    colorBox.addEventListener('click', ()=>{
        //When you click the color the pencil will get that color
        pencil = color;
    })

    colorPicker.appendChild(colorBox);
    

})
body.appendChild(colorPicker);




body.style.background = "#e04857";

boxButton = document.createElement('button');
boxButton.textContent = "Change Box amount";
boxButton.setAttribute('style', 'display:block;margin:5px auto; background: #e63b4c; border:4px solid #ffffff; color: #ffffff; padding:20px');
body.appendChild(boxButton);

numberOfBoxes = 16;
boxButton.addEventListener('click', ()=>{
    // when the button to change numbers is clicked
    // there will appear a prompt to ask how many boxes to show
    // the boxes will then be show on a ratio of 1:1 by the number of that is given
    // Example: 10 is given 10X10 will be shown
    do{numberOfBoxes = parseInt(prompt("Enter a number between 1 and 100 to display that amount of boxes", numberOfBoxes));}
    while(numberOfBoxes<=0 || numberOfBoxes>100);
    boxStapling(numberOfBoxes);
    
});

function random(number){
    return Math.floor(Math.random() * Math.floor(number));
}

body.appendChild(main);

function boxStapling(boxNumbers){
    //Creates the amount of squares to draw on
    main.innerHTML = "";// Empties the previous number of squares
    main.setAttribute('style', `display: grid; grid-template-columns:repeat(${boxNumbers}, auto); 
                    width:60%; margin:0 auto; border:4px solid #ffffff; border-radius:4px; `);

    for(let col=0; col<boxNumbers; col++){
        for(let row = 0; row<boxNumbers; row++){
            let square = document.createElement('div');

            square.setAttribute('style', `color:white;margin: 1px;background:white; padding:30%`);

            square.addEventListener('mouseover', ()=>{
                // This is where the magic happens
                // When the mouse is over the boxes the boxes will 
                // get the color of the pencil
                square.style.background = pencil;
            });

            main.appendChild(square);
            
            
        }
    
    }
}
boxStapling(numberOfBoxes);
