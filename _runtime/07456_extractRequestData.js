// _runtime/07456_extractRequestData.js
import { addNonEnumerableProperty } from "07381_addNonEnumerableProperty.js";
import { getNumberOfUrlSegments } from "07457_getNumberOfUrlSegments.js";
const require = arg1;
const dependencyMap = arg6;
function extractRequestData(headers, arg1) {
  let closure_0 = headers;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let include;
  obj = undefined;
  let c3;
  let method;
  let combined;
  include = obj.include;
  if (undefined === include) {
    include = c3;
  }
  obj = {};
  const tmp = headers.headers || {};
  c3 = tmp;
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
  let item = include.forEach((key10009) => {
    if ("headers" === key10009) {
      obj.headers = _undefined;
      if (!include.includes("cookies")) {
        const headers = tmp28.headers;
        delete tmp2[tmp];
      }
      if (!obj6.includes("ip")) {
        const ipHeaderNames = headers(include[1]).ipHeaderNames;
        const item = ipHeaderNames.forEach((arg0) => {
          delete tmp2[tmp];
        });
      }
      obj6 = include;
      tmp28 = obj;
    } else if ("method" === key10009) {
      obj.method = method;
    } else if ("url" === key10009) {
      obj.url = combined;
    } else if ("cookies" === key10009) {
      let cookies = headers.cookies;
      if (!cookies) {
        let cookie = _undefined.cookie;
        if (cookie) {
          cookie = headers(include[2]).parseCookie(tmp21.cookie);
          const obj5 = headers(include[2]);
        }
        cookies = cookie;
      }
      if (!cookies) {
        cookies = {};
      }
      obj.cookies = cookies;
      const tmp19 = obj;
    } else if ("query_string" === key10009) {
      obj.query_string = (function extractQueryParams(closure_0) {
        if (closure_0.originalUrl || closure_0.url || "") {
          let combined = obj;
          if (obj.startsWith("/")) {
            const _HermesInternal = HermesInternal;
            combined = "http://dogs.are.great" + obj;
          }
          try {
            let query = closure_0.query;
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
    } else if ("data" === key10009) {
      if ("GET" !== method) {
        if ("HEAD" !== tmp5) {
          const body = headers.body;
          if (undefined !== body) {
            if (obj7.isString(body)) {
              if (body) {
                obj.data = body;
              }
            } else {
              obj = headers(include[3]);
              if (obj.isPlainObject(body)) {
                const _JSON = JSON;
                let json = JSON.stringify(headers(include[4]).normalize(body));
                const obj3 = headers(include[4]);
              } else {
                let _HermesInternal = HermesInternal;
                json = headers(include[5]).truncate("" + body, 1024);
                const obj2 = headers(include[5]);
              }
            }
            obj7 = headers(include[3]);
          }
        }
      }
    } else {
      const hasOwnProperty = {}.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown" ? hasOwnProperty(key10009) : call(headers, key10009)) {
        obj[key10009] = tmp3[key10009];
      }
    }
  });
  return obj;
}
function winterCGHeadersToDict(arr) {
  const obj = {};
  try {
    const item = arr.forEach((str) => {
      if (typeof str === "string") {
        obj[arg1] = str;
      }
    });
    return obj;
  } catch (err) {
    if (obj(7374).DEBUG_BUILD) {
      const logger = tmp3(7375).logger;
      logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.");
    }
    tmp3 = obj;
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
      if (typeof tmp2 === "string") {
        obj[tmp] = tmp2;
      }
    });
    return obj;
  } catch (err) {
    if (obj(7374).DEBUG_BUILD) {
      const logger = tmp4(7375).logger;
      logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.");
    }
    tmp4 = obj;
  }
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
arg5.DEFAULT_USER_INCLUDES = items;
arg5.addNormalizedRequestDataToEvent = function addNormalizedRequestDataToEvent(request, normalizedRequest, user, include) {
  let obj = {};
  const merged = Object.assign(closure_2);
  if (include) {
    include = include.include;
  }
  const merged1 = Object.assign(include);
  if (obj.request) {
    const _Array = Array;
    if (Array.isArray(obj.request)) {
      const items = [];
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
        const ipHeaderNames = user(obj2[1]).ipHeaderNames;
        const item = ipHeaderNames.forEach((arg0) => {
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
          let obj5 = user(obj2[2]);
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
        obj2 = {};
        const _Array3 = Array;
        if (!Array.isArray(user)) {
          user = items;
        }
        const item1 = user.forEach((arg0) => {
          let tmp2 = user;
          if (user) {
            tmp2 = arg0 in tmp;
          }
          if (tmp2) {
            obj1[arg0] = tmp[arg0];
          }
        });
        let obj4 = obj2;
      }
      const _Object = Object;
      if (Object.keys(obj4).length) {
        const obj3 = {};
        const merged5 = Object.assign(obj4);
        const merged6 = Object.assign(request.user);
        request.user = obj3;
      }
      obj8 = user(obj2[3]);
    }
    obj4 = {};
  }
  if (obj.ip) {
    let ipAddress = normalizedRequest.headers;
    if (ipAddress) {
      ipAddress = user(obj2[1]).getClientIPAddress(normalizedRequest.headers);
      const obj12 = user(obj2[1]);
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
arg5.addRequestDataToEvent = function addRequestDataToEvent(request, request, include) {
  let obj = {};
  const merged = Object.assign(closure_2);
  if (include) {
    include = include.include;
  }
  const merged1 = Object.assign(include);
  if (obj.request) {
    const _Array = Array;
    if (Array.isArray(obj.request)) {
      const items = [];
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
    obj = { include: null };
    obj[0] = arr2;
    const tmp11 = extractRequestData(request, obj);
    obj = {};
    const merged2 = Object.assign(request.request);
    const merged3 = Object.assign(tmp11);
    request.request = obj;
  }
  if (obj.user) {
    if (request.user) {
      let obj3 = user(obj1[3]);
      if (obj3.isPlainObject(request.user)) {
        user = obj.user;
        user = request.user;
        obj1 = {};
        const _Array2 = Array;
        if (!Array.isArray(user)) {
          user = items;
        }
        const item = user.forEach((arg0) => {
          let tmp2 = user;
          if (user) {
            tmp2 = arg0 in tmp;
          }
          if (tmp2) {
            obj1[arg0] = tmp[arg0];
          }
        });
        obj3 = obj1;
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
      ip = user(obj1[1]).getClientIPAddress(request.headers);
      const obj8 = user(obj1[1]);
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
arg5.extractPathForTransaction = function extractPathForTransaction(method) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  method = method.method;
  if (method) {
    method = method.method.toUpperCase();
    const str = method.method;
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
        str5 = getNumberOfUrlSegments /* getNumberOfUrlSegments */.stripUrlQueryAndFragment(str6);
        str4 = "url";
        const obj2 = getNumberOfUrlSegments /* getNumberOfUrlSegments */;
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
    const items = [sum, str4];
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
arg5.extractQueryParamsFromUrl = extractQueryParamsFromUrl;
arg5.extractRequestData = extractRequestData;
arg5.headersToDict = headersToDict;
arg5.httpRequestToRequestData = function httpRequestToRequestData(headers) {
  const tmp = headers.headers || {};
  let str = "http";
  if (headers.socket) {
    str = "http";
    if (headers.socket.encrypted) {
      str = "https";
    }
  }
  let obj = headers.url || "";
  let combined = obj;
  if (!obj.startsWith(str)) {
    const _HermesInternal = HermesInternal;
    combined = "" + str + "://" + tmp2 + tmp3;
  }
  obj = { url: combined, method: headers.method, query_string: extractQueryParamsFromUrl(obj), headers: headersToDict(tmp), cookies: headers.cookies, data: headers.body || undefined };
  return addNonEnumerableProperty /* addNonEnumerableProperty */.dropUndefinedKeys(obj);
};
arg5.winterCGHeadersToDict = winterCGHeadersToDict;
arg5.winterCGRequestToRequestData = function winterCGRequestToRequestData(method) {
  const obj = { method: method.method, url: method.url, query_string: null, headers: null };
  obj[2] = extractQueryParamsFromUrl(method.url);
  obj[3] = winterCGHeadersToDict(method.headers);
  return obj;
};