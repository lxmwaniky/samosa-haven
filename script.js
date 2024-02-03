document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Retrieve form values
        var name = document.getElementById('name').value;
        var location = document.getElementById('location').value;
        var samosas = parseInt(document.getElementById('samosas').value);
        var time = document.getElementById('time').value;
        var kachumbari = document.getElementById('kachumbari').checked;
        var choice = document.getElementById('choice').value;
    
        // Calculate total cost
        var costPerSamosa = 10;
        var totalCost = samosas * costPerSamosa;
    
        // Add additional cost if kachumbari is included
        if (kachumbari) {
            totalCost += 20; // Assuming kachumbari costs KES 20
        }
    
        // Display order summary
        var orderSummary = `Name: ${name}\nLocation: ${location}\nNumber of Samosas: ${samosas}\nTime: ${time}\nChoice: ${choice}\nTotal Cost: KES ${totalCost}`;
        alert(orderSummary);
    
        // You can now send this information to your backend for processing (e.g., via AJAX)
    });
    