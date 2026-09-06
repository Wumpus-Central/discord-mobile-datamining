// === Module 798: _addTracingHeadersToFetchRequest ===

// Module 798 (_addTracingHeadersToFetchRequest)
import getClient from "getClient" /* 713 */;
import hasSpansEnabled from "hasSpansEnabled" /* 720 */;
import getTraceData from "getTraceData" /* 769 */;

require = arg1;
const dependencyMap = arg6;
function _addTracingHeadersToFetchRequest(headers, headers2, span, propagateTraceparent) {
  let tmp = propagateTraceparent;
  let obj = getTraceData;
  obj = { span, propagateTraceparent };
  const traceData = obj.getTraceData(obj);
  ({ sentry-trace: tmp5, baggage, traceparent } = traceData);
  if (tmp5) {
    headers = headers2.headers;
    if (!headers) {
      let tmp2Result = tmp2(692);
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
        tmp2Result = tmp2(692);
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
            if (!parts.some((str) => {
              const trimmed = str.trim();
              return trimmed.startsWith(callback(table[8]).SENTRY_BAGGAGE_KEY_PREFIX);
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
          if (!headers.find((arg0) => "sentry-trace" === arg0[0])) {
            const items1 = ["sentry-trace", tmp5];
            items.push(items1);
          }
          let tmp34 = tmp;
          if (tmp) {
            tmp34 = traceparent;
          }
          if (tmp34) {
            tmp34 = !headers.find((arg0) => "traceparent" === arg0[0]);
          }
          if (tmp34) {
            const items2 = ["traceparent", traceparent];
            items.push(items2);
          }
          let tmp36 = baggage;
          if (baggage) {
            tmp36 = !headers.find((arg0) => {
              let someResult = "baggage" === arg0[0];
              if (someResult) {
                const parts = arg0[1].split(",");
                someResult = parts.some((str) => {
                  const trimmed = str.trim();
                  return trimmed.startsWith(callback(table[8]).SENTRY_BAGGAGE_KEY_PREFIX);
                });
                const str = arg0[1];
              }
              return someResult;
            });
          }
          if (tmp36) {
            const items3 = ["baggage", baggage];
            items.push(items3);
          }
          return items;
        } else {
          if ("sentry-trace" in headers) {
            sentry_trace = headers["sentry-trace"];
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
              let tmp22 = baggage;
              if (baggage) {
                tmp22 = !baggage;
              }
              if (tmp22) {
                items6.push(baggage);
              }
              obj = {};
              const merged = Object.assign(headers);
              if (sentry_trace == null) {
                sentry_trace = tmp5;
              }
              obj["sentry-trace"] = sentry_trace;
              let joined;
              if (items6.length > 0) {
                joined = items6.join(",");
              }
              obj.baggage = joined;
              let tmp29 = tmp;
              if (tmp) {
                tmp29 = traceparent;
              }
              if (tmp29) {
                tmp29 = !traceparent2;
              }
              if (tmp29) {
                obj.traceparent = traceparent;
              }
              return obj;
            } else {
              const _Array3 = Array;
              if (Array.isArray(baggage)) {
                let found = baggage.find((str) => {
                  const parts = str.split(",");
                  return parts.some((str) => {
                    const trimmed = str.trim();
                    return trimmed.startsWith(callback(table[8]).SENTRY_BAGGAGE_KEY_PREFIX);
                  });
                });
              } else {
                const parts1 = baggage.split(",");
                found = parts1.some((str) => {
                  const trimmed = str.trim();
                  return trimmed.startsWith(callback(table[8]).SENTRY_BAGGAGE_KEY_PREFIX);
                });
              }
            }
          }
        }
      }
    } else {
      obj1 = {};
      const merged1 = Object.assign(traceData);
      return obj1;
    }
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._addTracingHeadersToFetchRequest = _addTracingHeadersToFetchRequest;
arg5._callOnRequestSpanEnd = function _callOnRequestSpanEnd(arg0, response, obj) {
  let onRequestSpanEnd;
  if (typeof obj === "object") {
    if (null !== obj) {
      onRequestSpanEnd = obj.onRequestSpanEnd;
    }
  }
  if (onRequestSpanEnd != null) {
    response = response.response;
    let headers;
    if (response != null) {
      headers = response.headers;
    }
    obj = { headers: null, error: null };
    obj[0] = headers;
    obj[1] = response.error;
    onRequestSpanEnd(arg0, obj);
  }
};
arg5.instrumentFetchRequest = function instrumentFetchRequest(fetchData, arg1, arg2, arg3, obj) {
  if (fetchData.fetchData) {
    ({ method, url } = fetchData.fetchData);
    obj = hasSpansEnabled;
    let hasSpansEnabledResult = obj.hasSpansEnabled();
    if (hasSpansEnabledResult) {
      hasSpansEnabledResult = arg1(url);
    }
    if (fetchData.endTimestamp) {
      if (hasSpansEnabledResult) {
        const __span = fetchData.fetchData.__span;
        if (__span) {
          if (arg3[__span]) {
            if (fetchData.response) {
              let tmp3Result = tmp3(705);
              tmp3Result.setHttpStatus(obj20, fetchData.response.status);
              const response = fetchData.response;
              let value;
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
              obj = { code: null, message: "internal_error" };
              obj[0] = tmp3(705).SPAN_STATUS_ERROR;
              obj20.setStatus(obj);
            }
            obj20.end();
            let onRequestSpanEnd;
            if (typeof obj === "object") {
              if (null !== obj) {
                onRequestSpanEnd = obj.onRequestSpanEnd;
              }
            }
            if (onRequestSpanEnd != null) {
              const response2 = fetchData.response;
              headers = undefined;
              if (response2 != null) {
                headers = response2.headers;
              }
              obj = { headers: null, error: null };
              obj[0] = headers;
              obj[1] = fetchData.error;
              onRequestSpanEnd(obj20, obj);
            }
            delete tmp2[tmp];
          }
        }
      }
    }
    let tmp9 = obj;
    if (typeof obj !== "object") {
      obj1 = { spanOrigin: null };
      obj1[0] = obj;
      tmp9 = obj1;
    }
    const spanOrigin = tmp9.spanOrigin;
    let str = "auto.http.browser";
    if (undefined !== spanOrigin) {
      str = spanOrigin;
    }
    const propagateTraceparent = tmp9.propagateTraceparent;
    tmp3Result = tmp3(684);
    const activeSpan = tmp3Result.getActiveSpan();
    if (hasSpansEnabledResult) {
      if (activeSpan) {
        const tmp3Result1 = tmp3(731);
        let tmp3Result2 = tmp3(765);
        if (startsWithResult) {
          const obj2 = { name: null, attributes: null };
          const _HermesInternal2 = HermesInternal;
          obj2[0] = "" + method + " " + tmp3Result2.stripDataUrlContent(url);
          const obj3 = { url: null, type: "fetch", "http.method": null };
          tmp3Result2 = tmp3(765).stripDataUrlContent(url);
          obj3[0] = tmp3Result2;
          obj3[2] = method;
          obj3[tmp3(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
          str = tmp3(704).SEMANTIC_ATTRIBUTE_SENTRY_OP;
          method = "http.client";
          obj3[str] = "http.client";
          obj2[1] = obj3;
          let obj4 = obj2;
          const tmp3Result3 = tmp3(765);
        } else {
          const result = tmp3Result2.parseStringToURLObject(url);
          let sanitizedUrlStringFromUrlObject = url;
          if (result) {
            sanitizedUrlStringFromUrlObject = tmp3(765).getSanitizedUrlStringFromUrlObject(result);
            const tmp3Result4 = tmp3(765);
          }
          obj4 = { name: null, attributes: null };
          const _HermesInternal = HermesInternal;
          obj4[0] = "" + method + " " + sanitizedUrlStringFromUrlObject;
          const obj5 = { url: null, type: "fetch", "http.method": null };
          obj5[0] = tmp3(765).stripDataUrlContent(url);
          obj5[2] = method;
          obj5[tmp3(704).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = str;
          obj5[tmp3(704).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "http.client";
          if (result) {
            if (!tmp3Result6.isURLObjectRelative(result)) {
              obj5["http.url"] = tmp3(765).stripDataUrlContent(result.href);
              obj5["server.address"] = result.host;
              const tmp3Result7 = tmp3(765);
            }
            if (result.search) {
              obj5["http.query"] = result.search;
            }
            if (result.hash) {
              obj5["http.fragment"] = result.hash;
            }
            tmp3Result6 = tmp3(765);
          }
          obj4[1] = obj5;
          const tmp3Result5 = tmp3(765);
        }
        tmp3Result1.startInactiveSpan(obj4);
        startsWithResult = url.startsWith("data:");
      }
    }
    const sentryNonRecordingSpan = new tmp3(721).SentryNonRecordingSpan();
    fetchData.fetchData.__span = sentryNonRecordingSpan.spanContext().spanId;
    arg3[sentryNonRecordingSpan.spanContext().spanId] = sentryNonRecordingSpan;
    if (arg2(fetchData.fetchData.url)) {
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
      const tmp27 = _addTracingHeadersToFetchRequest;
      tmp3Result8 = tmp3(720);
    }
    const client = getClient.getClient();
    if (client) {
      ({ args: obj19[0], response: obj19[1], startTimestamp: obj19[2], endTimestamp: obj19[3] } = fetchData);
      client.emit("beforeOutgoingRequestSpan", sentryNonRecordingSpan, { input: null, response: null, startTimestamp: null, endTimestamp: null });
      const obj7 = { input: null, response: null, startTimestamp: null, endTimestamp: null };
    }
    return sentryNonRecordingSpan;
  }
};