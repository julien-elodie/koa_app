module.exports = () => {
  return async function error(err) {
    format = '> [:time][:status][:middleware]:":message"';
    const date = new Date();
    const time = date.toTimeString().slice(0,8);
    const message = format
      .replace(":time", time)
      .replace(":status", err.status)
      .replace(":middleware", err.middleware)
      .replace(":message", err.error.message);
    console.log(message);
    console.log(err.error);
  };
}