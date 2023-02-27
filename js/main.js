'use strict';

// let crust = document.querySelector('.crust')
// let erkey = document.querySelector('.erkey')
// let sauce = document.querySelector('.sauce')
// let ingredients = document.querySelectorAll('.ingredients')


// for (let i = 0; i < ingredients.length; i++) {
//     const kele = ingredients[i];
//     kele.addEventListener('click', function(){
//         erkey.classList.toggle('active')
//     })
    
// }


// crust.addEventListener('click', function(){
//     dropCrust.classList.toggle('active')

// })

// ingredients.forEach(function(item){
//     let header = item.querySelector('.crust')
//     let content = item.querySelectorAll('.erkey')
//     let header2 = item.querySelector('.sauce')
//     let header3 = item.querySelector('.cheese')
    


//     header.onclick=function(){
//         content[0].classList.toggle('active')
//     }
//     header2.onclick=function(){
//         content[1].classList.toggle('active')
//     }
//     header3.onclick=function(){
//         content[2].classList.toggle('active')
//     }
// })

const ingre = document.querySelectorAll('.ingre-item');
const erkeyler = document.querySelectorAll('.erkey')
ingre.forEach(element => {
    element.addEventListener('click', function(){
        for (let i = 0; i < erkeyler.length; i++) {
            erkeyler[i].classList.remove('active')            
        }
        this.nextElementSibling.classList.add('active')
    })
});

