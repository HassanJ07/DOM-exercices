// Change the document title to Modifying the DOM
let v = document.title = "Modifying the DOM";
//Display the document title in the console
console.log(document.title);
//Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
const myBody = document.body.innerHTML;
let x = Math.floor(Math.random() * 255) ;
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);
document.body.style.backgroundColor = "rgb("+x+","+y+","+z+")";

//Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)
document.appendChild.body
const parentList = document.getElementsByTagName('body');
const listChildren = parentList.children;
for (const listChildren of parentList){
    console.log(listChildren);
}

//Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
const imp = document.querySelectorAll(".important");
imp.forEach((e)=>{
    e.title = 'This is an important item';
});

//Select all the img tags and loop through them. If they have no important class, turn their display property to none
const img = document.querySelectorAll('img');
console.log(img)
img.forEach((e)=>{
    if (e.classList.contains('important')){
        e.style.display="none";
    }
    else{
        console.log(img)
    }
    

});




