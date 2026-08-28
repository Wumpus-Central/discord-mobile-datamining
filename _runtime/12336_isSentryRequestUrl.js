// === Module 12336: isSentryRequestUrl ===

// Module 12336 (isSentryRequestUrl)
arg5.isSentryRequestUrl = function isSentryRequestUrl(arr, getDsn) {
  let dsn = getDsn;
  if (getDsn) {
    dsn = getDsn.getDsn();
  }
  let tunnel = getDsn;
  if (getDsn) {
    tunnel = getDsn.getOptions().tunnel;
  }
  let tmp2 = dsn && arr.includes(dsn.host);
  if (!tmp2) {
    let flag = false;
    if (tunnel) {
      let substr = arr;
      if ("/" === arr[arr.length - 1]) {
        substr = arr.slice(0, -1);
      }
      let substr1 = tunnel;
      if ("/" === tunnel[tunnel.length - 1]) {
        substr1 = tunnel.slice(0, -1);
      }
      flag = substr === substr1;
    }
    tmp2 = flag;
  }
  return tmp2;
};