// _runtime/metro/00798__addTracingHeadersToFetchRequest.js
import spanToJSON from "../00684_spanToJSON.js";
import _mod692 from "00692__.js";
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "../00704_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import SPAN_STATUS_ERROR from "../00705_SPAN_STATUS_ERROR.js";
import _mod713 from "00713__.js";
import _mod720 from "00720__.js";
import SentryNonRecordingSpan from "../00721_SentryNonRecordingSpan.js";
import _mod731 from "00731__.js";
import _mod765 from "00765__.js";
import _mod769 from "00769__.js";

require = arg1;
const dependencyMap = arg6;
function _addTracingHeadersToFetchRequest(headers, headers2, span, propagateTraceparent) {
  let tmp = propagateTraceparent;
  const traceData = _mod769.getTraceData({ span, propagateTraceparent });
  ({ sentry-trace: tmp5, baggage, traceparent } = traceData);
  if (tmp5) {
    headers = headers2.headers;
    if (!headers) {
      let headers1;
      if (tmp2Result.isRequest(headers)) {
        headers1 = headers.headers;
      }
      headers = headers1;
      tmp2Result = _mod692;
    }
    if (headers) {
      const _Headers = Headers;
      let isInstanceOfResult = typeof Headers !== "undefined";
      if (typeof Headers !== "undefined") {
        const _Headers3 = Headers;
        isInstanceOfResult = _mod692.isInstanceOf(headers, Headers);
        const tmp2Result2 = _mod692;
      }
      if (isInstanceOfResult) {
        const _Headers2 = Headers;
        headers2 = new Headers(headers);
        if (!headers2.get("sentry-trace")) {
          const result = headers2.set("sentry-trace", tmp5);
        }
        if (tmp) {
          tmp = traceparent;
        }
        if (tmp) {
          tmp = !headers2.get("traceparent");
        }
        if (tmp) {
          const result1 = headers2.set("traceparent", traceparent);
        }
        if (baggage) {
          const str10 = headers2.get("baggage");
          if (str10) {
            let parts = str10.split(",");
            if (!parts.some((item) => {
              const trimmed = item.trim();
              return trimmed.startsWith(closure_1_0(closure_1_1[8]).SENTRY_BAGGAGE_KEY_PREFIX);
            })) {
              const _HermesInternal = HermesInternal;
              const result2 = headers2.set("baggage", "" + str10 + "," + baggage);
            }
          } else {
            const result3 = headers2.set("baggage", baggage);
          }
        }
        return headers2;
      } else {
        const _Array = Array;
        if (Array.isArray(headers)) {
          const items = [];
          HermesBuiltin.arraySpread(headers, 0);
          if (!headers.find((item) => "sentry-trace" === item[0])) {
            const items1 = ["sentry-trace", tmp5];
            items.push(items1);
          }
          let tmp35 = tmp;
          if (tmp) {
            tmp35 = traceparent;
          }
          if (tmp35) {
            tmp35 = !headers.find((item) => "traceparent" === item[0]);
          }
          if (tmp35) {
            const items2 = ["traceparent", traceparent];
            items.push(items2);
          }
          let tmp37 = baggage;
          if (baggage) {
            tmp37 = !headers.find((item) => {
              let someResult = "baggage" === item[0];
              if (someResult) {
                const parts = item[1].split(",");
                someResult = parts.some((item) => {
                  const trimmed = item.trim();
                  return trimmed.startsWith(closure_1_0(closure_1_1[8]).SENTRY_BAGGAGE_KEY_PREFIX);
                });
              }
              return someResult;
            });
          }
          if (tmp37) {
            const items3 = ["baggage", baggage];
            items.push(items3);
          }
          return items;
        } else {
          if ("sentry-trace" in headers) {
            let prop = headers["sentry-trace"];
          }
          if ("traceparent" in headers) {
            const traceparent2 = headers.traceparent;
          }
          let baggage1;
          if ("baggage" in headers) {
            baggage1 = headers.baggage;
          }
          if (baggage1) {
            const _Array2 = Array;
            if (Array.isArray(baggage1)) {
              const items4 = [];
              HermesBuiltin.arraySpread(baggage1, 0);
              let items5 = items4;
            } else {
              items5 = [baggage1];
            }
          } else {
            const items6 = [];
            if (!baggage1) {
              let tmp23 = baggage;
              if (baggage) {
                tmp23 = !baggage1;
              }
              if (tmp23) {
                items6.push(baggage);
              }
              const obj3 = {};
              const merged = Object.assign(headers);
              if (prop == null) {
                prop = tmp5;
              }
              obj3["sentry-trace"] = prop;
              let joined;
              if (items6.length > 0) {
                joined = items6.join(",");
              }
              obj3.baggage = joined;
              let tmp30 = tmp;
              if (tmp) {
                tmp30 = traceparent;
              }
              if (tmp30) {
                tmp30 = !traceparent2;
              }
              if (tmp30) {
                obj3.traceparent = traceparent;
              }
              return obj3;
            } else {
              const _Array3 = Array;
              if (Array.isArray(baggage1)) {
                let found = baggage1.find((item) => {
                  const parts = item.split(",");
                  return parts.some((item) => {
                    const trimmed = item.trim();
                    return trimmed.startsWith(closure_1_0(closure_1_1[8]).SENTRY_BAGGAGE_KEY_PREFIX);
                  });
                });
              } else {
                const parts1 = baggage1.split(",");
                found = parts1.some((item) => {
                  const trimmed = item.trim();
                  return trimmed.startsWith(closure_1_0(closure_1_1[8]).SENTRY_BAGGAGE_KEY_PREFIX);
                });
              }
            }
          }
        }
      }
    } else {
      const obj4 = {};
      const merged1 = Object.assign(traceData);
      return obj4;
    }
  }
  const obj2 = { span, propagateTraceparent };
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { _addTracingHeadersToFetchRequest };
export const _callOnRequestSpanEnd = function _callOnRequestSpanEnd(arg0, response, onRequestSpanEnd) {
  onRequestSpanEnd = undefined;
  if (typeof onRequestSpanEnd === "object") {
    if (null !== onRequestSpanEnd) {
      onRequestSpanEnd = onRequestSpanEnd.onRequestSpanEnd;
    }
  }
  if (onRequestSpanEnd != null) {
    response = response.response;
    let headers;
    if (response != null) {
      headers = response.headers;
    }
    const obj = { headers, error: response.error };
    onRequestSpanEnd(arg0, obj);
  }
};
export const instrumentFetchRequest = function instrumentFetchRequest(fetchData, fn, fn2, setAttribute, onRequestSpanEnd) {
  if (fetchData.fetchData) {
    ({ method, url } = fetchData.fetchData);
    let hasSpansEnabledResult = _mod720.hasSpansEnabled();
    if (hasSpansEnabledResult) {
      hasSpansEnabledResult = fn(url);
    }
    if (fetchData.endTimestamp) {
      if (hasSpansEnabledResult) {
        const __span = fetchData.fetchData.__span;
        if (__span) {
          if (setAttribute[__span]) {
            if (fetchData.response) {
              SPAN_STATUS_ERROR.setHttpStatus(obj20, fetchData.response.status);
              const response = fetchData.response;
              value = undefined;
              if (response != null) {
                const headers = response.headers;
                if (headers != null) {
                  value = headers.get("content-length");
                }
              }
              if (value) {
                const _parseInt = parseInt;
                const parsed = parseInt(value);
                if (parsed > 0) {
                  const attr = obj20.setAttribute("http.response_content_length", parsed);
                }
              }
              const tmp3Result = SPAN_STATUS_ERROR;
            } else if (fetchData.error) {
              const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
              obj20.setStatus(obj2);
            }
            obj20.end();
            onRequestSpanEnd = undefined;
            if (typeof onRequestSpanEnd === "object") {
              if (null !== onRequestSpanEnd) {
                onRequestSpanEnd = onRequestSpanEnd.onRequestSpanEnd;
              }
            }
            if (onRequestSpanEnd != null) {
              const response2 = fetchData.response;
              let headers1;
              if (response2 != null) {
                headers1 = response2.headers;
              }
              const obj3 = { headers: headers1, error: fetchData.error };
              onRequestSpanEnd(obj20, obj3);
            }
            delete tmp2[tmp];
          }
        }
      }
    }
    let tmp9 = onRequestSpanEnd;
    if (typeof onRequestSpanEnd !== "object") {
      const obj4 = { spanOrigin: onRequestSpanEnd };
      tmp9 = obj4;
    }
    const spanOrigin = tmp9.spanOrigin;
    let str = "auto.http.browser";
    if (undefined !== spanOrigin) {
      str = spanOrigin;
    }
    const propagateTraceparent = tmp9.propagateTraceparent;
    const activeSpan = spanToJSON.getActiveSpan();
    if (hasSpansEnabledResult) {
      if (activeSpan) {
        const tmp3Result12 = _mod731;
        let tmp3Result13 = _mod765;
        if (startsWithResult) {
          const obj5 = { name: null, attributes: null };
          const _HermesInternal2 = HermesInternal;
          obj5.name = "" + method + " " + tmp3Result13.stripDataUrlContent(url);
          const obj6 = { url: null, type: "fetch", "http.method": null };
          tmp3Result13 = _mod765.stripDataUrlContent(url);
          obj6.url = tmp3Result13;
          obj6["http.method"] = method;
          obj6[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
          str = SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP;
          method = "http.client";
          obj6[str] = "http.client";
          obj5.attributes = obj6;
          let obj7 = obj5;
          const tmp3Result14 = _mod765;
        } else {
          const result = tmp3Result13.parseStringToURLObject(url);
          let sanitizedUrlStringFromUrlObject = url;
          if (result) {
            sanitizedUrlStringFromUrlObject = _mod765.getSanitizedUrlStringFromUrlObject(result);
            const tmp3Result15 = _mod765;
          }
          obj7 = { name: null, attributes: null };
          const _HermesInternal = HermesInternal;
          obj7.name = "" + method + " " + sanitizedUrlStringFromUrlObject;
          const obj8 = { url: _mod765.stripDataUrlContent(url), type: "fetch", "http.method": method };
          obj8[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
          obj8[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
          if (result) {
            if (!tmp3Result17.isURLObjectRelative(result)) {
              obj8["http.url"] = _mod765.stripDataUrlContent(result.href);
              obj8["server.address"] = result.host;
              const tmp3Result18 = _mod765;
            }
            if (result.search) {
              obj8["http.query"] = result.search;
            }
            if (result.hash) {
              obj8["http.fragment"] = result.hash;
            }
            tmp3Result17 = _mod765;
          }
          obj7.attributes = obj8;
          const tmp3Result16 = _mod765;
        }
        tmp3Result12.startInactiveSpan(obj7);
        startsWithResult = url.startsWith("data:");
      }
    }
    const sentryNonRecordingSpan = new SentryNonRecordingSpan.SentryNonRecordingSpan();
    fetchData.fetchData.__span = sentryNonRecordingSpan.spanContext().spanId;
    setAttribute[sentryNonRecordingSpan.spanContext().spanId] = sentryNonRecordingSpan;
    if (fn2(fetchData.fetchData.url)) {
      const first = fetchData.args[0];
      const tmp23 = fetchData.args[1] || {};
      const obj9 = {};
      const merged = Object.assign(tmp23);
      let tmp28;
      if (tmp3Result19.hasSpansEnabled()) {
        if (activeSpan) {
          tmp28 = sentryNonRecordingSpan;
        }
      }
      const tmp27Result = _addTracingHeadersToFetchRequest(first, obj9, tmp28, tmp10);
      if (tmp27Result) {
        fetchData.args[1] = obj9;
        obj9.headers = tmp27Result;
      }
      tmp3Result19 = _mod720;
    }
    const tmp3Result11 = spanToJSON;
    const client = _mod713.getClient();
    if (client) {
      ({ args: obj19.input, response: obj19.response, startTimestamp: obj19.startTimestamp, endTimestamp: obj19.endTimestamp } = fetchData);
      client.emit("beforeOutgoingRequestSpan", sentryNonRecordingSpan, { input: null, response: null, startTimestamp: null, endTimestamp: null });
      const obj10 = { input: null, response: null, startTimestamp: null, endTimestamp: null };
    }
    return sentryNonRecordingSpan;
  }
};