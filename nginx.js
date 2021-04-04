class Nginx {
  constructor(listenablePort) {
    this.listenablePort = listenablePort;
    this.server = new window.Server(listenablePort);
  }

  get(ip, data) {
    const port = ip.value.split(":").pop();

    const response = new Promise((resolve, reject) => {
      if (port == this.listenablePort) {
        this.server.get(ip, data).then((res) => resolve(res)).catch((err) => reject(err));
      } else {
        alert('Данный порт не прослушивается!')
        reject(new Error('error'))
      }
    });

    return response;
  }
}

window.Nginx = Nginx;
