// === Module 923: _addMeasureSpans ===

// Module 923 (_addMeasureSpans)
import _mod682 from "module_682" /* 682 */;
import _mod899 from "module_899" /* 899 */;
import _mod904 from "module_904" /* 904 */;
import _mod905 from "module_905" /* 905 */;
import _mod908 from "module_908" /* 908 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 924 */;
import resourceTimingToSpanAttributes from "resourceTimingToSpanAttributes" /* 928 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

function _addMeasureSpans(activeSpan, entryType, msToSecResult, msToSecResult1, msToSecResult2, ignorePerformanceApiSpans) {
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
      const navigationEntry = _mod908.getNavigationEntry(false);
      let num = 0;
      if (navigationEntry) {
        num = navigationEntry.requestStart;
      }
      const _Math = Math;
      const sum = msToSecResult2 + Math.max(msToSecResult, extractNetworkProtocol.msToSec(num));
      const sum1 = msToSecResult2 + msToSecResult;
      const sum2 = sum1 + msToSecResult1;
      const obj4 = {};
      obj4[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.resource.browser.metrics";
      if (sum !== sum1) {
        obj4["sentry.browser.measure_happened_before_request"] = true;
        obj4["sentry.browser.measure_start_time"] = sum;
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
                [tmp17, tmp18] = tmp13;
                if (tmp18) {
                  if (obj.isPrimitive(tmp18)) {
                    const _HermesInternal2 = HermesInternal;
                    arg0["sentry.browser.measure.detail." + tmp17] = tmp18;
                  }
                  obj = require("module_682");
                }
                if (undefined !== tmp18) {
                  try {
                    const _HermesInternal = HermesInternal;
                    const _JSON2 = JSON;
                    const combined = "sentry.browser.measure.detail." + tmp17;
                    arg0[combined] = JSON.stringify(tmp18);
                  } catch (err) {
                  }
                }
                const tmp16 = _slicedToArray(tmp13, 2);
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
              obj2 = require("module_682");
            }
          }
        } catch (err) {
        }
      })(obj4, entryType);
      if (sum <= sum2) {
        const tmp4Result = extractNetworkProtocol;
        const obj5 = { name: null, op: null, attributes: null };
        ({ name: obj6.name, entryType: obj6.op } = entryType);
        obj5.attributes = obj4;
        tmp4Result.startAndEndSpan(activeSpan, sum, sum2, obj5);
      }
    } else {
      _mod682;
    }
  }
}
function _addNavigationSpans(activeSpan, requestStart, msToSecResult) {
  _require = activeSpan;
  dependencyMap = requestStart;
  closure_2 = msToSecResult;
  const items = ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"];
  const item = items.forEach((item) => {
    _addPerformanceNavigationTiming(closure_0, closure_1, item, closure_2);
  });
  _addPerformanceNavigationTiming(activeSpan, requestStart, "secureConnection", msToSecResult, "TLS/SSL");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "fetch", msToSecResult, "cache");
  _addPerformanceNavigationTiming(activeSpan, requestStart, "domainLookup", msToSecResult, "DNS");
  const sum = msToSecResult + require("extractNetworkProtocol").msToSec(requestStart.requestStart);
  const obj = require("extractNetworkProtocol");
  const sum1 = msToSecResult + require("extractNetworkProtocol").msToSec(requestStart.responseEnd);
  const obj2 = require("extractNetworkProtocol");
  const sum2 = msToSecResult + require("extractNetworkProtocol").msToSec(requestStart.responseStart);
  if (requestStart.responseEnd) {
    const tmp5Result = tmp5(924);
    const obj4 = { op: "browser.request", name: requestStart.name, attributes: null };
    const obj5 = {};
    obj5[tmp5(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    obj4.attributes = obj5;
    tmp5Result.startAndEndSpan(activeSpan, sum, sum1, obj4);
    const tmp5Result2 = tmp5(924);
    const obj6 = { op: "browser.response", name: requestStart.name, attributes: null };
    const obj7 = {};
    obj7[tmp5(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    obj6.attributes = obj7;
    tmp5Result2.startAndEndSpan(activeSpan, sum2, sum1, obj6);
  }
}
function _addPerformanceNavigationTiming(activeSpan, requestStart, domainLookup, msToSecResult) {
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
    const obj = extractNetworkProtocol;
    const sum = msToSecResult + extractNetworkProtocol.msToSec(tmp4);
    const sum1 = msToSecResult + extractNetworkProtocol.msToSec(tmp3);
    const obj4 = { op: null, name: null, attributes: null };
    const _HermesInternal2 = HermesInternal;
    obj4.op = "browser." + tmp;
    obj4.name = redirectCount.name;
    const obj5 = {};
    obj5[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
    if ("redirect" !== domainLookup) {
      let obj6 = {};
      const merged = Object.assign(obj6);
      obj4.attributes = obj5;
      obj.startAndEndSpan(activeSpan, sum, sum1, obj4);
    }
    const obj7 = { "http.redirect_count": null };
    redirectCount = redirectCount.redirectCount;
    obj7["http.redirect_count"] = redirectCount;
    obj6 = obj7;
  }
}
function _addResourceSpans(activeSpan, initiatorType, name, msToSecResult, msToSecResult1, msToSecResult2, ignoreResourceSpans) {
  if ("xmlhttprequest" !== initiatorType.initiatorType) {
    if ("fetch" !== initiatorType.initiatorType) {
      let str2 = "resource.other";
      if (initiatorType.initiatorType) {
        const _HermesInternal = HermesInternal;
        str2 = "resource." + initiatorType.initiatorType;
      }
      let hasItem;
      if (ignoreResourceSpans != null) {
        hasItem = ignoreResourceSpans.includes(str2);
      }
      if (!hasItem) {
        const obj = {};
        obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.resource.browser.metrics";
        const url = _mod682.parseUrl(name);
        if (url.protocol) {
          const parts = url.protocol.split(":");
          obj["url.scheme"] = parts.pop();
        }
        if (url.host) {
          obj["server.address"] = url.host;
        }
        obj["url.same_origin"] = name.includes(_mod904.WINDOW.location.origin);
        const items = [["responseStatus", "http.response.status_code"], ["transferSize", "http.response_transfer_size"], ["encodedBodySize", "http.response_content_length"], ["decodedBodySize", "http.decoded_response_content_length"], ["renderBlockingStatus", "resource.render_blocking_status"], ["deliveryType", "http.response_delivery_type"]];
        closure_0 = initiatorType;
        const item = items.forEach((item) => {
          [tmp, tmp2] = item;
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
        const obj3 = {};
        const merged = Object.assign(obj);
        const merged1 = Object.assign(resourceTimingToSpanAttributes.resourceTimingToSpanAttributes(initiatorType));
        const sum = msToSecResult2 + msToSecResult;
        const sum1 = sum + msToSecResult1;
        const tmp6Result2 = extractNetworkProtocol;
        const obj4 = { name: name.replace(_mod904.WINDOW.location.origin, ""), op: str2, attributes: obj3 };
        tmp6Result2.startAndEndSpan(activeSpan, sum, sum1, obj4);
        const tmp6Result = resourceTimingToSpanAttributes;
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
  const item = arr.forEach((item) => {
    [tmp, tmp2] = item;
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
  _require = setAttribute;
  dependencyMap = recordClsOnPageloadSpan;
  const browserPerformanceAPI = require("extractNetworkProtocol").getBrowserPerformanceAPI();
  let obj = require("extractNetworkProtocol");
  const result = require("module_682").browserPerformanceTimeOrigin();
  let getEntries;
  if (browserPerformanceAPI != null) {
    getEntries = browserPerformanceAPI.getEntries;
  }
  if (getEntries) {
    if (result) {
      let msToSecResult = tmp3(924).msToSec(result);
      _slicedToArray = msToSecResult;
      const entries = browserPerformanceAPI.getEntries();
      const tmp3Result = tmp3(924);
      const spanToJSONResult = tmp3(682).spanToJSON(setAttribute);
      const op = spanToJSONResult.op;
      user = op;
      let start_timestamp = spanToJSONResult.start_timestamp;
      const substr = entries.slice(closure_5);
      const item = substr.forEach((startTime) => {
        msToSecResult = extractNetworkProtocol.msToSec(startTime.startTime);
        const msToSecResult1 = extractNetworkProtocol.msToSec(Math.max(0, startTime.duration));
        const entryType = startTime.entryType;
        if ("navigation" === entryType) {
          _addNavigationSpans(closure_0, startTime, msToSecResult);
        } else {
          if ("mark" !== entryType) {
            if ("paint" !== entryType) {
              if ("measure" !== entryType) {
                if ("resource" === entryType) {
                  _addResourceSpans(closure_0, startTime, startTime.name, msToSecResult, msToSecResult1, msToSecResult, closure_1.ignoreResourceSpans);
                }
              }
            }
          }
          _addMeasureSpans(closure_0, startTime, msToSecResult, msToSecResult1, msToSecResult, closure_1.ignorePerformanceApiSpans);
          const tmp15 = startTime.startTime < _mod905.getVisibilityWatcher().firstHiddenTime;
          if (tmp16) {
            const obj3 = { value: startTime.startTime, unit: "millisecond" };
            closure_6.fp = obj3;
          }
          if (tmp18) {
            const obj4 = { value: startTime.startTime, unit: "millisecond" };
            closure_6.fcp = obj4;
          }
          tmp16 = "first-paint" === startTime.name && tmp15;
          tmp18 = "first-contentful-paint" === startTime.name && tmp15;
          const tmpResult = _mod905;
        }
      });
      const _Math = Math;
      closure_5 = Math.max(entries.length - 1, 0);
      const _navigator = tmp3(904).WINDOW.navigator;
      if (_navigator) {
        const connection = _navigator.connection;
        if (connection) {
          if (connection.effectiveType) {
            const attr = setAttribute.setAttribute("effectiveConnectionType", connection.effectiveType);
          }
          if (connection.type) {
            const attr1 = setAttribute.setAttribute("connectionType", connection.type);
          }
          if (tmp3Result9.isMeasurementValue(connection.rtt)) {
            let obj2 = { value: connection.rtt, unit: "millisecond" };
            closure_6["connection.rtt"] = obj2;
          }
          tmp3Result9 = tmp3(924);
        }
        if (tmp3Result10.isMeasurementValue(_navigator.deviceMemory)) {
          const _HermesInternal = HermesInternal;
          const attr2 = setAttribute.setAttribute("deviceMemory", "" + _navigator.deviceMemory + " GB");
        }
        tmp3Result10 = tmp3(924);
        if (tmp3Result11.isMeasurementValue(_navigator.hardwareConcurrency)) {
          const _String = String;
          const attr3 = setAttribute.setAttribute("hardwareConcurrency", String(_navigator.hardwareConcurrency));
        }
        tmp3Result11 = tmp3(924);
      }
      if ("pageload" === op) {
        const navigationEntry = tmp3(908).getNavigationEntry(false);
        if (navigationEntry) {
          ({ responseStart, requestStart } = navigationEntry);
          if (requestStart <= responseStart) {
            let obj4 = { value: responseStart - requestStart, unit: "millisecond" };
            tmp43["ttfb.requestTime"] = obj4;
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
        const item1 = entries1.forEach((item) => {
          [tmp, iter] = item;
          setAttribute(closure_1[2]).setMeasurement(tmp, iter.value, iter.unit);
        });
        const attr4 = setAttribute.setAttribute("performance.timeOrigin", msToSecResult);
        const tmp3Result12 = tmp3(908);
        tmp43 = closure_6;
        const attr5 = setAttribute.setAttribute("performance.activationStart", tmp3(907).getActivationStart());
        closure_129_0 = setAttribute;
        let recordLcpOnPageloadSpan = user;
        if (user) {
          recordLcpOnPageloadSpan = recordClsOnPageloadSpan.recordLcpOnPageloadSpan;
        }
        if (recordLcpOnPageloadSpan) {
          if (user.element) {
            const attr6 = setAttribute.setAttribute("lcp.element", tmp3(682).htmlTreeAsString(user.element));
            const tmp3Result14 = tmp3(682);
          }
          if (user.id) {
            const attr7 = setAttribute.setAttribute("lcp.id", user.id);
          }
          if (user.url) {
            const trimmed = user.url.trim();
            const attr8 = setAttribute.setAttribute("lcp.url", trimmed.slice(0, 200));
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
          const item2 = sources1.forEach((node, index) => {
            const combined = "cls.source." + index + 1;
            return setAttribute.setAttribute(combined, _mod682.htmlTreeAsString(node.node));
          });
        }
        const tmp3Result13 = tmp3(907);
      }
      user = undefined;
      start_timestamp = undefined;
      closure_6 = {};
      const tmp3Result8 = tmp3(682);
    }
  }
};
export const startTrackingInteractions = function startTrackingInteractions() {
  const result = _mod899.addPerformanceInstrumentationHandler("event", (arg0) => {
    const entries = arg0.entries;
    const activeSpan = require("module_682").getActiveSpan();
    if (activeSpan) {
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult;
        if ("click" === nextResult.name) {
          let obj3 = require("extractNetworkProtocol");
          let obj4 = require("module_682");
          let msToSecResult = obj3.msToSec(obj4.browserPerformanceTimeOrigin() + tmp7.startTime);
          let tmp25 = msToSecResult;
          let obj5 = require("extractNetworkProtocol");
          let msToSecResult1 = obj5.msToSec(tmp7.duration);
          let obj2 = { name: null, op: null, startTime: null, attributes: null };
          let obj7 = require("module_682");
          obj2.name = obj7.htmlTreeAsString(tmp7.target);
          let _HermesInternal = HermesInternal;
          obj2.op = "ui.interaction." + tmp7.name;
          obj2.startTime = msToSecResult;
          let obj6 = {};
          obj6[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          obj2.attributes = obj6;
          let tmp27 = obj2;
          let obj9 = require("module_682");
          let componentName = obj9.getComponentName(tmp7.target);
          if (componentName) {
            tmp27.attributes["ui.component_name"] = tmp29;
          }
          let tmp20Result = require("extractNetworkProtocol");
          let startAndEndSpanResult = tmp20Result.startAndEndSpan(activeSpan, msToSecResult, tmp25 + msToSecResult1, tmp27);
        }
        continue;
      }
    }
    const obj = require("module_682");
  });
};
export const startTrackingLongAnimationFrames = function startTrackingLongAnimationFrames() {
  const performanceObserver = new globalThis.PerformanceObserver((getEntries) => {
    const activeSpan = require("module_682").getActiveSpan();
    if (activeSpan) {
      const entries = getEntries.getEntries();
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        if (nextResult.scripts[0]) {
          let obj2 = require("extractNetworkProtocol");
          let obj3 = require("module_682");
          let msToSecResult = obj2.msToSec(obj3.browserPerformanceTimeOrigin() + tmp8.startTime);
          let obj4 = require("module_682");
          let spanToJSONResult = obj4.spanToJSON(activeSpan);
          let start_timestamp = spanToJSONResult.start_timestamp;
          if ("navigation" === spanToJSONResult.op) {
          }
          let tmp10Result = require("extractNetworkProtocol");
          let msToSecResult1 = tmp10Result.msToSec(tmp8.duration);
          let obj5 = {};
          obj5[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          let tmp23 = obj5;
          ({ sourceURL, sourceFunctionName, sourceCharPosition, invoker: obj6["browser.script.invoker"], invokerType: obj6["browser.script.invoker_type"] } = tmp8.scripts[0]);
          if (sourceURL) {
            tmp23["code.filepath"] = tmp24;
          }
          if (sourceFunctionName) {
            tmp23["code.function"] = sourceFunctionName;
          }
          if (-1 !== sourceCharPosition) {
            tmp23["browser.script.source_char_position"] = sourceCharPosition;
          }
          let tmp10Result2 = require("extractNetworkProtocol");
          let obj7 = { name: "Main UI thread blocked", op: "ui.long-animation-frame", attributes: null };
          obj7.attributes = tmp23;
          let startAndEndSpanResult = tmp10Result2.startAndEndSpan(activeSpan, msToSecResult, msToSecResult + msToSecResult1, obj7);
        }
        continue;
      }
    }
    const obj = require("module_682");
  });
  performanceObserver.observe({ type: "long-animation-frame", buffered: true });
};
export const startTrackingLongTasks = function startTrackingLongTasks() {
  const result = _mod899.addPerformanceInstrumentationHandler("longtask", (arg0) => {
    const entries = arg0.entries;
    const activeSpan = require("module_682").getActiveSpan();
    if (activeSpan) {
      const spanToJSONResult = require("module_682").spanToJSON(activeSpan);
      const start_timestamp = spanToJSONResult.start_timestamp;
      const iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj3 = require("extractNetworkProtocol");
        let obj4 = require("module_682");
        let msToSecResult = obj3.msToSec(obj4.browserPerformanceTimeOrigin() + nextResult.startTime);
        let obj5 = require("extractNetworkProtocol");
        let msToSecResult1 = obj5.msToSec(nextResult.duration);
        let tmp20 = tmp10;
        if (tmp10) {
          tmp20 = start_timestamp;
        }
        if (tmp20) {
          tmp20 = msToSecResult < start_timestamp;
        }
        if (!tmp20) {
          let tmp15Result = require("extractNetworkProtocol");
          let obj2 = { name: "Main UI thread blocked", op: "ui.long-task", attributes: null };
          let obj6 = {};
          let sum = msToSecResult + msToSecResult1;
          obj6[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.metrics";
          obj2.attributes = obj6;
          let startAndEndSpanResult = tmp15Result.startAndEndSpan(activeSpan, msToSecResult, sum, obj2);
        }
        continue;
      }
      const tmp2Result = require("module_682");
    }
    const obj = require("module_682");
  });
};
export const startTrackingWebVitals = function startTrackingWebVitals(client) {
  client = client.client;
  _require = undefined;
  dependencyMap = undefined;
  let result1;
  ({ recordClsStandaloneSpans, recordLcpStandaloneSpans } = client);
  const browserPerformanceAPI = require("extractNetworkProtocol").getBrowserPerformanceAPI();
  if (browserPerformanceAPI) {
    if (tmpResult.browserPerformanceTimeOrigin()) {
      if (browserPerformanceAPI.mark) {
        const _performance = tmp(904).WINDOW.performance;
        _performance.mark("sentry-tracing-init");
      }
      if (recordLcpStandaloneSpans) {
        let result = tmp(926).trackLcpAsStandaloneSpan(client);
        const tmpResult6 = tmp(926);
      } else {
        result = tmp(899).addLcpInstrumentationHandler((metric) => {
          const tmp = metric.metric.entries[metric.metric.entries.length - 1];
          if (tmp) {
            const obj = { value: iter.value, unit: "millisecond" };
            closure_1_6.lcp = obj;
            closure_3 = tmp;
          }
        }, true);
        const tmpResult7 = tmp(899);
      }
      _require = result;
      dependencyMap = tmp(899).addTtfbInstrumentationHandler((metric) => {
        if (metric.metric.entries[metric.metric.entries.length - 1]) {
          const obj = { value: iter.value, unit: "millisecond" };
          closure_1_6.ttfb = obj;
        }
      });
      if (recordClsStandaloneSpans) {
        result1 = tmp(927).trackClsAsStandaloneSpan(client);
        const tmpResult9 = tmp(927);
      } else {
        result1 = tmp(899).addClsInstrumentationHandler((metric) => {
          const tmp = metric.metric.entries[metric.metric.entries.length - 1];
          if (tmp) {
            const obj = { value: iter.value, unit: "" };
            closure_1_6.cls = obj;
            closure_4 = tmp;
          }
        }, true);
        const tmpResult10 = tmp(899);
      }
      return () => {
        if (c0 != null) {
          tmp();
        }
        closure_1();
        if (result1 != null) {
          result1();
        }
      };
    }
    tmpResult = tmp(682);
  }
  return () => {

  };
};