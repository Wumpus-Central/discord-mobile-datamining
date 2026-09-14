// _runtime/00950__parseCookieHeaders.js
import triggerHandlers from "00898_triggerHandlers.js";
import _slicedToArray from "metro/00032__.js";
import registerSpanErrorInstrumentation from "metro/00682__.js";

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
    [tmp2, tmp3] = item.split("=");
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
  const client = registerSpanErrorInstrumentation.getClient();
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
  const obj2 = { message: combined, exception: null, request: null, contexts: null };
  const obj3 = { type: "Error", value: combined, stacktrace: null };
  let tmp7;
  if (stackParserResult) {
    const obj4 = { frames: stackParserResult };
    tmp7 = obj4;
  }
  const obj5 = { values: null };
  obj3.stacktrace = tmp7;
  const items = [obj3];
  obj5.values = items;
  obj2.exception = obj5;
  obj2.request = { url: error.url, method: error.method, headers: error.requestHeaders, cookies: error.requestCookies };
  const obj6 = { status_code: error.status, headers: error.responseHeaders, cookies: error.responseCookies, body_size: null };
  const responseHeaders = error.responseHeaders;
  let parsed;
  if (responseHeaders) {
    if (responseHeaders["Content-Length"] || responseHeaders["content-length"]) {
      const _parseInt = parseInt;
      parsed = parseInt(tmp9, 10);
    }
  }
  obj6.body_size = parsed;
  obj2.contexts = { response: obj6 };
  const tmpResult = registerSpanErrorInstrumentation;
  const result = tmpResult.addExceptionMechanism(obj2, { type: "auto.http.client." + error.type, handled: false });
  return obj2;
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
  let obj2 = { failedRequestStatusCodes: null, failedRequestTargets: null };
  const items = [[500, 599]];
  obj2.failedRequestStatusCodes = items;
  const items1 = [/.*/];
  obj2.failedRequestTargets = items1;
  const merged = Object.assign(obj);
  return {
    name: "HttpClient",
    setup(arg0) {
      closure_0 = arg0;
      closure_1 = obj2;
      if (obj.supportsNativeFetch()) {
        const result = registerSpanErrorInstrumentation.addFetchInstrumentationHandler((args) => {
          if (obj.getClient() === closure_0) {
            ({ response, error } = args);
            [tmp27, tmp28] = args.args;
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
                const tmpResult = obj2(682);
                someResult = !tmpResult.isSentryRequestUrl(url, obj2(682).getClient());
                const tmpResult4 = obj2(682);
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
                const client = obj2(682).getClient();
                let BooleanResult = client;
                if (BooleanResult) {
                  const _Boolean = Boolean;
                  BooleanResult = Boolean(client.getOptions().sendDefaultPii);
                }
                if (BooleanResult) {
                  [tmp17, tmp15] = _parseCookieHeaders("Cookie", request);
                  const tmp25Result = _slicedToArray(_parseCookieHeaders("Cookie", request), 2);
                  [tmp16, tmp14] = _parseCookieHeaders("Set-Cookie", response);
                  const tmp25Result2 = _slicedToArray(_parseCookieHeaders("Set-Cookie", response), 2);
                }
                const request1 = { url: null, method: null, status: null, requestHeaders: null, responseHeaders: null, requestCookies: null, responseCookies: null, error: null, type: "fetch" };
                ({ url: obj6.url, method: obj6.method } = request);
                request1.status = response.status;
                request1.requestHeaders = undefined;
                request1.responseHeaders = undefined;
                request1.requestCookies = undefined;
                request1.responseCookies = undefined;
                request1.error = error;
                const tmpResult5 = obj2(682);
                const tmp22 = _createEvent(request1);
                obj2(682).captureEvent(tmp22);
                const tmpResult6 = obj2(682);
              }
            }
            const tmp26 = _slicedToArray(args.args, 2);
          }
          obj = obj2(682);
        }, false);
        const tmp2Result = registerSpanErrorInstrumentation;
      }
      closure_0 = arg0;
      closure_1 = obj2;
      if ("XMLHttpRequest" in registerSpanErrorInstrumentation.GLOBAL_OBJ) {
        const result1 = triggerHandlers.addXhrInstrumentationHandler((arg0) => {
          if (obj.getClient() === closure_0) {
            ({ error, xhr, virtualError } = arg0);
            const tmp16 = xhr[obj2(undefined, 898).SENTRY_XHR_DATA_KEY];
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
                      obj2 = closure_1_0(dependencyMap[1]);
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
          obj = obj2(682);
        });
        const tmp2Result2 = triggerHandlers;
      }
      obj = registerSpanErrorInstrumentation;
    }
  };
});