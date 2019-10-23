const ServerUrl = "https://data.police.uk/api";

function handleError(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}

class API {
  static init() {
    this.headers = new Headers();
    this.headers.append("Content-type", "application/json");

    this.init = {
      cache: "default",
      headers: this.headers
    };
  }

  static setToken(token) {
    return this.init.headers.set("authorization", `Bearer ${token}`);
  }

  static get(endPoint, params = {}) {
    // const init = { ...this.init, method: "GET" };
    console.log(ServerUrl+endPoint)
    return fetch(`${ServerUrl}${endPoint}`)
      .then(response => handleError(response))
      .then(response => response.json());
  }

  static post(endPoint, body = {}) {
    const init = { ...this.init, method: "POST", body: JSON.stringify(body) };

    return fetch(`${ServerUrl}${endPoint}`, init)
      .then(response => handleError(response))
      .then(response => response.json());
  }

  static put(endPoint, body = {}) {
    const init = { ...this.init, method: "PUT", body: JSON.stringify(body) };

    return fetch(`${ServerUrl}${endPoint}`, init)
      .then(response => handleError(response))
      .then(response => response.json());
  }

  static delete(endPoint, params = {}) {
    const init = { ...this.init, method: "DELETE" };

    return fetch(`${ServerUrl}${endPoint}`, init)
      .then(response => handleError(response))
      .then(response => response.json());
  }
}

API.init();

export default API;
