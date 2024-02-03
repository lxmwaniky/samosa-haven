document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form values
        var name = document.getElementById('name').value;
        var location = document.getElementById('location').value;
        var samosas = parseInt(document.getElementById('samosas').value);
        var time = document.getElementById('time').value;
        var choice = document.getElementById('choice').value;

        // Calculate total cost
        var costPerSamosa = 10; // Cost per samosa in Ksh
        var totalCost = samosas * costPerSamosa;

        // Display order summary
        var orderSummary = `Hello ${name}. Your order of ${samosas} samosas will be delivered in ${location} at time ${time}. Total cost: KES ${totalCost}`;
        var orderElement = document.createElement('div');
        orderElement.textContent = orderSummary;
        orderElement.style.position = 'fixed'; // Set position to fixed
        orderElement.style.top = '0'; // Set top position to 0
        orderElement.style.left = '50%'; // Set left position to center horizontally
        orderElement.style.transform = 'translateX(-50%)'; // Center horizontally using transform
        orderElement.style.backgroundColor = 'green'; // Set background color to green
        document.body.appendChild(orderElement);
});
