const API_PATH = 'http://localhost:3001/api';

export class HttpService {
    constructor(baseApiPath = API_PATH) {
        this.baseApi = baseApiPath;
    }
  
    async get(path) {
        const response = await fetch(`${this.baseApi}/${path}`);
        return response.json();
    }
  
    async post(path, body) {
        const stringifiedData = JSON.stringify(body);
  
        const response = await fetch(`${this.baseApi}/${path}`, {
            method: 'POST',
            body: stringifiedData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
  
        return response.json();
    }
}