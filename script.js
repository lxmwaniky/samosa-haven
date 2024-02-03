const { GoogleSpreadsheet } = require('google-spreadsheet');
document.getElementById("orderForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        // Get form values
        var name = document.getElementById("name").value;
        var location = document.getElementById("location").value;
        var samosas = document.getElementById("samosas").value;
        var time = document.getElementById("time").value;
        var choice = document.getElementById("choice").value;
        var kachumbari = document.getElementById("kachumbari").checked;

        // Perform validation and submit form
        if (name && location && samosas && time && choice) {
                try {
                        // Load the credentials and spreadsheet
                        const doc = new GoogleSpreadsheet('YOUR_SPREADSHEET_ID');
                        await doc.useServiceAccountAuth({
                                client_email: 'YOUR_CLIENT_EMAIL',
                                private_key: 'YOUR_PRIVATE_KEY',
                        });
                        await doc.loadInfo();

                        // Select the sheet you want to write to
                        const sheet = doc.sheetsByIndex[0];

                        // Append the order to the sheet
                        await sheet.addRow({
                                Name: name,
                                Location: location,
                                Samosas: samosas,
                                Time: time,
                                Choice: choice,
                                Kachumbari: kachumbari ? 'Yes' : 'No',
                        });

                        // Submit form
                        alert("Order placed successfully!");
                        document.getElementById("orderForm").reset();
                } catch (error) {
                        console.error('Error:', error);
                        alert("An error occurred while submitting the order.");
                }
        } else {
                // Display error message
                alert("Please fill in all required fields.");
        }
});