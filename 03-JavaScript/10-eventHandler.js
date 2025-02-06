//onload="alert('La pagina cargo correctamente')" alerta inidiial, se pone en el body

let  img=document.querySelector('img');
console.log(img);

// onclick
img.onclick= function(){
    img.src='./Assets/f9img1.png'
}
//onmuoseover
img.onmouseover=()=>{
    img.src='./Assets/f9img2.png'
}
//onmuoseout
img.onmouseout=()=>{
    img.src='./Assets/f5img2.png'
}

const myCustomEvent=()=>{
    alert("Estoy imprimiendo my evento customizado");
}
//document.addEventListener('click',myCustomEvent);

//onblur  cuando el elemento pierde el foco
const myOnBlur=(obj)=>{
    obj.style.background='orange';
}

//onfocus
const myOnfocus=(obj)=>{
    obj.style.background='blue';
}

const createButtons=(number,color)=>{
    for (let i = 0; i <number; i++) {
       const div=document.createElement('div');
       div.style.backgroundColor=color;
       div.style.height="30px";
       div.style.width="30px";
       div.style.margin="3px";
       div.style.cssFloat="left";
       div.style.cursor="pointer";
       div.draggable="true";
       div.onclick=function(){
        alert('you clickend on a box a'+ (i+1) );
       };
       document.getElementsByTagName('section')[0].appendChild(div);
    }
}
    
//onchange   cuando hay cualquier cambio
//onkeydown
//onkeyup  al quitar el dedo de la tecla
//onload



