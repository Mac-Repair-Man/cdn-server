# CDN-server
Our very own content delivery network server runs locally with express.js and node.js. This server is designed to serve static files and images to the client. It also can cache files and images to reduce the load on the server and improve the performance of the application.

## Features:
- ⏩ The server can serve static files and images to the client.
- 📁 Cache files to reduce the load on the server and improve the performance of the application.
- 📦 Built-in file compression 
- ⌨️ Login and register users to access the server.

## Getting Started
To get started, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Mac-Repair-Man/cdn-server.git
    ```

2. Navigate to the project directory:
    ```bash
    cd cdn-server
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the project and copy the contents of the `.env.example` file into it. You can change the values of the environment variables to suit your needs:
    ```bash
    cp .env.example .env
    ```

5. Start the server:
    ```bash
    npm run dev
    ```

The server will start on port 3000 by default. You can change the port in the `.env` file.

## License
This project currently has no license. You are free to use, modify, and distribute this project as you see fit.
