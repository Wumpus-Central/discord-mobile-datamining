// === Module 955: instrumentOutgoingRequests ===

// Module 955 (instrumentOutgoingRequests)
import _mod682 from "module_682" /* 682 */;
import triggerHandlers from "triggerHandlers" /* 898 */;
import baggageHeaderHasSentryValues from "baggageHeaderHasSentryValues" /* 956 */;

require = arg1;
const dependencyMap = arg6;
function shouldAttachHeaders(url, dependencyMap) {
  const locationHref = _mod682.getLocationHref();
  if (locationHref) {
    try {
      const _URL = URL;
      const uRL = new URL(url, locationHref);
      const _URL2 = URL;
      const uRL1 = new URL(locationHref);
      let tmp18 = tmp17;
      if (dependencyMap) {
        let result = _mod682.stringMatchesSomePattern(str.toString(), dependencyMap);
        if (!result) {
          let result1 = tmp17;
          if (tmp17) {
            result1 = _mod682.stringMatchesSomePattern(uRL.pathname, dependencyMap);
            const tmpResult3 = _mod682;
          }
          result = result1;
        }
        tmp18 = result;
        const tmpResult = _mod682;
      }
      return tmp18;
    } catch (err) {
      return false;
    }
  } else {
    let result2 = url.match(/^\/(?!\/)/);
    if (dependencyMap) {
      result2 = _mod682.stringMatchesSomePattern(url, dependencyMap);
      const tmpResult4 = _mod682;
    }
    return result2;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
const map = new Map();
const defaultRequestInstrumentationOptions = { traceFetch: true, traceXHR: true, enableHTTPTimings: true, trackFetchStreamPerformance: false };

export { defaultRequestInstrumentationOptions };
export const instrumentOutgoingRequests = function instrumentOutgoingRequests(getOptions, arg1) {
  let merged = Object.assign(shouldCreateSpanForRequest);
  let merged1 = Object.assign(arg1);
  ({ shouldCreateSpanForRequest, enableHTTPTimings: require, tracePropagationTargets: dependencyMap, onRequestSpanStart: weakMap, onRequestSpanEnd: map, traceFetch, traceXHR, trackFetchStreamPerformance } = {});
  if (typeof shouldCreateSpanForRequest !== "function") {
    shouldCreateSpanForRequest = (arg0) => true;
  }
  function shouldAttachHeadersWithTargets(url) {
    return shouldAttachHeaders(url, dependencyMap);
  }
  closure_6 = {};
  const propagateTraceparent = getOptions.getOptions().propagateTraceparent;
  if (traceFetch) {
    getOptions.addEventProcessor((type) => {
      if (tmp) {
        const spans = type.spans;
        const item = spans.forEach((op) => {
          if ("http.client" === op.op) {
            value = onRequestSpanEnd.get(op.span_id);
            if (value) {
              op.timestamp = value / 1000;
              onRequestSpanEnd.delete(op.span_id);
            }
          }
        });
      }
      return type;
    });
    if (trackFetchStreamPerformance) {
      let result = _mod682.addFetchEndInstrumentationHandler((response) => {
        if (response.response) {
          value = weakMap.get(response.response);
          let endTimestamp = value;
          if (value) {
            endTimestamp = response.endTimestamp;
          }
          if (endTimestamp) {
            const result = onRequestSpanEnd.set(value, response.endTimestamp);
          }
        }
      });
    }
    let result1 = _mod682.addFetchInstrumentationHandler((response) => {
      const result = _mod682.instrumentFetchRequest(response, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, closure_6, { propagateTraceparent, onRequestSpanEnd });
      if (tmp3) {
        const result1 = weakMap.set(response.response, response.fetchData.__span);
      }
      if (result) {
        const fullURL = baggageHeaderHasSentryValues.getFullURL(response.fetchData.url);
        let host;
        if (fullURL) {
          host = _mod682.parseUrl(fullURL).host;
          const tmpResult5 = _mod682;
        }
        let stripDataUrlContentResult;
        if (fullURL) {
          stripDataUrlContentResult = _mod682.stripDataUrlContent(fullURL);
          const tmpResult6 = _mod682;
        }
        const obj3 = { "http.url": stripDataUrlContentResult, "server.address": host };
        result.setAttributes(obj3);
        if (closure_1_0) {
          closure_0 = result;
          const url = _mod682.spanToJSON(result).data.url;
          if (url) {
            if (typeof url === "string") {
              closure_2 = triggerHandlers.addPerformanceInstrumentationHandler("resource", (arg0) => {
                const entries = arg0.entries;
                const item = entries.forEach((name) => {
                  let result = startInactiveSpanResult(url2[1]).isPerformanceResourceTiming(name);
                  if (result) {
                    name = name.name;
                    result = name.endsWith(closure_1_1);
                  }
                  if (result) {
                    attributes.setAttributes(startInactiveSpanResult(url2[2]).resourceTimingToSpanAttributes(name));
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_1_2);
                    const tmpResult = startInactiveSpanResult(url2[2]);
                  }
                  const obj = startInactiveSpanResult(url2[1]);
                });
              });
              const tmpResult8 = triggerHandlers;
            }
          }
          const tmpResult7 = _mod682;
        }
        if (closure_1_2 != null) {
          const obj4 = { headers: response.headers };
          tmp11(result, obj4);
        }
        const tmpResult = baggageHeaderHasSentryValues;
      }
      const obj2 = { propagateTraceparent, onRequestSpanEnd };
      tmp3 = response.response && response.fetchData.__span;
    });
  }
  if (traceXHR) {
    const result2 = triggerHandlers.addXhrInstrumentationHandler((xhr) => {
      xhr = xhr.xhr;
      if (xhr != null) {
        const tmp8 = xhr[triggerHandlers.SENTRY_XHR_DATA_KEY];
      }
      let tmp11;
      if (xhr) {
        if (!xhr.__sentry_own_request__) {
          if (tmp8) {
            ({ url, method } = tmp8);
            const tmp14 = _mod682.hasSpansEnabled() && shouldCreateSpanForRequest(url);
            if (xhr.endTimestamp) {
              if (tmp14) {
                const __sentry_xhr_span_id__ = xhr.__sentry_xhr_span_id__;
                if (__sentry_xhr_span_id__) {
                  let tmp74 = obj19;
                  if (closure_6[__sentry_xhr_span_id__]) {
                    tmp74 = undefined !== tmp8.status_code;
                  }
                  if (tmp74) {
                    _mod682.setHttpStatus(obj19, tmp8.status_code);
                    obj19.end();
                    if (onRequestSpanEnd != null) {
                      const obj6 = { headers: null, error: null };
                      const obj22 = baggageHeaderHasSentryValues;
                      obj6.headers = obj22.createHeadersSafely(triggerHandlers.parseXhrResponseHeaders(xhr));
                      obj6.error = xhr.error;
                      onRequestSpanEnd(obj19, obj6);
                    }
                    delete tmp2[tmp];
                  }
                }
              }
            }
            const fullURL = baggageHeaderHasSentryValues.getFullURL(url);
            const parseUrl = _mod682.parseUrl;
            const tmp21 = fullURL ? parseUrl(fullURL) : parseUrl(url);
            const obj3 = _mod682;
            const stripDataUrlContentResult = obj3.stripDataUrlContent(_mod682.stripUrlQueryAndFragment(url));
            const activeSpan = _mod682.getActiveSpan();
            if (tmp14) {
              if (activeSpan) {
                const obj8 = { name: null, attributes: null };
                const _HermesInternal = HermesInternal;
                obj8.name = "" + method + " " + stripDataUrlContentResult;
                const obj9 = { url: null, type: "xhr", "http.method": null, "http.url": null, "server.address": null };
                const obj7 = _mod682;
                obj9.url = _mod682.stripDataUrlContent(url);
                obj9["http.method"] = method;
                let stripDataUrlContentResult1;
                if (fullURL) {
                  stripDataUrlContentResult1 = _mod682.stripDataUrlContent(fullURL);
                }
                obj9["http.url"] = stripDataUrlContentResult1;
                let host;
                if (tmp21 != null) {
                  host = tmp21.host;
                }
                obj9["server.address"] = host;
                obj9[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.http.browser";
                obj9[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
                let search;
                if (tmp21 != null) {
                  search = tmp21.search;
                }
                if (search) {
                  let search1;
                  if (tmp21 != null) {
                    search1 = tmp21.search;
                  }
                  const obj12 = { "http.query": search1 };
                  search = obj12;
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
                  const obj13 = { "http.fragment": hash1 };
                  hash = obj13;
                }
                const merged1 = Object.assign(hash);
                obj8.attributes = obj9;
                let startInactiveSpanResult = obj7.startInactiveSpan(obj8);
              }
              xhr.__sentry_xhr_span_id__ = startInactiveSpanResult.spanContext().spanId;
              closure_6[xhr.__sentry_xhr_span_id__] = startInactiveSpanResult;
              if (typeof shouldAttachHeadersWithTargets === "function") {
                if (shouldAttachHeaders(url, dependencyMap)) {
                  let tmp61;
                  if (obj14.hasSpansEnabled()) {
                    if (activeSpan) {
                      tmp61 = startInactiveSpanResult;
                    }
                  }
                  obj14 = _mod682;
                  const obj16 = { span: tmp61, propagateTraceparent };
                  const traceData = _mod682.getTraceData(obj16);
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
                                const obj = startInactiveSpanResult(url2[1]);
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
                const client = _mod682.getClient();
                tmp11 = startInactiveSpanResult;
                if (client) {
                  client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, xhr);
                  tmp11 = startInactiveSpanResult;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            startInactiveSpanResult = new _mod682.SentryNonRecordingSpan();
          }
        }
      }
      if (tmp11) {
        if (closure_1_0) {
          closure_0 = tmp11;
          const url2 = _mod682.spanToJSON(tmp11).data.url;
          if (url2) {
            if (typeof url2 === "string") {
              closure_2 = triggerHandlers.addPerformanceInstrumentationHandler("resource", (arg0) => {
                const entries = arg0.entries;
                const item = entries.forEach((name) => {
                  let result = startInactiveSpanResult(url2[1]).isPerformanceResourceTiming(name);
                  if (result) {
                    name = name.name;
                    result = name.endsWith(closure_1_1);
                  }
                  if (result) {
                    attributes.setAttributes(startInactiveSpanResult(url2[2]).resourceTimingToSpanAttributes(name));
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_1_2);
                    const tmpResult = startInactiveSpanResult(url2[2]);
                  }
                  const obj = startInactiveSpanResult(url2[1]);
                });
              });
              const tmp85Result = triggerHandlers;
            }
          }
        }
        if (weakMap != null) {
          let __sentry_xhr_v3__ = xhr.xhr.__sentry_xhr_v3__;
          let request_headers;
          if (__sentry_xhr_v3__ != null) {
            request_headers = __sentry_xhr_v3__.request_headers;
          }
          const obj18 = { headers: baggageHeaderHasSentryValues.createHeadersSafely(request_headers) };
          tmp87(tmp11, obj18);
        }
      }
    });
  }
  let obj = {};
};
export { shouldAttachHeaders };