// _runtime/metro/07600__addTracingHeadersToFetchRequest.js
import _toArray from "_toArray";
import "errorCallback";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import consoleSandbox from "consoleSandbox";
import dateTimestampInSeconds from "dateTimestampInSeconds";
import "SyncPromise";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import { hasTracingEnabled } from "../07527_hasTracingEnabled.js";
import { getTraceData } from "../07566_getTraceData.js";

function _addTracingHeadersToFetchRequest(headers, headers2, span) {
  let baggage;
  let tmp4;
  let obj = getTraceData;
  obj = { span };
  const traceData = obj.getTraceData(obj);
  ({ sentry-trace: tmp4, baggage } = traceData);
  if (tmp4) {
    headers = headers2.headers;
    if (!headers) {
      const _Request = Request;
      let isInstanceOfResult = typeof Request !== "undefined";
      if (typeof Request !== "undefined") {
        let tmpResult = tmp(7502);
        const _Request2 = Request;
        isInstanceOfResult = tmpResult.isInstanceOf(headers, Request);
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
        tmpResult = tmp(7502);
        const _Headers3 = Headers;
        isInstanceOfResult1 = tmpResult.isInstanceOf(headers, Headers);
      }
      if (isInstanceOfResult1) {
        const _Headers2 = Headers;
        headers2 = new Headers(headers);
        const result = headers2.set("sentry-trace", tmp4);
        if (baggage) {
          const str6 = headers2.get("baggage");
          if (str6) {
            let parts = str6.split(",");
            let found = parts.filter((arg0) => {
              const first = arg0.split("=")[0];
              return !first.startsWith(callback(table[15]).SENTRY_BAGGAGE_KEY_PREFIX);
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
          const found1 = headers.filter((arg0) => {
            let isArray = Array.isArray(arg0);
            if (isArray) {
              isArray = "sentry-trace" === arg0[0];
            }
            return !isArray;
          });
          let items = [];
          const items1 = ["sentry-trace", tmp4];
          items[HermesBuiltin.arraySpread(found1.map((arg0) => {
            if (Array.isArray(arg0)) {
              if ("baggage" === arg0[0]) {
                if (typeof arg0[1] === "string") {
                  const arr = callback(arg0);
                  const items = [arr[0], ];
                  const substr = arr.slice(2);
                  const parts = arr[1].split(",");
                  const found = parts.filter((arg0) => {
                    const first = arg0.split("=")[0];
                    return !first.startsWith(callback(table[15]).SENTRY_BAGGAGE_KEY_PREFIX);
                  });
                  items[1] = found.join(",");
                  HermesBuiltin.arraySpread(substr, 2);
                  return items;
                }
              }
            }
            return arg0;
          }), 0)] = items1;
          if (baggage) {
            const items2 = ["baggage", baggage];
            items.push(items2);
          }
          return items;
        } else {
          baggage = undefined;
          if ("baggage" in headers) {
            baggage = headers.baggage;
          }
          const _Array2 = Array;
          if (Array.isArray(baggage)) {
            const mapped = baggage.map((str) => {
              let joined = str;
              if (typeof str === "string") {
                const parts = str.split(",");
                const found = parts.filter((arg0) => {
                  const first = arg0.split("=")[0];
                  return !first.startsWith(callback(table[15]).SENTRY_BAGGAGE_KEY_PREFIX);
                });
                joined = found.join(",");
              }
              return joined;
            });
            let found2 = mapped.filter((arg0) => "" === arg0);
          } else {
            const items3 = [];
            found2 = items3;
            if (baggage) {
              const parts1 = baggage.split(",");
              const found3 = parts1.filter((arg0) => {
                const first = arg0.split("=")[0];
                return !first.startsWith(callback(table[15]).SENTRY_BAGGAGE_KEY_PREFIX);
              });
              items3.push(found3.join(","));
              found2 = items3;
            }
          }
          if (baggage) {
            found2.push(baggage);
          }
          obj = {};
          const merged = Object.assign(headers);
          obj["sentry-trace"] = tmp4;
          let joined1;
          if (found2.length > 0) {
            joined1 = found2.join(",");
          }
          obj.baggage = joined1;
          return obj;
        }
      }
    } else {
      const obj1 = {};
      const merged1 = Object.assign(traceData);
      return obj1;
    }
  }
}

export const addTracingHeadersToFetchRequest = function addTracingHeadersToFetchRequest(arg0, arg1, arg2, arg3, arg4) {
  return _addTracingHeadersToFetchRequest(arg0, arg3, arg4);
};
export const instrumentFetchRequest = function instrumentFetchRequest(fetchData) {
  let method;
  let url;
  let str = arg4;
  if (arg4 === undefined) {
    str = "auto.http.browser";
  }
  let endResult = fetchData;
  if (fetchData.fetchData) {
    let setHttpStatus = require;
    let headers = dependencyMap;
    let obj = hasTracingEnabled;
    let hasTracingEnabledResult = obj.hasTracingEnabled();
    if (hasTracingEnabledResult) {
      hasTracingEnabledResult = arg1(endResult.fetchData.url);
    }
    if (endResult.endTimestamp) {
      if (hasTracingEnabledResult) {
        const __span = endResult.fetchData.__span;
        if (__span) {
          if (arg3[__span]) {
            if (endResult.response) {
              setHttpStatus = setHttpStatus(7512).setHttpStatus;
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
              const setHttpStatusResult = setHttpStatus(7512);
            } else if (endResult.error) {
              obj = { code: null, message: "internal_error" };
              obj[0] = setHttpStatus(7512).SPAN_STATUS_ERROR;
              obj10.setStatus(obj);
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
      const host = setHttpStatus(7577).parseUrl(tmp7).host;
      const setHttpStatusResult2 = setHttpStatus(7577);
    }
    const activeSpan = setHttpStatus(7500).getActiveSpan();
    if (hasTracingEnabledResult) {
      if (activeSpan) {
        obj = { name: null, attributes: null };
        const _HermesInternal = HermesInternal;
        obj[0] = "" + method + " " + url;
        const obj1 = { url: null, type: "fetch", "http.method": null, "http.url": null, "server.address": null };
        obj1[0] = url;
        obj1[2] = method;
        obj1[3] = tmp7;
        obj1[4] = host;
        obj1[setHttpStatus(7510).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
        obj1[setHttpStatus(7510).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
        obj[1] = obj1;
        let startInactiveSpanResult = setHttpStatus(7529).startInactiveSpan(obj);
        const setHttpStatusResult4 = setHttpStatus(7529);
      }
      endResult.fetchData.__span = startInactiveSpanResult.spanContext().spanId;
      arg3[startInactiveSpanResult.spanContext().spanId] = startInactiveSpanResult;
      if (arg2(endResult.fetchData.url)) {
        let obj2 = endResult.args[1];
        if (!obj2) {
          obj2 = {};
        }
        let tmp14;
        if (setHttpStatusResult5.hasTracingEnabled()) {
          if (activeSpan) {
            tmp14 = startInactiveSpanResult;
          }
        }
        const tmp13Result = _addTracingHeadersToFetchRequest(endResult.args[0], obj2, tmp14);
        if (tmp13Result) {
          endResult.args[1] = obj2;
          obj2.headers = tmp13Result;
        }
        setHttpStatusResult5 = setHttpStatus(7527);
        const tmp13 = _addTracingHeadersToFetchRequest;
      }
      return startInactiveSpanResult;
    }
    startInactiveSpanResult = new setHttpStatus(7528).SentryNonRecordingSpan();
    const setHttpStatusResult3 = setHttpStatus(7500);
  }
};