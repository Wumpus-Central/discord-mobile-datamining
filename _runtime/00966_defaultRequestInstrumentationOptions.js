// === Module 966: defaultRequestInstrumentationOptions ===

// Module 966 (defaultRequestInstrumentationOptions)
import _mod693 from "module_693" /* 693 */;
import _addMeasureSpans from "_addMeasureSpans" /* 909 */;
import baggageHeaderHasSentryValues from "baggageHeaderHasSentryValues" /* 967 */;

let name;

function shouldAttachHeaders(url, dependencyMap) {
  const obj = _mod693;
  const locationHref = obj.getLocationHref();
  if (locationHref) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(url, locationHref);
      const _URL2 = URL;
      const self3 = this;
      const self4 = this;
      const uRL1 = new URL(locationHref);
      let tmp14 = tmp13;
      if (dependencyMap) {
        const tmpResult = _mod693;
        let result = tmpResult.stringMatchesSomePattern(str.toString(), dependencyMap);
        if (!result) {
          let result1 = tmp13;
          if (result1) {
            const tmpResult3 = _mod693;
            result1 = tmpResult3.stringMatchesSomePattern(uRL.pathname, dependencyMap);
          }
          result = result1;
        }
        tmp14 = result;
      }
      return tmp14;
    } catch (err) {
      return false;
    }
  } else {
    let result2 = url.match(/^\/(?!\/)/);
    if (dependencyMap) {
      const tmpResult4 = _mod693;
      result2 = tmpResult4.stringMatchesSomePattern(url, dependencyMap);
    }
    return result2;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let weakMap = new WeakMap();
const map = new Map();
const defaultRequestInstrumentationOptions = { traceFetch: true, traceXHR: true, enableHTTPTimings: true, trackFetchStreamPerformance: false };

export { defaultRequestInstrumentationOptions };
export const instrumentOutgoingRequests = function instrumentOutgoingRequests(getOptions, arg1) {
  let onRequestSpanEnd;
  let shouldCreateSpanForRequest;
  let traceFetch;
  let traceXHR;
  let trackFetchStreamPerformance;
  let obj = {};
  let merged = Object.assign(shouldCreateSpanForRequest);
  let merged1 = Object.assign(arg1);
  ({ shouldCreateSpanForRequest, enableHTTPTimings: require, tracePropagationTargets: dependencyMap, onRequestSpanStart: weakMap, onRequestSpanEnd: map, traceFetch, traceXHR, trackFetchStreamPerformance } = obj);
  if (typeof shouldCreateSpanForRequest !== "function") {
    shouldCreateSpanForRequest = (arg0) => true;
  }
  function shouldAttachHeadersWithTargets(url) {
    return shouldAttachHeaders(url, dependencyMap);
  }
  let closure_6 = {};
  const propagateTraceparent = getOptions.getOptions().propagateTraceparent;
  if (traceFetch) {
    getOptions.addEventProcessor((type) => {
      const tmp = "transaction" === type.type && type.spans;
      if (tmp) {
        const spans = type.spans;
        const item = spans.forEach((op) => {
          if ("http.client" === op.op) {
            const value = onRequestSpanEnd.get(op.span_id);
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
      let obj2 = _mod693;
      let result = obj2.addFetchEndInstrumentationHandler((response) => {
        if (response.response) {
          const value = weakMap.get(response.response);
          const tmp3 = value && response.endTimestamp;
          if (tmp3) {
            const result = map.set(value, response.endTimestamp);
          }
        }
      });
    }
    let obj3 = _mod693;
    let result1 = obj3.addFetchInstrumentationHandler((response) => {
      const obj = _mod693;
      const obj2 = { propagateTraceparent, onRequestSpanEnd: map };
      const result = obj.instrumentFetchRequest(response, shouldCreateSpanForRequest, shouldAttachHeadersWithTargets, closure_6, obj2);
      const tmp4 = response.response && response.fetchData.__span;
      if (tmp4) {
        const result1 = weakMap.set(response.response, response.fetchData.__span);
      }
      if (result) {
        const tmpResult = baggageHeaderHasSentryValues;
        const fullURL = tmpResult.getFullURL(response.fetchData.url);
        let host;
        if (fullURL) {
          const tmpResult5 = _mod693;
          host = tmpResult5.parseUrl(fullURL).host;
        }
        let stripDataUrlContentResult;
        const setAttributes = result.setAttributes;
        if (fullURL) {
          const tmpResult6 = _mod693;
          stripDataUrlContentResult = tmpResult6.stripDataUrlContent(fullURL);
        }
        const obj3 = { "http.url": stripDataUrlContentResult, "server.address": host };
        setAttributes(obj3);
        if (require) {
          const tmpResult7 = _mod693;
          const url = tmpResult7.spanToJSON(result).data.url;
          if (url) {
            if (typeof url === "string") {
              const tmpResult8 = _addMeasureSpans;
              let closure_2 = tmpResult8.addPerformanceInstrumentationHandler("resource", (arg0) => {
                const entries = arg0.entries;
                const item = entries.forEach((name) => {
                  const obj = startInactiveSpanResult(url2[1]);
                  let result = obj.isPerformanceResourceTiming(name);
                  if (result) {
                    name = name.name;
                    result = name.endsWith(closure_1_1);
                  }
                  if (result) {
                    setAttributes = setAttributes.setAttributes;
                    const tmpResult = startInactiveSpanResult(url2[2]);
                    setAttributes(tmpResult.resourceTimingToSpanAttributes(name));
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_1_2);
                  }
                });
              });
            }
          }
        }
        if (weakMap != null) {
          const obj4 = { headers: response.headers };
          tmp12(result, obj4);
        }
      }
    });
  }
  if (traceXHR) {
    let obj4 = _addMeasureSpans;
    const result2 = obj4.addXhrInstrumentationHandler(function(xhr) {
      let baggage;
      let createHeadersSafely;
      let host;
      let method;
      let obj20;
      let obj7;
      let obj8;
      let startInactiveSpanResult;
      let stripDataUrlContentResult1;
      let tmp6;
      let tmp63;
      let traceparent;
      let url;
      function setHeaderOnXhr(xhr, StringResult, baggage, traceparent) {
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
              if (tmp6) {
                traceparent = undefined;
                if (request_headers != null) {
                  traceparent = request_headers.traceparent;
                }
                tmp6 = !traceparent;
              }
              if (tmp6) {
                xhr.setRequestHeader("traceparent", traceparent);
              }
              const tmp9 = baggage;
              if (tmp9) {
                baggage = undefined;
                if (request_headers != null) {
                  baggage = request_headers.baggage;
                }
                const tmp11 = baggage;
                if (tmp11) {
                  const obj = closure_1_0(closure_1_1[1]);
                  baggage = obj.baggageHeaderHasSentryValues(baggage);
                }
                if (!baggage) {
                  xhr.setRequestHeader("baggage", baggage);
                }
              }
            } catch (err) {
            }
          }
        }
      }
      xhr = xhr.xhr;
      if (xhr != null) {
        tmp6 = xhr[_addMeasureSpans.SENTRY_XHR_DATA_KEY];
      }
      let tmp9;
      if (xhr) {
        if (!xhr.__sentry_own_request__) {
          if (tmp6) {
            ({ url, method } = tmp6);
            let obj = _mod693;
            const tmp12 = obj.hasSpansEnabled() && shouldCreateSpanForRequest(url);
            if (xhr.endTimestamp) {
              if (tmp12) {
                const __sentry_xhr_span_id__ = xhr.__sentry_xhr_span_id__;
                if (__sentry_xhr_span_id__) {
                  const tmp72 = closure_6[__sentry_xhr_span_id__] && undefined !== tmp6.status_code;
                  if (tmp72) {
                    const obj18 = _mod693;
                    obj18.setHttpStatus(closure_6[__sentry_xhr_span_id__], tmp6.status_code);
                    closure_6[__sentry_xhr_span_id__].end();
                    if (map != null) {
                      const obj5 = { headers: createHeadersSafely(obj20.parseXhrResponseHeaders(xhr)), error: xhr.error };
                      createHeadersSafely = baggageHeaderHasSentryValues.createHeadersSafely;
                      baggageHeaderHasSentryValues;
                      obj20 = _addMeasureSpans;
                      map(closure_6[__sentry_xhr_span_id__], obj5);
                    }
                    delete closure_6[__sentry_xhr_span_id__];
                  }
                }
              }
            }
            const obj2 = baggageHeaderHasSentryValues;
            const fullURL = obj2.getFullURL(url);
            const parseUrl = _mod693.parseUrl;
            _mod693;
            const tmp19 = fullURL ? parseUrl(fullURL) : parseUrl(url);
            const stripDataUrlContent = _mod693.stripDataUrlContent;
            _mod693;
            const obj3 = _mod693;
            const stripDataUrlContentResult = stripDataUrlContent(obj3.stripUrlQueryAndFragment(url));
            const obj4 = _mod693;
            const activeSpan = obj4.getActiveSpan();
            if (tmp12) {
              if (activeSpan) {
                const _HermesInternal = HermesInternal;
                const obj6 = { name: "" + method + " " + stripDataUrlContentResult, attributes: obj7 };
                const startInactiveSpan = _mod693.startInactiveSpan;
                _mod693;
                obj7 = { url: obj8.stripDataUrlContent(url), type: "xhr", "http.method": method, "http.url": stripDataUrlContentResult1, "server.address": host };
                stripDataUrlContentResult1 = undefined;
                obj8 = _mod693;
                if (fullURL) {
                  const obj9 = _mod693;
                  stripDataUrlContentResult1 = obj9.stripDataUrlContent(fullURL);
                }
                host = undefined;
                if (tmp19 != null) {
                  host = tmp19.host;
                }
                obj7[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.http.browser";
                obj7[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
                let search;
                if (tmp19 != null) {
                  search = tmp19.search;
                }
                if (search) {
                  let search1;
                  if (tmp19 != null) {
                    search1 = tmp19.search;
                  }
                  search = { "http.query": search1 };
                  const obj10 = { "http.query": search1 };
                }
                const merged = Object.assign(search);
                let hash;
                if (tmp19 != null) {
                  hash = tmp19.hash;
                }
                if (hash) {
                  let hash1;
                  if (tmp19 != null) {
                    hash1 = tmp19.hash;
                  }
                  hash = { "http.fragment": hash1 };
                  const obj11 = { "http.fragment": hash1 };
                }
                const merged1 = Object.assign(hash);
                startInactiveSpanResult = startInactiveSpan(obj6);
              }
              xhr.__sentry_xhr_span_id__ = startInactiveSpanResult.spanContext().spanId;
              closure_6[xhr.__sentry_xhr_span_id__] = startInactiveSpanResult;
              if (typeof shouldAttachHeadersWithTargets === "function") {
                if (shouldAttachHeaders(url, dependencyMap)) {
                  let tmp59;
                  const obj12 = _mod693;
                  if (obj12.hasSpansEnabled()) {
                    if (activeSpan) {
                      tmp59 = startInactiveSpanResult;
                    }
                  }
                  const obj14 = { span: tmp59, propagateTraceparent };
                  const obj13 = _mod693;
                  const traceData = obj13.getTraceData(obj14);
                  ({ "sentry-trace": tmp63, baggage, traceparent } = traceData);
                  if (tmp63) {
                    setHeaderOnXhr(xhr, tmp63, baggage, traceparent);
                  }
                }
                const obj15 = _mod693;
                const client = obj15.getClient();
                tmp9 = startInactiveSpanResult;
                if (client) {
                  client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, xhr);
                  tmp9 = startInactiveSpanResult;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            const self = this;
            const self2 = this;
            startInactiveSpanResult = new _mod693.SentryNonRecordingSpan();
          }
        }
      }
      if (tmp9) {
        if (require) {
          startInactiveSpanResult = tmp9;
          const obj21 = _mod693;
          const url2 = obj21.spanToJSON(tmp9).data.url;
          if (url2) {
            if (typeof url2 === "string") {
              const tmp84Result = _addMeasureSpans;
              weakMap = tmp84Result.addPerformanceInstrumentationHandler("resource", (arg0) => {
                const entries = arg0.entries;
                const item = entries.forEach((name) => {
                  const obj = startInactiveSpanResult(url2[1]);
                  let result = obj.isPerformanceResourceTiming(name);
                  if (result) {
                    name = name.name;
                    result = name.endsWith(closure_1_1);
                  }
                  if (result) {
                    setAttributes = setAttributes.setAttributes;
                    const tmpResult = startInactiveSpanResult(url2[2]);
                    setAttributes(tmpResult.resourceTimingToSpanAttributes(name));
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_1_2);
                  }
                });
              });
            }
          }
        }
        if (weakMap != null) {
          let __sentry_xhr_v3__ = xhr.xhr.__sentry_xhr_v3__;
          let request_headers;
          const createHeadersSafely2 = baggageHeaderHasSentryValues.createHeadersSafely;
          baggageHeaderHasSentryValues;
          if (__sentry_xhr_v3__ != null) {
            request_headers = __sentry_xhr_v3__.request_headers;
          }
          const obj16 = { headers: createHeadersSafely2(request_headers) };
          tmp86(tmp9, obj16);
        }
      }
    });
  }
};
export { shouldAttachHeaders };