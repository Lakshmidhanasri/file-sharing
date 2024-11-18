 

## Project Description
This is a secure file-sharing system built with Node.js and MongoDB. The system supports two types of users:
1. **Ops User**: Can log in and upload specific file types.
2. **Client User**: Can sign up, verify their email, log in, view files uploaded by the Ops User, and download files via encrypted URLs.

The application includes authentication using JWT and features such as email verification, secure file uploads, and encrypted file downloads.

---

## Features
- User Authentication and Authorization (JWT)
- Email Verification
- File Upload and Listing
- Secure File Download via Encrypted URLs
- Role-based Access Control (Ops User and Client User)

---

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **File Handling**: Multer
- **Email Service**: Nodemailer
- **Encryption**: Crypto

---

## Prerequisites
- Node.js installed on your system
- MongoDB installed locally or available via a cloud service (e.g., MongoDB Atlas)
- A tool like Postman for testing the API endpoints

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lakshmidhanasri/file-sharing-system.git
   cd file-sharing-system

2.Install dependencies:
npm install

3.Start the server:
npm start

The server will run on http://localhost:3000.


API Endpoints
Authentication Routes
User Signup

Endpoint: /auth/signup
Method: POST
Request Body:
json
Copy code
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123",
  "role": "Client User"
}
Response: Confirmation of successful signup.

![Screenshot (13)](https://github.com/user-attachments/assets/f63888c1-89d9-4f91-ad7e-96aaf55c7517)


User Login

Endpoint: /auth/login
Method: POST
Request Body:
json
Copy code
{
  "email": "test@example.com",
  "password": "password123"
}
Response: JWT token for authenticated requests.
Email Verification

![image](https://github.com/user-attachments/assets/8afd0e86-f39a-4cba-a908-218e33d597ab)


Endpoint: /auth/verify-email/:verification_code
Method: GET
File Routes
Upload File

Endpoint: /files/upload
Method: POST
Headers:
json
Copy code
{
  "Authorization": "Bearer <JWT Token>"
}
Request Body: Multipart form-data with a file key.


![image](https://github.com/user-attachments/assets/ffcf8735-8d10-4bdd-b814-93ae434d030d)


List Files

Endpoint: /files/list-files
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer <JWT Token>"
}

![image](https://github.com/user-attachments/assets/59e36e5d-fab6-4afb-8e9c-2ba9cc57c78c)


Download File

Endpoint: /files/download-file/:file_id
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer <JWT Token>"
}

![image](https://github.com/user-attachments/assets/b94d2be2-ab5e-4d62-b2cd-91b63a511906)

