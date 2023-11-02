import { HttpService } from "./http-service";

const API_PATH = 'http://localhost:3001/api';

class ApiService extends HttpService {
    constructor() {
        super(API_PATH);
    }

    getServices() {
        return this.get('services');
    }

    createOrder(data) {
        return this.post('orders', data);
    }
}

export default new ApiService();