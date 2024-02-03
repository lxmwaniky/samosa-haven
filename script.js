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
        orderElement.style.display = 'inline-block'; // Set display to inline-block
        orderElement.style.backgroundColor = 'green'; // Set background color to green
        orderElement.style.padding = '10px'; // Add padding to the element
        orderElement.style.margin = '0 auto'; // Center the element horizontally
        orderElement.style.textAlign = 'center'; // Center the text inside the element
        document.body.appendChild(orderElement);

        // Trigger transition by setting width to 100%
        setTimeout(function() {
                orderElement.style.width = '100%';
        }, 0);

        // Remove order summary after 5 seconds
        setTimeout(function() {
                orderElement.remove();
        }, 5000);


});
