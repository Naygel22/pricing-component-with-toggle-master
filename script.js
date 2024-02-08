const checkbox = document.querySelector('#checkbox');
const price1 = document.querySelector('#price1');
const price2 = document.querySelector('#price2');
const price3 = document.querySelector('#price3');


const initialPrices = {
    price1: '19.99',
    price2: '24.99',
    price3: '39.99'
};

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        price1.textContent = '199.99';
        price2.textContent = '249.99';
        price3.textContent = '399.99';
    } else {
        price1.textContent = initialPrices.price1;
        price2.textContent = initialPrices.price2;
        price3.textContent = initialPrices.price3;
    }
});
