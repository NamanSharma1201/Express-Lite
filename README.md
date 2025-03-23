# ExpressClone

ExpressClone is a lightweight, minimal HTTP server built in Node.js to mimic some features of Express.js. It supports basic routing, middleware, and error handling.

## Features
- Route handling for `GET` and `POST` methods.
- Middleware support using `use()` to intercept requests before they reach route handlers.
- 404 error handling for undefined routes.
- Easy to extend with additional HTTP methods and features.

# Drop in Replacement 
![image](https://github.com/user-attachments/assets/4611310c-7a75-4522-9339-fe4a704cdea0)

## Installation

To use ExpressClone in your project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/expressclone.git
   ```
2. Install dependencies (if any):
   ```sh
   npm install
   ```

## Usage

To use ExpressClone in your application, import the class and create an instance of it. Below is an example of setting up a simple server with GET and POST routes:

### Example

```javascript
const ExpressClone = require("./path/to/expressclone");

const app = new ExpressClone(3000);

// Middleware Example
app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  next(); // Continue to the next middleware or route handler
});

// GET route
app.get("/hello", (req, res) => {
  res.end("Hello, World!");
});

// POST route
app.post("/submit", (req, res) => {
  res.end("Data submitted!");
});

// Start the server
app.listen();
```

### Explanation
- `app.use()` adds a middleware function that logs incoming requests.
- `app.get()` sets up a route for `GET /hello`.
- `app.post()` sets up a route for `POST /submit`.
- `app.listen()` starts the server.

## Starting the Server

Once you've set up your routes and middleware, start the server using the `listen()` method:

```javascript
app.listen(3000); // Starts the server on port 3000
```

By default, the server listens on port `8080`, but you can specify a different port as an argument.

## API

### `app.get(url, callback)`
Registers a route for `GET` requests.
- **url**: The URL path for the route.
- **callback**: The function handling the request and response.

### `app.post(url, callback)`
Registers a route for `POST` requests.
- **url**: The URL path for the route.
- **callback**: The function handling the request and response.

### `app.use(callback)`
Registers a middleware function to run before handling routes. Middleware functions can perform tasks like logging, authentication, etc.
- **callback**: A function that takes `(req, res, next)` parameters.
  - `req`: The request object.
  - `res`: The response object.
  - `next`: A function to pass control to the next middleware or route handler.

### `app.listen(port)`
Starts the server to listen on the specified port (default is `8080`).
- **port**: The port to listen on.

## Error Handling

- If a route is not defined, the server responds with a `404` error.
- If the HTTP method is not supported for a route, the server also responds with a `404` error.

## Limitations and Future Improvements

ExpressClone is a simple prototype of an Express-like server. It is suitable for small-scale applications but lacks advanced features of a full-fledged framework like Express.js.

### Possible future improvements:
- Support for more HTTP methods (`PUT`, `DELETE`, etc.).
- Request body parsing (e.g., JSON, URL-encoded data).
- Route parameter support (e.g., `/users/:id`).
- Better error handling and status codes.
- Middleware chaining and more sophisticated flow control.

## License

This project is licensed under the MIT License.

