// === Module 764: ? ===

// Module 764
import _mod765 from "module_765" /* 765 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const isSentryRequestUrl = function isSentryRequestUrl(arr, getDsn) {
  if (getDsn != null) {
    const dsn = getDsn.getDsn();
  }
  if (getDsn != null) {
    const tunnel = getDsn.getOptions().tunnel;
  }
  const result = _mod765.parseStringToURLObject(arr);
  let flag = false;
  if (result) {
    flag = false;
    if (!tmp2Result.isURLObjectRelative(result)) {
      let tmp5 = dsn;
      if (tmp5) {
        const host = result.host;
        let hasItem = host.includes(dsn.host);
        if (hasItem) {
          hasItem = /(^|&|\?)sentry_key=/.test(result.search);
          const obj3 = /(^|&|\?)sentry_key=/;
        }
        tmp5 = hasItem;
      }
      flag = tmp5;
    }
    tmp2Result = _mod765;
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