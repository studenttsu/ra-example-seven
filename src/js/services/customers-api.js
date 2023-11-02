import { HttpService } from "./http-service";

class CustomersApi extends HttpService {
    constructor() {
        super('customers');
    }

    getAll() {
        return this.get();
    }
}

export default new CustomersApi();