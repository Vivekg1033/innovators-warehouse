function calculateAndUpdateStock() {

    const currentStockInput = document.getElementById('currentStock');
    const incomingQuantityInput = document.getElementById('incomingQuantity');
    const currentStock = parseInt(currentStockInput.value, 10) || 0;
    const incomingQuantity = parseInt(incomingQuantityInput.value, 10) || 0;
    const updatedStock = currentStock + incomingQuantity;
    const resultParagraph = document.getElementById('updatedStockResult');
    resultParagraph.textContent = `Updated Stock: ${updatedStock}`;
    currentStockInput.value = '';
    incomingQuantityInput.value = '';
}