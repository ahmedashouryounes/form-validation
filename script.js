var conShow = document.getElementById('conShow')
var divRow = document.createElement('div')
divRow.classList.add('row')

var divCen = document.createElement('div')
divCen.classList.add('col-11','col-md-8','col-lg-7','col-xl-6','col-xxl-5','mx-auto','shadow-lg','bg-dark','py-5','text-center','rounded-3')

var head = document.createElement('h3')
head.innerText = 'login'
head.classList.add('text-white','text-center','text-uppercase')

var please = document.createElement('p')
please.innerText = 'please enter your login and password!'
please.classList.add('text-center','text-18','text-muted','text-capitalize')

var myForm =document.createElement('form')
myForm.setAttribute('id','myForm')


var userInput = document.createElement('input')
userInput.setAttribute('type','text')
userInput.setAttribute('name','userName')
userInput.setAttribute('id','userName')
userInput.setAttribute('placeholder','username')
userInput.classList.add('rounded-pill','w-50','shadow-none','text-center','text-light','bg-transparent','border-primary','mx-auto','py-1','my-2','form-control')


var spanName = document.createElement('span')
spanName.innerText = ''
spanName.classList.add('text-light','text-14')


var passInput = document.createElement('input')
passInput.setAttribute('type','password')
passInput.setAttribute('name','userPassword')
passInput.setAttribute('id','userPassword')
passInput.setAttribute('placeholder','password')
passInput.classList.add('rounded-pill','w-50','shadow-none','text-center','text-light','bg-transparent','border-primary','mx-auto','py-1','my-2','form-control')


var spanPass = document.createElement('span')
spanPass.innerText = ''
spanPass.classList.add('text-light','text-14')


var forgot = document.createElement('a')
forgot.innerText = 'forgot password?'
forgot.setAttribute('href','#')
forgot.classList.add('text-muted','my-4','text-capitalize','d-block')


var logBtn = document.createElement('button')
logBtn.innerText = 'login'
logBtn.classList.add('btn','btn-dark','shadow-none','mx-auto','px-5','my-4','d-block','fw-bold','text-white','border','border-2','border-success','rounded-pill')


var divIcon = document.createElement('div')
divIcon.classList.add('d-flex','justify-content-evenly','w-75','mx-auto')



var faceA = document.createElement('a')
faceA.setAttribute('href','https://www.facebook.com')
var faceImg = document.createElement('img')
faceImg.src = 'facebook.svg'
faceImg.classList.add('icons')

var twitA = document.createElement('a')
twitA.setAttribute('href','https://www.twitter.com')
var twitImg = document.createElement('img')
twitImg.src = 'twitter.svg'
twitImg.classList.add('icons')

var gooA = document.createElement('a')
gooA.setAttribute('href','https://www.google-plus.com')
var gooImg = document.createElement('img')
gooImg.src = 'google-plus.svg'
gooImg.classList.add('icons')


conShow.appendChild(divRow)
divRow.appendChild(divCen)
divCen.appendChild(head)
divCen.appendChild(please)
divCen.appendChild(myForm)
myForm.appendChild(userInput)
myForm.appendChild(spanName)
myForm.appendChild(passInput)
myForm.appendChild(spanPass)
myForm.appendChild(forgot)
myForm.appendChild(logBtn)
divCen.appendChild(divIcon)
divIcon.appendChild(faceA)
faceA.appendChild(faceImg)
divIcon.appendChild(twitA)
twitA.appendChild(twitImg)
divIcon.appendChild(gooA)
gooA.appendChild(gooImg)


function checkName(){
    if(myForm.userName.value.length < 3){
        spanName.innerText = 'add more than 3 char'
        return false
    }
    else{
        spanName.innerText = 'ok'
        return true
    }
}


function checkPassword(){
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(!reg.test(myForm.userPassword.value)){
        spanPass.innerText = 'password should include 2 char 2 number ............'
        return false
    }
    else{
        spanPass.innerText = 'ok'
        return true
    }
}



myForm.addEventListener('submit',function(e){
    if(checkName() === false || checkPassword() === false){
        e.preventDefault()
    }
})

myForm.addEventListener('input',function(e){
    switch (e.target.id) {
        case "userName":
            checkName()
            break;
    
        case "userPassword":
            checkPassword()
            break;
    }
})