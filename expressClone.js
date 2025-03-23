const http = require("http");

class ExpressClone {
  #PORT;
  Get = {};
  Post = {};
  Use = [];

  constructor(PORT) {
    this.#PORT = PORT || 8080;
  }

  listen(PORT) {
    PORT = PORT || this.#PORT;
    const server = http.createServer((req, res) => {
      let index = 0;

      const next = () => {
        if (index < this.Use.length) {
          const middleware = this.Use[index];
          index++;
          middleware(req, res, next);
        } else {
          const method = req.method;
          const url = req.url;

          switch (method) {
            case "POST":
              if (!this.Post.hasOwnProperty(url)) {
                this.#sendError(req, res);
                return;
              }
              this.Post[url](req, res);
              break;

            case "GET":
              if (!this.Get.hasOwnProperty(url)) {
                this.#sendError(req, res);
                return;
              }
              this.Get[url](req, res);
              break;

            default:
              this.#sendError(req, res);
          }
        }
      };

      next();
    });

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }

  #sendError(req, res) {
    res.statusCode = 404;
    res.end("Route Does Not Exist 404");
  }

  get(url, callBack) {
    this.Get[url] = callBack;
  }

  post(url, callBack) {
    this.Post[url] = callBack;
  }

  use(callBack) {
    this.Use.push(callBack);
  }
}

module.exports = ExpressClone;
