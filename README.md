# Image Processing API

A Node.js and TypeScript project that provides an **Image Resizing API** using Express and Sharp.  
Users can resize images on-the-fly, with **cached thumbnails** for faster repeated access.

---

## 🛠️ Features

- Resize images by specifying **filename**, **width**, and **height**.
- Caches resized images to reduce processing time on repeated requests.
- Handles all common error scenarios:
  - Missing filename
  - Missing or invalid width/height
  - Non-existent image file
- Written in **TypeScript** for type safety and maintainability.
- Fully tested with **Jasmine** and **SuperTest**.
- ESLint and Prettier configured for clean, consistent code.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/image-processing-api.git
cd image-processing-api

### 2. Install dependencies
npm install

### 3. Build the project
npm run build

### 4. Start the server
npm start

You should see:

Server running on port 3000
Open this in your browser: http://localhost:3000/

---

### 🌐 API Usage
Endpoint
GET /api/images

Query Parameters

Parameter   	Type	    Description
filename	    string	  Name of the image in src/assets/full
width	        number	  Desired width in pixels
height	      number	  Desired height in pixels

Example Request
http://localhost:3000/api/images?filename=fjord&width=200&height=200

Returns the resized image.

If the resized image already exists, it is served from cache for faster response.

⚠️ Error Responses
Scenario	                        Status       Code	Message
Missing filename	                 400	       "Filename is required"
Missing width or height	           400	       "Width and height must be positive numbers"
Invalid width or height (≤ 0)	     400	       "Width and height must be positive numbers"
Non-existent image file	           404	       "Image not found"
Internal processing error	         500	       "Error processing image"

---

🧪 Testing
Run all tests:
npm test

Unit tests: test the image resizing function directly.
API tests: test the /api/images endpoint for both success and error scenarios.
Test images are cleaned up after tests to avoid cluttering the thumb folder.

 ---

🛠️ Scripts
Script	Description
npm start	Start the server
npm run build	Compile TypeScript to JavaScript
npm test	Run Jasmine tests
npm run lint	Run ESLint
npm run format	Run Prettier to format code

---

📦 Technologies
Node.js
Express
TypeScript
Sharp (image processing)
Jasmine + SuperTest (testing)
ESLint + Prettier (code quality)

---

🔗 Test API
http://localhost:3000/api/images?filename=fjord&width=200&height=200

