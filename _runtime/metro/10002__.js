// _runtime/metro/10002__.js
import NitroRequest from "../09986_NitroRequest.js";
import _resolveRequestBody from "../09993__resolveRequestBody.js";
import applyDefaultContentType from "../09994_applyDefaultContentType.js";

let items = [
  {
    code: "(function buildNitroRequest_Pnpm_requestJs1(input,init){let[NitroRequestClass,rawBodyOf,URL,assertBodyAllowed,headersToPairs,normalizeBody,applyDefaultContentType,applyCacheHeaders,normalizeAndValidateHeaders]=this.__closure;var _init$redirect,_headersToPairs,_method$toUpperCase,_method;let url;let method;let headersInit;let body;let redirectOption=(_init$redirect=init===null||init===void 0?void 0:init.redirect)!==null&&_init$redirect!==void 0?_init$redirect:'follow';let cacheOption=init===null||init===void 0?void 0:init.cache;let credentialsOption=init===null||init===void 0?void 0:init.credentials;if(input instanceof NitroRequestClass){var _init$method,_init$headers,_ref,_init$body;url=input.url;method=(_init$method=init===null||init===void 0?void 0:init.method)!==null&&_init$method!==void 0?_init$method:input.method;headersInit=(_init$headers=init===null||init===void 0?void 0:init.headers)!==null&&_init$headers!==void 0?_init$headers:input.headers;body=(_ref=(_init$body=init===null||init===void 0?void 0:init.body)!==null&&_init$body!==void 0?_init$body:rawBodyOf(input))!==null&&_ref!==void 0?_ref:null;if(!(init!==null&&init!==void 0&&init.redirect))redirectOption=input.redirect;if(!(init!==null&&init!==void 0&&init.cache))cacheOption=input.cache;if(!(init!==null&&init!==void 0&&init.credentials))credentialsOption=input.credentials;}else if(typeof input==='string'||input instanceof URL){var _init$body2;url=String(input);method=init===null||init===void 0?void 0:init.method;headersInit=init===null||init===void 0?void 0:init.headers;body=(_init$body2=init===null||init===void 0?void 0:init.body)!==null&&_init$body2!==void 0?_init$body2:null;}else{var _init$method2,_init$body3;url=input.url;method=(_init$method2=init===null||init===void 0?void 0:init.method)!==null&&_init$method2!==void 0?_init$method2:input.method;headersInit=input.headers;body=(_init$body3=init===null||init===void 0?void 0:init.body)!==null&&_init$body3!==void 0?_init$body3:null;if(!(init!==null&&init!==void 0&&init.credentials))credentialsOption=input.credentials;}assertBodyAllowed(method,body);const headers=(_headersToPairs=headersToPairs(headersInit))!==null&&_headersToPairs!==void 0?_headersToPairs:[];const normalized=normalizeBody(body);applyDefaultContentType(headers,normalized===null||normalized===void 0?void 0:normalized.contentType);applyCacheHeaders(headers,cacheOption);normalizeAndValidateHeaders(headers);const followRedirects=redirectOption==='follow';const prefetchCacheTtlMs=typeof(init===null||init===void 0?void 0:init.prefetchCacheTtlMs)==='number'?init.prefetchCacheTtlMs:undefined;const timeoutMs=typeof(init===null||init===void 0?void 0:init.timeoutMs)==='number'?init.timeoutMs:undefined;const priority=(init===null||init===void 0?void 0:init.priority)==='high'||(init===null||init===void 0?void 0:init.priority)==='low'?init.priority:undefined;return{url:url,method:(_method$toUpperCase=(_method=method)===null||_method===void 0?void 0:_method.toUpperCase())!==null&&_method$toUpperCase!==void 0?_method$toUpperCase:'GET',headers:headers.length>0?headers:undefined,bodyString:normalized===null||normalized===void 0?void 0:normalized.bodyString,bodyBytes:normalized===null||normalized===void 0?void 0:normalized.bodyBytes,bodyFormData:normalized===null||normalized===void 0?void 0:normalized.bodyFormData,followRedirects:followRedirects,credentials:credentialsOption,prefetchCacheTtlMs:prefetchCacheTtlMs,timeoutMs:timeoutMs,priority:priority};})",
  },
  NitroRequest.NitroRequest,
  NitroRequest.rawBodyOf,
  URL,
  _resolveRequestBody.assertBodyAllowed,
  applyDefaultContentType.headersToPairs,
  _resolveRequestBody.normalizeBody,
  applyDefaultContentType.applyDefaultContentType,
  applyDefaultContentType.applyCacheHeaders,
  applyDefaultContentType.normalizeAndValidateHeaders,
];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
function buildNitroRequest(url, redirect) {
  let str;
  if (redirect != null) {
    str = redirect.redirect;
  }
  if (str == null) {
    str = "follow";
  }
  if (redirect != null) {
    let cache = redirect.cache;
  }
  if (redirect != null) {
    const credentials = redirect.credentials;
  }
  if (url instanceof c0) {
    const url2 = url.url;
    let method;
    if (redirect != null) {
      method = redirect.method;
    }
    if (method == null) {
      method = url.method;
    }
    let headers1;
    if (redirect != null) {
      headers1 = redirect.headers;
    }
    if (headers1 == null) {
      headers1 = url.headers;
    }
    let body;
    if (redirect != null) {
      body = redirect.body;
    }
    if (body == null) {
      body = _undefined2(url);
    }
    if (body == null) {
      body = null;
    }
    redirect = undefined;
    if (redirect != null) {
      redirect = redirect.redirect;
    }
    if (!redirect) {
      str = url.redirect;
    }
    let cache1;
    if (redirect != null) {
      cache1 = redirect.cache;
    }
    if (!cache1) {
      cache = url.cache;
    }
    let credentials1;
    if (redirect != null) {
      credentials1 = redirect.credentials;
    }
    let credentials2 = credentials;
    let tmp4 = cache;
    let tmp5 = str;
    let tmp6 = body;
    let tmp7 = headers1;
    let str2 = method;
    let tmp8 = url2;
    if (!credentials1) {
      credentials2 = url.credentials;
      tmp4 = cache;
      tmp5 = str;
      tmp6 = body;
      tmp7 = headers1;
      str2 = method;
      tmp8 = url2;
    }
  } else {
    if (typeof url !== "string") {
      if (!(url instanceof c2)) {
        url = url.url;
        let method1;
        if (redirect != null) {
          method1 = redirect.method;
        }
        if (method1 == null) {
          method1 = url.method;
        }
        const headers = url.headers;
        let body1;
        if (redirect != null) {
          body1 = redirect.body;
        }
        if (body1 == null) {
          body1 = null;
        }
        let credentials3;
        if (redirect != null) {
          credentials3 = redirect.credentials;
        }
        credentials2 = credentials;
        tmp4 = cache;
        tmp5 = str;
        tmp6 = body1;
        tmp7 = headers;
        str2 = method1;
        tmp8 = url;
        if (!credentials3) {
          credentials2 = url.credentials;
          tmp4 = cache;
          tmp5 = str;
          tmp6 = body1;
          tmp7 = headers;
          str2 = method1;
          tmp8 = url;
        }
      }
    }
    const _String = String;
    let method2;
    if (redirect != null) {
      method2 = redirect.method;
    }
    let headers2;
    if (redirect != null) {
      headers2 = redirect.headers;
    }
    let body2;
    if (redirect != null) {
      body2 = redirect.body;
    }
    if (body2 == null) {
      body2 = null;
    }
    tmp6 = body2;
    credentials2 = credentials;
    tmp4 = cache;
    tmp5 = str;
    tmp7 = headers2;
    str2 = method2;
    tmp8 = String(url);
    const StringResult = String(url);
  }
  _undefined4(str2, tmp6);
  const tmp22 = _undefined5(tmp7);
  items = tmp22;
  if (tmp22 == null) {
    items = [];
  }
  const tmp23 = _undefined6(tmp6);
  let contentType;
  if (tmp23 != null) {
    contentType = tmp23.contentType;
  }
  _undefined(items, contentType);
  _undefined7(items, tmp4);
  _undefined8(items);
  let prefetchCacheTtlMs;
  if (redirect != null) {
    prefetchCacheTtlMs = redirect.prefetchCacheTtlMs;
  }
  let prefetchCacheTtlMs1;
  if (typeof prefetchCacheTtlMs === "number") {
    prefetchCacheTtlMs1 = redirect.prefetchCacheTtlMs;
  }
  let timeoutMs;
  if (redirect != null) {
    timeoutMs = redirect.timeoutMs;
  }
  let timeoutMs1;
  if (typeof timeoutMs === "number") {
    timeoutMs1 = redirect.timeoutMs;
  }
  let priority1;
  if (redirect != null) {
    priority1 = redirect.priority;
  }
  if ("high" === priority1) {
    const priority = redirect.priority;
  } else {
    let priority2;
    if (redirect != null) {
      priority2 = redirect.priority;
    }
  }
  const request = {
    url: tmp8,
    method: null,
    headers: null,
    bodyString: null,
    bodyBytes: null,
    bodyFormData: null,
    followRedirects: null,
    credentials: null,
    prefetchCacheTtlMs: null,
    timeoutMs: null,
    priority: null,
  };
  let str4;
  if (str2 != null) {
    str4 = str2.toUpperCase();
  }
  if (str4 == null) {
    str4 = "GET";
  }
  request.method = str4;
  let tmp35;
  if (items.length > 0) {
    tmp35 = items;
  }
  request.headers = tmp35;
  let bodyString;
  if (tmp23 != null) {
    bodyString = tmp23.bodyString;
  }
  request.bodyString = bodyString;
  let bodyBytes;
  if (tmp23 != null) {
    bodyBytes = tmp23.bodyBytes;
  }
  request.bodyBytes = bodyBytes;
  let bodyFormData;
  if (tmp23 != null) {
    bodyFormData = tmp23.bodyFormData;
  }
  request.bodyFormData = bodyFormData;
  request.followRedirects = "follow" === tmp5;
  request.credentials = credentials2;
  request.prefetchCacheTtlMs = prefetchCacheTtlMs1;
  request.timeoutMs = timeoutMs1;
  request.priority = priority;
  return request;
}
const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
buildNitroRequest.__closure = items1;
buildNitroRequest.__workletHash = 3106736496530;
buildNitroRequest.__initData = tmp2;
const items2 = [
  {
    code: "(function buildNitroRequestPure_Pnpm_requestJs2(input,init){let[assertBodyAllowed,headersToPairsPure,normalizeBodyPure,applyDefaultContentType,applyCacheHeaders,normalizeAndValidateHeaders]=this.__closure;var _headersToPairsPure,_method$toUpperCase,_method;let url;let method;let headersInit;let body;const isUrlObject=typeof input==='object'&&input!==null&&Object.prototype.toString.call(input)==='[object URL]';if(typeof input==='string'||isUrlObject){var _init$body;url=String(input);method=init===null||init===void 0?void 0:init.method;headersInit=init===null||init===void 0?void 0:init.headers;body=(_init$body=init===null||init===void 0?void 0:init.body)!==null&&_init$body!==void 0?_init$body:null;}else{var _init$method,_init$body2;const req=input;url=req.url;method=(_init$method=init===null||init===void 0?void 0:init.method)!==null&&_init$method!==void 0?_init$method:req.method;headersInit=req.headers;body=(_init$body2=init===null||init===void 0?void 0:init.body)!==null&&_init$body2!==void 0?_init$body2:null;}assertBodyAllowed(method,body);const headers=(_headersToPairsPure=headersToPairsPure(headersInit))!==null&&_headersToPairsPure!==void 0?_headersToPairsPure:[];const normalized=normalizeBodyPure(body);applyDefaultContentType(headers,normalized===null||normalized===void 0?void 0:normalized.contentType);applyCacheHeaders(headers,init===null||init===void 0?void 0:init.cache);normalizeAndValidateHeaders(headers);const prefetchCacheTtlMs=typeof(init===null||init===void 0?void 0:init.prefetchCacheTtlMs)==='number'?init.prefetchCacheTtlMs:undefined;const timeoutMs=typeof(init===null||init===void 0?void 0:init.timeoutMs)==='number'?init.timeoutMs:undefined;const priority=(init===null||init===void 0?void 0:init.priority)==='high'||(init===null||init===void 0?void 0:init.priority)==='low'?init.priority:undefined;return{url:url,method:(_method$toUpperCase=(_method=method)===null||_method===void 0?void 0:_method.toUpperCase())!==null&&_method$toUpperCase!==void 0?_method$toUpperCase:'GET',headers:headers.length>0?headers:undefined,bodyString:normalized===null||normalized===void 0?void 0:normalized.bodyString,bodyBytes:normalized===null||normalized===void 0?void 0:normalized.bodyBytes,followRedirects:true,credentials:init===null||init===void 0?void 0:init.credentials,prefetchCacheTtlMs:prefetchCacheTtlMs,timeoutMs:timeoutMs,priority:priority};})",
  },
  _resolveRequestBody.assertBodyAllowed,
  applyDefaultContentType.headersToPairsPure,
  _resolveRequestBody.normalizeBodyPure,
  applyDefaultContentType.applyDefaultContentType,
  applyDefaultContentType.applyCacheHeaders,
  applyDefaultContentType.normalizeAndValidateHeaders,
];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
let closure_129_4;
let closure_129_5;
[tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
function buildNitroRequestPure(url, method) {
  let tmp = typeof url === "object";
  if (typeof url === "object") {
    tmp = null !== url;
  }
  if (!tmp) {
    if (typeof url !== "string") {
      if (!tmp) {
        url = url.url;
        method = undefined;
        if (method != null) {
          method = method.method;
        }
        if (method == null) {
          method = url.method;
        }
        let headers = url.headers;
        let body;
        if (method != null) {
          body = method.body;
        }
        if (body == null) {
          body = null;
        }
      }
      _undefined(method, body);
      items = _undefined2(headers);
      if (items == null) {
        items = [];
      }
      const tmp21 = _undefined3(body);
      let contentType;
      if (tmp21 != null) {
        contentType = tmp21.contentType;
      }
      _undefined4(items, contentType);
      let cache;
      if (method != null) {
        cache = method.cache;
      }
      _undefined5(items, cache);
      _undefined6(items);
      let prefetchCacheTtlMs;
      if (method != null) {
        prefetchCacheTtlMs = method.prefetchCacheTtlMs;
      }
      let prefetchCacheTtlMs1;
      if (typeof prefetchCacheTtlMs === "number") {
        prefetchCacheTtlMs1 = method.prefetchCacheTtlMs;
      }
      let timeoutMs;
      if (method != null) {
        timeoutMs = method.timeoutMs;
      }
      let timeoutMs1;
      if (typeof timeoutMs === "number") {
        timeoutMs1 = method.timeoutMs;
      }
      let priority1;
      if (method != null) {
        priority1 = method.priority;
      }
      if ("high" === priority1) {
        const priority = method.priority;
      } else {
        let priority2;
        if (method != null) {
          priority2 = method.priority;
        }
      }
      const request = {
        url,
        method: null,
        headers: null,
        bodyString: null,
        bodyBytes: null,
        followRedirects: true,
        credentials: null,
        prefetchCacheTtlMs: null,
        timeoutMs: null,
        priority: null,
      };
      let str4;
      if (method != null) {
        str4 = method.toUpperCase();
      }
      if (str4 == null) {
        str4 = "GET";
      }
      request.method = str4;
      let tmp36;
      if (items.length > 0) {
        tmp36 = items;
      }
      request.headers = tmp36;
      let bodyString;
      if (tmp21 != null) {
        bodyString = tmp21.bodyString;
      }
      request.bodyString = bodyString;
      let bodyBytes;
      if (tmp21 != null) {
        bodyBytes = tmp21.bodyBytes;
      }
      request.bodyBytes = bodyBytes;
      let credentials;
      if (method != null) {
        credentials = method.credentials;
      }
      request.credentials = credentials;
      request.prefetchCacheTtlMs = prefetchCacheTtlMs1;
      request.timeoutMs = timeoutMs1;
      request.priority = priority;
      return request;
    }
    const _String = String;
    let method1;
    if (method != null) {
      method1 = method.method;
    }
    let headers1;
    if (method != null) {
      headers1 = method.headers;
    }
    let body1;
    if (method != null) {
      body1 = method.body;
    }
    if (body1 == null) {
      body1 = null;
    }
    body = body1;
    headers = headers1;
    method = method1;
    url = String(url);
    const StringResult = String(url);
  } else {
    const _Object = Object;
    let str = Object.prototype.toString;
    const call = str.call;
    str = "[object URL]";
    const tmp3 = typeof call === "unknown" ? str() : call(url);
  }
}
const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
buildNitroRequestPure.__closure = items3;
buildNitroRequestPure.__workletHash = 6882032400301;
buildNitroRequestPure.__initData = tmp12;

export { buildNitroRequest };
export { buildNitroRequestPure };
