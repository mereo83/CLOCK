//select div to put anything init & div for result
let divContainer = document.querySelector('.calc-form .container');
let resultArea = document.querySelector('.calc-result');

//create calc-form
let calcForm = document.createElement('form');
calcForm.name = "form";
//append result area into form
calcForm.appendChild(resultArea);
//append calc-form into divContainer
divContainer.appendChild(calcForm);

//create h3 (title)
let calcTitle = document.createElement('h3');
//add text (re-w-a-a)
let calcContext = document.createTextNode("Re-Calc");
//append calc-context into calc-heading
calcTitle.appendChild(calcContext);
//append calc-title into form
calcForm.appendChild(calcTitle);


//create number buttons
for(let i =0; i<10;i++){
    //create buttons for form numbers
    let calcNumbers = document.createElement('button');
    //add class
    calcNumbers.className = "but";
    //add value => its necessary 
    calcNumbers.value = `${i}`;
    //create text 
    let numberText = document.createTextNode([i]);
    //add dataset 
    calcNumbers.dataset.numbers = "number";
    //append text into buttons
    calcNumbers.appendChild(numberText);
    //append buttons into calc-form
    calcForm.appendChild(calcNumbers);
}

//create plus button
let plusButton = document.createElement('button');
//add plus class
plusButton.className = "btn-plus";
//add text
let plusText = document.createTextNode('+');
//append text to plus btn
plusButton.appendChild(plusText);
//append it into form
calcForm.appendChild(plusButton);

//create substraction button
let subButton = document.createElement('button');
//add  sub-class 
subButton.className = "btn-sub";
//add text
let subText = document.createTextNode('-');
//append it to sub-btn
subButton.appendChild(subText);
//append sub into form
calcForm.appendChild(subButton);

//create multiply button
let multButton = document.createElement('button');
//add multy class
multButton.className = "btn-multy";
//add text
let multyText = document.createTextNode('x');
//append it to multy-btn
multButton.appendChild(multyText);
//append it into form
calcForm.appendChild(multButton);

//create modlus button
let modlusButton = document.createElement('button');
//add  class
modlusButton.className = "btn-mod";
//add text
let modlusText = document.createTextNode("%");
//append it to modlus-btn
modlusButton.appendChild(modlusText);
//append it into form
calcForm.appendChild(modlusButton);

//create decimal button
let decimalButton = document.createElement('button');
//add  class
decimalButton.className = "btn-deci";
//add text
let decimalText = document.createTextNode(".");
//append it to decimal-btn
decimalButton.appendChild(decimalText);
//append it into form
calcForm.appendChild(decimalButton);

//create clear-one-number button
let clearOneNumber = document.createElement('button');
//add  class
clearOneNumber.className = "btn-CON";
//add text
let clearOneNumberText = document.createTextNode("c");
//append it to C-O-N-btn
clearOneNumber.appendChild(clearOneNumberText);
//append it into form
calcForm.appendChild(clearOneNumber);

//create division button
let divisionButton = document.createElement('button');
//add division class
divisionButton.className = "btn-div";
//add text
let divisionText = document.createTextNode("\u00f7");
//append it to div-btn
divisionButton.appendChild(divisionText);
//append it into form
calcForm.appendChild(divisionButton);

//create equal button
let equalButton = document.createElement('button');
//add class
equalButton.className = "btn-equal";
//add text
let equalText = document.createTextNode('=');
//append it to equal btn
equalButton.appendChild(equalText);
//append it to form
calcForm.appendChild(equalButton);

//create clear button
let  clearButton = document.createElement('button');
//add class
clearButton.className = "btn-clear";
//add dataset
clearButton.value = "c";
//add text
let clearText = document.createTextNode('Clear All');
//append it to clear-btn
clearButton.appendChild(clearText);
//append clear-btn to form
calcForm.appendChild(clearButton);


/////for claculation when you click on any button /////////////
document.addEventListener('click',(e)=>{
        //to prevent refresh
    e.preventDefault();
        //to get the value of numbers in result-area
    if(e.target.className == "but"){
            //array has numbers to put number bes  
        var arr = [0,1,2,3,4,5,6,7,8,9];
            //get clicked number value
        insert(arr[e.target.value]);
    }
    //end first if
        //clicked add button
    if(e.target.className == "btn-plus"){
         insert('+');
    }
    //end second if
        //clicked subtracion button
    if(e.target.className == "btn-sub"){
          insert('-');
    }
    //end third if
        //clicked multiple button
    if(e.target.className == "btn-multy"){
          insert('*');
          this.backGround.style = "red";
    }
    //end fourth if
        //clicked division button
    if(e.target.className == "btn-div"){
          insert('/');
    }
    //end fifth if
        //clicked modlus button
    if(e.target.className == "btn-mod"){
        insert('%');
    }
    //end 6 if
        //clicked decimal button
    if(e.target.className == "btn-deci"){
        insert('.');
    }
    //end 7 if
    if(e.target.className == "btn-CON"){
        //remove or delete one number if you want to do that when you put wrong number
        resultArea.innerHTML = resultArea.innerHTML.slice(0,resultArea.innerHTML.length-1);
    }
        //clicked clear button
    if(e.target.className == "btn-clear"){
            //make result area empty
        resultArea.innerHTML = "";
    }
    //end 8 if
        //clicked equal(=) button
    if(e.target.className == "btn-equal"){
            //evaluate expression 
        resultArea.innerHTML = eval(resultArea.innerHTML);
    }else if(e.target.className == "btn-equal" || resultArea.innerHTML == ""){
        console.log("hry");
    }///////make value not remove when you click equal if you aint put operator
    //end 9 if  
})
//end clickable buttons

//function to put number beside number and operator
function insert(num){
    resultArea.innerHTML += num;
}



////////important note
//resultArea.innerHtml -=1;=> decrease one number from the group numbers (group numbers as one number) == resultArea.innerHTML = (resultArea.innerHTML-1)-e.target.value.
//resultArea.innerHTML = e.target.value-1; => make the all number as (-1).     
//resultArea.innerHTML = e.target.value--; =. increase (-1)