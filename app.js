import menuArray from './data.js'

const mainEl = document.getElementById("menu")

function render() {
    const menuItems = menuArray.map(function(item) {
        const {name, ingredients, id, price, emoji} = item
        mainEl.innerHTML += `
        <div class="menu-section-container">
            <div class="menu-section">
                <div class="menu-item">
                    <p>${emoji}</p>
                </div>
                <div class="menu-item-details-container">
                    <h2 class="menu-item-header">${name}</h2>
                    <p class="menu-item-details">${ingredients.join(", ")}</p>
                    <p>$${price}</p>
                </div>
            </div>
            <div class="menu-container-btn">
                <button class="menu-add-btn" data-id-${id}>+</button>
            </div>
        </div>`
    })
    return menuItems
}

render()