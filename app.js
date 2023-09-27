import menuArray from './data.js'

const mainEl = document.getElementById("menu")
const orderEl = document.getElementById("order-section-container")

document.addEventListener("click", function(e) {
    const target = e.target.dataset.id
    if (target === "1") {
        renderOrderSection()
    }
})

function addItemToOrder() {
    
}

function getMenuHtml() {
    let menuHtml = ""
    menuArray.forEach(function(item) {
        menuHtml += `
        <div class="menu-section-container">
            <div class="menu-section">
                <div class="menu-item">
                    <p>${item.emoji}</p>
                </div>
                <div class="menu-item-details-container">
                    <h2 class="menu-item-header">${item.name}</h2>
                    <p class="menu-item-details">${item.ingredients.join(", ")}</p>
                    <p>$${item.price}</p>
                </div>
            </div>
            <div class="menu-container-btn">
                <button class="menu-add-btn" data-id="${item.id}">+</button>
            </div>
        </div>
        `
    })
    return menuHtml
}

function getOrderSectionHtml() {
    return `
    <div class="order-section-header">
    <h2 class="order-header">Your order</h2>
    </div>
    <div class="order-item-container">
        <p class="order-item">Pizza <span class="order-remove-item">remove</span></p>
        <div class="order-price">
            <p>$14</p>
        </div>
    </div>
    <div class="order-total-container">
        <p class="order-total-price">Total price:</p>
        <div class="order-total-price">
            <p>$50</p>
        </div>
    </div>
    <button class="order-purchase-btn">Complete order</button>`
}

function renderOrderSection() {
    orderEl.innerHTML = getOrderSectionHtml()
}

function render() {
    mainEl.innerHTML = getMenuHtml()
}

render()