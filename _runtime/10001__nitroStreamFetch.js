// _runtime/10001__nitroStreamFetch.js
import _mod9998 from "metro/09998__.js";
import _resolveRequestBody from "09999__resolveRequestBody.js";
import applyDefaultContentType from "10000_applyDefaultContentType.js";
import _mod10002 from "metro/10002__.js";
import NetworkInspectorImpl from "10003_NetworkInspectorImpl.js";
import hybridObject from "10005_hybridObject.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = arg1;
let closure_4 = async function _nitroStreamFetch(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        const request = closure_1;
        closure_0 = closure_1;
        let signal;
        if (closure_1 != null) {
          signal = request.signal;
        }
        let aborted;
        if (signal != null) {
          aborted = signal.aborted;
        }
        if (aborted) {
          throw _mod10002.createAbortError(signal);
        } else {
          const urlString = _mod9998.getUrlString(tmp59);
          let method;
          if (request != null) {
            method = request.method;
          }
          let method1 = method;
          if (method == null) {
            method1 = undefined;
            if (tmp59 != null) {
              method1 = tmp59.method;
            }
          }
          let formatted;
          if (method1 != null) {
            formatted = str.toUpperCase();
          }
          let GET = formatted;
          if (formatted == null) {
            GET = "GET";
          }
          str = method1;
          const tmp6Result8 = _mod9998;
          let headers;
          if (request != null) {
            headers = request.headers;
          }
          let headers1 = headers;
          if (headers == null) {
            headers1 = undefined;
            if (tmp59 != null) {
              headers1 = tmp59.headers;
            }
          }
          const headersToPairsResult = applyDefaultContentType.headersToPairs(headers1);
          closure_4 = headersToPairsResult;
          if (headersToPairsResult == null) {
            closure_4 = [];
          }
          const tmp6Result9 = applyDefaultContentType;
          let body;
          if (request != null) {
            body = request.body;
          }
          _resolveRequestBody.assertBodyAllowed(GET, body);
          const tmp6Result10 = _resolveRequestBody;
          let body1;
          if (request != null) {
            body1 = request.body;
          }
          let normalizeBodyResult = _resolveRequestBody.normalizeBody(body1);
          const tmp6Result11 = _resolveRequestBody;
          let contentType;
          if (normalizeBodyResult != null) {
            contentType = normalizeBodyResult.contentType;
          }
          const result = applyDefaultContentType.applyDefaultContentType(arr, contentType);
          const tmp6Result12 = applyDefaultContentType;
          let cache;
          if (request != null) {
            cache = request.cache;
          }
          applyDefaultContentType.applyCacheHeaders(closure_4, cache);
          const tmp6Result13 = applyDefaultContentType;
          const result1 = applyDefaultContentType.normalizeAndValidateHeaders(arr);
          let NetworkInspector = NetworkInspectorImpl.NetworkInspector;
          if (NetworkInspector.isEnabled()) {
            const _String = String;
            const _Date = Date;
            const _String2 = String;
            const _Math = Math;
            const text = `${String(Date.now())}-`;
            String(Math.random());
            const text1 = `${String(Date.now())}-${arr2.slice(2, 8)}`;
            let NetworkInspector2 = NetworkInspectorImpl.NetworkInspector;
            let bodyString;
            if (normalizeBodyResult != null) {
              bodyString = normalizeBodyResult.bodyString;
            }
            NetworkInspector2._recordStart(text1, urlString, tmp12, arr, bodyString);
          }
          const NitroCronetSingleton = hybridObject.NitroCronetSingleton;
          let newUrlRequestBuilderResult = NitroCronetSingleton.newUrlRequestBuilder(urlString);
          method1 = newUrlRequestBuilderResult;
          let _useDefaultClient;
          if (request != null) {
            _useDefaultClient = request._useDefaultClient;
          }
          if (_useDefaultClient) {
            const defaultClient = newUrlRequestBuilderResult.useDefaultClient();
          }
          newUrlRequestBuilderResult.setHttpMethod(GET);
          let credentials;
          if (request != null) {
            credentials = request.credentials;
          }
          if ("omit" === credentials) {
            newUrlRequestBuilderResult.disableCookies();
          }
          let priority;
          if (request != null) {
            priority = request.priority;
          }
          let tmp43 = "high" !== priority;
          if (tmp43) {
            let priority1;
            if (request != null) {
              priority1 = request.priority;
            }
            tmp43 = "low" !== priority1;
          }
          if (!tmp43) {
            newUrlRequestBuilderResult.setPriority(request.priority);
          }
          const item = arr.forEach((key) => {
            if ("prefetchkey" !== str.toLowerCase()) {
              newUrlRequestBuilderResult.addHeader(key.key, key.value);
            }
            str = key.key;
          });
          let bodyBytes;
          if (normalizeBodyResult != null) {
            bodyBytes = normalizeBodyResult.bodyBytes;
          }
          if (bodyBytes) {
            newUrlRequestBuilderResult.setUploadBody(normalizeBodyResult.bodyBytes);
          } else {
            let bodyString1;
            if (normalizeBodyResult != null) {
              bodyString1 = normalizeBodyResult.bodyString;
            }
            if (null != bodyString1) {
              newUrlRequestBuilderResult.setUploadBody(normalizeBodyResult.bodyString);
            }
          }
          normalizeBodyResult = new.target;
          new Promise((arg0, arg1) => {
            closure_0 = arg0;
            dependencyMap = arg1;
            function cleanupAbortListener() {
              let tmp = signal;
              if (signal) {
                tmp = c3;
              }
              if (tmp) {
                const removed = signal.removeEventListener("abort", c3);
                c3 = undefined;
              }
            }
            c5 = false;
            const readableStream = new ReadableStream({
              start(arg0) {
                closure_2 = arg0;
              },
              cancel() {
                c5 = true;
                cleanupAbortListener();
                try {
                  buildResult.cancel();
                } catch (err) {}
              },
            });
            c7 = false;
            closure_8 = 0;
            function release() {
              _undefined.onRedirectReceived(newUrlRequestBuilderResult);
              _undefined.onResponseStarted(newUrlRequestBuilderResult);
              _undefined.onReadCompleted(newUrlRequestBuilderResult);
              _undefined.onSucceeded(newUrlRequestBuilderResult);
              _undefined.onFailed(newUrlRequestBuilderResult);
              _undefined.onCanceled(newUrlRequestBuilderResult);
            }
            c10 = false;
            function settleAborted() {
              if (!c10) {
                c10 = true;
                if (typeof release === "function") {
                  newUrlRequestBuilderResult.onRedirectReceived(method1);
                  newUrlRequestBuilderResult.onResponseStarted(method1);
                  newUrlRequestBuilderResult.onReadCompleted(method1);
                  newUrlRequestBuilderResult.onSucceeded(method1);
                  newUrlRequestBuilderResult.onFailed(method1);
                  newUrlRequestBuilderResult.onCanceled(method1);
                  let tmp10 = signal;
                  if (signal) {
                    tmp10 = c3;
                  }
                  if (tmp10) {
                    const removed = signal.removeEventListener("abort", c3);
                    c3 = undefined;
                  }
                  if (text1) {
                    const NetworkInspector = closure_0(10003).NetworkInspector;
                    NetworkInspector._recordEnd(text1, 0, "", [], 0, "Request aborted");
                  }
                  const abortError = closure_0(10002).createAbortError(signal);
                  if (c7) {
                    closure_2.error(abortError);
                  } else {
                    c7 = true;
                    dependencyMap(abortError);
                  }
                  const obj2 = closure_0(10002);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            }
            c12 = false;
            function resolveWith(httpStatusCode) {
              c7 = true;
              httpStatusCode = httpStatusCode.httpStatusCode;
              const entries = Object.entries(httpStatusCode.allHeaders);
              const nitroHeaders = new closure_0(9993).NitroHeaders(
                entries.map((item) => {
                  [tmp, tmp2] = item;
                  return { key, value };
                }),
              );
              const response = {
                url: httpStatusCode.url,
                ok: null,
                status: null,
                statusText: null,
                headers: null,
                redirected: null,
                body: null,
              };
              let tmp2 = httpStatusCode >= 200;
              if (tmp2) {
                tmp2 = httpStatusCode < 300;
              }
              response.ok = tmp2;
              response.status = httpStatusCode;
              response.statusText = httpStatusCode.httpStatusText;
              response.headers = nitroHeaders;
              response.redirected = redirected;
              response.body = readableStream;
              const nitroResponse = new closure_0(9997).NitroResponse(response);
              closure_0(nitroResponse);
            }
            c14 = false;
            newUrlRequestBuilderResult.onRedirectReceived((httpStatusCode, arg1) => {
              if (!c7) {
                let redirect;
                if (closure_0 != null) {
                  redirect = closure_0.redirect;
                }
                if ("error" !== redirect) {
                  let redirect1;
                  if (closure_0 != null) {
                    redirect1 = closure_0.redirect;
                  }
                  if ("manual" !== redirect1) {
                    c12 = true;
                    buildResult.followRedirect();
                  }
                }
                c14 = true;
                release();
                cleanupAbortListener();
                if ("manual" === closure_0.redirect) {
                  resolveWith(httpStatusCode);
                  closure_2.close();
                  if (text1) {
                    const NetworkInspector2 = closure_0(10003).NetworkInspector;
                    NetworkInspector2._recordEnd(
                      text1,
                      httpStatusCode.httpStatusCode,
                      httpStatusCode.httpStatusText,
                      httpStatusCode.allHeadersAsList,
                      0,
                    );
                  }
                } else {
                  const _TypeError = TypeError;
                  const _HermesInternal = HermesInternal;
                  const typeError = new TypeError('redirect mode is "error": redirected request to "' + arg1 + '"');
                  if (text1) {
                    const NetworkInspector = closure_0(10003).NetworkInspector;
                    NetworkInspector._recordEnd(text1, 0, "", [], 0, typeError.message);
                  }
                  c7 = true;
                  dependencyMap(typeError);
                }
                try {
                  buildResult.cancel();
                } catch (err) {}
              }
            });
            newUrlRequestBuilderResult.onResponseStarted((httpStatusCode) => {
              let tmp = c7;
              if (!c7) {
                let aborted;
                if (signal != null) {
                  aborted = signal.aborted;
                }
                tmp = aborted;
              }
              if (!tmp) {
                if (typeof resolveWith === "function") {
                  c7 = true;
                  httpStatusCode = httpStatusCode.httpStatusCode;
                  const _Object = Object;
                  const entries = Object.entries(httpStatusCode.allHeaders);
                  const nitroHeaders = new closure_0(9993).NitroHeaders(
                    entries.map((item) => {
                      [tmp, tmp2] = item;
                      return { key, value };
                    }),
                  );
                  const response = {
                    url: httpStatusCode.url,
                    ok: null,
                    status: null,
                    statusText: null,
                    headers: null,
                    redirected: null,
                    body: null,
                  };
                  let tmp12 = httpStatusCode >= 200;
                  if (tmp12) {
                    tmp12 = httpStatusCode < 300;
                  }
                  response.ok = tmp12;
                  response.status = httpStatusCode;
                  response.statusText = httpStatusCode.httpStatusText;
                  response.headers = nitroHeaders;
                  response.redirected = redirected;
                  response.body = readableStream;
                  const nitroResponse = new closure_0(9997).NitroResponse(response);
                  closure_0(nitroResponse);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            });
            newUrlRequestBuilderResult.onReadCompleted((arg0, arg1, arg2) => {
              if (!c5) {
                if (!c14) {
                  let aborted;
                  if (signal != null) {
                    aborted = signal.aborted;
                  }
                  if (!aborted) {
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(arg1, 0, arg2);
                    closure_8 = closure_8 + arg2;
                    closure_2.enqueue(uint8Array.slice());
                    buildResult.read();
                  }
                }
              }
            });
            newUrlRequestBuilderResult.onSucceeded((httpStatusCode) => {
              if (typeof release === "function") {
                newUrlRequestBuilderResult.onRedirectReceived(method1);
                newUrlRequestBuilderResult.onResponseStarted(method1);
                newUrlRequestBuilderResult.onReadCompleted(method1);
                newUrlRequestBuilderResult.onSucceeded(method1);
                newUrlRequestBuilderResult.onFailed(method1);
                newUrlRequestBuilderResult.onCanceled(method1);
                let tmp9 = signal;
                if (signal) {
                  tmp9 = c3;
                }
                if (tmp9) {
                  const removed = signal.removeEventListener("abort", c3);
                  c3 = undefined;
                }
                if (!c5) {
                  if (!c14) {
                    let aborted;
                    if (signal != null) {
                      aborted = signal.aborted;
                    }
                    if (!aborted) {
                      closure_2.close();
                      if (text1) {
                        let num;
                        if (httpStatusCode != null) {
                          num = httpStatusCode.httpStatusCode;
                        }
                        if (num == null) {
                          num = 0;
                        }
                        let allHeadersAsList;
                        if (httpStatusCode != null) {
                          allHeadersAsList = httpStatusCode.allHeadersAsList;
                        }
                        if (allHeadersAsList == null) {
                          allHeadersAsList = [];
                        }
                        const NetworkInspector = closure_0(10003).NetworkInspector;
                        let str2;
                        if (httpStatusCode != null) {
                          str2 = httpStatusCode.httpStatusText;
                        }
                        if (str2 == null) {
                          str2 = "";
                        }
                        NetworkInspector._recordEnd(text1, num, str2, allHeadersAsList, closure_8);
                      }
                    }
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            newUrlRequestBuilderResult.onFailed((arg0, message) => {
              let aborted;
              if (signal != null) {
                aborted = signal.aborted;
              }
              if (aborted) {
                settleAborted();
              } else if (typeof release === "function") {
                newUrlRequestBuilderResult.onRedirectReceived(method1);
                newUrlRequestBuilderResult.onResponseStarted(method1);
                newUrlRequestBuilderResult.onReadCompleted(method1);
                newUrlRequestBuilderResult.onSucceeded(method1);
                newUrlRequestBuilderResult.onFailed(method1);
                newUrlRequestBuilderResult.onCanceled(method1);
                let tmp11 = signal;
                if (signal) {
                  tmp11 = c3;
                }
                if (tmp11) {
                  const removed = signal.removeEventListener("abort", c3);
                  c3 = undefined;
                }
                const _Error = Error;
                const error = new Error(message.message);
                if (text1) {
                  const NetworkInspector = closure_0(10003).NetworkInspector;
                  NetworkInspector._recordEnd(text1, 0, "", [], 0, message.message);
                }
                if (c7) {
                  closure_2.error(error);
                } else {
                  c7 = true;
                  dependencyMap(error);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            newUrlRequestBuilderResult.onCanceled(() => {
              if (!c14) {
                settleAborted();
              }
            });
            const buildResult = newUrlRequestBuilderResult.build();
            if (dependencyMap) {
              newUrlRequestBuilderResult = function l() {
                try {
                  buildResult.cancel();
                  settleAborted();
                } catch (err) {}
              };
              const listener = dependencyMap.addEventListener("abort", newUrlRequestBuilderResult, { once: true });
            }
            buildResult.start();
          });
          c6 = 3;
          const tmp6Result14 = applyDefaultContentType;
        }
      }
    } catch (tmp54) {
      c6 = tmp;
      throw tmp54;
    }
  }
};
function noop() {}

export function nitroStreamFetch(arg0, arg1) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
