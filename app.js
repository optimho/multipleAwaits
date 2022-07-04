
const moveX = (element, amount, delay) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const bodyBoundry = document.body.clientWidth
            const buttonBoundryRight = element.getBoundingClientRect().right
            const buttonBoundryLeft = element.getBoundingClientRect().left
            let holder = true

            if ((buttonBoundryRight + amount > bodyBoundry)|| buttonBoundryLeft < 0) {
                console.log(`right boundary breached `)
                if (buttonBoundryRight + amount > bodyBoundry){
                    let holder =true
                    reject('Right boundary breach ')
                }
                else {
                    let holder = false
                    reject(' left boundary breach')
                }
            }
            else{
                element.style.transform = `translateX(${buttonBoundryLeft + amount}px)`
                console.log(buttonBoundryRight + amount > bodyBoundry)
                resolve()
            }

        },delay)
    })
}

let amt = 100
let delayTime = 1000
const btn = document.querySelector('button')

async  function animateBtn(el, amt){
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
}
animateBtn(btn,100)
    .catch((err)=>{
    console.log(' there has been a collision  =>', err)
     animateBtn(btn,-100);
})



// const btn = document.querySelector('button')
// moveX(btn, 100,1000)
//     .then (()=> moveX(btn, 100,1000))
//     .then (()=> moveX(btn, 100,1000))
//     .then (()=> moveX(btn, 100,1000))
//     .then (()=> moveX(btn, 100,1000))
//     .then (()=> moveX(btn, 100,1000))
//     .then (()=> moveX(btn, 100,1000))
//     .then (()=> moveX(btn, 100,1000))
//     .then (()=> moveX(btn, 100,1000))
//     .then (()=> moveX(btn, 100,1000))
// .catch((err)=>{
//     console.log('Blocking move too close to the edge')
// })
