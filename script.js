// referencing the Elements in the html file

const inputt = document.getElementById('add');
const submit = document.getElementById('submit');
const chat = document.getElementById('chat');
const end = document.getElementById('end');

//the function that runs when the user
//clicks on send or presses enter

function submitted(){
    // only work if the input isnt empty
    if (inputt.value !== "")
    {
        const li = document.createElement('li');
        li.innerText = inputt.value;

        chat.appendChild(li);
        inputt.value = ""
    }
}

//whenever the send button is pressed

submit.addEventListener('click', submitted);

//whenerver the enter key is pressed

document.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        submitted();
    }
});

// creating a new text element

const text =  document.createElement('li')
        text.innerText = "Stranger has disconnected"
        text.id = "newtext"
        
// creating a new button to show whenever the esc is pressed

const newbutton = document.createElement('button')
        newbutton.style.backgroundColor = "#3C9CFC";
        newbutton.style.color = "white"
        newbutton.innerText = "New chat";
        newbutton.style.fontSize = "1.5em";
        newbutton.style.paddingTop = "7px"
        newbutton.style.paddingBottom = "7px"
        newbutton.style.paddingRight = "15px"
        newbutton.style.paddingLeft = "15px"
        newbutton.style.borderRadius = "4px";
        newbutton.id = "endButton"

//whenver esc button is pressed
document.addEventListener('keydown', function(event){
    if(event.keyCode === 27){
        inputt.value = "";
        inputt.disabled = true;
        chat.appendChild(text)
        chat.appendChild(newbutton);
     
    }
});

// whenever the end key is pressed
end.addEventListener('click', function(){
        inputt.value = "";
        inputt.disabled = true;
        chat.appendChild(text)
        chat.appendChild(newbutton);
})

//whenver the new chat  button is pressed
newbutton.addEventListener('click', function(){
    location.reload();
})
