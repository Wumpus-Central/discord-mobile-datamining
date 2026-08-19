// _runtime/01085__parseCookieHeaders.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";

function _parseCookieHeaders(arg0, headers) {
  const tmp2 = (function _extractFetchHeaders(headers) {
    const obj = {};
    const item = headers.forEach((item, index) => {
      obj[index] = item;
    });
    return obj;
  })(headers.headers);
  try {
    let tmp4 = tmp2[arg0];
    if (!tmp4) {
      tmp4 = tmp2[arg0.toLowerCase(arg0)];
    }
    if (tmp4) {
      const tmp = _parseCookieString(tmp4);
    }
    const items = [tmp2, tmp];
    return items;
  } catch (err) {
  }
}
function _parseCookieString(str) {
  const parts = str.split("; ");
  return parts.reduce((acc, item, index) => {
    [tmp2, tmp3] = callback(item.split("="), 2);
    let tmp4 = tmp2;
    if (tmp2) {
      tmp4 = tmp3;
    }
    if (tmp4) {
      acc[tmp2] = tmp3;
    }
    return acc;
  }, {});
}
function _shouldCaptureResponse(failedRequestStatusCodes) {
  failedRequestStatusCodes = failedRequestStatusCodes.failedRequestStatusCodes;
  let _require = arg1;
  let someResult = failedRequestStatusCodes.some((item, index) => {
    if (typeof item === "number") {
      let tmp = item === url;
    } else {
      tmp = url >= item[0] && tmp3 <= item[1];
    }
    return tmp;
  });
  if (someResult) {
    const failedRequestTargets = failedRequestStatusCodes.failedRequestTargets;
    _require = arg2;
    someResult = failedRequestTargets.some((item, index) => {
      if (typeof item === "string") {
        let hasItem = url.includes(item);
      } else {
        hasItem = item.test(url);
      }
      return hasItem;
    });
  }
  if (someResult) {
    const obj = registerSpanErrorInstrumentation;
    someResult = !obj.isSentryRequestUrl(arg2, require("00817_registerSpanErrorInstrumentation.js").getClient());
    const obj2 = registerSpanErrorInstrumentation;
  }
  return someResult;
}
function _createEvent(error) {
  let obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  let stack;
  if (client) {
    if (error.error) {
      const _Error = Error;
      if (error.error instanceof Error) {
        stack = error.error.stack;
      }
    }
  }
  let stackParserResult;
  if (stack) {
    if (client) {
      const options = client.getOptions();
      stackParserResult = options.stackParser(stack, 0, 1);
    }
  }
  const combined = "HTTP Client Error with status code: " + error.status;
  obj = { type: "Error", value: combined, stacktrace: null };
  let tmp7;
  if (stackParserResult) {
    obj1 = { frames: null };
    obj1[0] = stackParserResult;
    tmp7 = obj1;
  }
  obj[2] = tmp7;
  const items = [obj];
  obj[1] = { values: items };
  obj[2] = { url: error.url, method: error.method, headers: error.requestHeaders, cookies: error.requestCookies };
  const obj2 = { status_code: error.status, headers: error.responseHeaders, cookies: error.responseCookies, body_size: null };
  const responseHeaders = error.responseHeaders;
  let parsed;
  if (responseHeaders) {
    if (responseHeaders["Content-Length"] || responseHeaders["content-length"]) {
      const _parseInt = parseInt;
      parsed = parseInt(tmp9, 10);
    }
  }
  obj2[3] = parsed;
  obj[3] = { response: obj2 };
  const tmpResult = registerSpanErrorInstrumentation;
  const result = tmpResult.addExceptionMechanism(obj, { type: "auto.http.client." + error.type, handled: false });
  return obj;
}
function _shouldSendDefaultPii() {
  const client = registerSpanErrorInstrumentation.getClient();
  let BooleanResult = client;
  if (BooleanResult) {
    const _Boolean = Boolean;
    BooleanResult = Boolean(client.getOptions().sendDefaultPii);
  }
  return BooleanResult;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpClientIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = { failedRequestStatusCodes: items, failedRequestTargets: items1 };
  items = [[500, 599]];
  items1 = [/.*/];
  const merged = Object.assign(obj);
  obj = {
    name: "HttpClient",
    setup(arg0) {
      closure_0 = arg0;
      closure_1 = closure_0;
      obj = obj(dependencyMap[1]);
      if (obj.supportsNativeFetch()) {
        let tmp2Result = tmp2(dependencyMap[1]);
        const result = tmp2Result.addFetchInstrumentationHandler((args) => {
          obj = callback(817);
          if (obj.getClient() === url) {
            ({ response, error } = args);
            [tmp27, tmp28] = closure_1_2(args.args, 2);
            if (response) {
              if (!error) {
                error = args.virtualError;
              }
              const failedRequestStatusCodes = dependencyMap.failedRequestStatusCodes;
              url = response.status;
              let someResult = failedRequestStatusCodes.some((item, index) => {
                if (typeof item === "number") {
                  let tmp = item === url;
                } else {
                  tmp = url >= item[0] && tmp3 <= item[1];
                }
                return tmp;
              });
              if (someResult) {
                const failedRequestTargets = dependencyMap.failedRequestTargets;
                someResult = failedRequestTargets.some((item, index) => {
                  if (typeof item === "string") {
                    let hasItem = url.includes(item);
                  } else {
                    hasItem = item.test(url);
                  }
                  return hasItem;
                });
              }
              if (someResult) {
                callback(817);
                const tmpResult = callback(817);
                someResult = !tmpResult.isSentryRequestUrl(url, tmpResult.getClient());
              }
              if (someResult) {
                if (tmp28) {
                  const _Request2 = Request;
                  if (!(tmp27 instanceof Request)) {
                    const _Request3 = Request;
                    let request = new Request(tmp27, tmp28);
                  } else {
                    request = tmp27;
                  }
                } else {
                  const _Request = Request;
                  request = tmp27;
                }
                const client = callback(817).getClient();
                let BooleanResult = client;
                if (BooleanResult) {
                  const _Boolean = Boolean;
                  BooleanResult = Boolean(client.getOptions().sendDefaultPii);
                }
                if (BooleanResult) {
                  let tmp25Result = closure_1_2(closure_1_3("Cookie", request), 2);
                  [tmp17, tmp15] = tmp25Result;
                  tmp25Result = closure_1_2(closure_1_3("Set-Cookie", response), 2);
                  [tmp16, tmp14] = tmp25Result;
                }
                obj = { url: null, method: null, status: null, requestHeaders: null, responseHeaders: null, requestCookies: null, responseCookies: null, error: null, type: "fetch" };
                ({ url: obj6[0], method: obj6[1] } = request);
                obj[2] = response.status;
                obj[3] = undefined;
                obj[4] = undefined;
                obj[5] = undefined;
                obj[6] = undefined;
                obj[7] = error;
                const tmpResult1 = callback(817);
                const tmp22 = closure_1_6(obj);
                callback(817).captureEvent(tmp22);
                const tmpResult2 = callback(817);
              }
            }
            const tmp26 = closure_1_2(args.args, 2);
          }
        }, false);
      }
      closure_0 = arg0;
      closure_1 = closure_0;
      if ("XMLHttpRequest" in obj(dependencyMap[1]).GLOBAL_OBJ) {
        tmp2Result = tmp2(dependencyMap[2]);
        const result1 = tmp2Result.addXhrInstrumentationHandler((arg0) => {
          if (obj.getClient() === callback) {
            ({ error, xhr, virtualError } = arg0);
            const tmp16 = xhr[callback(undefined, 1033).SENTRY_XHR_DATA_KEY];
            if (tmp16) {
              ({ method, request_headers } = tmp16);
              try {
                if (!error) {
                  error = virtualError;
                }
                (function _xhrResponseHandler(dependencyMap, xhr, method, request_headers, error) {
                  if (callback3(dependencyMap, xhr.status, xhr.responseURL)) {
                    if (!callback5()) {
                      obj = { url: null, method: null, status: null, requestHeaders: null, responseHeaders: null, responseCookies: null, error: null, type: "xhr" };
                      obj[0] = xhr.responseURL;
                      obj[1] = method;
                      obj[2] = xhr.status;
                      obj[3] = undefined;
                      obj[4] = undefined;
                      obj[5] = undefined;
                      obj[6] = error;
                      const tmp11 = callback4(obj);
                      callback(table[1]).captureEvent(tmp11);
                      const obj2 = callback(table[1]);
                    } else {
                      try {
                        let responseHeader = xhr.getResponseHeader("Set-Cookie");
                        if (!responseHeader) {
                          responseHeader = xhr.getResponseHeader("set-cookie");
                        }
                        if (responseHeader) {
                          callback2(responseHeader);
                        }
                        try {
                          (function _getXHRResponseHeaders(getAllResponseHeaders) {
                            const str = getAllResponseHeaders.getAllResponseHeaders();
                            if (str) {
                              const parts = str.split("\r\n");
                              return parts.reduce(() => { ... }, {});
                            } else {
                              return {};
                            }
                          })(xhr);
                        } catch (err) {
                        }
                      } catch (err) {
                      }
                    }
                  }
                })(dependencyMap, xhr, method, request_headers, error);
              } catch (tmp13) {
                if (tmp3(tmp2[3]).DEBUG_BUILD) {
                  const debug = tmp3(tmp2[1]).debug;
                  debug.warn("Error while extracting response event form XHR response", tmp13);
                }
              }
            }
          }
          obj = callback(817);
        });
      }
    }
  };
  return obj;
});