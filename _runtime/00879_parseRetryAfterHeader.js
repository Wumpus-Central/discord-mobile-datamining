// _runtime/00879_parseRetryAfterHeader.js
import safeDateNow from "00831_safeDateNow.js";
import closure_2 from "metro/00032__slicedToArray.js";

function parseRetryAfterHeader(arg0) {
  let safeDateNowResult = arg1;
  if (arg1 === undefined) {
    safeDateNowResult = safeDateNow.safeDateNow();
    const obj = safeDateNow;
  }
  const parsed = parseInt("" + arg0, 10);
  if (isNaN(parsed)) {
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    const parsed1 = Date.parse("" + arg0);
    const _isNaN = isNaN;
    let num2 = 60000;
    if (!isNaN(parsed1)) {
      num2 = parsed1 - safeDateNowResult;
    }
    return num2;
  } else {
    return 1000 * parsed;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const DEFAULT_RETRY_AFTER = 60000;
export const disabledUntil = function disabledUntil(all) {
  return all[arg1] || all.all || 0;
};
export const isRateLimited = function isRateLimited(all) {
  let safeDateNowResult = arg2;
  if (arg2 === undefined) {
    safeDateNowResult = safeDateNow.safeDateNow();
    const obj = safeDateNow;
  }
  return (all[arg1] || all.all || 0) > safeDateNowResult;
};
export { parseRetryAfterHeader };
export const updateRateLimits = function updateRateLimits(arg0, headers) {
  headers = headers.headers;
  let safeDateNowResult = arg2;
  if (arg2 === undefined) {
    let obj = safeDateNow;
    safeDateNowResult = obj.safeDateNow();
  }
  obj = {};
  const merged = Object.assign(arg0);
  let prop;
  if (headers != null) {
    prop = headers["x-sentry-rate-limits"];
  }
  if (headers != null) {
    retry_after = headers["retry-after"];
  }
  if (prop) {
    const parts = prop.trim().split(",");
    const iter = parts[Symbol.iterator]();
    const str = prop.trim();
    while (iter !== undefined) {
      let tmp12 = callback;
      let tmp13 = callback(str7.split(":", 5), 5);
      let str8 = tmp13[1];
      let str9 = tmp13[4];
      let _parseInt = parseInt;
      let parsed = parseInt(tmp13[0], 10);
      let tmp15 = parsed;
      let _isNaN = isNaN;
      let num6 = 60;
      if (!isNaN(parsed)) {
        num6 = parsed;
      }
      let result = 1000 * num6;
      let tmp17 = str8;
      if (str8) {
        let tmp19 = str8;
        let parts1 = str8.split(";");
        let tmp21 = parts1;
        let tmp22 = parts1;
        for (const item10070 of parts1) {
          let tmp24 = "metric_bucket" === item10070;
          let tmp23 = item10070;
          if (tmp24) {
            tmp24 = str9;
          }
          if (tmp24) {
            let tmp25 = str9;
            let parts2 = str9.split(";");
            tmp24 = !parts2.includes("custom");
          }
          if (!tmp24) {
            let tmp26 = item10070;
            let tmp27 = result;
            obj[tmp23] = safeDateNowResult + result;
          }
          continue;
        }
      } else {
        let tmp18 = result;
        obj.all = safeDateNowResult + result;
      }
      continue;
    }
    str7 = iter.next();
  } else if (retry_after) {
    obj.all = safeDateNowResult + parseRetryAfterHeader(retry_after, safeDateNowResult);
  } else if (429 === headers.statusCode) {
    obj.all = safeDateNowResult + 60000;
  }
  return obj;
};