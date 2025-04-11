# Ecomstore (NextJS Full-Stack App)

Ecomstore is a full-featured E-Commerce platform built with modern web technologies like **Next.js**, **TypeScript**, **PostgreSQL**, and **Prisma**. It provides a seamless shopping experience for users and powerful management tools for administrators. With features like authentication, payment integration, and a responsive design, Ecomstore is a robust solution for online businesses.

---

## Overview

Ecomstore is designed to be a scalable and feature-rich e-commerce platform. It includes a user-friendly interface for customers and a comprehensive admin dashboard for managing products, orders, and users. The platform supports multiple payment methods, including Stripe, PayPal, and cash on delivery, ensuring flexibility for businesses and customers alike.

---

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe API, PayPal API
- **File Uploads**: Uploadthing
- **Charts**: Recharts
- **Styling**: Tailwind CSS with Dark/Light mode support

---

## Features

### User Features:

- **Authentication**: Secure login and registration using NextAuth.js.
- **User Dashboard**: Manage profile and view order history.
- **Interactive Checkout**: A smooth and intuitive checkout process.
- **Payment Options**: Stripe, PayPal, and cash on delivery.
- **Product Reviews**: Leave ratings and reviews for products.
- **Search & Filters**: Search products and filter by categories, price, and more.
- **Dark/Light Mode**: Toggle between dark and light themes.

### Admin Features:

- **Admin Dashboard**: View stats and charts using Recharts.
- **Product Management**: Add, edit, and delete products with multiple images.
- **Order Management**: Manage customer orders and update statuses.
- **User Management**: View and manage registered users.
- **Search & Pagination**: Search and paginate through products, orders, and users.

### Additional Features:

- **Featured Products**: Highlight featured products with banners.
- **Responsive Design**: Fully responsive for all devices.
- **Database Management**: Seed and manage the database with Prisma Studio.
- **Much More**: Built-in extensibility for future features.

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Stripe and PayPal accounts for payment integration

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecomstore.git
   cd ecomstore
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   > **Note**: If you encounter dependency compatibility issues, use:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Set up environment variables:

   - Rename `.example-env` to `.env` and add the following variables:
     ```env
     DATABASE_URL="postgresql://username:password@host:port/dbname"
     NEXTAUTH_SECRET="your-nextauth-secret"
     PAYPAL_CLIENT_ID="your-paypal-client-id"
     PAYPAL_APP_SECRET="your-paypal-app-secret"
     STRIPE_SECRET_KEY="your-stripe-secret-key"
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
     UPLOADTHING_TOKEN="your-uploadthing-token"
     UPLOADTHING_SECRET="your-uploadthing-secret"
     UPLOADTHING_APPID="your-uploadthing-app-id"
     RESEND_API_KEY="your-resend-api-key"
     ```

4. Seed the database with sample data:

   ```bash
   npx tsx ./db/seed
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Usage

### Development

- Start the development server:
  ```bash
  npm run dev
  ```

### Production

- Build the application:
  ```bash
  npm run build
  ```
- Start the production server:
  ```bash
  npm start
  ```

### Prisma Studio

- Open Prisma Studio to manage the database:
  ```bash
  npx prisma studio
  ```

---

## Demo

You can view a live demo of the application here:
[https://ecomstore.vercel.app](https://ecomstore.vercel.app)

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Stripe API Documentation](https://stripe.com/docs/api)
- [PayPal Developer Documentation](https://developer.paypal.com/docs/api/overview/)
- [Uploadthing Documentation](https://uploadthing.com/docs)

---

Feel free to customize this `README.md` further to suit your project needs! Let me know if you need additional sections or edits.
