// === Module 1090: shouldAttachHeaders ===

// Module 1090 (shouldAttachHeaders)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import addClsInstrumentationHandler from "addClsInstrumentationHandler" /* 1033 */;
import baggageHeaderHasSentryValues from "baggageHeaderHasSentryValues" /* 1091 */;

require = arg1;
const dependencyMap = arg6;
function shouldAttachHeaders(str) {
  const locationHref = registerSpanErrorInstrumentation.getLocationHref();
  if (locationHref) {
    try {
      const _URL = URL;
      const uRL = new URL(str, locationHref);
      const _URL2 = URL;
      const uRL1 = new URL(locationHref);
      let tmp18 = tmp17;
      if (arg1) {
        let tmpResult = registerSpanErrorInstrumentation;
        let result = tmpResult.stringMatchesSomePattern(str.toString(), arg1);
        if (!result) {
          let result1 = tmp17;
          if (tmp17) {
            tmpResult = registerSpanErrorInstrumentation;
            result1 = tmpResult.stringMatchesSomePattern(uRL.pathname, arg1);
          }
          result = result1;
        }
        tmp18 = result;
      }
      return tmp18;
    } catch (err) {
      return false;
    }
  } else {
    let result2 = str.match(/^\/(?!\/)/);
    if (arg1) {
      result2 = registerSpanErrorInstrumentation.stringMatchesSomePattern(str, arg1);
      const tmpResult1 = registerSpanErrorInstrumentation;
    }
    return result2;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
const map = new Map();
let obj = { traceFetch: true, traceXHR: true, enableHTTPTimings: true, trackFetchStreamPerformance: false };
arg5.defaultRequestInstrumentationOptions = obj;
arg5.instrumentOutgoingRequests = function instrumentOutgoingRequests(getOptions, arg1) {
  let merged = Object.assign(shouldCreateSpanForRequest);
  let merged1 = Object.assign(arg1);
  ({ shouldCreateSpanForRequest, enableHTTPTimings: require, tracePropagationTargets: dependencyMap, onRequestSpanStart: weakMap, onRequestSpanEnd: map, traceFetch, traceXHR, trackFetchStreamPerformance } = {});
  if (typeof shouldCreateSpanForRequest !== "function") {
    shouldCreateSpanForRequest = (arg0) => true;
  }
  function shouldAttachHeadersWithTargets(url, closure_1) {
    return shouldAttachHeadersWithTargets(url, closure_1);
  }
  closure_6 = {};
  const propagateTraceparent = getOptions.getOptions().propagateTraceparent;
  if (traceFetch) {
    getOptions.addEventProcessor((type) => {
      if (tmp) {
        const spans = type.spans;
        const item = spans.forEach((item, index) => {
          if ("http.client" === item.op) {
            const value = map.get(item.span_id);
            if (value) {
              item.timestamp = value / 1000;
              map.delete(item.span_id);
            }
          }
        });
      }
      return type;
    });
    if (trackFetchStreamPerformance) {
      let result = registerSpanErrorInstrumentation.addFetchEndInstrumentationHandler((response) => {
        if (response.response) {
          const value = closure_2.get(response.response);
          let endTimestamp = value;
          if (value) {
            endTimestamp = response.endTimestamp;
          }
          if (endTimestamp) {
            const result = lib.set(value, response.endTimestamp);
          }
        }
      });
    }
    let result1 = registerSpanErrorInstrumentation.addFetchInstrumentationHandler((response) => {
      obj = { propagateTraceparent, onRequestSpanEnd: closure_3 };
      const result = obj.instrumentFetchRequest(response, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, closure_6, obj);
      if (tmp3) {
        const result1 = weakMap.set(response.response, response.fetchData.__span);
      }
      if (result) {
        let tmpResult = baggageHeaderHasSentryValues;
        const fullURL = tmpResult.getFullURL(response.fetchData.url);
        let host;
        if (fullURL) {
          tmpResult = registerSpanErrorInstrumentation;
          host = tmpResult.parseUrl(fullURL).host;
        }
        let stripDataUrlContentResult;
        if (fullURL) {
          stripDataUrlContentResult = registerSpanErrorInstrumentation.stripDataUrlContent(fullURL);
          const tmpResult1 = registerSpanErrorInstrumentation;
        }
        obj = { "http.url": null, "server.address": null };
        obj[0] = stripDataUrlContentResult;
        obj[1] = host;
        result.setAttributes(obj);
        if (closure_0) {
          closure_0 = result;
          const url = registerSpanErrorInstrumentation.spanToJSON(result).data.url;
          if (url) {
            if (typeof url === "string") {
              closure_2 = addClsInstrumentationHandler.addPerformanceInstrumentationHandler("resource", (arg0) => {
                const entries = arg0.entries;
                const item = entries.forEach((item, index) => {
                  let result = closure_1_0(url2[1]).isPerformanceResourceTiming(item);
                  if (result) {
                    const name = item.name;
                    result = name.endsWith(closure_1);
                  }
                  if (result) {
                    attributes.setAttributes(closure_1_0(url2[2]).resourceTimingToSpanAttributes(item));
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_2);
                    const tmpResult = closure_1_0(url2[2]);
                  }
                  obj = closure_1_0(url2[1]);
                });
              });
              const tmpResult3 = addClsInstrumentationHandler;
            }
          }
          const tmpResult2 = registerSpanErrorInstrumentation;
        }
        if (closure_2 != null) {
          obj1 = { headers: null };
          obj1[0] = response.headers;
          tmp11(result, obj1);
        }
      }
      tmp3 = response.response && response.fetchData.__span;
    });
  }
  if (traceXHR) {
    const result2 = addClsInstrumentationHandler.addXhrInstrumentationHandler((xhr) => {
      xhr = xhr.xhr;
      if (xhr != null) {
        const tmp8 = xhr[addClsInstrumentationHandler.SENTRY_XHR_DATA_KEY];
      }
      let tmp11;
      if (xhr) {
        if (!xhr.__sentry_own_request__) {
          if (tmp8) {
            ({ url, method } = tmp8);
            obj = registerSpanErrorInstrumentation;
            const tmp14 = obj.hasSpansEnabled() && shouldCreateSpanForRequest(url);
            if (xhr.endTimestamp) {
              if (tmp14) {
                const __sentry_xhr_span_id__ = xhr.__sentry_xhr_span_id__;
                if (__sentry_xhr_span_id__) {
                  let tmp74 = obj19;
                  if (table[__sentry_xhr_span_id__]) {
                    tmp74 = undefined !== tmp8.status_code;
                  }
                  if (tmp74) {
                    registerSpanErrorInstrumentation.setHttpStatus(obj19, tmp8.status_code);
                    obj19.end();
                    if (lib != null) {
                      obj = { headers: null, error: null };
                      const obj22 = baggageHeaderHasSentryValues;
                      obj[0] = obj22.createHeadersSafely(addClsInstrumentationHandler.parseXhrResponseHeaders(xhr));
                      obj[1] = xhr.error;
                      lib(obj19, obj);
                    }
                    delete tmp2[tmp];
                  }
                }
              }
            }
            obj1 = baggageHeaderHasSentryValues;
            const fullURL = obj1.getFullURL(url);
            const parseUrl = registerSpanErrorInstrumentation.parseUrl;
            const tmp21 = fullURL ? parseUrl(fullURL) : parseUrl(url);
            let obj2 = registerSpanErrorInstrumentation;
            let obj3 = registerSpanErrorInstrumentation;
            let obj4 = registerSpanErrorInstrumentation;
            const activeSpan = obj4.getActiveSpan();
            if (tmp14) {
              if (activeSpan) {
                obj = { name: null, attributes: null };
                const _HermesInternal = HermesInternal;
                obj[0] = "" + method + " " + stripDataUrlContentResult;
                obj1 = { url: null, type: "xhr", "http.method": null, "http.url": null, "server.address": null };
                const obj7 = registerSpanErrorInstrumentation;
                obj1[0] = registerSpanErrorInstrumentation.stripDataUrlContent(url);
                obj1[2] = method;
                let stripDataUrlContentResult1;
                if (fullURL) {
                  stripDataUrlContentResult1 = registerSpanErrorInstrumentation.stripDataUrlContent(fullURL);
                }
                obj1[3] = stripDataUrlContentResult1;
                let host;
                if (tmp21 != null) {
                  host = tmp21.host;
                }
                obj1[4] = host;
                obj1[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.http.browser";
                obj1[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
                let search;
                if (tmp21 != null) {
                  search = tmp21.search;
                }
                if (search) {
                  let search1;
                  if (tmp21 != null) {
                    search1 = tmp21.search;
                  }
                  obj2 = { "http.query": null };
                  obj2[0] = search1;
                  search = obj2;
                }
                const merged = Object.assign(search);
                let hash;
                if (tmp21 != null) {
                  hash = tmp21.hash;
                }
                if (hash) {
                  let hash1;
                  if (tmp21 != null) {
                    hash1 = tmp21.hash;
                  }
                  obj3 = { "http.fragment": null };
                  obj3[0] = hash1;
                  hash = obj3;
                }
                const merged1 = Object.assign(hash);
                obj[1] = obj1;
                let startInactiveSpanResult = obj7.startInactiveSpan(obj);
              }
              xhr.__sentry_xhr_span_id__ = startInactiveSpanResult.spanContext().spanId;
              table[xhr.__sentry_xhr_span_id__] = startInactiveSpanResult;
              if (typeof shouldAttachHeadersWithTargets !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (shouldAttachHeadersWithTargets(url, url2)) {
                let tmp61;
                if (obj14.hasSpansEnabled()) {
                  if (activeSpan) {
                    tmp61 = startInactiveSpanResult;
                  }
                }
                obj14 = registerSpanErrorInstrumentation;
                obj4 = { span: null, propagateTraceparent: null };
                obj4[0] = tmp61;
                obj4[1] = propagateTraceparent;
                const traceData = registerSpanErrorInstrumentation.getTraceData(obj4);
                ({ sentry-trace: tmp65, baggage, traceparent } = traceData);
                if (tmp65) {
                  (function setHeaderOnXhr(xhr, StringResult, baggage, traceparent) {
                    const __sentry_xhr_v3__ = xhr.__sentry_xhr_v3__;
                    let request_headers;
                    if (__sentry_xhr_v3__ != null) {
                      request_headers = __sentry_xhr_v3__.request_headers;
                    }
                    let prop;
                    if (request_headers != null) {
                      prop = request_headers["sentry-trace"];
                    }
                    if (!prop) {
                      if (xhr.setRequestHeader) {
                        try {
                          xhr.setRequestHeader("sentry-trace", StringResult);
                          let tmp6 = traceparent;
                          if (traceparent) {
                            traceparent = undefined;
                            if (request_headers != null) {
                              traceparent = request_headers.traceparent;
                            }
                            tmp6 = !traceparent;
                          }
                          if (tmp6) {
                            xhr.setRequestHeader("traceparent", traceparent);
                          }
                          if (baggage) {
                            baggage = undefined;
                            if (request_headers != null) {
                              baggage = request_headers.baggage;
                            }
                            if (baggage) {
                              baggage = startInactiveSpanResult(url2[1]).baggageHeaderHasSentryValues(baggage);
                              obj = startInactiveSpanResult(url2[1]);
                            }
                            if (!baggage) {
                              xhr.setRequestHeader("baggage", baggage);
                            }
                          }
                        } catch (err) {
                        }
                      }
                    }
                  })(xhr, tmp65, baggage, traceparent);
                }
              }
              const client = registerSpanErrorInstrumentation.getClient();
              tmp11 = startInactiveSpanResult;
              if (client) {
                client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, xhr);
                tmp11 = startInactiveSpanResult;
              }
            }
            startInactiveSpanResult = new registerSpanErrorInstrumentation.SentryNonRecordingSpan();
            stripDataUrlContentResult = obj2.stripDataUrlContent(obj3.stripUrlQueryAndFragment(url));
          }
        }
      }
      if (tmp11) {
        if (closure_0) {
          closure_0 = tmp11;
          url2 = registerSpanErrorInstrumentation.spanToJSON(tmp11).data.url;
          if (url2) {
            if (typeof url2 === "string") {
              closure_2 = addClsInstrumentationHandler.addPerformanceInstrumentationHandler("resource", (arg0) => {
                const entries = arg0.entries;
                const item = entries.forEach((item, index) => {
                  let result = closure_1_0(url2[1]).isPerformanceResourceTiming(item);
                  if (result) {
                    const name = item.name;
                    result = name.endsWith(closure_1);
                  }
                  if (result) {
                    attributes.setAttributes(closure_1_0(url2[2]).resourceTimingToSpanAttributes(item));
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_2);
                    const tmpResult = closure_1_0(url2[2]);
                  }
                  obj = closure_1_0(url2[1]);
                });
              });
              const tmp85Result = addClsInstrumentationHandler;
            }
          }
        }
        if (closure_2 != null) {
          let __sentry_xhr_v3__ = xhr.xhr.__sentry_xhr_v3__;
          let request_headers;
          if (__sentry_xhr_v3__ != null) {
            request_headers = __sentry_xhr_v3__.request_headers;
          }
          const obj5 = { headers: null };
          obj5[0] = baggageHeaderHasSentryValues.createHeadersSafely(request_headers);
          tmp87(tmp11, obj5);
        }
      }
    });
  }
};
arg5.shouldAttachHeaders = shouldAttachHeaders;