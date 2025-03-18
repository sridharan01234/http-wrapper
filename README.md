# @sridharant/http-wrapper

A lightweight and simple HTTP client wrapper built on top of Axios for making HTTP requests in JavaScript/Node.js applications.

## Features

- Simple and intuitive API
- Built on top of Axios
- Promise-based
- Configurable base URL and headers
- Error handling
- Single instance pattern

## Installation

Install the package using npm:

```bash
npm install @sridharant/http-wrapper
```

## Usage

```javascript
import httpWrapper from '@sridharant/http-wrapper';

// Initialize with base URL and optional default headers
httpWrapper.init('https://api.example.com', {
  'Content-Type': 'application/json',
  // Add any other default headers
});
```
