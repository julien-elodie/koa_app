module.exports = format => {
  format = format || '> [:time][:status]:method ":url" - :ms ms';

  return async function logger(ctx, next) {
    const start = Date.now();

    await next();

    const date = new Date();
    
    function timer(status) {
      return new Promise((resolve, reject) => {
        // TODO
        /**
         * 改写成SWITCH
         */
        if (status === 200) {
          const time = Date.now() - start;
          resolve(time);
        } else {
          resolve("");
        }
      });
    }

    await timer(ctx.response.status)
      .then(time => {
        return new Promise((resolve, reject) => {
          const str = format
            .replace(":time", date.toTimeString().slice(0, 8))
            .replace(":status", ctx.response.status)
            .replace(":method", ctx.method)
            .replace(":url", ctx.url)
            .replace(":ms", time);
          resolve(str);
        });
      })
      .then(str => {
        console.log(str);
      });
  };
};
