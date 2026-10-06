// _runtime/metro/00809__addTracingHeadersToFetchRequest.js
import TRACE_FLAG_NONE from "../00695_TRACE_FLAG_NONE.js";
import _mod703 from "00703__.js";
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "../00715_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import SPAN_STATUS_ERROR from "../00716_SPAN_STATUS_ERROR.js";
import _mod724 from "00724__.js";
import _mod731 from "00731__.js";
import SentryNonRecordingSpan from "../00732_SentryNonRecordingSpan.js";
import continueTrace from "../00742_continueTrace.js";
import _mod776 from "00776__.js";
import _mod780 from "00780__.js";

function _addTracingHeadersToFetchRequest(headers, headers2, span, propagateTraceparent) {
  let baggage;
  let joined;
  let tmp6;
  let traceparent;
  const f82128 = (item) => {
    const trimmed = item.trim();
    return trimmed.startsWith(closure_1_0(closure_1_1[8]).SENTRY_BAGGAGE_KEY_PREFIX);
  };
  let tmp2 = propagateTraceparent;
  const obj = _mod780;
  const obj2 = { span, propagateTraceparent };
  const traceData = obj.getTraceData(obj2);
  ({ "sentry-trace": tmp6, baggage, traceparent } = traceData);
  if (tmp6) {
    headers = headers2.headers;
    if (!headers) {
      let headers1;
      const tmp3Result = _mod703;
      if (tmp3Result.isRequest(headers)) {
        headers1 = headers.headers;
      }
      headers = headers1;
    }
    if (headers) {
      const _Headers = Headers;
      let isInstanceOfResult = typeof Headers !== "undefined";
      if (typeof Headers !== "undefined") {
        const _Headers3 = Headers;
        const tmp3Result2 = _mod703;
        isInstanceOfResult = tmp3Result2.isInstanceOf(headers, Headers);
      }
      if (isInstanceOfResult) {
        const _Headers2 = Headers;
        const self = this;
        const self2 = this;
        headers2 = new Headers(headers);
        if (!headers2.get("sentry-trace")) {
          const result = headers2.set("sentry-trace", tmp6);
        }
        if (tmp2) {
          tmp2 = traceparent;
        }
        if (tmp2) {
          tmp2 = !headers2.get("traceparent");
        }
        if (tmp2) {
          const result1 = headers2.set("traceparent", traceparent);
        }
        if (baggage) {
          const str10 = headers2.get("baggage");
          if (str10) {
            let parts = str10.split(",");
            if (!parts.some(f82128)) {
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
          HermesBuiltin.arraySpread(items, headers, 0);
          if (!headers.find((item) => "sentry-trace" === item[0])) {
            const items1 = ["sentry-trace", tmp6];
            items.push(items1);
          }
          const tmp35 = tmp2 && traceparent && !headers.find((item) => "traceparent" === item[0]);
          if (tmp35) {
            const items2 = ["traceparent", traceparent];
            items.push(items2);
          }
          const tmp37 =
            baggage &&
            !headers.find((item) => {
              let someResult = "baggage" === item[0];
              if (someResult) {
                const str = item[1];
                const parts = str.split(",");
                someResult = parts.some(f82128);
              }
              return someResult;
            });
          if (tmp37) {
            const items3 = ["baggage", baggage];
            items.push(items3);
          }
          return items;
        } else {
          let items6;
          let str = "sentry-trace";
          let prop;
          if ("sentry-trace" in headers) {
            prop = headers["sentry-trace"];
          }
          let traceparent1;
          if ("traceparent" in headers) {
            traceparent1 = headers.traceparent;
          }
          let baggage1;
          if ("baggage" in headers) {
            baggage1 = headers.baggage;
          }
          if (baggage1) {
            let items5;
            const _Array2 = Array;
            if (Array.isArray(baggage1)) {
              const items4 = [];
              HermesBuiltin.arraySpread(items4, baggage1, 0);
              items5 = items4;
            } else {
              items5 = [baggage1];
            }
            items6 = items5;
          } else {
            items6 = [];
          }
          let tmp21 = baggage1;
          if (tmp21) {
            let found;
            const _Array3 = Array;
            if (Array.isArray(baggage1)) {
              found = baggage1.find((item) => {
                const parts = item.split(",");
                return parts.some(f82128);
              });
            } else {
              const parts1 = baggage1.split(",");
              found = parts1.some(f82128);
            }
            tmp21 = found;
          }
          const tmp23 = baggage && !tmp21;
          if (tmp23) {
            items6.push(baggage);
          }
          const obj3 = { "sentry-trace": prop, baggage: joined };
          const merged = Object.assign(headers);
          if (prop == null) {
            prop = tmp6;
          }
          joined = undefined;
          if (items6.length > 0) {
            joined = items6.join(",");
          }
          const tmp30 = tmp2 && traceparent && !traceparent1;
          if (tmp30) {
            obj3.traceparent = traceparent;
          }
          return obj3;
        }
      }
    } else {
      const obj4 = {};
      const merged1 = Object.assign(traceData);
      return obj4;
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

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
export const instrumentFetchRequest = function instrumentFetchRequest(
  fetchData,
  fn,
  fn2,
  setAttribute,
  onRequestSpanEnd,
) {
  let method;
  let obj6;
  let obj8;
  let tmpResult14;
  let tmpResult16;
  let url;
  if (fetchData.fetchData) {
    ({ method, url } = fetchData.fetchData);
    const obj = _mod731;
    const hasSpansEnabledResult = obj.hasSpansEnabled() && fn(url);
    if (fetchData.endTimestamp) {
      if (hasSpansEnabledResult) {
        const __span = fetchData.fetchData.__span;
        if (__span) {
          if (setAttribute[__span]) {
            if (fetchData.response) {
              const tmpResult = SPAN_STATUS_ERROR;
              tmpResult.setHttpStatus(setAttribute[__span], fetchData.response.status);
              const response = fetchData.response;
              let value;
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
                  const attr = obj19.setAttribute("http.response_content_length", parsed);
                }
              }
            } else if (fetchData.error) {
              const setStatus = obj19.setStatus;
              const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
              setStatus(obj2);
            }
            setAttribute[__span].end();
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
              onRequestSpanEnd(setAttribute[__span], obj3);
            }
            delete tmp5[__span];
          }
        }
      }
    }
    let tmp7 = onRequestSpanEnd;
    if (typeof onRequestSpanEnd !== "object") {
      tmp7 = { spanOrigin: onRequestSpanEnd };
      const obj4 = { spanOrigin: onRequestSpanEnd };
    }
    const spanOrigin = tmp7.spanOrigin;
    let str = "auto.http.browser";
    if (undefined !== spanOrigin) {
      str = spanOrigin;
    }
    const propagateTraceparent = tmp7.propagateTraceparent;
    const tmpResult11 = TRACE_FLAG_NONE;
    const activeSpan = tmpResult11.getActiveSpan();
    if (hasSpansEnabledResult) {
      let startInactiveSpanResult;
      if (activeSpan) {
        let obj7;
        const startInactiveSpan = continueTrace.startInactiveSpan;
        continueTrace;
        const startsWithResult = url.startsWith("data:");
        const tmpResult13 = _mod776;
        if (startsWithResult) {
          const _HermesInternal2 = HermesInternal;
          const obj5 = { name: "" + method + " " + tmpResult13.stripDataUrlContent(url), attributes: obj6 };
          obj6 = { url: tmpResult14.stripDataUrlContent(url), type: "fetch", "http.method": method };
          obj6[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
          obj6[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
          obj7 = obj5;
          tmpResult14 = _mod776;
        } else {
          const result = tmpResult13.parseStringToURLObject(url);
          let sanitizedUrlStringFromUrlObject = url;
          if (result) {
            const tmpResult15 = _mod776;
            sanitizedUrlStringFromUrlObject = tmpResult15.getSanitizedUrlStringFromUrlObject(result);
          }
          obj7 = { name: "" + method + " " + sanitizedUrlStringFromUrlObject, attributes: obj8 };
          const _HermesInternal = HermesInternal;
          obj8 = { url: tmpResult16.stripDataUrlContent(url), type: "fetch", "http.method": method };
          obj8[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
          obj8[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
          tmpResult16 = _mod776;
          if (result) {
            const tmpResult17 = _mod776;
            if (!tmpResult17.isURLObjectRelative(result)) {
              const tmpResult18 = _mod776;
              obj8["http.url"] = tmpResult18.stripDataUrlContent(result.href);
              obj8["server.address"] = result.host;
            }
            if (result.search) {
              obj8["http.query"] = result.search;
            }
            if (result.hash) {
              obj8["http.fragment"] = result.hash;
            }
          }
        }
        startInactiveSpanResult = startInactiveSpan(obj7);
      }
      fetchData.fetchData.__span = startInactiveSpanResult.spanContext().spanId;
      setAttribute[startInactiveSpanResult.spanContext().spanId] = startInactiveSpanResult;
      if (fn2(fetchData.fetchData.url)) {
        const first = fetchData.args[0];
        const obj9 = {};
        const tmp18 = fetchData.args[1] || {};
        const merged = Object.assign(tmp18);
        let tmp23;
        const tmpResult19 = _mod731;
        if (tmpResult19.hasSpansEnabled()) {
          if (activeSpan) {
            tmp23 = startInactiveSpanResult;
          }
        }
        const tmp22Result = _addTracingHeadersToFetchRequest(
          first,
          obj9,
          tmp23,
          undefined !== propagateTraceparent && propagateTraceparent,
        );
        if (tmp22Result) {
          fetchData.args[1] = obj9;
          obj9.headers = tmp22Result;
        }
      }
      const tmpResult20 = _mod724;
      const client = tmpResult20.getClient();
      if (client) {
        const obj10 = { input: null, response: null, startTimestamp: null, endTimestamp: null };
        ({
          args: obj18.input,
          response: obj18.response,
          startTimestamp: obj18.startTimestamp,
          endTimestamp: obj18.endTimestamp,
        } = fetchData);
        client.emit("beforeOutgoingRequestSpan", startInactiveSpanResult, obj10);
      }
      return startInactiveSpanResult;
    }
    const self = this;
    const self2 = this;
    startInactiveSpanResult = new SentryNonRecordingSpan.SentryNonRecordingSpan();
  }
};
