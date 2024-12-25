# Ecommerce Store API

## Overview

This project implements an ecommerce store API that allows clients to add items to their cart and checkout. Every *n*th order receives a coupon code for a 10% discount, which can be applied during checkout.

## Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)

## Features

- Add items to the cart.
- Checkout with optional discount code validation.
- Admin functionality to generate discount codes.
- Admin functionality to retrieve purchase summary.

## API Endpoints

### User APIs

1. **Add To Cart**
   - **Endpoint**: `POST /api/cart/add-cart`
   - **Request Body**:
     ```json
     {
       "userId": 2,
       "item_id": 1
     }
     ```
   - **Response**:
     - `200 OK`: Item added to cart.
     - `400 Bad Request`: Invalid input.

2. **Checkout**
   - **Endpoint**: `POST /api/cart/checkout`
   - **Request Body**:
     ```json
     {
       "userId": 2
     }
     ```
   - **Response**:
     - `200 OK`: Order confirmation details.
     - `400 Bad Request`: Invalid input.

### Admin APIs

1. **Get All Orders Details**
   - **Endpoint**: `GET /api/admin/get-orders-details`
   - **Response**:
     - `200 OK`: List of all orders.
     - `500 Internal Server Error`: Error occurred.

2. **Add Order Discounted Number**
   - **Endpoint**: `POST /api/admin/add-discount-order-no`
   - **Request Body**:
     ```json
     {
       "dicountedOrderNo": 2
     }
     ```
   - **Response**:
     - `200 OK`: Discount order number added.
     - `400 Bad Request`: Invalid input.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
  	git clone https://github.com/username/repo-name.git

2. Navigate to the project directory:
	cd dl-task

3. Install dependencies:
	npm install

4. Start the server:
	npm start