function updateProductNumber(product, price, isIncrement) {
    const productInput = document.getElementById(product + '-input');
    let productInputNumber = parseInt(productInput.value);
    if (isIncrement) {
        productInputNumber = productInputNumber + 1
    } else if (productInputNumber > 0) {
        productInputNumber = productInputNumber - 1
    }
    productInput.value = productInputNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInputNumber * price;

    calculateTotal();

}



//mobile product

document.getElementById('mobile-plus').addEventListener('click', function() {
    updateProductNumber('mobile', 1219, true);
})
document.getElementById('mobile-minus').addEventListener('click', function() {
    updateProductNumber('mobile', 1219, false);
})

//case Product

document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 59, true)

})

document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false);

})

function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productInputNumber = parseInt(productInput.value);
    return productInputNumber;
}

function calculateTotal() {
    const mobileTotal = getInputValue('mobile') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = mobileTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}