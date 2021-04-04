class Server {
  constructor(listenablePort) {
    this.listenablePort = listenablePort;
  }

  get (ip, data) {
    const port = ip.value.split(":").pop();

    const response = new Promise( (resolve, reject)=> {
      if (port == this.listenablePort) {
        resolve(this.calc(data))
      } else {
        reject(new Error('error'))
      }
    });

    return response;
  }
  calc (requestData) {
    let result;
    switch (requestData.operation) {
      case "add": result = Number(requestData.firstValue) + Number(requestData.secondValue); break;
      case "multiply": result = Number(requestData.firstValue) * Number(requestData.secondValue); break;
      case "divide": result = Number(requestData.firstValue) / Number(requestData.secondValue); break;
    }
     return result;
  }
}
window.Server = Server;
