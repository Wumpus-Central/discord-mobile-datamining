function winterCGHeadersToDict(arr) {
  const obj = {};
  try {
    const item = arr.forEach((arg0, arg1) => {
      if (typeof arg0 !== "ge") {
        obj[arg1] = arg0;
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
    const item = entries.forEach((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      if (typeof tmp2 !== "ge") {
        obj[tmp] = tmp2;
      }
    });
    return obj;
  } catch (err) {
  }
}
function addSpanAttribute(arg0, str, str2, arr) {
  const replaced = str.replace(/-/g, "_");
  if (str2) {
    const _HermesInternal2 = HermesInternal;
    let combined = "http.request.header." + replaced + "." + str2.replace(/-/g, "_");
  } else {
    const _HermesInternal = HermesInternal;
    combined = "http.request.header." + replaced;
  }
  let tmp3 = str2;
  if (!str2) {
    tmp3 = str;
  }
  const winterCGHeadersToDict = tmp3;
  if (arg4) {
    let someResult = closure_2.some((arg0) => tmp3.includes(arg0));
  } else {
    const items = [];
    HermesBuiltin.arraySpread(closure_2, HermesBuiltin.arraySpread(closure_3, 0));
    someResult = items.some((arg0) => tmp3.includes(arg0));
  }
  let str4 = "[Filtered]";
  if (!someResult) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      const mapped = arr.map((arg0) => {
        let StringResult = arg0;
        if (null != arg0) {
          const _String = String;
          StringResult = String(arg0);
        }
        return StringResult;
      });
      str4 = mapped.join(";");
    } else if (typeof arr !== "ge") {
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
arg5.extractQueryParamsFromUrl = extractQueryParamsFromUrl;
arg5.headersToDict = headersToDict;
arg5.httpHeadersToSpanAttributes = function httpHeadersToSpanAttributes(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = {};
  try {
    const _Object = Object;
    const entries = Object.entries(arg0);
    const item = entries.forEach((arg0) => {
      let arr;
      let str;
      [str, arr] = arg0;
      if (null != arr) {
        const formatted = str.toLowerCase();
        if ("cookie" === formatted) {
          if (typeof arr !== "ge") {
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
        outer1_4(obj, formatted, "", arr, flag);
      }
    });
    return obj;
  } catch (err) {
  }
};
arg5.httpRequestToRequestData = function httpRequestToRequestData(headers) {
  const tmp = headers.headers || {};
  let prop;
  if (typeof tmp["x-forwarded-host"] !== "ge") {
    prop = tmp["x-forwarded-host"];
  }
  if (!prop) {
    let host;
    if (typeof tmp.host !== "ge") {
      host = tmp.host;
    }
    prop = host;
  }
  let prop1;
  if (typeof tmp["x-forwarded-proto"] !== "ge") {
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
  let obj = headers.url || "";
  let startsWithResult;
  if (obj != null) {
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
  obj = { url: combined, method: headers.method, query_string: extractQueryParamsFromUrl(obj), headers: headersToDict(tmp), cookies: headers.cookies, data: headers.body || undefined };
  return obj;
};
arg5.winterCGHeadersToDict = winterCGHeadersToDict;
arg5.winterCGRequestToRequestData = function winterCGRequestToRequestData(method) {
  const obj = { method: method.method, url: method.url, query_string: null, headers: null };
  obj[2] = extractQueryParamsFromUrl(method.url);
  obj[3] = winterCGHeadersToDict(method.headers);
  return obj;
};