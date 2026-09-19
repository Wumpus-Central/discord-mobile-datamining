// _runtime/metro/13153__.js
import errorCallback from "../13044_errorCallback.js";
import _mod13055 from "13055__.js";
import _mod13072 from "13072__.js";
import _mod13080 from "13080__.js";
import _mod13119 from "13119__.js";
import _toArray from "../00718__toArray.js";
import "module_13047";
import consoleSandbox from "13048__.js";
import dateTimestampInSeconds from "13062__.js";
import __SENTRY_DEBUG__ from "13076__.js";

function _addTracingHeadersToFetchRequest(headers, headers2, span) {
  const traceData = _mod13119.getTraceData({ span });
  ({ sentry-trace: tmp4, baggage } = traceData);
  if (tmp4) {
    headers = headers2.headers;
    if (!headers) {
      const _Request = Request;
      let isInstanceOfResult = typeof Request !== "undefined";
      if (typeof Request !== "undefined") {
        const _Request2 = Request;
        isInstanceOfResult = _mod13055.isInstanceOf(headers, Request);
        const tmpResult = _mod13055;
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
        isInstanceOfResult1 = _mod13055.isInstanceOf(headers, Headers);
        const tmpResult2 = _mod13055;
      }
      if (isInstanceOfResult1) {
        const _Headers2 = Headers;
        headers2 = new Headers(headers);
        const result = headers2.set("sentry-trace", tmp4);
        if (baggage) {
          const str6 = headers2.get("baggage");
          if (str6) {
            let parts = str6.split(",");
            let found = parts.filter((item) => {
              const first = item.split("=")[0];
              return !first.startsWith(closure_1_0(closure_1_1[15]).SENTRY_BAGGAGE_KEY_PREFIX);
            });
            let joined = found.join(",");
            let combined = baggage;
            if (joined) {
              const _HermesInternal = HermesInternal;
              combined = "" + joined + "," + baggage;
            }
            const result1 = headers2.set("baggage", combined);
          } else {
            const result2 = headers2.set("baggage", baggage);
          }
        }
        return headers2;
      } else {
        const _Array = Array;
        if (Array.isArray(headers)) {
          const found1 = headers.filter((item) => {
            let isArray = Array.isArray(item);
            if (isArray) {
              isArray = "sentry-trace" === item[0];
            }
            return !isArray;
          });
          let items = [];
          const items1 = ["sentry-trace", tmp4];
          items[HermesBuiltin.arraySpread(found1.map((item) => {
            if (Array.isArray(item)) {
              if ("baggage" === item[0]) {
                if (typeof item[1] === "string") {
                  const arr = _toArray(item);
                  const items = [arr[0], ];
                  const substr = arr.slice(2);
                  const parts = arr[1].split(",");
                  const found = parts.filter((item) => {
                    const first = item.split("=")[0];
                    return !first.startsWith(closure_1_0(closure_1_1[15]).SENTRY_BAGGAGE_KEY_PREFIX);
                  });
                  items[1] = found.join(",");
                  HermesBuiltin.arraySpread(substr, 2);
                  return items;
                }
              }
            }
            return item;
          }), 0)] = items1;
          if (baggage) {
            const items2 = ["baggage", baggage];
            items.push(items2);
          }
          return items;
        } else {
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
                const found = parts.filter((item) => {
                  const first = item.split("=")[0];
                  return !first.startsWith(closure_1_0(closure_1_1[15]).SENTRY_BAGGAGE_KEY_PREFIX);
                });
                joined = found.join(",");
              }
              return joined;
            });
            let found2 = mapped.filter((item) => "" === item);
          } else {
            const items3 = [];
            found2 = items3;
            if (baggage1) {
              const parts1 = baggage1.split(",");
              const found3 = parts1.filter((item) => {
                const first = item.split("=")[0];
                return !first.startsWith(closure_1_0(closure_1_1[15]).SENTRY_BAGGAGE_KEY_PREFIX);
              });
              items3.push(found3.join(","));
              found2 = items3;
            }
          }
          if (baggage) {
            found2.push(baggage);
          }
          const obj3 = {};
          const merged = Object.assign(headers);
          obj3["sentry-trace"] = tmp4;
          let joined1;
          if (found2.length > 0) {
            joined1 = found2.join(",");
          }
          obj3.baggage = joined1;
          return obj3;
        }
      }
    } else {
      const obj4 = {};
      const merged1 = Object.assign(traceData);
      return obj4;
    }
  }
  const obj2 = { span };
}
errorCallback;
_mod13072;

export const addTracingHeadersToFetchRequest = function addTracingHeadersToFetchRequest(arg0, arg1, arg2, arg3, arg4) {
  return _addTracingHeadersToFetchRequest(arg0, arg3, arg4);
};
export const instrumentFetchRequest = function instrumentFetchRequest(fetchData, fn, fn2, arg3) {
  let str = arg4;
  if (arg4 === undefined) {
    str = "auto.http.browser";
  }
  let endResult = fetchData;
  if (fetchData.fetchData) {
    let setHttpStatus = require;
    let headers = dependencyMap;
    let hasTracingEnabledResult = _mod13080.hasTracingEnabled();
    if (hasTracingEnabledResult) {
      hasTracingEnabledResult = fn(endResult.fetchData.url);
    }
    if (endResult.endTimestamp) {
      if (hasTracingEnabledResult) {
        const __span = endResult.fetchData.__span;
        if (__span) {
          if (arg3[__span]) {
            if (endResult.response) {
              setHttpStatus = setHttpStatus(13065).setHttpStatus;
              setHttpStatus(obj10, endResult.response.status);
              headers = endResult.response;
              if (headers) {
                headers = endResult.response.headers;
              }
              if (headers) {
                const headers2 = endResult.response.headers;
                headers = headers2.get("content-length");
              }
              if (headers) {
                const _parseInt = parseInt;
                setHttpStatus = parseInt(headers);
                if (setHttpStatus > 0) {
                  const attr = obj10.setAttribute("http.response_content_length", setHttpStatus);
                }
              }
              const setHttpStatusResult = setHttpStatus(13065);
            } else if (endResult.error) {
              const obj2 = { code: setHttpStatus(13065).SPAN_STATUS_ERROR, message: "internal_error" };
              obj10.setStatus(obj2);
            }
            endResult = obj10.end();
            delete tmp2[tmp];
          }
        }
      }
    }
    ({ method, url } = endResult.fetchData);
    const tmp7 = (function getFullURL(url) {
      try {
        const _URL = URL;
        const uRL = new URL(url);
        return uRL.href;
      } catch (err) {
      }
    })(url);
    if (tmp7) {
      const host = setHttpStatus(13130).parseUrl(tmp7).host;
      const setHttpStatusResult2 = setHttpStatus(13130);
    }
    const activeSpan = setHttpStatus(13053).getActiveSpan();
    if (hasTracingEnabledResult) {
      if (activeSpan) {
        const obj3 = { name: null, attributes: null };
        const _HermesInternal = HermesInternal;
        obj3.name = "" + method + " " + url;
        const obj4 = { url, type: "fetch", "http.method": method, "http.url": tmp7, "server.address": host };
        obj4[setHttpStatus(13063).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
        obj4[setHttpStatus(13063).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
        obj3.attributes = obj4;
        let startInactiveSpanResult = setHttpStatus(13082).startInactiveSpan(obj3);
        const setHttpStatusResult4 = setHttpStatus(13082);
      }
      endResult.fetchData.__span = startInactiveSpanResult.spanContext().spanId;
      arg3[startInactiveSpanResult.spanContext().spanId] = startInactiveSpanResult;
      if (fn2(endResult.fetchData.url)) {
        let obj5 = endResult.args[1];
        if (!obj5) {
          obj5 = {};
        }
        let tmp14;
        if (setHttpStatusResult5.hasTracingEnabled()) {
          if (activeSpan) {
            tmp14 = startInactiveSpanResult;
          }
        }
        const tmp13Result = _addTracingHeadersToFetchRequest(endResult.args[0], obj5, tmp14);
        if (tmp13Result) {
          endResult.args[1] = obj5;
          obj5.headers = tmp13Result;
        }
        setHttpStatusResult5 = setHttpStatus(13080);
      }
      return startInactiveSpanResult;
    }
    startInactiveSpanResult = new setHttpStatus(13081).SentryNonRecordingSpan();
    const setHttpStatusResult3 = setHttpStatus(13053);
  }
};