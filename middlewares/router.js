const router = require("koa-router")();

const main = require("../routes/main");

var routes = new Array();
routes.push(main);

module.exports = () => {
  routes.forEach(route => {
    route.forEach(obj => {
      router[obj.method](obj.path, obj.handle);
    });
  });
  return router.routes();
};
