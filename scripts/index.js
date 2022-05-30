// Add the coffee to local storage with key "coffee"
let url = 'https://masai-mock-api.herokuapp.com/coffee/menu'

getData()

async function getData() {
    try {
        let res1 = await fetch(url)
        // console.log(res) 
        let res2 = await res1.json()
        let data = res2.menu.data
        console.log(data)
        display(data)

    } catch (error) {
        console.log(error)
    }
}

let menu = document.querySelector('#menu')

function display(data) {
    console.log('display function')
    data.map(function (ele, index) {
        let box = document.createElement('div')
        box.setAttribute('class', 'box')

        let img = document.createElement('img')
        img.src = ele.image
        img.setAttribute('class', 'image')

        let title = document.createElement('p')
        title.innerText = ele.title

        let price = document.createElement('p')
        price.innerText = ele.price

        let addBtn = document.createElement('button')
        addBtn.innerText = "Add to Bucket"
        addBtn.setAttribute('id', 'add_to_bucket')
        addBtn.addEventListener('click', function () {
            addToBucket(ele)
        })

        box.append(img, title, price, addBtn)
        menu.append(box)
    })
}

let coffee = JSON.parse(localStorage.getItem('coffee')) || []
let bucketNo = document.querySelector('#bucketNumber')
bucketNo.innerText = coffee.length;

function addToBucket(ele) {
    console.log('addToBucket')
    coffee.push(ele)
    console.log(coffee)
    localStorage.setItem('coffee', JSON.stringify(coffee))
    bucketNo.innerText = coffee.length;
}