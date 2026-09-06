// === Module 12878: extractRequestData ===

// Module 12878 (extractRequestData)
import _mod12796 from "module_12796" /* 12796 */;
import _mod12797 from "module_12797" /* 12797 */;
import _mod12803 from "module_12803" /* 12803 */;
import _mod12804 from "module_12804" /* 12804 */;
import _mod12806 from "module_12806" /* 12806 */;
import _mod12842 from "module_12842" /* 12842 */;
import stripUrlQueryAndFragment from "stripUrlQueryAndFragment" /* 12879 */;
import _mod12880 from "module_12880" /* 12880 */;
import _mod12881 from "module_12881" /* 12881 */;

require = arg1;
const dependencyMap = arg6;
function extractRequestData(headers, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = undefined;
  let headers2;
  let method;
  let combined;
  let include = obj.include;
  if (undefined === include) {
    include = headers2;
  }
  obj = {};
  const tmp = headers.headers || {};
  headers2 = tmp;
  method = headers.method;
  if ("https" === headers.protocol) {
    let str2 = "https";
  } else {
    str2 = "http";
    if (headers.socket) {
      str2 = "http";
    }
  }
  combined = obj3;
  if (!headers.originalUrl || headers.url || "".startsWith(str2)) {
    let _HermesInternal = HermesInternal;
    combined = "" + str2 + "://" + tmp2 + tmp3;
  }
  let item = include.forEach((item) => {
    if ("headers" === item) {
      obj.headers = headers2;
      if (!include.includes("cookies")) {
        headers = tmp28.headers;
        delete tmp2[tmp];
      }
      if (!include.includes("ip")) {
        const ipHeaderNames = _mod12880.ipHeaderNames;
        item = ipHeaderNames.forEach((item) => {
          delete tmp2[tmp];
        });
      }
      tmp28 = obj;
    } else if ("method" === item) {
      obj.method = method;
    } else if ("url" === item) {
      obj.url = combined;
    } else if ("cookies" === item) {
      let cookies = headers.cookies;
      if (!cookies) {
        let cookie = headers2.cookie;
        if (cookie) {
          cookie = _mod12881.parseCookie(tmp21.cookie);
        }
        cookies = cookie;
      }
      if (!cookies) {
        cookies = {};
      }
      obj.cookies = cookies;
    } else if ("query_string" === item) {
      obj.query_string = (function extractQueryParams(originalUrl) {
        if (originalUrl.originalUrl || originalUrl.url || "") {
          combined = obj;
          if (obj.startsWith("/")) {
            const _HermesInternal = HermesInternal;
            combined = "http://dogs.are.great" + obj;
          }
          try {
            let query = originalUrl.query;
            if (!query) {
              const _URL = URL;
              const uRL = new URL(combined);
              const search = uRL.search;
              query = search.slice(1);
            }
            let tmp11;
            if (query.length) {
              tmp11 = query;
            }
            return tmp11;
          } catch (err) {
            return tmp;
          }
        }
      })(headers);
    } else if ("data" === item) {
      if ("GET" !== method) {
        if ("HEAD" !== tmp5) {
          const body = headers.body;
          if (undefined !== body) {
            if (obj6.isString(body)) {
              if (body) {
                obj.data = body;
              }
            } else {
              obj = _mod12804;
              if (obj.isPlainObject(body)) {
                const _JSON = JSON;
                const normalizer = _mod12842;
                let json = JSON.stringify(normalizer.normalize(body));
              } else {
                let _HermesInternal = HermesInternal;
                json = _mod12806.truncate("" + body, 1024);
              }
            }
            obj6 = _mod12804;
          }
        }
      }
    } else {
      hasOwnProperty = {}.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown" ? hasOwnProperty(item) : call(headers, item)) {
        obj[item] = tmp3[item];
      }
    }
  });
  return obj;
}
function winterCGHeadersToDict(arr) {
  try {
    const item = arr.forEach((item, index) => {
      if (typeof item === "string") {
        obj[index] = item;
      }
    });
    return obj;
  } catch (err) {
    if (_mod12796.DEBUG_BUILD) {
      const logger = _mod12797.logger;
      logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.");
    }
  }
  obj = {};
}
function headersToDict(arg0) {
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
    if (_mod12796.DEBUG_BUILD) {
      const logger = _mod12797.logger;
      logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.");
    }
  }
  obj = Object.create(null);
}
function extractQueryParamsFromUrl(arg0) {
  if (arg0) {
    try {
      const _URL = URL;
      const uRL = new URL(arg0, "http://dogs.are.great");
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
let closure_2 = { ip: false, request: true, user: true };
let closure_3 = ["cookies", "data", "headers", "method", "query_string", "url"];
let items = ["id", "username", "email"];

export const DEFAULT_USER_INCLUDES = items;
export const addNormalizedRequestDataToEvent = function addNormalizedRequestDataToEvent(request, normalizedRequest, user, include) {
  let obj = {};
  const merged = Object.assign(closure_2);
  if (include) {
    include = include.include;
  }
  const merged1 = Object.assign(include);
  if (obj.request) {
    const _Array = Array;
    if (Array.isArray(obj.request)) {
      items = [];
      HermesBuiltin.arraySpread(obj.request, 0);
      let arr2 = items;
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(closure_3, 0);
      arr2 = items1;
    }
    if (obj.ip) {
      arr2.push("ip");
    }
    const _Array2 = Array;
    let obj1 = arr2;
    if (!Array.isArray(arr2)) {
      obj1 = closure_3;
    }
    obj = {};
    obj = {};
    const merged2 = Object.assign(normalizedRequest.headers);
    user = obj;
    if (obj1.includes("headers")) {
      obj.headers = obj;
      if (!arr2.includes("cookies")) {
        delete tmp2[tmp];
      }
      if (!arr2.includes("ip")) {
        const ipHeaderNames = _mod12880.ipHeaderNames;
        const item = ipHeaderNames.forEach((item) => {
          delete tmp2[tmp];
        });
      }
    }
    if (obj1.includes("method")) {
      obj.method = normalizedRequest.method;
    }
    if (obj1.includes("url")) {
      obj.url = normalizedRequest.url;
    }
    if (obj1.includes("cookies")) {
      let cookies = normalizedRequest.cookies;
      if (!cookies) {
        let parseCookieResult;
        if (obj.cookie) {
          let obj5 = _mod12881;
          parseCookieResult = obj5.parseCookie(obj.cookie);
        }
        cookies = parseCookieResult;
      }
      if (!cookies) {
        cookies = {};
      }
      obj.cookies = cookies;
    }
    if (obj1.includes("query_string")) {
      obj.query_string = normalizedRequest.query_string;
    }
    if (obj1.includes("data")) {
      obj.data = normalizedRequest.data;
    }
    obj1 = {};
    const merged3 = Object.assign(request.request);
    const merged4 = Object.assign(obj);
    request.request = obj1;
  }
  if (obj.user) {
    if (user.user) {
      if (obj8.isPlainObject(user.user)) {
        user = obj.user;
        user = user.user;
        const _Array3 = Array;
        if (!Array.isArray(user)) {
          user = items;
        }
        const item1 = user.forEach((item) => {
          let tmp2 = user;
          if (user) {
            tmp2 = item in user;
          }
          if (tmp2) {
            obj1[item] = user[item];
          }
        });
        let obj4 = {};
        const obj2 = {};
      }
      const _Object = Object;
      if (Object.keys(obj4).length) {
        const obj3 = {};
        const merged5 = Object.assign(obj4);
        const merged6 = Object.assign(request.user);
        request.user = obj3;
      }
      obj8 = _mod12804;
    }
    obj4 = {};
  }
  if (obj.ip) {
    let ipAddress = normalizedRequest.headers;
    if (ipAddress) {
      ipAddress = _mod12880.getClientIPAddress(normalizedRequest.headers);
    }
    if (!ipAddress) {
      ipAddress = user.ipAddress;
    }
    if (ipAddress) {
      obj5 = {};
      const merged7 = Object.assign(request.user);
      obj5.ip_address = ipAddress;
      request.user = obj5;
    }
  }
};
export const addRequestDataToEvent = function addRequestDataToEvent(request, request, include) {
  let obj = {};
  const merged = Object.assign(closure_2);
  if (include) {
    include = include.include;
  }
  const merged1 = Object.assign(include);
  if (obj.request) {
    const _Array = Array;
    if (Array.isArray(obj.request)) {
      items = [];
      HermesBuiltin.arraySpread(obj.request, 0);
      let arr2 = items;
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(closure_3, 0);
      arr2 = items1;
    }
    if (obj.ip) {
      arr2.push("ip");
    }
    obj = { include: arr2 };
    const tmp11 = extractRequestData(request, obj);
    obj = {};
    const merged2 = Object.assign(request.request);
    const merged3 = Object.assign(tmp11);
    request.request = obj;
  }
  if (obj.user) {
    if (request.user) {
      let obj3 = _mod12804;
      if (obj3.isPlainObject(request.user)) {
        let user = request.user;
        const _Array2 = Array;
        if (!Array.isArray(user)) {
          user = items;
        }
        const item = user.forEach((item) => {
          let tmp2 = user;
          if (user) {
            tmp2 = item in user;
          }
          if (tmp2) {
            obj1[item] = user[item];
          }
        });
        obj3 = {};
        const obj1 = {};
      }
      const _Object = Object;
      if (Object.keys(obj3).length) {
        const obj2 = {};
        const merged4 = Object.assign(request.user);
        const merged5 = Object.assign(obj3);
        request.user = obj2;
      }
    }
    obj3 = {};
  }
  if (obj.ip) {
    let ip = request.headers;
    if (ip) {
      ip = _mod12880.getClientIPAddress(request.headers);
    }
    if (!ip) {
      ip = request.ip;
    }
    if (!ip) {
      ip = request.socket && request.socket.remoteAddress;
      const tmp29 = request.socket && request.socket.remoteAddress;
    }
    if (ip) {
      const obj4 = {};
      const merged6 = Object.assign(request.user);
      obj4.ip_address = ip;
      request.user = obj4;
    }
  }
  return request;
};
export const extractPathForTransaction = function extractPathForTransaction(method) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  method = method.method;
  if (method) {
    method = method.method.toUpperCase();
  }
  if (!obj.customRoute) {
    if (!method.route) {
      let str4 = "url";
      let str5 = "";
      if (tmp) {
        let str6 = method.originalUrl;
        if (!str6) {
          str6 = method.url;
        }
        if (!str6) {
          str6 = "";
        }
        str5 = stripUrlQueryAndFragment.stripUrlQueryAndFragment(str6);
        str4 = "url";
      }
      tmp = method.originalUrl || method.url;
    }
    let str8 = "";
    if (tmp7) {
      str8 = `${method}`;
    }
    let text = str8;
    if (tmp8) {
      text = `${str8} `;
    }
    let sum = text;
    if (tmp10) {
      sum = text + str5;
    }
    items = [sum, str4];
    return items;
  }
  let customRoute = obj.customRoute;
  if (!customRoute) {
    const _HermesInternal = HermesInternal;
    customRoute = "" + method.baseUrl || "" + method.route && method.route.path;
    const tmp4 = method.baseUrl || "";
    const tmp5 = method.route && method.route.path;
  }
  str4 = "route";
  str5 = customRoute;
};
export { extractQueryParamsFromUrl };
export { extractRequestData };
export { headersToDict };
export const httpRequestToRequestData = function httpRequestToRequestData(headers) {
  const tmp = headers.headers || {};
  let str = "http";
  if (headers.socket) {
    str = "http";
    if (headers.socket.encrypted) {
      str = "https";
    }
  }
  let combined = obj;
  if (!headers.url || "".startsWith(str)) {
    const _HermesInternal = HermesInternal;
    combined = "" + str + "://" + tmp2 + tmp3;
  }
  const request = { url: combined, method: headers.method, query_string: extractQueryParamsFromUrl(obj), headers: headersToDict(tmp), cookies: headers.cookies, data: headers.body || undefined };
  return _mod12803.dropUndefinedKeys(request);
};
export { winterCGHeadersToDict };
export const winterCGRequestToRequestData = function winterCGRequestToRequestData(method) {
  const request = { method: method.method, url: method.url, query_string: extractQueryParamsFromUrl(method.url), headers: winterCGHeadersToDict(method.headers) };
  return request;
};