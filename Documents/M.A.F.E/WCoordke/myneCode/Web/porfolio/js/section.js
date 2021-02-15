function myFunction(x){
        x.classList.toggle("change");
}
myFunction()

function dropDown(){
        document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(event){
        if(!event.target.matches('dropbtn')){
                var dropdowns = document.getElementsByClassName('dropdown-content')
                var i;
                for (i = 0; i < dropdowns.length; i++){
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')){
                                openDropdown.classList.remove('show');
                        }
                }
        }
}

const modal = document.querySelector('modal');
const img = document.getElementById('smile');
const captionText = document.getElementById('caption')

function visible(){
        var open = document.getElementById('myModal')
        open.style.display='block'
}

function modalImg(){
        var img = document.createElement('img')
        img.setAttribute('src', 'img/smile.png')
        img.setAttribute('alt', 'Portrait')
        img.setAttribute('class', 'modal-content')
        modal.appendChild(img)
}
