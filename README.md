# TheMistriHub 🛠️

A full-stack e-commerce web application for home services and tools, built with React, Firebase, and Redux Toolkit. Supports both customer-facing shopping flows and an admin panel for product and order management.

![React](https://img.shields.io/badge/React-18-blue?logo=react) ![Firebase](https://img.shields.io/badge/Firebase-10-orange?logo=firebase) ![Redux](https://img.shields.io/badge/Redux_Toolkit-2-purple?logo=redux) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-teal?logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-5-yellow?logo=vite)

---

## Features

**Customer Side**
- Browse products on the homepage with category filters
- View detailed product info pages
- Add/remove items from cart with real-time total calculation
- Place orders with name, address, pincode, and phone number
- Track order history
- User authentication via Firebase (signup/login)
- Dark/light mode toggle

**Admin Panel** (protected route)
- Dashboard with stats: total products, orders, and users
- Add new products to Firestore
- Update or delete existing products
- View and manage all placed orders

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6, Tailwind CSS v3 |
| State Management | Redux Toolkit, React Context API |
| Backend / DB | Firebase Firestore, Firebase Authentication |
| UI Components | Headless UI, React Icons, React Toastify |
| Build Tool | Vite 5 |

---

## Project Structure

```
src/
├── components/
│   ├── filter/         # Category filter bar
│   ├── footer/         # Site footer
│   ├── heroSection/    # Landing hero banner
│   ├── layout/         # Shared page wrapper
│   ├── loader/         # Loading spinner
│   ├── modal/          # Order confirmation modal
│   ├── navbar/         # Top navigation
│   ├── productCard/    # Product listing cards
│   ├── testimonial/    # Customer reviews section
│   └── track/          # Order tracking section
├── context/
│   └── data/           # Global context (MyContext, MyState)
├── firebase/
│   └── FirebaseConfig  # Firebase initialization
├── pages/
│   ├── admin/          # Dashboard, AddProduct, UpdateProduct
│   ├── allproducts/    # Full product listing page
│   ├── cart/           # Cart page with order placement
│   ├── home/           # Homepage
│   ├── order/          # Order history
│   ├── productInfo/    # Individual product detail
│   └── registration/   # Login and Signup
└── redux/
    ├── CartSlice.jsx   # Cart state slice
    └── Store.jsx       # Redux store setup
```

---

## Getting Started

### Prerequisites

- Node.js >= 16
- A Firebase project with Firestore and Authentication enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/raghav26102000/TheMistriHub.git
cd TheMistriHub

# Install dependencies
npm install
```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com) and create a project
2. Enable **Email/Password** authentication
3. Create a **Firestore** database
4. Copy your Firebase config and replace the values in `src/firebase/FirebaseConfig.jsx`

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Running Locally

```bash
npm run dev
```

App runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## Admin Access

Admin routes (`/dashboard`, `/addproduct`, `/updateproduct`) are protected and only accessible to a specific email. To configure your admin email, update the check in `src/App.jsx`:

```js
if (admin.user.email === "your-admin-email@example.com") {
  return children;
}
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Screenshots

> Add screenshots here after deployment

---

## Author

**Raghav Agarwal**
- GitHub: [@raghav26102000](https://github.com/raghav26102000)
- LinkedIn: [linkedin.com/in/raghav-agarwal26](https://linkedin.com/in/raghav-agarwal26)

---

## License

This project is open source and available under the [MIT License](LICENSE).
