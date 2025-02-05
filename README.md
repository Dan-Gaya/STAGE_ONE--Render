# 📌 Number Classification API

## 📝 Overview
This project is a simple **Number Classification API** built with **Node.js, and Express.js**. It accepts an integer as input and returns various properties about the number, such as:

- Whether the number is **prime, perfect, odd, or even**.
- Whether the number is an **Armstrong number**.
- The **sum of its digits**.
- A fun fact retrieved dynamically from **NumbersAPI**.

## 🚀 Features
- Accepts **GET** requests with a `number` parameter.
- Input validation using **Simple Validator**.
- **Proper HTTP status codes** for valid and invalid inputs.
- Fetches fun facts dynamically from **NumbersAPI**.
- **Error handling** for incorrect inputs.

## 🛠 Tech Stack
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework
- **NumbersAPI** - External API for fun facts

## 📥 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Dan-Gaya/STAGE_ONE.git
cd STAGE_ONE
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Server
```sh
npm start
```
The API will be available locally at: `http://localhost:3000`

## 📌 API Endpoints

### **1️⃣ Classify a Number**
#### **Request:**
```http
GET /api/classify-number?number=371
```
#### **Success Response (200 OK)**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is the sum of three consecutive primes: 113 + 127 + 131."
}
```

### **2️⃣ Error Handling**
#### **Invalid Input (400 Bad Request)**
📥 **Request:**
```http
GET /api/classify-number?number=abc
```
📤 **Response:**
```json
{
    "number": "abc",
    "error": true
}
```

### **3️⃣ Internal Server Error (500 Internal Server Error)**
If something goes wrong on the server, the response will be:
```json
{
    "error": true,
    "message": "Internal Server Error"
}
```


## 🤝Deployment

the API was deployed on the Url : (https://stage-one-kappa-bay.vercel.app/api/classify-number)


## 🤝 Contributing
Feel free to fork this repo and submit **pull requests** with any improvements! 🚀

## 📜 License
This project is **open-source** and available under the **MIT License**.



💡 **Author:** [Abdulaziz Nura Kani ](https://github.com/Dan-Gaya)
