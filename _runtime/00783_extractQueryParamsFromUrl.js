// _runtime/00783_extractQueryParamsFromUrl.js
function winterCGHeadersToDict(arr) {
  const obj = {};
  try {
    const item = arr.forEach((item, index) => {
      if (typeof item === "string") {
        obj[index] = item;
      }
    });
  } catch (err) {}
  return obj;
}
function headersToDict(arg0) {
  const obj = Object.create(null);
  try {
    const tmp2 = arg0;
    const _Object = Object;
    const entries = Object.entries(arg0);
    const item = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      if (typeof tmp2 === "string") {
        obj[tmp] = tmp2;
      }
    });
  } catch (err) {}
  return obj;
}
function addSpanAttribute(arg0, formatted, str, arr, flag) {
  let combined;
  let someResult;
  const replaced = formatted.replace(/-/g, "_");
  if (str) {
    const _HermesInternal2 = HermesInternal;
    combined = "http.request.header." + replaced + "." + str.replace(/-/g, "_");
  } else {
    const _HermesInternal = HermesInternal;
    combined = "http.request.header." + replaced;
  }
  let closure_0 = str || formatted;
  if (flag) {
    someResult = closure_2.some((item) => closure_0.includes(item));
  } else {
    const items = [];
    HermesBuiltin.arraySpread(items, closure_2, HermesBuiltin.arraySpread(items, closure_3, 0));
    someResult = items.some((item) => closure_0.includes(item));
  }
  let str4 = "[Filtered]";
  if (!someResult) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      const mapped = arr.map((item) => {
        let StringResult = item;
        if (null != item) {
          const _String = String;
          StringResult = String(item);
        }
        return StringResult;
      });
      str4 = mapped.join(";");
    } else if (typeof arr === "string") {
      str4 = arr;
    }
  }
  if (undefined !== str4) {
    arg0[combined] = str4;
  }
}
function extractQueryParamsFromUrl(arg0) {
  if (arg0) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(arg0, "http://s.io");
      const search = uRL.search;
      const substr = search.slice(1);
      let tmp6;
      if (substr.length) {
        tmp6 = substr;
      }
      return tmp6;
    } catch (err) {}
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = [
  "auth",
  "token",
  "secret",
  "session",
  "password",
  "passwd",
  "pwd",
  "key",
  "jwt",
  "bearer",
  "sso",
  "saml",
  "csrf",
  "xsrf",
  "credentials",
  "set-cookie",
  "cookie",
];
let closure_3 = ["x-forwarded-", "-user"];

export { extractQueryParamsFromUrl };
export { headersToDict };
export const httpHeadersToSpanAttributes = function httpHeadersToSpanAttributes(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = {};
  try {
    const _Object = Object;
    const entries = Object.entries(arg0);
    const item = entries.forEach((item) => {
      let arr;
      let str;
      [str, arr] = item;
      if (null != arr) {
        const formatted = str.toLowerCase();
        if ("cookie" === formatted) {
          if (typeof arr === "string") {
            if ("" !== arr) {
              let parts;
              const index = arr.indexOf(";");
              let str6 = arr;
              if ("set-cookie" === formatted) {
                str6 = arr;
                if (-1 !== index) {
                  str6 = arr.substring(0, index);
                }
              }
              if ("set-cookie" === formatted) {
                const items = [str6];
                parts = items;
              } else {
                parts = str6.split("; ");
              }
              const iter = parts[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let substr;
                let str9 = nextResult;
                let index1 = nextResult.indexOf("=");
                let tmp14 = index1;
                if (-1 !== index1) {
                  substr = str9.substring(0, tmp14);
                } else {
                  substr = nextResult;
                }
                let str10 = substr;
                let str11 = "";
                if (-1 !== tmp14) {
                  str11 = str9.substring(tmp14 + 1);
                }
                let tmp27 = addSpanAttribute(obj, formatted, str10.toLowerCase(), str11, flag);
                continue;
              }
            }
          }
        }
        addSpanAttribute(obj, formatted, "", arr, flag);
      }
    });
  } catch (err) {}
  return obj;
};
export const httpRequestToRequestData = function httpRequestToRequestData(headers) {
  const tmp = headers.headers || {};
  let prop;
  if (typeof tmp["x-forwarded-host"] === "string") {
    prop = tmp["x-forwarded-host"];
  }
  if (!prop) {
    let host;
    if (typeof tmp.host === "string") {
      host = tmp.host;
    }
    prop = host;
  }
  let prop1;
  if (typeof tmp["x-forwarded-proto"] === "string") {
    prop1 = tmp["x-forwarded-proto"];
  }
  if (!prop1) {
    prop1 = headers.protocol;
  }
  if (!prop1) {
    const socket = headers.socket;
    let encrypted;
    if (socket != null) {
      encrypted = socket.encrypted;
    }
    let str = "http";
    if (encrypted) {
      str = "https";
    }
    prop1 = str;
  }
  let startsWithResult;
  if ((headers.url || "") != null) {
    startsWithResult = obj.startsWith("http");
  }
  let combined = obj;
  if (!startsWithResult) {
    if (headers.url || "") {
      if (prop) {
        const _HermesInternal = HermesInternal;
        combined = "" + prop1 + "://" + prop + obj;
      }
    }
  }
  const tmp13 = headers.body || undefined;
  const request = {
    url: combined,
    method: headers.method,
    query_string: extractQueryParamsFromUrl(obj),
    headers: headersToDict(tmp),
    cookies: headers.cookies,
    data: tmp13,
  };
  return request;
};
export { winterCGHeadersToDict };
export const winterCGRequestToRequestData = function winterCGRequestToRequestData(method) {
  let tmp;
  const request = {
    method: method.method,
    url: method.url,
    query_string: extractQueryParamsFromUrl(method.url),
    headers: tmp,
  };
  tmp = winterCGHeadersToDict(method.headers);
  return request;
};
