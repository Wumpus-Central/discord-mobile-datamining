// === Module 7728: parseRetryAfterHeader ===

// Module 7728 (parseRetryAfterHeader)
import closure_0 from "_slicedToArray" /* 32 */;

function parseRetryAfterHeader(arg0) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  const parsed = parseInt("" + arg0, 10);
  if (isNaN(parsed)) {
    const _Date2 = Date;
    const _HermesInternal = HermesInternal;
    const parsed1 = Date.parse("" + arg0);
    const _isNaN = isNaN;
    let num2 = 60000;
    if (!isNaN(parsed1)) {
      num2 = parsed1 - timestamp;
    }
    return num2;
  } else {
    return 1000 * parsed;
  }
}

export const DEFAULT_RETRY_AFTER = 60000;
export const disabledUntil = function disabledUntil(all) {
  return all[arg1] || all.all || 0;
};
export const isRateLimited = function isRateLimited(all) {
  let timestamp = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return (all[arg1] || all.all || 0) > timestamp;
};
export { parseRetryAfterHeader };
export const updateRateLimits = function updateRateLimits(arg0, headers) {
  headers = headers.headers;
  let timestamp = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  const obj = {};
  const merged = Object.assign(arg0);
  let str = headers;
  if (headers) {
    str = headers["x-sentry-rate-limits"];
  }
  retry_after = headers;
  if (headers) {
    retry_after = headers["retry-after"];
  }
  if (str) {
    const parts = str.trim().split(",");
    const iter = parts[Symbol.iterator]();
    const str2 = str.trim();
    while (iter !== undefined) {
      let tmp10 = callback;
      let tmp11 = callback(str8.split(":", 5), 5);
      let str9 = tmp11[1];
      let str10 = tmp11[4];
      let _parseInt = parseInt;
      let parsed = parseInt(tmp11[0], 10);
      let tmp13 = parsed;
      let _isNaN = isNaN;
      let num6 = 60;
      if (!isNaN(parsed)) {
        num6 = parsed;
      }
      let result = 1000 * num6;
      let tmp15 = str9;
      if (str9) {
        let tmp17 = str9;
        let parts1 = str9.split(";");
        let tmp19 = parts1;
        let tmp20 = parts1;
        for (const item10065 of parts1) {
          let tmp22 = "metric_bucket" === item10065;
          let tmp21 = item10065;
          if (tmp22) {
            tmp22 = str10;
          }
          if (tmp22) {
            let tmp23 = str10;
            let parts2 = str10.split(";");
            tmp22 = !parts2.includes("custom");
          }
          if (!tmp22) {
            let tmp24 = item10065;
            let tmp25 = result;
            obj[tmp21] = timestamp + result;
          }
          continue;
        }
      } else {
        let tmp16 = result;
        obj.all = timestamp + result;
      }
      continue;
    }
    str8 = iter.next();
  } else if (retry_after) {
    obj.all = timestamp + parseRetryAfterHeader(retry_after, timestamp);
  } else if (429 === headers.statusCode) {
    obj.all = timestamp + 60000;
  }
  return obj;
};