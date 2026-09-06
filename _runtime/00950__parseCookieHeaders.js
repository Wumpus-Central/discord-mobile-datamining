// === Module 950: _parseCookieHeaders ===

// Module 950 (_parseCookieHeaders)
import triggerHandlers from "triggerHandlers" /* 898 */;
import _slicedToArray from "module_32" /* 32 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

function _parseCookieHeaders(Cookie, headers) {
  const tmp2 = (function _extractFetchHeaders(headers) {
    const obj = {};
    const item = headers.forEach((item, index) => {
      obj[index] = item;
    });
    return obj;
  })(headers.headers);
  try {
    let tmp4 = tmp2[Cookie];
    if (!tmp4) {
      tmp4 = tmp2[Cookie.toLowerCase(Cookie)];
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
  return parts.reduce((acc, item) => {
    [tmp2, tmp3] = _slicedToArray(item.split("="), 2);
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
function _shouldCaptureResponse(failedRequestStatusCodes, arg1, arg2) {
  failedRequestStatusCodes = failedRequestStatusCodes.failedRequestStatusCodes;
  closure_0 = arg1;
  let someResult = failedRequestStatusCodes.some((item) => {
    if (typeof item === "number") {
      let tmp = item === url;
    } else {
      tmp = url >= item[0] && tmp3 <= item[1];
    }
    return tmp;
  });
  if (someResult) {
    const failedRequestTargets = failedRequestStatusCodes.failedRequestTargets;
    closure_0 = arg2;
    someResult = failedRequestTargets.some((test) => {
      if (typeof test === "string") {
        let hasItem = url.includes(test);
      } else {
        hasItem = test.test(url);
      }
      return hasItem;
    });
  }
  if (someResult) {
    const obj = registerSpanErrorInstrumentation;
    someResult = !obj.isSentryRequestUrl(arg2, registerSpanErrorInstrumentation.getClient());
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
  obj = { message: combined, exception: null, request: null, contexts: null };
  obj = { type: "Error", value: combined, stacktrace: null };
  let tmp7;
  if (stackParserResult) {
    const obj1 = { frames: stackParserResult };
    tmp7 = obj1;
  }
  const obj2 = { values: null };
  obj.stacktrace = tmp7;
  const items = [obj];
  obj2.values = items;
  obj.exception = obj2;
  obj.request = { url: error.url, method: error.method, headers: error.requestHeaders, cookies: error.requestCookies };
  const obj3 = { status_code: error.status, headers: error.responseHeaders, cookies: error.responseCookies, body_size: null };
  const responseHeaders = error.responseHeaders;
  let parsed;
  if (responseHeaders) {
    if (responseHeaders["Content-Length"] || responseHeaders["content-length"]) {
      const _parseInt = parseInt;
      parsed = parseInt(tmp9, 10);
    }
  }
  obj3.body_size = parsed;
  obj.contexts = { response: obj3 };
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
  obj = { failedRequestStatusCodes: null, failedRequestTargets: null };
  const items = [[500, 599]];
  obj.failedRequestStatusCodes = items;
  const items1 = [/.*/];
  obj.failedRequestTargets = items1;
  const merged = Object.assign(obj);
  obj = {
    name: "HttpClient",
    setup(arg0) {
      closure_0 = arg0;
      closure_1 = obj;
      obj = registerSpanErrorInstrumentation;
      if (obj.supportsNativeFetch()) {
        let tmp2Result = registerSpanErrorInstrumentation;
        const result = tmp2Result.addFetchInstrumentationHandler((args) => {
          obj = obj(682);
          if (obj.getClient() === closure_0) {
            ({ response, error } = args);
            [tmp27, tmp28] = _slicedToArray(args.args, 2);
            if (response) {
              if (!error) {
                error = args.virtualError;
              }
              const failedRequestStatusCodes = closure_1.failedRequestStatusCodes;
              const url = response.status;
              let someResult = failedRequestStatusCodes.some((item) => {
                if (typeof item === "number") {
                  let tmp = item === url;
                } else {
                  tmp = url >= item[0] && tmp3 <= item[1];
                }
                return tmp;
              });
              if (someResult) {
                const failedRequestTargets = closure_1.failedRequestTargets;
                someResult = failedRequestTargets.some((test) => {
                  if (typeof test === "string") {
                    let hasItem = url.includes(test);
                  } else {
                    hasItem = test.test(url);
                  }
                  return hasItem;
                });
              }
              if (someResult) {
                tmp(682);
                const tmpResult = tmp(682);
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
                const client = tmp(682).getClient();
                let BooleanResult = client;
                if (BooleanResult) {
                  const _Boolean = Boolean;
                  BooleanResult = Boolean(client.getOptions().sendDefaultPii);
                }
                if (BooleanResult) {
                  let tmp25Result = _slicedToArray(_parseCookieHeaders("Cookie", request), 2);
                  [tmp17, tmp15] = tmp25Result;
                  tmp25Result = _slicedToArray(_parseCookieHeaders("Set-Cookie", response), 2);
                  [tmp16, tmp14] = tmp25Result;
                }
                const request1 = { url: null, method: null, status: null, requestHeaders: null, responseHeaders: null, requestCookies: null, responseCookies: null, error: null, type: "fetch" };
                ({ url: obj6.url, method: obj6.method } = request);
                request1.status = response.status;
                request1.requestHeaders = undefined;
                request1.responseHeaders = undefined;
                request1.requestCookies = undefined;
                request1.responseCookies = undefined;
                request1.error = error;
                const tmpResult1 = tmp(682);
                const tmp22 = _createEvent(request1);
                tmp(682).captureEvent(tmp22);
                const tmpResult2 = tmp(682);
              }
            }
            const tmp26 = _slicedToArray(args.args, 2);
          }
        }, false);
      }
      closure_0 = arg0;
      closure_1 = obj;
      if ("XMLHttpRequest" in registerSpanErrorInstrumentation.GLOBAL_OBJ) {
        tmp2Result = triggerHandlers;
        const result1 = tmp2Result.addXhrInstrumentationHandler((arg0) => {
          obj = obj(682);
          if (obj.getClient() === closure_0) {
            ({ error, xhr, virtualError } = arg0);
            const tmp16 = xhr[tmp4(undefined, 898).SENTRY_XHR_DATA_KEY];
            if (tmp16) {
              ({ method, request_headers } = tmp16);
              try {
                if (!error) {
                  error = virtualError;
                }
                (function _xhrResponseHandler(arg0, xhr, method, request_headers, error) {
                  if (closure_1_5(arg0, xhr.status, xhr.responseURL)) {
                    if (!closure_1_7()) {
                      const request = { url: xhr.responseURL, method, status: xhr.status, requestHeaders: undefined, responseHeaders: undefined, responseCookies: undefined, error, type: "xhr" };
                      const tmp11 = closure_1_6(request);
                      closure_1_0(dependencyMap[1]).captureEvent(tmp11);
                      const obj2 = closure_1_0(dependencyMap[1]);
                    } else {
                      try {
                        let responseHeader = xhr.getResponseHeader("Set-Cookie");
                        if (!responseHeader) {
                          responseHeader = xhr.getResponseHeader("set-cookie");
                        }
                        if (responseHeader) {
                          closure_1_4(responseHeader);
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
          tmp4 = obj;
        });
      }
    }
  };
  return obj;
});