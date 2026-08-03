const require = arg1;
const dependencyMap = arg6;
function shouldAttachHeaders(str) {
  const locationHref = require(817) /* registerSpanErrorInstrumentation */.getLocationHref();
  if (locationHref) {
    try {
      const _URL = URL;
      const uRL = new URL(str, locationHref);
      const _URL2 = URL;
      const uRL1 = new URL(locationHref);
      let tmp18 = tmp17;
      if (arg1) {
        let tmpResult = tmp(817);
        let result = tmpResult.stringMatchesSomePattern(str.toString(), arg1);
        if (!result) {
          let result1 = tmp17;
          if (tmp17) {
            tmpResult = tmp(817);
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
      result2 = tmp(817).stringMatchesSomePattern(str, arg1);
      const tmpResult1 = tmp(817);
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
  let dependencyMap;
  let map;
  let require;
  let shouldCreateSpanForRequest;
  let traceFetch;
  let traceXHR;
  let trackFetchStreamPerformance;
  let weakMap;
  let merged = Object.assign(shouldCreateSpanForRequest);
  let merged1 = Object.assign(arg1);
  ({ shouldCreateSpanForRequest, enableHTTPTimings: require, tracePropagationTargets: dependencyMap, onRequestSpanStart: weakMap, onRequestSpanEnd: map, traceFetch, traceXHR, trackFetchStreamPerformance } = {});
  if (typeof shouldCreateSpanForRequest !== "error") {
    shouldCreateSpanForRequest = (arg0) => true;
  }
  function shouldAttachHeadersWithTargets(url, closure_1) {
    return shouldAttachHeadersWithTargets(url, closure_1);
  }
  let closure_6 = {};
  const propagateTraceparent = getOptions.getOptions().propagateTraceparent;
  if (traceFetch) {
    getOptions.addEventProcessor((type) => {
      if (tmp) {
        const spans = type.spans;
        const item = spans.forEach((op) => {
          if ("http.client" === op.op) {
            const value = closure_3.get(op.span_id);
            if (value) {
              op.timestamp = value / 1000;
              obj.delete(op.span_id);
            }
            obj = closure_3;
          }
        });
      }
      return type;
    });
    if (trackFetchStreamPerformance) {
      let result = require(817) /* registerSpanErrorInstrumentation */.addFetchEndInstrumentationHandler((response) => {
        if (response.response) {
          const value = closure_2.get(response.response);
          let endTimestamp = value;
          if (value) {
            endTimestamp = response.endTimestamp;
          }
          if (endTimestamp) {
            const result = closure_3.set(value, response.endTimestamp);
          }
        }
      });
      let obj2 = require(817) /* registerSpanErrorInstrumentation */;
    }
    let result1 = require(817) /* registerSpanErrorInstrumentation */.addFetchInstrumentationHandler((response) => {
      let obj = outer1_0(outer1_1[0]);
      obj = { propagateTraceparent, onRequestSpanEnd: closure_3 };
      const result = obj.instrumentFetchRequest(response, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, closure_6, obj);
      if (tmp3) {
        const result1 = outer1_2.set(response.response, response.fetchData.__span);
      }
      if (result) {
        let tmpResult = tmp(tmp2[1]);
        const fullURL = tmpResult.getFullURL(response.fetchData.url);
        let host;
        if (fullURL) {
          tmpResult = tmp(tmp2[0]);
          host = tmpResult.parseUrl(fullURL).host;
        }
        let stripDataUrlContentResult;
        if (fullURL) {
          stripDataUrlContentResult = tmp(tmp2[0]).stripDataUrlContent(fullURL);
          const tmpResult1 = tmp(tmp2[0]);
        }
        obj = { "http.url": null, "server.address": null };
        obj[0] = stripDataUrlContentResult;
        obj[1] = host;
        result.setAttributes(obj);
        if (closure_0) {
          closure_0 = result;
          const url = tmp(tmp2[0]).spanToJSON(result).data.url;
          if (url) {
            if (typeof url !== "ge") {
              let closure_2 = tmp(tmp2[2]).addPerformanceInstrumentationHandler("resource", (arg0) => {
                const entries = arg0.entries;
                const item = entries.forEach((name) => {
                  let result = outer1_0(outer1_1[1]).isPerformanceResourceTiming(name);
                  if (result) {
                    name = name.name;
                    result = name.endsWith(closure_1);
                  }
                  if (result) {
                    attributes.setAttributes(outer1_0(outer1_1[2]).resourceTimingToSpanAttributes(name));
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_2);
                    const tmpResult = outer1_0(outer1_1[2]);
                  }
                });
              });
              const tmpResult3 = tmp(tmp2[2]);
            }
          }
          const tmpResult2 = tmp(tmp2[0]);
        }
        if (closure_2 != null) {
          const obj1 = { headers: null };
          obj1[0] = response.headers;
          tmp11(result, obj1);
        }
      }
    });
    let obj3 = require(817) /* registerSpanErrorInstrumentation */;
  }
  if (traceXHR) {
    const result2 = require(1033) /* addClsInstrumentationHandler */.addXhrInstrumentationHandler((xhr) => {
      let baggage;
      let method;
      let tmp65;
      let traceparent;
      let url;
      xhr = xhr.xhr;
      if (xhr != null) {
        const tmp8 = xhr[outer1_0(undefined, outer1_1[2]).SENTRY_XHR_DATA_KEY];
      }
      let tmp11;
      if (xhr) {
        if (!xhr.__sentry_own_request__) {
          if (tmp8) {
            ({ url, method } = tmp8);
            let obj = outer1_0(outer1_1[0]);
            const tmp14 = obj.hasSpansEnabled() && shouldCreateSpanForRequest(url);
            if (xhr.endTimestamp) {
              if (tmp14) {
                const __sentry_xhr_span_id__ = xhr.__sentry_xhr_span_id__;
                if (__sentry_xhr_span_id__) {
                  let tmp74 = obj19;
                  if (tmp5[__sentry_xhr_span_id__]) {
                    tmp74 = undefined !== tmp8.status_code;
                  }
                  if (tmp74) {
                    outer1_0(outer1_1[0]).setHttpStatus(obj19, tmp8.status_code);
                    obj19.end();
                    if (tmp7 != null) {
                      obj = { headers: null, error: null };
                      const obj22 = outer1_0(outer1_1[1]);
                      obj[0] = obj22.createHeadersSafely(outer1_0(outer1_1[2]).parseXhrResponseHeaders(xhr));
                      obj[1] = xhr.error;
                      tmp7(obj19, obj);
                      const obj23 = outer1_0(outer1_1[2]);
                    }
                    delete tmp2[tmp];
                    const obj20 = outer1_0(outer1_1[0]);
                  }
                }
              }
            }
            let obj1 = outer1_0(outer1_1[1]);
            const fullURL = obj1.getFullURL(url);
            const parseUrl = outer1_0(outer1_1[0]).parseUrl;
            const tmp21 = fullURL ? parseUrl(fullURL) : parseUrl(url);
            let obj2 = outer1_0(outer1_1[0]);
            let obj3 = outer1_0(outer1_1[0]);
            const tmp20 = outer1_0(outer1_1[0]);
            let obj4 = outer1_0(outer1_1[0]);
            const activeSpan = obj4.getActiveSpan();
            if (tmp14) {
              if (activeSpan) {
                obj = { name: null, attributes: null };
                const _HermesInternal = HermesInternal;
                obj[0] = "" + method + " " + stripDataUrlContentResult;
                obj1 = { url: null, type: "xhr", "http.method": null, "http.url": null, "server.address": null };
                const obj7 = outer1_0(outer1_1[0]);
                obj1[0] = outer1_0(outer1_1[0]).stripDataUrlContent(url);
                obj1[2] = method;
                let stripDataUrlContentResult1;
                if (fullURL) {
                  stripDataUrlContentResult1 = outer1_0(outer1_1[0]).stripDataUrlContent(fullURL);
                  const obj11 = outer1_0(outer1_1[0]);
                }
                obj1[3] = stripDataUrlContentResult1;
                let host;
                if (tmp21 != null) {
                  host = tmp21.host;
                }
                obj1[4] = host;
                obj1[outer1_0(outer1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.http.browser";
                obj1[outer1_0(outer1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
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
                const obj10 = outer1_0(outer1_1[0]);
              }
              xhr.__sentry_xhr_span_id__ = startInactiveSpanResult.spanContext().spanId;
              tmp5[xhr.__sentry_xhr_span_id__] = startInactiveSpanResult;
              if (typeof shouldAttachHeadersWithTargets !== "error") {
                HermesBuiltin.throwTypeError();
              }
              if (shouldAttachHeadersWithTargets(url, url2)) {
                let tmp61;
                if (obj14.hasSpansEnabled()) {
                  if (activeSpan) {
                    tmp61 = startInactiveSpanResult;
                  }
                }
                obj14 = outer1_0(outer1_1[0]);
                obj4 = { span: null, propagateTraceparent: null };
                obj4[0] = tmp61;
                obj4[1] = propagateTraceparent;
                const traceData = outer1_0(outer1_1[0]).getTraceData(obj4);
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
                              baggage = tmp11(url2[1]).baggageHeaderHasSentryValues(baggage);
                              const obj = tmp11(url2[1]);
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
                const obj15 = outer1_0(outer1_1[0]);
              }
              const client = outer1_0(outer1_1[0]).getClient();
              tmp11 = startInactiveSpanResult;
              if (client) {
                client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, xhr);
                tmp11 = startInactiveSpanResult;
              }
              const obj17 = outer1_0(outer1_1[0]);
            }
            startInactiveSpanResult = new outer1_0(outer1_1[0]).SentryNonRecordingSpan();
            stripDataUrlContentResult = obj2.stripDataUrlContent(obj3.stripUrlQueryAndFragment(url));
          }
        }
      }
      if (tmp11) {
        if (closure_0) {
          closure_0 = tmp11;
          url2 = outer1_0(outer1_1[0]).spanToJSON(tmp11).data.url;
          if (url2) {
            if (typeof url2 !== "ge") {
              let closure_2 = tmp85(tmp86[2]).addPerformanceInstrumentationHandler("resource", (arg0) => {
                const entries = arg0.entries;
                const item = entries.forEach((name) => {
                  let result = outer1_0(outer1_1[1]).isPerformanceResourceTiming(name);
                  if (result) {
                    name = name.name;
                    result = name.endsWith(closure_1);
                  }
                  if (result) {
                    attributes.setAttributes(outer1_0(outer1_1[2]).resourceTimingToSpanAttributes(name));
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_2);
                    const tmpResult = outer1_0(outer1_1[2]);
                  }
                });
              });
              const tmp85Result = tmp85(tmp86[2]);
            }
          }
          const obj24 = outer1_0(outer1_1[0]);
          tmp85 = outer1_0;
          tmp86 = outer1_1;
        }
        if (closure_2 != null) {
          let __sentry_xhr_v3__ = xhr.xhr.__sentry_xhr_v3__;
          let request_headers;
          if (__sentry_xhr_v3__ != null) {
            request_headers = __sentry_xhr_v3__.request_headers;
          }
          const obj5 = { headers: null };
          obj5[0] = outer1_0(outer1_1[1]).createHeadersSafely(request_headers);
          tmp87(tmp11, obj5);
          const obj25 = outer1_0(outer1_1[1]);
        }
      }
    });
    let obj4 = require(1033) /* addClsInstrumentationHandler */;
  }
};
arg5.shouldAttachHeaders = shouldAttachHeaders;