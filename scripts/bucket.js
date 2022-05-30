// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucket = JSON.parse(localStorage.getItem('coffee'))
console.log(bucket)

let display = document.querySelector('#bucket')

displayData()

function displayData(ele, index) {
    bucket.map(function (ele, index) {
        let box = document.createElement('div')
        box.setAttribute('class', 'box')

        let img = document.createElement('img')
        img.src = ele.image
        img.setAttribute('class', 'image')

        let title = document.createElement('p')
        title.innerText = ele.title

        let price = document.createElement('p')
        price.innerText = ele.price

        let removeBtn = document.createElement('button')
        removeBtn.innerText = "remove"
        removeBtn.setAttribute('id', 'remove_coffee')
        removeBtn.addEventListener('click', function () {
            removeFromBucket(ele)
        })

        box.append(img, title, price, removeBtn)
        display.append(box)
    })
}

function removeFromBucket(ele, index) {
    // console.log('remove')
    bucket.splice(index, 1)
    localStorage.setItem('coffee', JSON.stringify(bucket))
    window.location.reload()
}

let sum = 0;

for (let i = 0; i < bucket.length; i++) {
    sum += bucket[i].price
}

console.log(sum)

let total = document.querySelector('#total_amount')
total.innerText = sum

