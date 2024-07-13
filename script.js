let mobileInput = document.querySelector(".mobile-no input")
let instagramInput = document.querySelector(".instagram input") 
let display = document.querySelector(".display")
let targetUser = document.querySelector(".user")
let box1 = document.querySelector(".numberdisplay")
let box2 = document.querySelector(".box-display")

function generatenumbers(){
    let randomNumbers = ""
    for (let i = 0; i < 1000; i++) {
     randomNumbers += Math.floor(Math.random()*3)       
    }
   return randomNumbers
}



 async function hacking(){

  let firstbox = setInterval(()=>{
    box1.innerHTML=generatenumbers()
  
  },300)
    let secondbox = setInterval(()=>{
    box2.innerHTML=generatenumbers()

  },300)

  if (mobileInput.checked && instagramInput.checked){
    alert("You can't select both")
    clearInterval(firstbox)
    clearInterval(secondbox)
}

  else if (mobileInput.checked == false && instagramInput.checked == false){
     alert("You must select one")
     clearInterval(firstbox)
     clearInterval(secondbox)
  }

  else if (mobileInput.checked) {

    const firstPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML=`<h1>hacking wait...</h1>`
            resolve(1)
          },1000)
          
    })
    const secondPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>please wait..</h1>`
            resolve(2)
          },1000)
          
    })
    const thirdPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>Mobile no Found..</h1>`
            resolve(3)
          },1000)
          
    })
    const seventhPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>User Found : ${targetUser.value}</h1>`
            resolve(4)
          },1000)
          
    })
    const fourthPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>Number : +91.....</h1>`
            resolve(5)
          },1000)
          
    })
    const fifthPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>Hijacking Details..</h1>`
            resolve(6)
          },1000)
          
    })
    const sixthPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>succesfully hacked.</h1>`
            resolve(7)
            clearInterval(firstbox)
            clearInterval(secondbox) 
            box1.innerHTML=`<h1 class="done">Done</h1>`
            box2.innerHTML=`<h1 class="done">Done</h1>`
          },1000)
          
    })
   

  } else if(instagramInput.checked){
    const firstPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML=`<h1>hacking wait...</h1>`
            resolve(1)
          },1000)
          
    })
    const secondPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>please wait..</h1>`
            resolve(2)
             

          },1000)
          
    })
    const thirdPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>Instagram Username Found..</h1>`
            resolve(3)
          },1000)
          
    })
    const seventhPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>User Found : ${targetUser.value}</h1>`
            resolve(4)
          },1000)
          
    })
    const fourthPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>Number : +91.....</h1>`
            resolve(5)
          },1000)
          
    })
    const fifthPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>Fecthing Details..</h1>`
            resolve(6)
          },1000)
          
    })
    const sixthPromise =await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            display.innerHTML+=`<h1>succesfully hacked.</h1>`
            resolve(7)
            clearInterval(firstbox)
            clearInterval(secondbox) 
            box1.innerHTML=`<h1 class="done">Done</h1>`
            box2.innerHTML=`<h1 class="done">Done</h1>`
          },1000)
          
    })
  }

  
}