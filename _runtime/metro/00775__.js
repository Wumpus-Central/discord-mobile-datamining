// === Module 775: ? ===

// Module 775
import _mod776 from "module_776" /* 776 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const isSentryRequestUrl = function isSentryRequestUrl(arr, getDsn) {
  let dsn;
  let tunnel;
  if (getDsn != null) {
    dsn = getDsn.getDsn();
  }
  if (getDsn != null) {
    tunnel = getDsn.getOptions().tunnel;
  }
  const obj = _mod776;
  const result = obj.parseStringToURLObject(arr);
  let flag = false;
  if (result) {
    flag = false;
    const tmp2Result = _mod776;
    if (!tmp2Result.isURLObjectRelative(result)) {
      let tmp5 = dsn;
      if (tmp5) {
        const host = result.host;
        let hasItem = host.includes(dsn.host);
        if (hasItem) {
          const obj3 = /(^|&|\?)sentry_key=/;
          hasItem = obj3.test(result.search);
        }
        tmp5 = hasItem;
      }
      flag = tmp5;
    }
  }
  if (!flag) {
    let flag2 = false;
    if (tunnel) {
      let substr = arr;
      if ("/" === arr[arr.length - 1]) {
        substr = arr.slice(0, -1);
      }
      let substr1 = tunnel;
      if ("/" === tunnel[tunnel.length - 1]) {
        substr1 = tunnel.slice(0, -1);
      }
      flag2 = substr === substr1;
    }
    flag = flag2;
  }
  return flag;
};