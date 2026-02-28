import apiClient from "../apiClient";

class DefaultService {
    static async get() {
        return await apiClient("/default", { method: "GET" });
    }
    static async create(data) {
        return await apiClient("/default", {
          method: "POST",
          body: JSON.stringify(data),
        });
      }
}

export default DefaultService;