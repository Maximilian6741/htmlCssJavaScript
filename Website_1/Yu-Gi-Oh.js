// --- DATABASE WITH IMAGE MAPPING ---
// Map card names to the Slot IDs in HTML
const masterCards = [
    { name: "Blue-Eyes White Dragon", desc: "Legendary engine of destruction.", slot: "slot-1" },
    { name: "Dark Magician", desc: "Ultimate wizard in attack and defense.", slot: "slot-2" },
    { name: "Exodia", desc: "Collect 5 pieces to win the duel.", slot: "slot-3" },
    { name: "Red-Eyes Black Dragon", desc: "Ferocious dragon with a deadly attack.", slot: "slot-4" },
    { name: "Monster Reborn", desc: "Revive a monster from either graveyard.", slot: "slot-5" },
    { name: "Pot of Greed", desc: "Draw 2 cards from your deck.", slot: "slot-6" }
];

const shopItems = [
    { id: 1, name: "Blue-Eyes LOB 1st Ed", price: 9999.00 },
    { id: 2, name: "Age of Overlord Box", price: 85.00 },
    { id: 3, name: "Deck Box - Kaiba", price: 20.00 }
];

let cart = [];
let userDeck = JSON.parse(localStorage.getItem('ygo-deck')) || [];

// --- PREVIEW LOGIC ---
function previewCard(name) {
    const card = masterCards.find(c => c.name === name);
    const mainImg = document.getElementById('main-preview');
    const slotImg = document.getElementById(card.slot);
    
    document.getElementById('preview-name').innerText = card.name;
    document.getElementById('preview-desc').innerText = card.desc;
    
    // Set the main preview to whatever is in that slot
    mainImg.src = slotImg.src;
}

// --- DECK BUILDER ---
function searchDatabase() {
    const term = document.getElementById('builderSearch').value.toLowerCase();
    const results = document.getElementById('database-results');
    if(!term) { results.innerHTML = ""; return; }
    
    const filtered = masterCards.filter(c => c.name.toLowerCase().includes(term));
    results.innerHTML = filtered.map(c => `
        <div class="db-card" onmouseover="previewCard('${c.name}')" onclick="addToDeck('${c.name}')">
            ${c.name}
        </div>
    `).join('');
}

function addToDeck(name) {
    if(userDeck.length >= 60) return;
    userDeck.push(name);
    renderDeck();
}

function renderDeck() {
    localStorage.setItem('ygo-deck', JSON.stringify(userDeck));
    document.getElementById('deck-count').innerText = userDeck.length;
    const display = document.getElementById('deck-list-display');
    display.innerHTML = userDeck.map((c, i) => `<div style="font-size:10px; margin-bottom:5px">▶ ${c} <span onclick="removeCard(${i})" style="color:red; cursor:pointer">[X]</span></div>`).join('');
}

function removeCard(i) { userDeck.splice(i, 1); renderDeck(); }
function clearDeck() { userDeck = []; renderDeck(); }

// --- TOOLS LOGIC ---
function updateLP(p, act) {
    const d = document.getElementById(`lp-${p}`);
    const v = parseInt(document.getElementById(`calc-${p}`).value) || 0;
    let curr = parseInt(d.innerText);
    d.innerText = (act === 'add') ? curr + v : curr - v;
    document.getElementById(`calc-${p}`).value = "";
}

let coinRotation = 0;
function flipCoin() {
    const coin = document.getElementById('coin');
    const isHeads = Math.random() < 0.5;
    coinRotation += 1800; // Spin 5 times
    const finalRot = isHeads ? coinRotation : coinRotation + 180;
    coin.style.transform = `rotateY(${finalRot}deg)`;
}

function rollDice() {
    const d = document.getElementById('dice');
    const rots = { 1:'rotateX(0deg)', 6:'rotateX(180deg)', 3:'rotateY(-90deg)', 4:'rotateY(90deg)', 2:'rotateX(-90deg)', 5:'rotateX(90deg)' };
    d.style.transform = rots[Math.floor(Math.random()*6)+1];
}

// --- SHOP LOGIC ---
function renderShop(list = shopItems) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = list.map(p => `
        <div class="product-card">
            <h4>${p.name}</h4>
            <p>$${p.price.toFixed(2)}</p>
            <button onclick="addToCart(${p.id})">ADD TO CART</button>
        </div>
    `).join('');
}

function addToCart(id) {
    cart.push(shopItems.find(p => p.id === id));
    updateCart();
}

function updateCart() {
    const list = document.getElementById('cart-items');
    list.innerHTML = cart.map(i => `<div style="font-size:10px; display:flex; justify-content:space-between"><span>${i.name}</span><span>$${i.price}</span></div>`).join('');
    document.getElementById('total-amount').innerText = cart.reduce((s, i) => s + i.price, 0).toFixed(2);
}

function filterShop() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    renderShop(shopItems.filter(p => p.name.toLowerCase().includes(term)));
}

function checkout() { alert("Order Confirmed!"); cart = []; updateCart(); }

renderShop();
renderDeck();