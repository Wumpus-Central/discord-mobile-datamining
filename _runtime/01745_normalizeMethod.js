// _runtime/01745_normalizeMethod.js
import _slicedToArray from "metro/00032__.js";

const re1 = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
const re2 = /^[^\0\r\n]*$/;
const re3 = /^[\t\n\r ]+|[\t\n\r ]+$/g;
const re4 = /^([A-Za-z][A-Za-z0-9+\-.]*):/;
const re5 = /;\s*charset\s*=\s*("([^"]*)"|([^;\s]*))/i;
let closure_6 = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
let closure_7 = ["CONNECT", "TRACE", "TRACK"];
let closure_8 = ["http", "https"];
const set = new Set([
  "accept-charset",
  "accept-encoding",
  "access-control-request-headers",
  "access-control-request-method",
  "connection",
  "content-length",
  "cookie",
  "cookie2",
  "date",
  "dnt",
  "expect",
  "host",
  "keep-alive",
  "origin",
  "referer",
  "set-cookie",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "via",
]);
let closure_10 = ["proxy-", "sec-"];
const set1 = new Set(["x-http-method", "x-http-method-override", "x-method-override"]);
const set2 = new Set(["set-cookie", "set-cookie2"]);

export function normalizeMethod(StringResult) {
  let tmp = StringResult;
  const formatted = StringResult.toUpperCase();
  if (closure_6.includes(formatted)) {
    tmp = formatted;
  }
  return tmp;
}
export function isToken(StringResult) {
  return re1.test(StringResult);
}
export function isForbiddenMethod(StringResult) {
  return closure_7.includes(StringResult.toUpperCase());
}
export function isSupportedRequestUrl(url) {
  const match = re4.exec(url);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  let hasItem = undefined !== tmp2;
  if (hasItem) {
    hasItem = closure_8.includes(tmp2.toLowerCase());
  }
  return hasItem;
}
export function isHeaderName(StringResult) {
  return re1.test(StringResult);
}
export function isHeaderValue(normalizeHeaderValueResult) {
  return re2.test(normalizeHeaderValueResult);
}
export function normalizeHeaderValue(str) {
  return str.replace(re3, "");
}
export function isForbiddenRequestHeader(StringResult, normalizeHeaderValueResult) {
  const formatted = StringResult.toLowerCase();
  const hasItem = set.has(formatted);
  let tmp3 = !hasItem;
  if (!hasItem) {
    tmp3 = !closure_10.some((item) => formatted.startsWith(item));
  }
  let tmp5 = !tmp3;
  if (tmp3) {
    let hasItem1 = set1.has(formatted);
    if (hasItem1) {
      const parts = normalizeHeaderValueResult.split(",");
      hasItem1 = parts.some((item) => closure_1_7.includes(item.trim().toUpperCase()));
    }
    tmp5 = hasItem1;
  }
  return tmp5;
}
export function combineHeader(requestHeaders, StringResult, normalizeHeaderValueResult) {
  closure_0 = StringResult.toLowerCase();
  const found = requestHeaders.find((item) => {
    [str] = item;
    return str.toLowerCase() === closure_0;
  });
  if (undefined === found) {
    items = [StringResult, normalizeHeaderValueResult];
    requestHeaders.push(items);
  } else {
    const _HermesInternal = HermesInternal;
    found[1] = "" + found[1] + ", " + normalizeHeaderValueResult;
  }
}
export function hasHeader(items, str) {
  closure_0 = str.toLowerCase();
  return items.some((item) => {
    [str] = item;
    return str.toLowerCase() === closure_0;
  });
}
export function getHeader(responseHeaders, str) {
  const formatted = str.toLowerCase();
  if (set2.has(formatted)) {
    return null;
  } else {
    const found = responseHeaders.filter((item) => {
      [str] = item;
      return str.toLowerCase() === formatted;
    });
    const mapped = found.map((item) => {
      [, tmp] = item;
      return tmp;
    });
    let joined = null;
    if (mapped.length > 0) {
      joined = mapped.join(", ");
    }
    return joined;
  }
}
export function sortAndCombineHeaders(responseHeaders) {
  const map = new Map();
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [str, tmp5] = tmp4;
    let formatted = str.toLowerCase();
    let tmp7 = formatted;
    if (!set2.has(formatted)) {
      value = map.get(tmp7);
      let arr = value;
      if (undefined === value) {
        items = [tmp5];
        let result = map.set(tmp7, items);
      } else {
        let arr2 = arr.push(tmp5);
      }
    }
    continue;
  }
  tmp = responseHeaders[Symbol.iterator]();
  const sorted = Array.from(map.keys()).sort((str, str2) => {
    const formatted = str.toUpperCase();
    const formatted1 = str2.toUpperCase();
    let num = 0;
    if (formatted !== formatted1) {
      let num2 = 1;
      if (formatted < formatted1) {
        num2 = -1;
      }
      num = num2;
    }
    return num;
  });
  const mapped = sorted.map((item) => {
    value = map.get(item);
    return "" + item + ": " + value.join(", ") + "\r\n";
  });
  return mapped.join("");
}
export function extractCharset(mimeTypeOverride) {
  if (null !== mimeTypeOverride) {
    const match = re5.exec(mimeTypeOverride);
    if (null !== match) {
      let str = match[2];
      if (str == null) {
        str = match[3];
      }
      if (str == null) {
        str = "";
      }
      let tmp3;
      if ("" !== str) {
        tmp3 = str;
      }
      return tmp3;
    }
  }
}
