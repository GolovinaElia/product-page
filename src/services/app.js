import axios from 'axios';

const BASE_URL = 'http://localhost:3000';


class Api {
  async getAllProducts() {
    const response = await axios.get(
      `${BASE_URL}/products`,
    );
    return response;
  }

  async getProductByID(productId) {
    const response = await axios.get(
      `${BASE_URL}/${productId}`,
    );
    return response;
  }
}

const fetchMovies = new Api();
export default fetchMovies;