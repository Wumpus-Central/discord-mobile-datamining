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
  let obj = { span, propagateTraceparent };
  const traceData = obj.getTraceData(obj);
  ({ sentry-trace: tmp5, baggage, traceparent } = traceData);
  if (tmp5) {
    headers = headers2.headers;
    if (!headers) {
      let tmp2Result = _mod692;
      let headers1;
      if (tmp2Result.isRequest(headers)) {
        headers1 = headers.headers;
      }
      headers = headers1;
    }
    if (headers) {
      const _Headers = Headers;
      let isInstanceOfResult = typeof Headers !== "undefined";
      if (typeof Headers !== "undefined") {
        tmp2Result = _mod692;
        const _Headers3 = Headers;
        isInstanceOfResult = tmp2Result.isInstanceOf(headers, Headers);
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
          baggage = undefined;
          if ("baggage" in headers) {
            baggage = headers.baggage;
          }
          if (baggage) {
            const _Array2 = Array;
            if (Array.isArray(baggage)) {
              const items4 = [];
              HermesBuiltin.arraySpread(baggage, 0);
              let items5 = items4;
            } else {
              items5 = [baggage];
            }
          } else {
            const items6 = [];
            if (!baggage) {
              let tmp23 = baggage;
              if (baggage) {
                tmp23 = !baggage;
              }
              if (tmp23) {
                items6.push(baggage);
              }
              obj = {};
              const merged = Object.assign(headers);
              if (prop == null) {
                prop = tmp5;
              }
              obj["sentry-trace"] = prop;
              let joined;
              if (items6.length > 0) {
                joined = items6.join(",");
              }
              obj.baggage = joined;
              let tmp30 = tmp;
              if (tmp) {
                tmp30 = traceparent;
              }
              if (tmp30) {
                tmp30 = !traceparent2;
              }
              if (tmp30) {
                obj.traceparent = traceparent;
              }
              return obj;
            } else {
              const _Array3 = Array;
              if (Array.isArray(baggage)) {
                let found = baggage.find((item) => {
                  const parts = item.split(",");
                  return parts.some((item) => {
                    const trimmed = item.trim();
                    return trimmed.startsWith(closure_1_0(closure_1_1[8]).SENTRY_BAGGAGE_KEY_PREFIX);
                  });
                });
              } else {
                const parts1 = baggage.split(",");
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
      const obj1 = {};
      const merged1 = Object.assign(traceData);
      return obj1;
    }
  }
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
export const instrumentFetchRequest = function instrumentFetchRequest(fetchData, fn, fn2, arg3, onRequestSpanEnd) {
  if (fetchData.fetchData) {
    ({ method, url } = fetchData.fetchData);
    let obj = _mod720;
    let hasSpansEnabledResult = obj.hasSpansEnabled();
    if (hasSpansEnabledResult) {
      hasSpansEnabledResult = fn(url);
    }
    if (fetchData.endTimestamp) {
      if (hasSpansEnabledResult) {
        const __span = fetchData.fetchData.__span;
        if (__span) {
          if (arg3[__span]) {
            if (fetchData.response) {
              let tmp3Result = SPAN_STATUS_ERROR;
              tmp3Result.setHttpStatus(obj20, fetchData.response.status);
              const response = fetchData.response;
              value = undefined;
              if (response != null) {
                let headers = response.headers;
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
            } else if (fetchData.error) {
              obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
              obj20.setStatus(obj);
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
              headers = undefined;
              if (response2 != null) {
                headers = response2.headers;
              }
              obj = { headers, error: fetchData.error };
              onRequestSpanEnd(obj20, obj);
            }
            delete tmp2[tmp];
          }
        }
      }
    }
    let tmp9 = onRequestSpanEnd;
    if (typeof onRequestSpanEnd !== "object") {
      const obj1 = { spanOrigin: onRequestSpanEnd };
      tmp9 = obj1;
    }
    const spanOrigin = tmp9.spanOrigin;
    let str = "auto.http.browser";
    if (undefined !== spanOrigin) {
      str = spanOrigin;
    }
    const propagateTraceparent = tmp9.propagateTraceparent;
    tmp3Result = spanToJSON;
    const activeSpan = tmp3Result.getActiveSpan();
    if (hasSpansEnabledResult) {
      if (activeSpan) {
        const tmp3Result1 = _mod731;
        let tmp3Result2 = _mod765;
        if (startsWithResult) {
          const obj2 = { name: null, attributes: null };
          const _HermesInternal2 = HermesInternal;
          obj2.name = "" + method + " " + tmp3Result2.stripDataUrlContent(url);
          const obj3 = { url: null, type: "fetch", "http.method": null };
          tmp3Result2 = _mod765.stripDataUrlContent(url);
          obj3.url = tmp3Result2;
          obj3["http.method"] = method;
          obj3[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
          str = SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP;
          method = "http.client";
          obj3[str] = "http.client";
          obj2.attributes = obj3;
          let obj4 = obj2;
          const tmp3Result3 = _mod765;
        } else {
          const result = tmp3Result2.parseStringToURLObject(url);
          let sanitizedUrlStringFromUrlObject = url;
          if (result) {
            sanitizedUrlStringFromUrlObject = _mod765.getSanitizedUrlStringFromUrlObject(result);
            const tmp3Result4 = _mod765;
          }
          obj4 = { name: null, attributes: null };
          const _HermesInternal = HermesInternal;
          obj4.name = "" + method + " " + sanitizedUrlStringFromUrlObject;
          const obj5 = { url: _mod765.stripDataUrlContent(url), type: "fetch", "http.method": method };
          obj5[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
          obj5[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
          if (result) {
            if (!tmp3Result6.isURLObjectRelative(result)) {
              obj5["http.url"] = _mod765.stripDataUrlContent(result.href);
              obj5["server.address"] = result.host;
              const tmp3Result7 = _mod765;
            }
            if (result.search) {
              obj5["http.query"] = result.search;
            }
            if (result.hash) {
              obj5["http.fragment"] = result.hash;
            }
            tmp3Result6 = _mod765;
          }
          obj4.attributes = obj5;
          const tmp3Result5 = _mod765;
        }
        tmp3Result1.startInactiveSpan(obj4);
        startsWithResult = url.startsWith("data:");
      }
    }
    const sentryNonRecordingSpan = new SentryNonRecordingSpan.SentryNonRecordingSpan();
    fetchData.fetchData.__span = sentryNonRecordingSpan.spanContext().spanId;
    arg3[sentryNonRecordingSpan.spanContext().spanId] = sentryNonRecordingSpan;
    if (fn2(fetchData.fetchData.url)) {
      const first = fetchData.args[0];
      const tmp23 = fetchData.args[1] || {};
      const obj6 = {};
      const merged = Object.assign(tmp23);
      let tmp28;
      if (tmp3Result8.hasSpansEnabled()) {
        if (activeSpan) {
          tmp28 = sentryNonRecordingSpan;
        }
      }
      const tmp27Result = _addTracingHeadersToFetchRequest(first, obj6, tmp28, tmp10);
      if (tmp27Result) {
        fetchData.args[1] = obj6;
        obj6.headers = tmp27Result;
      }
      tmp3Result8 = _mod720;
    }
    const client = _mod713.getClient();
    if (client) {
      ({ args: obj19.input, response: obj19.response, startTimestamp: obj19.startTimestamp, endTimestamp: obj19.endTimestamp } = fetchData);
      client.emit("beforeOutgoingRequestSpan", sentryNonRecordingSpan, { input: null, response: null, startTimestamp: null, endTimestamp: null });
      const obj7 = { input: null, response: null, startTimestamp: null, endTimestamp: null };
    }
    return sentryNonRecordingSpan;
  }
};