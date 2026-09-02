// === Module 1055: _addMeasureSpans ===

// Module 1055 (_addMeasureSpans)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 814 */;
import triggerHandlers from "triggerHandlers" /* 1031 */;
import getNavigationEntry from "getNavigationEntry" /* 1040 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 1056 */;
import closure_2 from "_slicedToArray" /* 32 */;

function _addMeasureSpans(activeSpan, entryType) {
  if (!(function isReact19MeasureEntry(entryType) {
    entryType = undefined;
    if (entryType != null) {
      entryType = entryType.entryType;
    }
    if ("measure" === entryType) {
      try {
        return "Components \u269B" === entryType.detail.devtools.track;
      } catch (err) {
        return tmp;
      }
    }
  })(entryType)) {
    const items = ["mark", "measure"];
    if (!items.includes(entryType.entryType)) {
      const navigationEntry = getNavigationEntry.getNavigationEntry(false);
      let obj2 = getNavigationEntry;
      let num = 0;
      if (navigationEntry) {
        num = navigationEntry.requestStart;
      }
      const _Math = Math;
      const sum = arg4 + Math.max(arg2, extractNetworkProtocol.msToSec(num));
      const sum1 = arg4 + arg2;
      const sum2 = sum1 + arg3;
      let obj = {};
      obj[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.resource.browser.metrics";
      if (sum !== sum1) {
        obj["sentry.browser.measure_happened_before_request"] = true;
        obj["sentry.browser.measure_start_time"] = sum;
      }
      (function _addDetailToSpanAttributes(arg0, detail) {
        try {
          detail = detail.detail;
          if (detail) {
            if (typeof tmp2 === "object") {
              const _Object = Object;
              const entries = Object.entries(detail);
              const tmp11 = entries[Symbol.iterator]();
              if (tmp11 !== undefined) {
                [tmp17, tmp18] = callback2(tmp13, 2);
                if (tmp18) {
                  if (obj.isPrimitive(tmp19)) {
                    const _HermesInternal2 = HermesInternal;
                    arg0["sentry.browser.measure.detail." + tmp17] = tmp19;
                  }
                  obj = callback(814);
                }
                if (undefined !== tmp18) {
                  try {
                    const _HermesInternal = HermesInternal;
                    const _JSON2 = JSON;
                    const combined = "sentry.browser.measure.detail." + tmp17;
                    arg0[combined] = JSON.stringify(tmp19);
                  } catch (err) {
                  }
                }
                const tmp16 = callback2(tmp13, 2);
              }
            } else {
              if (obj2.isPrimitive(tmp2)) {
                arg0["sentry.browser.measure.detail"] = tmp2;
              } else {
                try {
                  const _JSON = JSON;
                  arg0["sentry.browser.measure.detail"] = JSON.stringify(tmp2);
                } catch (err) {
                }
              }
              obj2 = callback(814);
            }
          }
        } catch (err) {
        }
      })(obj, entryType);
      if (sum <= sum2) {
        const tmp4Result = tmp4(1056);
        obj = { name: null, op: null, attributes: null };
        ({ name: obj6[0], entryType: obj6[1] } = entryType);
        obj[2] = obj;
        tmp4Result.startAndEndSpan(activeSpan, sum, sum2, obj);
      }
      const obj3 = extractNetworkProtocol;
    } else {
      obj = registerSpanErrorInstrumentation;
    }
  }
}
function _addNavigationSpans(activeSpan, requestStart) {
  const _require = activeSpan;
  dependencyMap = requestStart;
  closure_2 = arg2;
  const items = ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"];
  const item = items.forEach((arg0) => {
    closure_1_9(closure_0, closure_1, arg0, closure_2);
  });
  _addPerformanceNavigationTiming(activeSpan, requestStart, "secureConnection", arg2, "TLS/SSL");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "fetch", arg2, "cache");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "domainLookup", arg2, "DNS");
  let obj = _require(1056);
  const sum = arg2 + obj.msToSec(requestStart.requestStart);
  obj1 = _require(1056);
  const sum1 = arg2 + obj1.msToSec(requestStart.responseEnd);
  let obj2 = _require(1056);
  const sum2 = arg2 + obj2.msToSec(requestStart.responseStart);
  if (requestStart.responseEnd) {
    let tmp5Result = tmp5(1056);
    obj = { op: "browser.request", name: null, attributes: null };
    obj[1] = requestStart.name;
    obj = {};
    obj[tmp5(814).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    obj[2] = obj;
    tmp5Result.startAndEndSpan(activeSpan, sum, sum1, obj);
    tmp5Result = tmp5(1056);
    obj1 = { op: "browser.response", name: null, attributes: null };
    obj1[1] = requestStart.name;
    obj2 = {};
    obj2[tmp5(814).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    obj1[2] = obj2;
    tmp5Result.startAndEndSpan(activeSpan, sum2, sum1, obj1);
  }
}
function _addPerformanceNavigationTiming(activeSpan, requestStart, domainLookup, arg3, DNS) {
  let tmp = DNS;
  if (DNS === undefined) {
    tmp = domainLookup;
  }
  let str = "connectEnd";
  if ("secureConnection" !== domainLookup) {
    str = "domainLookupStart";
    if ("fetch" !== domainLookup) {
      const _HermesInternal = HermesInternal;
      str = "" + domainLookup + "End";
    }
  }
  let redirectCount = requestStart;
  const tmp4 = requestStart["" + domainLookup + "Start"];
  let tmp5 = tmp4;
  if (tmp4) {
    tmp5 = tmp3;
  }
  if (tmp5) {
    let obj = extractNetworkProtocol;
    obj1 = extractNetworkProtocol;
    const sum = arg3 + obj1.msToSec(tmp4);
    let obj2 = extractNetworkProtocol;
    const sum1 = arg3 + obj2.msToSec(tmp3);
    obj = { op: null, name: null, attributes: null };
    const _HermesInternal2 = HermesInternal;
    obj[0] = "browser." + tmp;
    obj[1] = redirectCount.name;
    obj = {};
    obj[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    if ("redirect" !== domainLookup) {
      obj1 = {};
      const merged = Object.assign(obj1);
      obj[2] = obj;
      obj.startAndEndSpan(activeSpan, sum, sum1, obj);
    }
    obj2 = { "http.redirect_count": null };
    redirectCount = redirectCount.redirectCount;
    obj2[0] = redirectCount;
    obj1 = obj2;
  }
}
function _addResourceSpans(activeSpan, initiatorType, arr, arg3, arg4, arg5, arr2) {
  if ("xmlhttprequest" !== initiatorType.initiatorType) {
    if ("fetch" !== initiatorType.initiatorType) {
      let str2 = "resource.other";
      if (initiatorType.initiatorType) {
        const _HermesInternal = HermesInternal;
        str2 = "resource." + initiatorType.initiatorType;
      }
      let hasItem;
      if (arr2 != null) {
        hasItem = arr2.includes(str2);
      }
      if (!hasItem) {
        let obj = {};
        obj[_require(obj[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.resource.browser.metrics";
        const url = _require(obj[2]).parseUrl(arr);
        if (url.protocol) {
          const parts = url.protocol.split(":");
          obj["url.scheme"] = parts.pop();
          const str4 = url.protocol;
        }
        if (url.host) {
          obj["server.address"] = url.host;
        }
        obj["url.same_origin"] = arr.includes(_require(obj[3]).WINDOW.location.origin);
        const items = [["responseStatus", "http.response.status_code"], ["transferSize", "http.response_transfer_size"], ["encodedBodySize", "http.response_content_length"], ["decodedBodySize", "http.decoded_response_content_length"], ["renderBlockingStatus", "resource.render_blocking_status"], ["deliveryType", "http.response_delivery_type"]];
        _require = initiatorType;
        const item = items.forEach((arg0) => {
          [tmp, tmp2] = arg0;
          let tmp4 = null != tmp3;
          if (tmp4) {
            let tmp5 = typeof tmp3 === "number";
            if (typeof tmp3 === "number") {
              tmp5 = tmp3 < 2147483647;
            }
            if (!tmp5) {
              tmp5 = typeof tmp3 === "string";
            }
            tmp4 = tmp5;
          }
          if (tmp4) {
            closure_1[tmp2] = tmp3;
          }
        });
        obj = {};
        const merged = Object.assign(obj);
        let tmp6Result = tmp6(tmp7[10]);
        const merged1 = Object.assign(tmp6Result.resourceTimingToSpanAttributes(initiatorType));
        const sum = arg5 + arg3;
        const sum1 = sum + arg4;
        tmp6Result = tmp6(tmp7[1]);
        obj = { name: null, op: null, attributes: null };
        obj[0] = arr.replace(_require(obj[3]).WINDOW.location.origin, "");
        obj[1] = str2;
        obj[2] = obj;
        tmp6Result.startAndEndSpan(activeSpan, sum, sum1, obj);
        const obj2 = _require(obj[2]);
      }
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c5 = 0;
let closure_6 = {};

export { _addMeasureSpans };
export { _addNavigationSpans };
export { _addResourceSpans };
export const _setResourceRequestAttributes = function _setResourceRequestAttributes(arg0, arg1, arr) {
  closure_0 = arg0;
  closure_1 = arg1;
  const item = arr.forEach((arg0) => {
    [tmp, tmp2] = arg0;
    let tmp4 = null != tmp3;
    if (tmp4) {
      let tmp5 = typeof tmp3 === "number";
      if (typeof tmp3 === "number") {
        tmp5 = tmp3 < 2147483647;
      }
      if (!tmp5) {
        tmp5 = typeof tmp3 === "string";
      }
      tmp4 = tmp5;
    }
    if (tmp4) {
      closure_1[tmp2] = tmp3;
    }
  });
};
export const addPerformanceEntries = function addPerformanceEntries(setAttribute, recordClsOnPageloadSpan) {
  let _require = setAttribute;
  dependencyMap = recordClsOnPageloadSpan;
  let obj = _require(1056);
  const browserPerformanceAPI = obj.getBrowserPerformanceAPI();
  const result = _require(814).browserPerformanceTimeOrigin();
  let getEntries;
  if (browserPerformanceAPI != null) {
    getEntries = browserPerformanceAPI.getEntries;
  }
  if (getEntries) {
    if (result) {
      let tmp3Result = tmp3(1056);
      let msToSecResult = tmp3Result.msToSec(result);
      closure_2 = msToSecResult;
      const entries = browserPerformanceAPI.getEntries();
      tmp3Result = tmp3(814);
      const spanToJSONResult = tmp3Result.spanToJSON(setAttribute);
      const op = spanToJSONResult.op;
      let user = op;
      let start_timestamp = spanToJSONResult.start_timestamp;
      const substr = entries.slice(closure_5);
      const item = substr.forEach((startTime) => {
        let obj = setAttribute(closure_1[1]);
        msToSecResult = obj.msToSec(startTime.startTime);
        const msToSecResult1 = setAttribute(closure_1[1]).msToSec(Math.max(0, startTime.duration));
        const entryType = startTime.entryType;
        if ("navigation" === entryType) {
          closure_1_8(setAttribute, startTime, closure_2);
        } else {
          if ("mark" !== entryType) {
            if ("paint" !== entryType) {
              if ("measure" !== entryType) {
                if ("resource" === entryType) {
                  closure_1_10(setAttribute, startTime, startTime.name, msToSecResult, msToSecResult1, closure_2, closure_1.ignoreResourceSpans);
                }
              }
            }
          }
          closure_1_7(setAttribute, startTime, msToSecResult, msToSecResult1, closure_2, closure_1.ignorePerformanceApiSpans);
          const tmp15 = startTime.startTime < setAttribute(closure_1[7]).getVisibilityWatcher().firstHiddenTime;
          if (tmp16) {
            obj = { value: null, unit: "millisecond" };
            obj[0] = startTime.startTime;
            closure_6.fp = obj;
          }
          if (tmp18) {
            obj = { value: null, unit: "millisecond" };
            obj[0] = startTime.startTime;
            closure_6.fcp = obj;
          }
          tmp16 = "first-paint" === startTime.name && tmp15;
          tmp18 = "first-contentful-paint" === startTime.name && tmp15;
          const tmpResult = setAttribute(closure_1[7]);
        }
      });
      const _Math = Math;
      closure_5 = Math.max(entries.length - 1, 0);
      const _navigator = tmp3(1036).WINDOW.navigator;
      if (_navigator) {
        const connection = _navigator.connection;
        if (connection) {
          if (connection.effectiveType) {
            const attr = setAttribute.setAttribute("effectiveConnectionType", connection.effectiveType);
          }
          if (connection.type) {
            const attr1 = setAttribute.setAttribute("connectionType", connection.type);
          }
          if (tmp3Result1.isMeasurementValue(connection.rtt)) {
            obj = { value: null, unit: "millisecond" };
            obj[0] = connection.rtt;
            closure_6["connection.rtt"] = obj;
          }
          tmp3Result1 = tmp3(1056);
        }
        if (tmp3Result2.isMeasurementValue(_navigator.deviceMemory)) {
          const _HermesInternal = HermesInternal;
          const attr2 = setAttribute.setAttribute("deviceMemory", "" + _navigator.deviceMemory + " GB");
        }
        tmp3Result2 = tmp3(1056);
        if (tmp3Result3.isMeasurementValue(_navigator.hardwareConcurrency)) {
          const _String = String;
          const attr3 = setAttribute.setAttribute("hardwareConcurrency", String(_navigator.hardwareConcurrency));
        }
        tmp3Result3 = tmp3(1056);
      }
      if ("pageload" === op) {
        const navigationEntry = tmp3(1040).getNavigationEntry(false);
        if (navigationEntry) {
          ({ responseStart, requestStart } = navigationEntry);
          if (requestStart <= responseStart) {
            obj = { value: null, unit: "millisecond" };
            obj[0] = responseStart - requestStart;
            tmp43["ttfb.requestTime"] = obj;
          }
        }
        if (!recordClsOnPageloadSpan.recordClsOnPageloadSpan) {
          delete tmp2[tmp];
        }
        if (!recordClsOnPageloadSpan.recordLcpOnPageloadSpan) {
          delete tmp2[tmp];
        }
        const _Object = Object;
        const entries1 = Object.entries(closure_6);
        const item1 = entries1.forEach((arg0) => {
          [tmp, iter] = arg0;
          setAttribute(closure_1[2]).setMeasurement(tmp, iter.value, iter.unit);
        });
        const attr4 = setAttribute.setAttribute("performance.timeOrigin", msToSecResult);
        const tmp3Result4 = tmp3(1040);
        tmp43 = closure_6;
        const attr5 = setAttribute.setAttribute("performance.activationStart", tmp3(1039).getActivationStart());
        _require = setAttribute;
        let recordLcpOnPageloadSpan = user;
        if (user) {
          recordLcpOnPageloadSpan = recordClsOnPageloadSpan.recordLcpOnPageloadSpan;
        }
        if (recordLcpOnPageloadSpan) {
          if (user.element) {
            const attr6 = setAttribute.setAttribute("lcp.element", tmp3(814).htmlTreeAsString(user.element));
            const tmp3Result6 = tmp3(814);
          }
          if (user.id) {
            const attr7 = setAttribute.setAttribute("lcp.id", user.id);
          }
          if (user.url) {
            const trimmed = user.url.trim();
            const attr8 = setAttribute.setAttribute("lcp.url", trimmed.slice(0, 200));
            const str14 = user.url;
          }
          if (null != user.loadTime) {
            const attr9 = setAttribute.setAttribute("lcp.loadTime", user.loadTime);
          }
          if (null != user.renderTime) {
            const attr10 = setAttribute.setAttribute("lcp.renderTime", user.renderTime);
          }
          const attr11 = setAttribute.setAttribute("lcp.size", user.size);
        }
        let sources;
        if (start_timestamp != null) {
          sources = start_timestamp.sources;
        }
        if (sources) {
          sources = recordClsOnPageloadSpan.recordClsOnPageloadSpan;
        }
        if (sources) {
          const sources1 = start_timestamp.sources;
          const item2 = sources1.forEach((node) => {
            const combined = "cls.source." + arg1 + 1;
            return setAttribute.setAttribute(combined, setAttribute(closure_1[2]).htmlTreeAsString(node.node));
          });
        }
        const tmp3Result5 = tmp3(1039);
      }
      user = undefined;
      start_timestamp = undefined;
      closure_6 = {};
    }
  }
};
export const startTrackingInteractions = function startTrackingInteractions() {
  const result = triggerHandlers.addPerformanceInstrumentationHandler("event", (arg0) => {
    const entries = arg0.entries;
    let obj = callback(814);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult;
        if ("click" === nextResult.name) {
          let tmp19 = callback;
          let tmp20 = callback;
          let tmp21 = dependencyMap;
          let tmp22 = dependencyMap;
          let obj3 = callback(1056);
          let obj4 = callback(814);
          let tmp23 = nextResult;
          let msToSecResult = obj3.msToSec(obj4.browserPerformanceTimeOrigin() + tmp7.startTime);
          let tmp25 = msToSecResult;
          let obj5 = callback(1056);
          let msToSecResult1 = obj5.msToSec(tmp7.duration);
          obj = { name: null, op: null, startTime: null, attributes: null };
          let obj7 = callback(814);
          obj[0] = obj7.htmlTreeAsString(tmp7.target);
          let _HermesInternal = HermesInternal;
          obj[1] = "ui.interaction." + tmp7.name;
          obj[2] = msToSecResult;
          obj = {};
          obj[callback(814).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          obj[3] = obj;
          let tmp27 = obj;
          let obj9 = callback(814);
          let componentName = obj9.getComponentName(tmp7.target);
          if (componentName) {
            let tmp8 = obj;
            let tmp9 = componentName;
            tmp27.attributes["ui.component_name"] = tmp29;
          }
          let tmp10 = tmp19;
          let tmp11 = tmp21;
          let tmp20Result = tmp20(1056);
          let tmp12 = msToSecResult;
          let tmp13 = msToSecResult1;
          let tmp14 = obj;
          let tmp15 = tmp20Result;
          let tmp16 = activeSpan;
          let tmp17 = tmp25;
          let startAndEndSpanResult = tmp20Result.startAndEndSpan(activeSpan, msToSecResult, tmp25 + msToSecResult1, tmp27);
        }
        continue;
      }
    }
  });
};
export const startTrackingLongAnimationFrames = function startTrackingLongAnimationFrames() {
  const performanceObserver = new globalThis.PerformanceObserver((getEntries) => {
    let obj = callback(814);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const entries = getEntries.getEntries();
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        if (nextResult.scripts[0]) {
          let tmp9 = callback;
          let tmp10 = callback;
          let tmp11 = dependencyMap;
          let tmp12 = dependencyMap;
          let obj2 = callback(1056);
          let obj3 = callback(814);
          let tmp13 = nextResult;
          let msToSecResult = obj2.msToSec(obj3.browserPerformanceTimeOrigin() + tmp8.startTime);
          let obj4 = callback(814);
          let spanToJSONResult = obj4.spanToJSON(activeSpan);
          let start_timestamp = spanToJSONResult.start_timestamp;
          if ("navigation" === spanToJSONResult.op) {
            let tmp16 = start_timestamp;
            if (start_timestamp) {
              let tmp17 = msToSecResult;
              let tmp18 = start_timestamp;
            }
          }
          let tmp19 = tmp9;
          let tmp20 = tmp11;
          let tmp10Result = tmp10(1056);
          let tmp21 = nextResult;
          let msToSecResult1 = tmp10Result.msToSec(tmp8.duration);
          obj = {};
          obj[tmp10(814).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          let tmp23 = obj;
          ({ sourceURL, sourceFunctionName, sourceCharPosition, invoker: obj6["browser.script.invoker"], invokerType: obj6["browser.script.invoker_type"] } = tmp8.scripts[0]);
          if (sourceURL) {
            let tmp25 = obj;
            let tmp26 = sourceURL;
            tmp23["code.filepath"] = tmp24;
          }
          let tmp27 = sourceFunctionName;
          if (sourceFunctionName) {
            let tmp28 = obj;
            let tmp29 = sourceFunctionName;
            tmp23["code.function"] = sourceFunctionName;
          }
          let tmp30 = sourceCharPosition;
          if (-1 !== sourceCharPosition) {
            let tmp31 = obj;
            let tmp32 = sourceCharPosition;
            tmp23["browser.script.source_char_position"] = sourceCharPosition;
          }
          let tmp33 = tmp9;
          let tmp34 = tmp11;
          tmp10Result = tmp10(1056);
          let tmp35 = msToSecResult;
          let tmp36 = msToSecResult1;
          obj = { name: "Main UI thread blocked", op: "ui.long-animation-frame", attributes: null };
          let tmp37 = obj;
          obj[2] = tmp23;
          let tmp38 = tmp10Result;
          let tmp39 = activeSpan;
          let tmp40 = msToSecResult;
          let tmp41 = obj;
          let startAndEndSpanResult = tmp10Result.startAndEndSpan(activeSpan, msToSecResult, msToSecResult + msToSecResult1, obj);
        }
        continue;
      }
    }
  });
  performanceObserver.observe({ type: "long-animation-frame", buffered: true });
};
export const startTrackingLongTasks = function startTrackingLongTasks() {
  const result = triggerHandlers.addPerformanceInstrumentationHandler("longtask", (arg0) => {
    const entries = arg0.entries;
    let obj = callback(814);
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const spanToJSONResult = callback(814).spanToJSON(activeSpan);
      const start_timestamp = spanToJSONResult.start_timestamp;
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp15 = callback;
        let tmp17 = dependencyMap;
        let tmp14 = callback;
        let tmp16 = dependencyMap;
        let obj3 = callback(1056);
        let obj4 = callback(814);
        let msToSecResult = obj3.msToSec(obj4.browserPerformanceTimeOrigin() + nextResult.startTime);
        let obj5 = callback(1056);
        let msToSecResult1 = obj5.msToSec(nextResult.duration);
        let tmp20 = tmp10;
        if (tmp10) {
          tmp20 = start_timestamp;
        }
        if (tmp20) {
          let tmp21 = msToSecResult;
          tmp20 = msToSecResult < start_timestamp;
        }
        if (!tmp20) {
          let tmp22 = tmp14;
          let tmp23 = tmp16;
          let tmp15Result = tmp15(1056);
          let tmp24 = msToSecResult;
          let tmp25 = msToSecResult1;
          obj = { name: "Main UI thread blocked", op: "ui.long-task", attributes: null };
          obj = {};
          let sum = msToSecResult + msToSecResult1;
          obj[tmp15(814).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          obj[2] = obj;
          let tmp27 = tmp15Result;
          let tmp28 = activeSpan;
          let tmp29 = msToSecResult;
          let tmp30 = obj;
          let startAndEndSpanResult = tmp15Result.startAndEndSpan(activeSpan, msToSecResult, sum, obj);
        }
        continue;
      }
      const tmp2Result = callback(814);
    }
  });
};
export const startTrackingWebVitals = function startTrackingWebVitals(client) {
  client = client.client;
  let _require;
  dependencyMap = undefined;
  let result1;
  ({ recordClsStandaloneSpans, recordLcpStandaloneSpans } = client);
  const browserPerformanceAPI = _require(1056).getBrowserPerformanceAPI();
  if (browserPerformanceAPI) {
    let tmpResult = tmp(814);
    if (tmpResult.browserPerformanceTimeOrigin()) {
      if (browserPerformanceAPI.mark) {
        const _performance = tmp(1036).WINDOW.performance;
        _performance.mark("sentry-tracing-init");
      }
      if (recordLcpStandaloneSpans) {
        tmpResult = tmp(1058);
        let result = tmpResult.trackLcpAsStandaloneSpan(client);
      } else {
        result = tmp(1031).addLcpInstrumentationHandler((metric) => {
          const tmp = metric.metric.entries[metric.metric.entries.length - 1];
          if (tmp) {
            const obj = { value: null, unit: "millisecond" };
            obj[0] = iter.value;
            closure_6.lcp = obj;
            closure_3 = tmp;
          }
        }, true);
        const tmpResult1 = tmp(1031);
      }
      _require = result;
      dependencyMap = tmp(1031).addTtfbInstrumentationHandler((metric) => {
        if (metric.metric.entries[metric.metric.entries.length - 1]) {
          const obj = { value: null, unit: "millisecond" };
          obj[0] = iter.value;
          closure_6.ttfb = obj;
        }
      });
      if (recordClsStandaloneSpans) {
        result1 = tmp(1059).trackClsAsStandaloneSpan(client);
        const tmpResult3 = tmp(1059);
      } else {
        result1 = tmp(1031).addClsInstrumentationHandler((metric) => {
          const tmp = metric.metric.entries[metric.metric.entries.length - 1];
          if (tmp) {
            const obj = { value: null, unit: "" };
            obj[0] = iter.value;
            closure_6.cls = obj;
            closure_4 = tmp;
          }
        }, true);
        const tmpResult4 = tmp(1031);
      }
      return () => {
        if (c0 != null) {
          tmp();
        }
        callback();
        if (result1 != null) {
          result1();
        }
      };
    }
  }
  return () => {

  };
};