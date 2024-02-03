import { GoogleSpreadsheet } from 'google-spreadsheet';
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
                        const doc = new GoogleSpreadsheet('1sa8ThFOW70B63poDGkRRtVAwq7oQKEbH8xbpfswhUfE');
                        await doc.useServiceAccountAuth({
                                client_email: 'orders@samosa-haven.iam.gserviceaccount.com',
                                private_key: 'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCtfXxDXMIk2aGA\n6TWC6aUyNRPVYUt93lGDNn0oe5UyVaNdaQZ53+rUx39XawNB2R926fISQpmAB4lZ\nPgnIYddQXjq1YrFZa97egXuX9N+F+ee/+t7+0hCXhka5i5WHg3bXR6SMC573kDE2\nPa9XptpMgIvvgvAIJndFaMdwp1j5IGCPx5V37a5zOpDALsC+HFy42W00uMWGFVOM\n4WVusPj65FXc7QSkItZdHHOiWH49aburMXOk7ei/JQG9nF5IY3QMSXHFKEgMi8xj\n+TtwTn3qPeBHPuRFQ7aPbToMLhFucH0UG8tUtIqndIETvPvoiS/K5ROjik1oKuv1\nHBgugD77AgMBAAECggEAM5YPf/wx4kEwC6PMfIu6yi4MIrOWfevAMxLdrk7o8xmR\nxPG4sj6JlhFn5Pd19Xt5JqOzjghtmisjhPy0bffhzQznyg15jIxNrb20oV93o1/G\nsEgJTJ3rvxJ3Ly65HJ1TlfnAjL/b2eLvLyCyZY7AdGT4txQpCVNeva3FN9Ma2qBv\nc3pvc4osA0mFxiGHj0DLfCDMtJb5HcCSwc396pPnnGQMNThKRdK21JtPyP7ZvqsU\nEvp4iQeOz/96lsZjgo0ycTmeGFWLSb00mB1W6omp07Eca4cD7LUybcNLf4sIuVay\nv8fs0MFO/HCiZKPZ0YdgwmB/NxIsyqdLCyrWwaRkuQKBgQDeW9afjT/oXWCl+hRj\nGlhyjJJuy+taYR4s2I9ggG1FWs63d+89igXwWZY9jkW8I24ez0Z/ILxCxo11p2g3\neWtCTZJmt3Q6b0iK3iac4cnSsPPMLBBUTURlXky99TcxMxVBKqWbirJ4+nJFI1Kk\nHTlE7zZgBpDxThY5kOHmsAAHZwKBgQDHvOv+6nXeZVYCDp1zUYytYEhm0R03YA9A\nNh3r9oeref3isKdX21GA4ZbxTWhjaqVpTxG6jK3fnzRKLN2Cc+URJYmIVAe9l+V3\nf5IGRk9T9qIbnLTlIEzItmevAr1VHqIoypgV2Qj+4U/c1khkGTmUrtD7Nx45UUSj\nObRa3oezTQKBgC8wJjft7eYOCviuPa1aZfLJSjohJG0ltxWlT6gXGRli0AO3fBn/\nNItxN6UQkFQA4NnA+yD3fXxeTp7tS/yZ091aQPtza0MLYsW1p1Qbxozj6JknsL9z\nNlSc0oRtiazzPkt6FXMQ2Bc8bwulF2CkowayDUQLoK7U93p3+LjQGPF5AoGADNli\ndSuwGXZ7afZ2uoxseFrRTYv2TTGoyYCxvBRH9ggLBSJIIabCP4BDrZJFPOAHdBba\nFR4nsVMUkhEAzvuVqNy5VEPTm6bB5EYYpr6vK7+Z/hy+pl7FkcPqN5/9fhRSaj1e\nO0mTApKMCLDgR1A4HBCC8SZCk31e5QE5UP8vy6ECgYA1toKMGhLNRUtP7h7a+sxm\n3oQcBTRzLlGLxa6AOsIL+pGoK913fGHIRW+9RndXDjxA/bVEHibOzzcBuqjKA/mG\nmw+Tb2E5MJBmqPLHAXQjoLN0Ymg5sPfGsuY2AtjCInzYT9eq9zKV6rTZqPv15OKu\nsoZB5c3KsDDpcW2hVuYWMw==',
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

                        // Calculate total amount
                        var totalAmount = samosas * 10;

                        // Submit form
                        alert("Order placed successfully! Total amount: Ksh " + totalAmount);
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