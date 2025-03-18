import axios from "axios";

class HTTPWrapper {
  constructor() {
    this.client = null;
  }

  /**
   * Initialize the HTTP client with a base URL and optional headers.
   * @param {string} baseURL - The base URL for API requests.
   * @param {object} headers - Default headers for all requests.
   */
  init(baseURL, headers = {}) {
    this.client = axios.create({
      baseURL,
      headers,
    });
  }

  /**
   * Make an HTTP request.
   * @param {string} endpoint - API endpoint (e.g., "/users").
   * @param {object} data - Request body data (for POST/PUT).
   * @param {string} method - HTTP method (GET, POST, PUT, DELETE).
   * @param {object} headers - Additional headers.
   * @returns {Promise<object>} - Response data.
   */
  async request(endpoint, data = {}, method = "POST", headers = {}) {
    if (!this.client) {
      throw new Error("HTTPWrapper not initialized. Call init() first.");
    }

    try {
      const response = await this.client.request({
        url: endpoint,
        method,
        data,
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(`[HTTP ERROR] ${method} ${endpoint}:`, error.message);
      throw error.response?.data || error.message;
    }
  }
}

// Export an instance to maintain a single client configuration
const httpWrapper = new HTTPWrapper();
export default httpWrapper;
