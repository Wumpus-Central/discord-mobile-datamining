// _runtime/12661_DEFAULT_USER_INCLUDES.js
import _mod12579 from "metro/12579__.js";
import _mod12580 from "metro/12580__.js";
import _mod12586 from "metro/12586__.js";
import _mod12587 from "metro/12587__.js";
import _mod12589 from "metro/12589__.js";
import _mod12625 from "metro/12625__.js";
import stripUrlQueryAndFragment2 from "12662_stripUrlQueryAndFragment.js";
import _mod12663 from "metro/12663__.js";
import _mod12664 from "metro/12664__.js";

let hasOwnProperty;

function extractRequestData(headers, arg1) {
  let str2;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2;
  let headers2;
  let method;
  let combined;
  let include = obj.include;
  if (undefined === include) {
    include = headers2;
  }
  obj2 = {};
  const tmp = headers.headers || {};
  headers2 = tmp;
  method = headers.method;
  const tmp2 = tmp.host || headers.hostname || headers.host || "<no host>";
  if ("https" === headers.protocol) {
    str2 = "https";
  } else {
    const str = "http";
    str2 = "http";
    if (headers.socket) {
      str2 = "http";
    }
  }
  combined = obj3;
  if (!(headers.originalUrl || headers.url || "").startsWith(str2)) {
    let _HermesInternal = HermesInternal;
    let tmp8 = obj3;
    combined = "" + str2 + "://" + tmp2 + tmp3;
  }
  let item = include.forEach((item) => {
    function extractQueryParams(originalUrl) {
      if (originalUrl.originalUrl || originalUrl.url || "") {
        combined = obj;
        if ((originalUrl.originalUrl || originalUrl.url || "").startsWith("/")) {
          const _HermesInternal = HermesInternal;
          combined = "http://dogs.are.great" + obj;
        }
        try {
          let query = originalUrl.query;
          if (!query) {
            const _URL = URL;
            const self = this;
            const self2 = this;
            const uRL = new URL(combined);
            const search = uRL.search;
            query = search.slice(1);
          }
          let tmp8;
          if (query.length) {
            tmp8 = query;
          }
          return tmp8;
        } catch (err) {}
      }
    }
    if ("headers" === item) {
      obj2.headers = headers2;
      const tmp26 = obj2;
      if (!include.includes("cookies")) {
        delete tmp26.headers["cookie"];
      }
      if (!include.includes("ip")) {
        const ipHeaderNames = _mod12663.ipHeaderNames;
        item = ipHeaderNames.forEach((item) => {
          delete obj2.headers[item];
        });
      }
    } else if ("method" === item) {
      obj2.method = method;
    } else if ("url" === item) {
      obj2.url = combined;
    } else if ("cookies" === item) {
      let cookies = headers.cookies;
      const tmp17 = obj2;
      if (!cookies) {
        let cookie = headers2.cookie;
        if (cookie) {
          const obj4 = _mod12664;
          cookie = obj4.parseCookie(tmp19.cookie);
        }
        cookies = cookie;
      }
      if (!cookies) {
        cookies = {};
      }
      tmp17.cookies = cookies;
    } else if ("query_string" === item) {
      obj2.query_string = extractQueryParams(headers);
    } else if ("data" === item) {
      if ("GET" !== method) {
        if ("HEAD" !== tmp3) {
          const body = headers.body;
          if (undefined !== body) {
            let tmp13 = body;
            const obj6 = _mod12587;
            if (!obj6.isString(body)) {
              let json;
              const obj = _mod12587;
              if (obj.isPlainObject(body)) {
                const _JSON = JSON;
                const normalizer = _mod12625;
                json = stringify(normalizer.normalize(body));
              } else {
                obj2 = _mod12589;
                let tmp8 = globalThis;
                let _HermesInternal = HermesInternal;
                json = obj2.truncate("" + body, 1024);
              }
              tmp13 = json;
            }
            if (tmp13) {
              obj2.data = tmp13;
            }
          }
        }
      }
    } else {
      hasOwnProperty = {}.hasOwnProperty;
      if (hasOwnProperty.call(headers, item)) {
        obj2[item] = headers[item];
      }
    }
  });
  return obj2;
}
function winterCGHeadersToDict(arr) {
  const obj = {};
  try {
    const item = arr.forEach((item, index) => {
      if (typeof item === "string") {
        obj[index] = item;
      }
    });
  } catch (err) {
    if (_mod12579.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.");
    }
  }
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
  } catch (err) {
    if (_mod12579.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.");
    }
  }
  return obj;
}
function extractQueryParamsFromUrl(arg0) {
  if (arg0) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(arg0, "http://dogs.are.great");
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
let closure_2 = { ip: false, request: true, user: true };
let closure_3 = ["cookies", "data", "headers", "method", "query_string", "url"];
let items = ["id", "username", "email"];

export const DEFAULT_USER_INCLUDES = items;
export const addNormalizedRequestDataToEvent = function addNormalizedRequestDataToEvent(
  request,
  normalizedRequest,
  user,
  include,
) {
  const obj = {};
  const merged = Object.assign(closure_2);
  const tmp3 = include && include.include;
  const merged1 = Object.assign(tmp3);
  if (obj.request) {
    let arr2;
    const _Array = Array;
    if (Array.isArray(obj.request)) {
      items = [];
      HermesBuiltin.arraySpread(items, obj.request, 0);
      arr2 = items;
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, closure_3, 0);
      arr2 = items1;
    }
    if (obj.ip) {
      arr2.push("ip");
    }
    const _Array2 = Array;
    let obj2 = arr2;
    if (!Array.isArray(arr2)) {
      obj2 = closure_3;
    }
    const obj3 = {};
    const obj5 = {};
    const merged2 = Object.assign(normalizedRequest.headers);
    if (obj2.includes("headers")) {
      obj3.headers = obj5;
      if (!arr2.includes("cookies")) {
        delete obj4["cookie"];
      }
      if (!arr2.includes("ip")) {
        const ipHeaderNames = _mod12663.ipHeaderNames;
        const item = ipHeaderNames.forEach((item) => {
          delete obj5[item];
        });
      }
    }
    if (obj2.includes("method")) {
      obj3.method = normalizedRequest.method;
    }
    if (obj2.includes("url")) {
      obj3.url = normalizedRequest.url;
    }
    if (obj2.includes("cookies")) {
      let cookies = normalizedRequest.cookies;
      if (!cookies) {
        let parseCookieResult;
        if (obj5.cookie) {
          const obj6 = _mod12664;
          parseCookieResult = obj6.parseCookie(obj5.cookie);
        }
        cookies = parseCookieResult;
      }
      if (!cookies) {
        cookies = {};
      }
      obj3.cookies = cookies;
    }
    if (obj2.includes("query_string")) {
      obj3.query_string = normalizedRequest.query_string;
    }
    if (obj2.includes("data")) {
      obj3.data = normalizedRequest.data;
    }
    const obj7 = {};
    const merged3 = Object.assign(request.request);
    const merged4 = Object.assign(obj3);
    request.request = obj7;
  }
  if (obj.user) {
    if (user.user) {
      let obj11;
      const obj8 = _mod12587;
      if (obj8.isPlainObject(user.user)) {
        user = obj.user;
        const user2 = user.user;
        const _Array3 = Array;
        const obj9 = {};
        if (!Array.isArray(user)) {
          user = items;
        }
        const item1 = user.forEach((item) => {
          const tmp2 = user2 && item in user2;
          if (tmp2) {
            obj5[item] = user2[item];
          }
        });
        obj11 = obj9;
      }
      const _Object = Object;
      if (Object.keys(obj11).length) {
        const obj10 = {};
        const merged5 = Object.assign(obj11);
        const merged6 = Object.assign(request.user);
        request.user = obj10;
      }
    }
    obj11 = {};
  }
  if (obj.ip) {
    let ipAddress = normalizedRequest.headers;
    if (ipAddress) {
      const obj12 = _mod12663;
      ipAddress = obj12.getClientIPAddress(normalizedRequest.headers);
    }
    if (!ipAddress) {
      ipAddress = user.ipAddress;
    }
    if (ipAddress) {
      const obj13 = { ip_address: ipAddress };
      const merged7 = Object.assign(request.user);
      request.user = obj13;
    }
  }
};
export const addRequestDataToEvent = function addRequestDataToEvent(request, request2, include) {
  const obj = {};
  const merged = Object.assign(closure_2);
  const tmp3 = include && include.include;
  const merged1 = Object.assign(tmp3);
  if (obj.request) {
    let arr2;
    const _Array = Array;
    if (Array.isArray(obj.request)) {
      items = [];
      HermesBuiltin.arraySpread(items, obj.request, 0);
      arr2 = items;
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, closure_3, 0);
      arr2 = items1;
    }
    if (obj.ip) {
      arr2.push("ip");
    }
    const obj2 = { include: arr2 };
    const obj3 = {};
    const tmp13 = extractRequestData(request, obj2);
    const merged2 = Object.assign(request.request);
    const merged3 = Object.assign(tmp13);
    request.request = obj3;
  }
  if (obj.user) {
    if (request.user) {
      let obj7;
      const obj4 = _mod12587;
      if (obj4.isPlainObject(request.user)) {
        let user = obj.user;
        const user2 = request.user;
        const obj5 = {};
        const _Array2 = Array;
        if (!Array.isArray(user)) {
          user = items;
        }
        const item = user.forEach((item) => {
          const tmp2 = user2 && item in user2;
          if (tmp2) {
            obj5[item] = user2[item];
          }
        });
        obj7 = obj5;
      }
      const _Object = Object;
      if (Object.keys(obj7).length) {
        const obj6 = {};
        const merged4 = Object.assign(request.user);
        const merged5 = Object.assign(obj7);
        request.user = obj6;
      }
    }
    obj7 = {};
  }
  if (obj.ip) {
    let ip = request.headers;
    if (ip) {
      const obj8 = _mod12663;
      ip = obj8.getClientIPAddress(request.headers);
    }
    if (!ip) {
      ip = request.ip;
    }
    if (!ip) {
      ip = request.socket && request.socket.remoteAddress;
    }
    if (ip) {
      const obj9 = { ip_address: ip };
      const merged6 = Object.assign(request.user);
      request.user = obj9;
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
    const str = method.method;
    method = str.toUpperCase();
  }
  if (!obj.customRoute) {
    let str4;
    let str5;
    if (!method.route) {
      str4 = "url";
      str5 = "";
      const tmp = method.originalUrl || method.url;
      if (tmp) {
        let str6 = method.originalUrl;
        const stripUrlQueryAndFragment = stripUrlQueryAndFragment2.stripUrlQueryAndFragment;
        stripUrlQueryAndFragment2;
        if (!str6) {
          str6 = method.url;
        }
        if (!str6) {
          str6 = "";
        }
        str5 = stripUrlQueryAndFragment(str6);
        str4 = "url";
      }
    }
    let str8 = "";
    const tmp8 = obj.method && method;
    if (tmp8) {
      str8 = `${method}`;
    }
    let text = str8;
    const tmp9 = obj.method && obj.path;
    if (tmp9) {
      text = `${str8} `;
    }
    let sum = text;
    const tmp11 = obj.path && str5;
    if (tmp11) {
      sum = text + str5;
    }
    items = [sum, str4];
    return items;
  }
  let customRoute = obj.customRoute;
  if (!customRoute) {
    const _HermesInternal = HermesInternal;
    const tmp5 = method.baseUrl || "";
    const tmp6 = method.route && method.route.path;
    customRoute = "" + tmp5 + tmp6;
  }
  str4 = "route";
  str5 = customRoute;
};
export { extractQueryParamsFromUrl };
export { extractRequestData };
export { headersToDict };
export const httpRequestToRequestData = function httpRequestToRequestData(headers) {
  let str = "http";
  const tmp = headers.headers || {};
  if (headers.socket) {
    str = "http";
    if (headers.socket.encrypted) {
      str = "https";
    }
  }
  let combined = obj;
  if (!(headers.url || "").startsWith(str)) {
    const _HermesInternal = HermesInternal;
    combined = "" + str + "://" + tmp2 + tmp3;
  }
  const cookies = headers.cookies;
  const tmp9 = headers.body || undefined;
  const obj2 = _mod12586;
  const request = {
    url: combined,
    method: headers.method,
    query_string: extractQueryParamsFromUrl(obj),
    headers: headersToDict(tmp),
    cookies,
    data: tmp9,
  };
  return obj2.dropUndefinedKeys(request);
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
