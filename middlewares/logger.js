module.exports = format => {
  format = format || '[:time][:status]:method ":url" - :ms ms';

  return async function logger(ctx, next) {
    const start = Date.now();

    await next();
    
    const date = new Date();

    var timer = new Array();
    timer['200'] = Date.now() - start;
    timer['404'] = '';
    timer['500'] = '';
    
    const str = format
      .replace(":time", date.toTimeString().slice(0, 8))
      .replace(":status", ctx.response.status)
      .replace(":method", ctx.method)
      .replace(":url", ctx.url)
      .replace(":ms", timer[ctx.response.status]);

    console.log(str);
  };
}