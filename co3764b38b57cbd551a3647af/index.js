function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

let books = ["A tale of two citirs ", "The litle Prince", "Harry Potter and the Philosopher's Stone", "And Then There Were None", "Dream of the Red Chamber", "The Hobbit", "A Message to Garcia", "To Mockingbird", "The Kite Runner", "Valley of the Dolls"]

let bookInChart = [...Array(5)].map((_, i) => {
    return {
        index: i,
        title: books[roll(0, books.length)],
        price: roll(2, 10, 1).toFixed(2),
        weight: roll(6, 20, 1).toFixed(2),
        count: roll(1, 6)
    }
})


let cartTotal = bookInChart.reduce(function(accumulator, book) {
    return accumulator + parseFloat(book.price) * book.count 
}, 0).toFixed(2)

let totalWeight = bookInChart.reduce(function(accumulator, book) {
    return accumulator + parseFloat(book.weight) * book.count 
}, 0)


let taxRate = roll(5, 9, 1).toFixed(1)

function taxed(value) {
    return taxRate / 100 * cartTotal + parseFloat(cartTotal)
}

let taxedTotal = taxed(cartTotal).toFixed(2)




let cart = document.getElementById("books")
let cartHtml = ''
bookInChart.forEach(book => {
    cartHtml += `<div class="product">
        <div>${book.title}</div>
        <div>SAR ${book.price}</div>
        <div>x${book.count}</div>
    </div>`
})
cart.innerHTML = cartHtml

let summary = document.getElementById("Summary")
let summaryHtml = ''
summaryHtml += `<div>Total: SAR ${cartTotal}</div>`
summaryHtml += `<div>Total After Tax: SAR ${taxedTotal}</div>`
summary.innerHTML = summaryHtml