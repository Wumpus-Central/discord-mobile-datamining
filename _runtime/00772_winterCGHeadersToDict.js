// === Module 772: winterCGHeadersToDict ===

// Module 772 (winterCGHeadersToDict)
function winterCGHeadersToDict(arr) {
  const obj = {};
  try {
    const item = arr.forEach((item, index) => {
      if (typeof item === "string") {
        obj[index] = item;
      }
    });
    return obj;
  } catch (err) {
  }
}
function headersToDict(arg0) {
  const obj = Object.create(null);
  try {
    const _Object = Object;
    const entries = Object.entries(arg0);
    const item = entries.forEach((item) => {
      [tmp, tmp2] = item;
      if (typeof tmp2 === "string") {
        obj[tmp] = tmp2;
      }
    });
    return obj;
  } catch (err) {
  }
}
function addSpanAttribute(arg0, formatted, str, arr, flag) {
  const replaced = formatted.replace(/-/g, "_");
  if (str) {
    const _HermesInternal2 = HermesInternal;
    let combined = "http.request.header." + replaced + "." + str.replace(/-/g, "_");
  } else {
    const _HermesInternal = HermesInternal;
    combined = "http.request.header." + replaced;
  }
  let tmp3 = str;
  if (!str) {
    tmp3 = formatted;
  }
  closure_0 = tmp3;
  if (flag) {
    let someResult = closure_2.some((item) => closure_0.includes(item));
  } else {
    const items = [];
    HermesBuiltin.arraySpread(closure_2, HermesBuiltin.arraySpread(closure_3, 0));
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
      const uRL = new URL(arg0, "http://s.io");
      const search = uRL.search;
      const substr = search.slice(1);
      let tmp9;
      if (substr.length) {
        tmp9 = substr;
      }
      return tmp9;
    } catch (err) {
      return tmp;
    }
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = ["auth", "token", "secret", "session", "password", "passwd", "pwd", "key", "jwt", "bearer", "sso", "saml", "csrf", "xsrf", "credentials", "set-cookie", "cookie"];
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
      [str, arr] = item;
      if (null != arr) {
        const formatted = str.toLowerCase();
        if ("cookie" === formatted) {
          if (typeof arr === "string") {
            if ("" !== arr) {
              const index = arr.indexOf(";");
              let num = arr;
              if ("set-cookie" === formatted) {
                num = arr;
                if (-1 !== index) {
                  num = arr.substring(0, index);
                }
              }
              if ("set-cookie" === formatted) {
                const items = [num];
                let parts = items;
              } else {
                parts = num.split("; ");
              }
              parts[Symbol.iterator]();
              num = 0;
            }
          }
        }
        addSpanAttribute(obj, formatted, "", arr, flag);
      }
    });
    return obj;
  } catch (err) {
  }
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
    if (obj) {
      if (prop) {
        const _HermesInternal = HermesInternal;
        combined = "" + prop1 + "://" + prop + obj;
      }
    }
  }
  const request = { url: combined, method: headers.method, query_string: extractQueryParamsFromUrl(obj), headers: headersToDict(tmp), cookies: headers.cookies, data: headers.body || undefined };
  return request;
};
export { winterCGHeadersToDict };
export const winterCGRequestToRequestData = function winterCGRequestToRequestData(method) {
  const request = { method: method.method, url: method.url, query_string: extractQueryParamsFromUrl(method.url), headers: winterCGHeadersToDict(method.headers) };
  return request;
};