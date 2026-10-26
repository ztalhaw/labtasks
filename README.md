# Fern & Found — Forest Green Store

A multi-page front-end ecommerce coursework demo built with semantic HTML, external CSS, plain JavaScript, jQuery and JSON product data.

## Pages
- `index.html` — home, featured products and FAQ accordion
- `products.html` — dynamically loaded products, search, category filter, sort and product details
- `cart.html` — cart table, quantity controls, remove action and totals
- `checkout.html` — validated checkout form and demo confirmation
- `contact.html` — store information, validated contact form and FAQ

## Project structure
```text
shopeasy/
├── index.html
├── products.html
├── cart.html
├── checkout.html
├── contact.html
├── products.json
├── css/style.css
├── js/data.js
├── js/store.js
├── js/ui.js
├── images/
└── README.md
```

## Features implemented
- 12 product objects with id, name, price, category, rating and stock status
- jQuery `$.getJSON()` loads `products.json`, with loading/error messages and a fallback array
- Search and category filtering with `filter()`
- Sorting with `sort()` on spread copies of the original array
- Product details with `find()`
- Add/remove/update cart and totals with `reduce()`
- Rest parameter helper (`announce(...parts)`)
- Event delegation for product and cart buttons
- HTML5 and JavaScript checkout validation with field-level error messages and `preventDefault()`
- jQuery events, effects (`slideToggle`, `fadeIn`, `fadeOut`) and DOM updates
- Responsive custom CSS with Flexbox, CSS Grid, and 900px/600px breakpoints
- `localStorage` persists the demo shopping cart

## How to run
1. Extract the ZIP folder.
2. Open the folder in Visual Studio Code.
3. Install/enable the **Live Server** extension if needed.
4. Right-click `index.html` and choose **Open with Live Server**.
5. Keep an internet connection available for the jQuery CDN.

Do not open by double-clicking `index.html`: browsers commonly block `$.getJSON('products.json')` from `file://` URLs.

## Notes
This is a front-end demonstration only. It does not connect to a payment gateway, database, or email service. Product images are represented by emoji so no external image assets are required. Replace these with properly licensed images and meaningful `alt` text if you add image files.

## Team members and roles
Fill in your actual team members and responsibilities before submission.

## Screenshots
Add screenshots of the running Home, Products, Cart, Checkout, and Contact pages before submission.
