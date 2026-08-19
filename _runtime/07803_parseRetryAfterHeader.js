// === Module 7803: parseRetryAfterHeader ===

// Module 7803 (parseRetryAfterHeader)
import _slicedToArray from "_slicedToArray" /* 32 */;

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
  let prop = headers;
  if (headers) {
    prop = headers["retry-after"];
  }
  if (str) {
    const parts = str.trim().split(",");
    const iter = parts[Symbol.iterator]();
    const str2 = str.trim();
    while (iter !== undefined) {
      let tmp12 = _slicedToArray(str8.split(":", 5), 5);
      let str9 = tmp12[1];
      let str10 = tmp12[4];
      let _parseInt = parseInt;
      let parsed = parseInt(tmp12[0], 10);
      let _isNaN = isNaN;
      let num6 = 60;
      if (!isNaN(parsed)) {
        num6 = parsed;
      }
      let result = 1000 * num6;
      if (str9) {
        let parts1 = str9.split(";");
        for (const item10065 of parts1) {
          let tmp23 = "metric_bucket" === item10065;
          if (tmp23) {
            tmp23 = str10;
          }
          if (tmp23) {
            let parts2 = str10.split(";");
            tmp23 = !parts2.includes("custom");
          }
          if (!tmp23) {
            obj[item10065] = timestamp + result;
          }
          continue;
        }
      } else {
        obj.all = timestamp + result;
      }
      continue;
    }
    str8 = iter.next();
  } else if (prop) {
    obj.all = timestamp + parseRetryAfterHeader(prop, timestamp);
  } else if (429 === headers.statusCode) {
    obj.all = timestamp + 60000;
  }
  return obj;
};