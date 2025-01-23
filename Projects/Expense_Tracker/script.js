
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (description && category && !isNaN(amount) && amount !== '') {
        // Create a new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td><td>${category}</td><td>${amount}</td>`;
        expenseList.appendChild(newRow);

        // Clear the input fields
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert("Please fill in all the details correctly.");
    }
});
