// _runtime/01085__parseCookieHeaders.js
import _slicedToArray from "_slicedToArray";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

function _parseCookieHeaders(arg0, headers) {
  const tmp2 = (function _extractFetchHeaders(headers) {
    const obj = {};
    const item = headers.forEach((arg0, arg1) => {
      obj[arg1] = arg0;
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
  return parts.reduce((arg0, str) => {
    let tmp2;
    let tmp3;
    [tmp2, tmp3] = callback(str.split("="), 2);
    let tmp4 = tmp2;
    if (tmp2) {
      tmp4 = tmp3;
    }
    if (tmp4) {
      arg0[tmp2] = tmp3;
    }
    return arg0;
  }, {});
}
function _shouldCaptureResponse(failedRequestStatusCodes) {
  failedRequestStatusCodes = failedRequestStatusCodes.failedRequestStatusCodes;
  let _require = arg1;
  let someResult = failedRequestStatusCodes.some((num) => {
    if (typeof num === "number") {
      let tmp = num === url;
    } else {
      tmp = url >= num[0] && tmp3 <= num[1];
    }
    return tmp;
  });
  if (someResult) {
    const failedRequestTargets = failedRequestStatusCodes.failedRequestTargets;
    _require = arg2;
    someResult = failedRequestTargets.some((str) => {
      if (typeof str === "string") {
        let hasItem = url.includes(str);
      } else {
        hasItem = str.test(url);
      }
      return hasItem;
    });
  }
  if (someResult) {
    const obj = _require(817);
    someResult = !obj.isSentryRequestUrl(arg2, _require(817).getClient());
    const obj2 = _require(817);
  }
  return someResult;
}
function _createEvent(error) {
  let obj = require(817) /* registerSpanErrorInstrumentation */;
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
    const obj1 = { frames: null };
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
  const tmp = require;
  const tmpResult = require(817) /* registerSpanErrorInstrumentation */;
  const result = tmpResult.addExceptionMechanism(obj, { type: "auto.http.client." + error.type, handled: false });
  return obj;
}
function _shouldSendDefaultPii() {
  const client = require(817) /* registerSpanErrorInstrumentation */.getClient();
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
  obj = undefined;
  obj = { failedRequestStatusCodes: items, failedRequestTargets: items1 };
  items = [[500, 599]];
  items1 = [/.*/];
  const merged = Object.assign(obj);
  obj = {
    name: "HttpClient",
    setup(arg0) {
      let closure_0 = arg0;
      let closure_1 = closure_0;
      obj = obj(outer1_1[1]);
      if (obj.supportsNativeFetch()) {
        let tmp2Result = tmp2(tmp3[1]);
        const result = tmp2Result.addFetchInstrumentationHandler((args) => {
          let error;
          let response;
          let tmp14;
          let tmp15;
          let tmp16;
          let tmp17;
          let tmp27;
          let tmp28;
          let obj = callback(tmp[1]);
          if (obj.getClient() === url) {
            ({ response, error } = args);
            [tmp27, tmp28] = outer1_2(args.args, 2);
            if (response) {
              if (!error) {
                error = args.virtualError;
              }
              url = response.url;
              const failedRequestStatusCodes = tmp3.failedRequestStatusCodes;
              url = response.status;
              let someResult = failedRequestStatusCodes.some((num) => {
                if (typeof num === "number") {
                  let tmp = num === url;
                } else {
                  tmp = url >= num[0] && tmp3 <= num[1];
                }
                return tmp;
              });
              if (someResult) {
                const failedRequestTargets = tmp3.failedRequestTargets;
                someResult = failedRequestTargets.some((str) => {
                  if (typeof str === "string") {
                    let hasItem = url.includes(str);
                  } else {
                    hasItem = str.test(url);
                  }
                  return hasItem;
                });
              }
              if (someResult) {
                let tmpResult = tmp(tmp2[1]);
                tmpResult = tmp(tmp2[1]);
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
                const client = tmp(tmp2[1]).getClient();
                let BooleanResult = client;
                if (BooleanResult) {
                  const _Boolean = Boolean;
                  BooleanResult = Boolean(client.getOptions().sendDefaultPii);
                }
                if (BooleanResult) {
                  let tmp25Result = tmp25(outer1_3("Cookie", request), 2);
                  [tmp17, tmp15] = tmp25Result;
                  tmp25Result = tmp25(outer1_3("Set-Cookie", response), 2);
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
                const tmpResult1 = tmp(tmp2[1]);
                const tmp22 = outer1_6(obj);
                tmp(tmp2[1]).captureEvent(tmp22);
                const tmpResult2 = tmp(tmp2[1]);
              }
            }
            const tmp26 = outer1_2(args.args, 2);
          }
        }, false);
      }
      closure_0 = arg0;
      closure_1 = closure_0;
      if ("XMLHttpRequest" in obj(outer1_1[1]).GLOBAL_OBJ) {
        tmp2Result = tmp2(tmp3[2]);
        const result1 = tmp2Result.addXhrInstrumentationHandler((arg0) => {
          let error;
          let method;
          let request_headers;
          let virtualError;
          let xhr;
          if (obj.getClient() === callback) {
            ({ error, xhr, virtualError } = arg0);
            const tmp16 = xhr[tmp4(undefined, tmp5[2]).SENTRY_XHR_DATA_KEY];
            if (tmp16) {
              ({ method, request_headers } = tmp16);
              try {
                if (!error) {
                  error = virtualError;
                }
                (function _xhrResponseHandler(arg0, xhr, method, request_headers, error) {
                  if (callback3(arg0, xhr.status, xhr.responseURL)) {
                    if (!callback5()) {
                      const obj = { url: null, method: null, status: null, requestHeaders: null, responseHeaders: null, responseCookies: null, error: null, type: "xhr" };
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
                })(tmp, xhr, method, request_headers, error);
              } catch (tmp13) {
                if (tmp3(tmp2[3]).DEBUG_BUILD) {
                  const debug = tmp3(tmp2[1]).debug;
                  debug.warn("Error while extracting response event form XHR response", tmp13);
                }
              }
            }
          }
        });
      }
    }
  };
  return obj;
});