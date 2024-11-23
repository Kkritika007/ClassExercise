require('dotenv').config();  // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');  // Added CORS for cross-origin requests

// Initialize the app and load environment variables
const app = express();
const PORT = 3001;

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());  // Allow cross-origin requests

// Route to render the homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle payment creation
app.post('/create-payment', async (req, res) => {
  const { amount, token } = req.body;
  console.log("Received payment request:", req.body);  // Log the incoming data to ensure it's correct

  try {
    // Create a payment intent with the provided amount and token
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,  // Amount in the smallest currency unit (e.g., cents)
      currency: 'usd', // Currency to use (usd in this case)
      payment_method_data: {
        type: 'card',
        card: {
          token: token.id,  // Token received from Stripe.js
        },
      },
      confirm: true,  // Automatically confirm the payment
      return_url: 'https://yourwebsite.com/payment-success', // Provide the return URL
    });

    console.log("Payment Intent created:", paymentIntent);  // Log the response to ensure it was successful
    res.json({ success: true, message: 'Payment successful!', paymentIntent });
  } catch (error) {
    console.error("Error processing payment:", error.message);  // Log detailed error message
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
