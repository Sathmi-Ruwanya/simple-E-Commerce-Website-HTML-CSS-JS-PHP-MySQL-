

# E-Commerce Website (HTML, CSS, JS, PHP, MySQL)

https://youtu.be/C3CgHQTvz_s

## Project Overview

This is a **full-stack E-Commerce website** built using **HTML, CSS, JavaScript for frontend** and **PHP + MySQL** for backend. The project runs locally using **XAMPP** and demonstrates key functionalities such as product listing, adding to cart, and database integration.

---

## Features

* Display products dynamically from MySQL database
* Add products to cart
* Manage database using phpMyAdmin
* Fully functional on localhost (XAMPP)

---

## Tools and Technologies

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** PHP
* **Database:** MySQL (phpMyAdmin)
* **Local Server:** XAMPP

---

## Project Setup

### 1. Install XAMPP

### 2. Create Project Folder

1. Navigate to `C:\xampp\htdocs\` (on Windows).
2. Create a folder for the project, e.g., `ecommerce-site`.

### 3. Access Project in Browser

Open your browser and type:

```
http://localhost/ecommerce-site/
```

---

## Database Setup

### 1. Open phpMyAdmin

Go to:

```
http://localhost/phpmyadmin/
```

### 2. Create Database

* Name the database, e.g., `ecommerce_db`.

### 3. Create Tables

* Users table
* Products table
* Cart table

### 4. Insert Sample Data

Add some sample products to the products table to test the website.

---

## Frontend Structure

Create the following folders/files inside the project:

```
/css        → CSS files
/js         → JavaScript files
/images     → Product images
index.html  → Home page
product.html → Product page
cart.html    → Cart page
```

---

## Backend Structure

* **db.php** → Database connection
* **get_products.php** → Fetch products from database
* **add_to_cart.php** → Add product to cart

---

## How to Run

1. Start **Apache** and **MySQL** in XAMPP.
2. Open browser at `http://localhost/ecommerce-site/`.
3. You should see the product listing.
4. Test adding products to the cart.

---
