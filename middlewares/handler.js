module.exports = () => {
  return async function handler(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.body = {
        status: ctx.response.status,
        middleware: "Handler",
        message: err.message
      };
      const message = {
        error: err,
        status: ctx.response.status,
        middleware: "Handler"
      };
      ctx.app.emit("error", message, ctx);
    }
  };
}