// === Module 961: httpClientIntegration ===

// Module 961 (httpClientIntegration)
import _addMeasureSpans from "_addMeasureSpans" /* 909 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

function _parseCookieHeaders(arg0, headers) {
  function _extractFetchHeaders(headers) {
    const obj = {};
    const item = headers.forEach((item, index) => {
      obj[index] = item;
    });
    return obj;
  }
  let tmp;
  const tmp2 = _extractFetchHeaders(headers.headers);
  try {
    const tmp4 = tmp2[arg0] || tmp2[arg0.toLowerCase(arg0)];
    const tmp5 = tmp4;
    if (tmp5) {
      tmp = _parseCookieString(tmp4);
    }
  } catch (err) {
  }
  const items = [tmp2, tmp];
  return items;
}
function _parseCookieString(str) {
  const parts = str.split("; ");
  return parts.reduce((acc, item) => {
    let tmp2;
    let tmp3;
    [tmp2, tmp3] = item.split("=");
    _slicedToArray(item.split("="), 2);
    const tmp4 = tmp2 && tmp3;
    if (tmp4) {
      acc[tmp2] = tmp3;
    }
    return acc;
  }, {});
}
function _shouldCaptureResponse(failedRequestStatusCodes, arg1, arg2) {
  failedRequestStatusCodes = failedRequestStatusCodes.failedRequestStatusCodes;
  let closure_0 = arg1;
  let someResult = failedRequestStatusCodes.some((item) => {
    let tmp;
    if (typeof item === "number") {
      tmp = item === status;
    } else {
      tmp = status >= item[0] && tmp3 <= item[1];
    }
    return tmp;
  });
  if (someResult) {
    const failedRequestTargets = failedRequestStatusCodes.failedRequestTargets;
    closure_0 = arg2;
    someResult = failedRequestTargets.some((test) => {
      let hasItem;
      if (typeof test === "string") {
        hasItem = url.includes(test);
      } else {
        hasItem = test.test(url);
      }
      return hasItem;
    });
  }
  if (someResult) {
    const isSentryRequestUrl = registerSpanErrorInstrumentation.isSentryRequestUrl;
    registerSpanErrorInstrumentation;
    const obj = registerSpanErrorInstrumentation;
    someResult = !isSentryRequestUrl(arg2, obj.getClient());
  }
  return someResult;
}
function _createEvent(error) {
  let items;
  let obj5;
  let obj6;
  let parsed;
  let tmp7;
  const obj = registerSpanErrorInstrumentation;
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
  const obj2 = { message: combined, exception: obj5, request: { url: error.url, method: error.method, headers: error.requestHeaders, cookies: error.requestCookies }, contexts: { response: obj6 } };
  const obj3 = { type: "Error", value: combined, stacktrace: tmp7 };
  tmp7 = undefined;
  if (stackParserResult) {
    tmp7 = { frames: stackParserResult };
    const obj4 = { frames: stackParserResult };
  }
  obj5 = { values: items };
  items = [obj3];
  const responseHeaders = error.responseHeaders;
  obj6 = { status_code: error.status, headers: error.responseHeaders, cookies: error.responseCookies, body_size: parsed };
  parsed = undefined;
  if (responseHeaders) {
    if (responseHeaders["Content-Length"] || responseHeaders["content-length"]) {
      const _parseInt = parseInt;
      parsed = parseInt(tmp9, 10);
    }
  }
  const tmpResult = registerSpanErrorInstrumentation;
  const obj7 = { type: "auto.http.client." + error.type, handled: false };
  const result = tmpResult.addExceptionMechanism(obj2, obj7);
  return obj2;
}
function _shouldSendDefaultPii() {
  const obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  let BooleanResult = client;
  if (BooleanResult) {
    const _Boolean = Boolean;
    BooleanResult = Boolean(client.getOptions().sendDefaultPii);
  }
  return BooleanResult;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const httpClientIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let items;
  let items1;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = { failedRequestStatusCodes: items, failedRequestTargets: items1 };
  items = [[500, 599]];
  items1 = [/.*/];
  const merged = Object.assign(obj);
  return {
    name: "HttpClient",
    setup(arg0) {
      let closure_0 = arg0;
      let closure_1 = obj2;
      let obj = registerSpanErrorInstrumentation;
      if (obj.supportsNativeFetch()) {
        const tmp2Result = registerSpanErrorInstrumentation;
        const result = tmp2Result.addFetchInstrumentationHandler(function(virtualError) {
          let error;
          let response;
          let tmp13;
          let tmp14;
          let tmp15;
          let tmp16;
          let tmp26;
          let tmp27;
          const obj = obj2(closure_2_1[1]);
          if (obj.getClient() === closure_0) {
            ({ response, error } = virtualError);
            virtualError = virtualError.virtualError;
            [tmp26, tmp27] = closure_2_2(virtualError.args, 2);
            closure_2_2(virtualError.args, 2);
            if (response) {
              if (!error) {
                error = virtualError;
              }
              const url = response.url;
              const failedRequestStatusCodes = closure_1.failedRequestStatusCodes;
              const status = response.status;
              let someResult = failedRequestStatusCodes.some((item) => {
                let tmp;
                if (typeof item === "number") {
                  tmp = item === status;
                } else {
                  tmp = status >= item[0] && tmp3 <= item[1];
                }
                return tmp;
              });
              if (someResult) {
                const failedRequestTargets = closure_1.failedRequestTargets;
                someResult = failedRequestTargets.some((test) => {
                  let hasItem;
                  if (typeof test === "string") {
                    hasItem = url.includes(test);
                  } else {
                    hasItem = test.test(url);
                  }
                  return hasItem;
                });
              }
              if (someResult) {
                const isSentryRequestUrl = obj2(closure_2_1[1]).isSentryRequestUrl;
                obj2(closure_2_1[1]);
                const tmpResult4 = obj2(closure_2_1[1]);
                someResult = !isSentryRequestUrl(url, tmpResult4.getClient());
              }
              if (someResult) {
                let request;
                if (tmp27) {
                  const _Request2 = Request;
                  if (!(tmp26 instanceof Request)) {
                    const _Request3 = Request;
                    const self = this;
                    const self2 = this;
                    request = new Request(tmp26, tmp27);
                  } else {
                    request = tmp26;
                  }
                } else {
                  const _Request = Request;
                  request = tmp26;
                }
                const tmpResult5 = obj2(closure_2_1[1]);
                const client = tmpResult5.getClient();
                let BooleanResult = client;
                if (BooleanResult) {
                  const _Boolean = Boolean;
                  BooleanResult = Boolean(client.getOptions().sendDefaultPii);
                }
                if (BooleanResult) {
                  [tmp16, tmp14] = closure_2_2(closure_2_3("Cookie", request), 2);
                  closure_2_2(closure_2_3("Cookie", request), 2);
                  [tmp15, tmp13] = closure_2_2(closure_2_3("Set-Cookie", response), 2);
                  closure_2_2(closure_2_3("Set-Cookie", response), 2);
                }
                const request1 = { url: null, method: null, status: response.status, requestHeaders: undefined, responseHeaders: undefined, requestCookies: undefined, responseCookies: undefined, error, type: "fetch" };
                ({ url: obj5.url, method: obj5.method } = request);
                const tmp21 = closure_2_6(request1);
                const tmpResult6 = obj2(closure_2_1[1]);
                tmpResult6.captureEvent(tmp21);
              }
            }
          }
        }, false);
      }
      closure_0 = arg0;
      closure_1 = obj2;
      if ("XMLHttpRequest" in registerSpanErrorInstrumentation.GLOBAL_OBJ) {
        const tmp2Result2 = _addMeasureSpans;
        const result1 = tmp2Result2.addXhrInstrumentationHandler((arg0) => {
          let error;
          let method;
          let request_headers;
          let virtualError;
          let xhr;
          function _xhrResponseHandler(arg0, xhr, method, request_headers, error) {
            function _getXHRResponseHeaders(getAllResponseHeaders) {
              const str = getAllResponseHeaders.getAllResponseHeaders();
              if (str) {
                const parts = str.split("\r\n");
                return parts.reduce((acc, item) => {
                  let tmp2;
                  let tmp3;
                  [tmp2, tmp3] = closure_1_2(item.split(": "), 2);
                  closure_1_2(item.split(": "), 2);
                  const tmp4 = tmp2 && tmp3;
                  if (tmp4) {
                    acc[tmp2] = tmp3;
                  }
                  return acc;
                }, {});
              } else {
                return {};
              }
            }
            if (closure_1_5(arg0, xhr.status, xhr.responseURL)) {
              let tmp;
              let tmp2;
              let tmp4;
              if (closure_1_7()) {
                try {
                  let str = "Set-Cookie";
                  let responseHeader = xhr.getResponseHeader("Set-Cookie");
                  if (!responseHeader) {
                    responseHeader = xhr.getResponseHeader("set-cookie");
                  }
                  const tmp6 = responseHeader;
                  if (tmp6) {
                    tmp = closure_1_4(responseHeader);
                  }
                } catch (err) {
                }
                try {
                  tmp2 = _getXHRResponseHeaders(xhr);
                } catch (err) {
                }
                tmp4 = request_headers;
              }
              const request = { url: xhr.responseURL, method, status: xhr.status, requestHeaders: tmp4, responseHeaders: tmp2, responseCookies: tmp, error, type: "xhr" };
              const tmp11 = closure_1_6(request);
              obj2 = closure_1_0(closure_1_1[1]);
              obj2.captureEvent(tmp11);
            }
          }
          const obj = obj2(closure_2_1[1]);
          if (obj.getClient() === closure_0) {
            ({ error, xhr, virtualError } = arg0);
            const tmp13 = xhr[obj2(undefined, closure_2_1[2]).SENTRY_XHR_DATA_KEY];
            if (tmp13) {
              ({ method, request_headers } = tmp13);
              try {
                if (!error) {
                  error = virtualError;
                }
                _xhrResponseHandler(closure_1, xhr, method, request_headers, error);
              } catch (tmp10) {
                if (obj2(closure_2_1[3]).DEBUG_BUILD) {
                  const debug = obj2(closure_2_1[1]).debug;
                  let str = "Error while extracting response event form XHR response";
                  debug.warn("Error while extracting response event form XHR response", tmp10);
                }
              }
            }
          }
        });
      }
    }
  };
});