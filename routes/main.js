const main = async (ctx, next) => {
  // ctx.response.body = "Hello World";
  // ctx.throw(404);
  const content = {
    text: "hello ejs"
  };
  await ctx.render("main", content);
};

module.exports = [
  {
    method: "get",
    path: "/",
    handle: main
  }
];
