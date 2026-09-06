// _runtime/00744_disabledUntil.js
import safeDateNow from "00696_safeDateNow.js";
import _slicedToArray from "metro/00032__.js";

function parseRetryAfterHeader(arg0) {
  let safeDateNowResult = arg1;
  if (arg1 === undefined) {
    safeDateNowResult = safeDateNow.safeDateNow();
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
export const disabledUntil = function disabledUntil(all, arg1) {
  return all[arg1] || all.all || 0;
};
export const isRateLimited = function isRateLimited(all, result) {
  let safeDateNowResult = arg2;
  if (arg2 === undefined) {
    safeDateNowResult = safeDateNow.safeDateNow();
  }
  return (all[result] || all.all || 0) > safeDateNowResult;
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
    const prop1 = headers["retry-after"];
  }
  if (prop) {
    const parts = prop.trim().split(",");
    const iter = parts[Symbol.iterator]();
    const str = prop.trim();
    while (iter !== undefined) {
      let tmp14 = _slicedToArray(str7.split(":", 5), 5);
      let str8 = tmp14[1];
      let str9 = tmp14[4];
      let _parseInt = parseInt;
      let parsed = parseInt(tmp14[0], 10);
      let _isNaN = isNaN;
      let num6 = 60;
      if (!isNaN(parsed)) {
        num6 = parsed;
      }
      let result = 1000 * num6;
      if (str8) {
        let parts1 = str8.split(";");
        for (const item10070 of parts1) {
          let tmp25 = "metric_bucket" === item10070;
          if (tmp25) {
            tmp25 = str9;
          }
          if (tmp25) {
            let parts2 = str9.split(";");
            tmp25 = !parts2.includes("custom");
          }
          if (!tmp25) {
            obj[item10070] = safeDateNowResult + result;
          }
          continue;
        }
      } else {
        obj.all = safeDateNowResult + result;
      }
      continue;
    }
    str7 = iter.next();
  } else if (prop1) {
    obj.all = safeDateNowResult + parseRetryAfterHeader(prop1, safeDateNowResult);
  } else if (429 === headers.statusCode) {
    obj.all = safeDateNowResult + 60000;
  }
  return obj;
};
