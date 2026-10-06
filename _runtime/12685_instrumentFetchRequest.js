// === Module 12685: instrumentFetchRequest ===

// Module 12685 (instrumentFetchRequest)
import _mod12585 from "module_12585" /* 12585 */;
import _mod12587 from "module_12587" /* 12587 */;
import _mod12595 from "module_12595" /* 12595 */;
import _mod12597 from "module_12597" /* 12597 */;
import _mod12604 from "module_12604" /* 12604 */;
import _mod12612 from "module_12612" /* 12612 */;
import _mod12613 from "module_12613" /* 12613 */;
import _mod12614 from "module_12614" /* 12614 */;
import _mod12651 from "module_12651" /* 12651 */;
import stripUrlQueryAndFragment from "stripUrlQueryAndFragment" /* 12662 */;
import _toArray from "_toArray" /* 729 */;
import registerSpanErrorInstrumentation from "module_12576" /* 12576 */;
import "module_12579";
import CONSOLE_LEVELS from "module_12580" /* 12580 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12594 */;
import DEBUG_BUILD from "module_12608" /* 12608 */;

let set;

function _addTracingHeadersToFetchRequest(headers, headers2, span) {
  let baggage;
  let joined1;
  let tmp5;
  const f112762 = (item) => {
    const first = item.split("=")[0];
    return !first.startsWith(closure_1_0(closure_1_1[15]).SENTRY_BAGGAGE_KEY_PREFIX);
  };
  const obj = _mod12651;
  const obj2 = { span };
  const traceData = obj.getTraceData(obj2);
  ({ "sentry-trace": tmp5, baggage } = traceData);
  if (tmp5) {
    headers = headers2.headers;
    if (!headers) {
      const _Request = Request;
      let isInstanceOfResult = typeof Request !== "undefined";
      if (typeof Request !== "undefined") {
        const _Request2 = Request;
        const tmp2Result = _mod12587;
        isInstanceOfResult = tmp2Result.isInstanceOf(headers, Request);
      }
      let headers1;
      if (isInstanceOfResult) {
        headers1 = headers.headers;
      }
      headers = headers1;
    }
    if (headers) {
      const _Headers = Headers;
      let isInstanceOfResult1 = typeof Headers !== "undefined";
      if (typeof Headers !== "undefined") {
        const _Headers3 = Headers;
        const tmp2Result2 = _mod12587;
        isInstanceOfResult1 = tmp2Result2.isInstanceOf(headers, Headers);
      }
      if (isInstanceOfResult1) {
        const _Headers2 = Headers;
        const self = this;
        const self2 = this;
        headers2 = new Headers(headers);
        const result = headers2.set("sentry-trace", tmp5);
        if (baggage) {
          const str6 = headers2.get("baggage");
          if (str6) {
            let parts = str6.split(",");
            let found = parts.filter(f112762);
            let joined = found.join(",");
            let combined = baggage;
            set = headers2.set;
            if (joined) {
              const _HermesInternal = HermesInternal;
              combined = "" + joined + "," + baggage;
            }
            const result1 = set("baggage", combined);
          } else {
            const result2 = headers2.set("baggage", baggage);
          }
        }
        return headers2;
      } else {
        const _Array = Array;
        if (Array.isArray(headers)) {
          const found1 = headers.filter((item) => {
            const isArray = Array.isArray(item) && "sentry-trace" === item[0];
            return !isArray;
          });
          let items = [];
          const items1 = ["sentry-trace", tmp5];
          items[HermesBuiltin.arraySpread(items, found1.map((item) => {
            if (Array.isArray(item)) {
              if ("baggage" === item[0]) {
                if (typeof item[1] === "string") {
                  const arr = _toArray(item);
                  const items = [, ];
                  const str2 = arr[1];
                  items[0] = arr[0];
                  const substr = arr.slice(2);
                  const parts = str2.split(",");
                  const found = parts.filter(f112762);
                  items[1] = found.join(",");
                  HermesBuiltin.arraySpread(items, substr, 2);
                  return items;
                }
              }
            }
            return item;
          }), 0)] = items1;
          if (baggage) {
            const items2 = ["baggage", baggage];
            let arr = items.push(items2);
          }
          return items;
        } else {
          let found2;
          let baggage1;
          if ("baggage" in headers) {
            baggage1 = headers.baggage;
          }
          const _Array2 = Array;
          if (Array.isArray(baggage1)) {
            const mapped = baggage1.map((item) => {
              let joined = item;
              if (typeof item === "string") {
                const parts = item.split(",");
                const found = parts.filter(f112762);
                joined = found.join(",");
              }
              return joined;
            });
            found2 = mapped.filter((item) => "" === item);
          } else {
            const items3 = [];
            found2 = items3;
            if (baggage1) {
              let str2 = ",";
              const push = items3.push;
              const parts1 = baggage1.split(",");
              const found3 = parts1.filter(f112762);
              push(found3.join(","));
              found2 = items3;
            }
          }
          if (baggage) {
            found2.push(baggage);
          }
          const obj3 = { "sentry-trace": tmp5, baggage: joined1 };
          const merged = Object.assign(headers);
          joined1 = undefined;
          if (found2.length > 0) {
            joined1 = found2.join(",");
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
_mod12604;

export const addTracingHeadersToFetchRequest = function addTracingHeadersToFetchRequest(arg0, arg1, arg2, arg3, arg4) {
  return _addTracingHeadersToFetchRequest(arg0, arg3, arg4);
};
export const instrumentFetchRequest = function instrumentFetchRequest(fetchData, fn, fn2, setAttribute) {
  let method;
  let obj4;
  let url;
  function getFullURL(url) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(url);
      return uRL.href;
    } catch (err) {
    }
  }
  let str = arg4;
  if (arg4 === undefined) {
    str = "auto.http.browser";
  }
  if (fetchData.fetchData) {
    let host;
    const obj = _mod12612;
    let hasTracingEnabledResult = obj.hasTracingEnabled();
    if (hasTracingEnabledResult) {
      hasTracingEnabledResult = fn(fetchData.fetchData.url);
    }
    if (fetchData.endTimestamp) {
      if (hasTracingEnabledResult) {
        const __span = fetchData.fetchData.__span;
        if (__span) {
          if (setAttribute[__span]) {
            if (fetchData.response) {
              const tmpResult = _mod12597;
              tmpResult.setHttpStatus(setAttribute[__span], fetchData.response.status);
              let value = fetchData.response && fetchData.response.headers;
              if (value) {
                const headers = fetchData.response.headers;
                value = headers.get("content-length");
              }
              if (value) {
                const _parseInt = parseInt;
                const parsed = parseInt(value);
                if (parsed > 0) {
                  const attr = obj9.setAttribute("http.response_content_length", parsed);
                }
              }
            } else if (fetchData.error) {
              const setStatus = obj9.setStatus;
              const obj2 = { code: _mod12597.SPAN_STATUS_ERROR, message: "internal_error" };
              setStatus(obj2);
            }
            setAttribute[__span].end();
            delete tmp5[__span];
          }
        }
      }
    }
    ({ method, url } = fetchData.fetchData);
    const tmp6 = getFullURL(url);
    if (tmp6) {
      const tmpResult5 = stripUrlQueryAndFragment;
      host = tmpResult5.parseUrl(tmp6).host;
    }
    const tmpResult6 = _mod12585;
    const activeSpan = tmpResult6.getActiveSpan();
    if (hasTracingEnabledResult) {
      let startInactiveSpanResult;
      if (activeSpan) {
        const _HermesInternal = HermesInternal;
        const obj3 = { name: "" + method + " " + url, attributes: obj4 };
        const startInactiveSpan = _mod12614.startInactiveSpan;
        _mod12614;
        obj4 = { url, type: "fetch", "http.method": method, "http.url": tmp6, "server.address": host };
        obj4[_mod12595.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
        obj4[_mod12595.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
        startInactiveSpanResult = startInactiveSpan(obj3);
      }
      fetchData.fetchData.__span = startInactiveSpanResult.spanContext().spanId;
      setAttribute[startInactiveSpanResult.spanContext().spanId] = startInactiveSpanResult;
      if (fn2(fetchData.fetchData.url)) {
        let obj5 = fetchData.args[1];
        const first = fetchData.args[0];
        if (!obj5) {
          obj5 = {};
        }
        let tmp13;
        const tmpResult8 = _mod12612;
        if (tmpResult8.hasTracingEnabled()) {
          if (activeSpan) {
            tmp13 = startInactiveSpanResult;
          }
        }
        const tmp12Result = _addTracingHeadersToFetchRequest(first, obj5, tmp13);
        if (tmp12Result) {
          fetchData.args[1] = obj5;
          obj5.headers = tmp12Result;
        }
      }
      return startInactiveSpanResult;
    }
    let self = this;
    let self2 = this;
    startInactiveSpanResult = new _mod12613.SentryNonRecordingSpan();
  }
};