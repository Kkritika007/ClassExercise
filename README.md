# ClassExercise
 
# Product Checkout System using Stripe API

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Credits](#credits)
- [License](#license)

## Introduction
This is a simple web application for a product checkout system. It uses the **Stripe API** to process payments and is built with `.hbs` (Handlebars) templates for rendering dynamic pages.

## Features
- User interface for selecting products.
- Stripe integration for secure payment processing.
- Success and failure messages for transactions.


## Technologies Used
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **Handlebars.js (HBS)**: Template engine for dynamic UI rendering.
- **Stripe API**: Payment processing.
- **CSS**: Styling for the UI.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>


### 2. Install Dependencies

Run the following command to install the required packages:

```bash
npm install express dotenv stripe express-handlebars

```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory and add the following keys:

```env
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Replace `your_stripe_public_key` and `your_stripe_secret_key` with your actual Stripe keys from the [Stripe Dashboard](https://dashboard.stripe.com).

### 4. Start the Server

Start the application using:

```bash
npm start 
```

The app will be accessible at [http://localhost:3001](http://localhost:3001).

---

## File Structure

```plaintext
project-root/
├── views/
│   ├── index.hbs           # Homepage with product listings
├── server.js                  # Main server file
├── .env                    # Environment variables (not shared)
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation (this file)
```

---

## Testing Payments

You can test the application using the following **Stripe Test Card Details**:

| **Card Number**        | **Expiry Date** | **CVV** | **Result**             |
|-------------------------|-----------------|---------|------------------------|
| 4242 4242 4242 4242     | 12/34           | 123     | Successful Payment     |
| 4000 0000 0000 0002     | 12/34           | 123     | Payment Declined       |
| 4000 0027 6000 3184     | 12/34           | 123     | Requires Authentication|

For additional test cases, refer to the [Stripe Test Documentation](https://stripe.com/docs/testing).

---

## Useful VS Code Extensions

Here are some recommended extensions to enhance your development experience:

1. **Prettier** - Code formatter for maintaining clean and consistent code.
2. **ESLint** - For identifying and fixing coding issues.
3. **dotenv** - Adds syntax highlighting for `.env` files.
4. **GitLens** - Provides detailed insights into version control.
5. **Live Server** - For real-time updates during development.

---

## Credits

- **Stripe**: For the payment gateway API.
- **Bootstrap**: For the responsive and modern design framework.
- **Node.js**: For building the server-side logic.

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute it as needed.

---
