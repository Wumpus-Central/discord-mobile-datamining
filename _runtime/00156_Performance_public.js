// _runtime/00156_Performance_public.js
import _modDef154 from "metro/00154__.js";
import _modDef157 from "metro/00157__.js";
import PerformanceEventTiming from "00162_PerformanceEventTiming.js";
import structuredCloneDefault from "00168_structuredClone.js";
import PerformanceMark from "00169_PerformanceMark.js";
import RawPerformanceEntryTypeValues from "00170_RawPerformanceEntryTypeValues.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "00091__classPrivateFieldKey.js";
import nullthrows from "00070_nullthrows.js";
import 00126__ from "metro/00126__.js";

const require = globalThis.__r;
let diff;

let c10;
let c9;
let closure_12;
let metroImportAll;
let tmp7;
let unpackModuleId;
let closure_6 = ["mark", "measure"];
const NativePerformanceCxx = nullthrows(_modDef154);
({ reportMark: metroImportAll, reportMeasure: c9, getMarkTime: c10, clearMarks: unpackModuleId, clearMeasures: closure_12 } = NativePerformanceCxx);
let closure_13 = { startTime: 0, detail: "unicodeVersion" };
let closure_14 = { name: "", startTime: 0, duration: 0, detail: "emoji" };
function getMarkTimeForMeasure(arg0) {

}
let closure_16 = _classPrivateFieldKey("eventCounts");
class Performance {
  constructor() {
    let eventCounts;
    _classCallCheck(this, Performance);
    const obj = { writable: true, value: eventCounts };
    eventCounts = new PerformanceEventTiming.EventCounts();
    defineProperty(this, closure_16, obj);
    this.now = require("warnNoNativePerformance").getCurrentTimeStamp;
  }
}
let obj = {
  key: "eventCounts",
  get() {
    return _classPrivateFieldBase(this, closure_16)[closure_16];
  }
};
let items = [
  obj,
  {
    key: "memory",
    get() {
      let hermes_allocatedBytes;
      let hermes_heapSize;
      const simpleMemoryInfo = NativePerformanceCxx.getSimpleMemoryInfo();
      if (simpleMemoryInfo.hasOwnProperty("hermes_heapSize")) {
        ({ hermes_heapSize, hermes_allocatedBytes } = simpleMemoryInfo);
        const self3 = this;
        const self4 = this;
        const obj = { jsHeapSizeLimit: null, totalJSHeapSize: hermes_heapSize, usedJSHeapSize: hermes_allocatedBytes };
        const tmp8 = new require("metro/00166__.js")(obj);
        return tmp8;
      } else {
        const self = this;
        const self2 = this;
        const tmp3 = new require("metro/00166__.js")();
        return tmp3;
      }
    }
  },
  {
    key: "rnStartupTiming",
    get() {
      let endTime;
      let executeJavaScriptBundleEntryPointStart;
      let initializeRuntimeStart;
      let startTime;
      const reactNativeStartupTiming = NativePerformanceCxx.getReactNativeStartupTiming();
      ({ startTime, initializeRuntimeStart, executeJavaScriptBundleEntryPointStart, endTime } = reactNativeStartupTiming);
      const obj = { startTime, initializeRuntimeStart, executeJavaScriptBundleEntryPointStart, endTime };
      const tmp2 = new require("metro/00167__.js")(obj);
      return tmp2;
    }
  },
  {
    key: "timeOrigin",
    get() {
      if (null == diff) {
        if (NativePerformanceCxx.timeOrigin) {
          let timeOriginResult;
          if (NativePerformanceCxx != null) {
            timeOriginResult = NativePerformanceCxx.timeOrigin();
          }
          diff = timeOriginResult;
        } else {
          const _Date = Date;
          const timestamp = Date.now();
          const obj2 = require("warnNoNativePerformance");
          diff = timestamp - obj2.getCurrentTimeStamp();
        }
      }
      return diff;
    }
  },
  {
    key: "mark",
    value: function mark(StringResult, arg1) {
      let detail;
      let startTime;
      if (undefined === StringResult) {
        const _TypeError3 = TypeError;
        const self7 = this;
        const self8 = this;
        const typeError = new TypeError("Failed to execute 'mark' on 'Performance': 1 argument required, but only 0 present.");
        throw typeError;
      } else {
        let currentTimeStamp;
        if (typeof StringResult !== "string") {
          const _String = String;
          StringResult = String(StringResult);
        }
        detail = undefined;
        startTime = undefined;
        if (null != arg1) {
          ({ startTime, detail } = arg1);
        }
        if (undefined !== startTime) {
          let NumberResult = startTime;
          if (typeof startTime !== "number") {
            const _Number = Number;
            NumberResult = Number(startTime);
          }
          if (NumberResult < 0) {
            const _TypeError2 = TypeError;
            const _HermesInternal = HermesInternal;
            const self5 = this;
            const self6 = this;
            const typeError1 = new TypeError("Failed to execute 'mark' on 'Performance': '" + StringResult + "' cannot have a negative start time.");
            throw typeError1;
          } else {
            if (NumberResult == NumberResult) {
              currentTimeStamp = NumberResult;
            }
            const _TypeError = TypeError;
            const self3 = this;
            const self4 = this;
            const typeError2 = new TypeError("Failed to execute 'mark' on 'Performance': Failed to read the 'startTime' property from 'PerformanceMarkOptions': The provided double value is non-finite.");
            throw typeError2;
          }
        } else {
          const obj = require("warnNoNativePerformance");
          currentTimeStamp = obj.getCurrentTimeStamp();
        }
        let tmp7;
        if (undefined !== detail) {
          tmp7 = structuredCloneDefault(detail);
        }
        closure_13.startTime = currentTimeStamp;
        closure_13.detail = tmp7;
        const self = this;
        const self2 = this;
        const performanceMark = new PerformanceMark.PerformanceMark(StringResult, closure_13);
        metroImportAll(StringResult, currentTimeStamp, performanceMark);
        return performanceMark;
      }
    }
  },
  {
    key: "clearMarks",
    value: function clearMarks(View) {
      unpackModuleId(View);
    }
  },
  {
    key: "measure",
    value: function measure(str, arg1, arg2) {
      let detail;
      let duration;
      let end;
      let start;
      if (undefined === str) {
        const _TypeError4 = TypeError;
        const self23 = this;
        const self24 = this;
        const typeError = new TypeError("Failed to execute 'measure' on 'Performance': 1 argument required, but only 0 present.");
        throw typeError;
      } else {
        let currentTimeStamp;
        let num3;
        let tmp10;
        let StringResult = str;
        if (typeof str !== "string") {
          const _String3 = String;
          StringResult = String(str);
        }
        if (null != arg1) {
          if ("object" === typeof arg1) {
            if (undefined !== arg2) {
              const _TypeError3 = TypeError;
              const self21 = this;
              const self22 = this;
              const typeError1 = new TypeError("Failed to execute 'measure' on 'Performance': If a non-empty PerformanceMeasureOptions object was passed, |end_mark| must not be passed.");
              throw typeError1;
            } else {
              let tmp68;
              ({ start, end, duration, detail } = arg1);
              if (undefined !== start) {
                if (undefined !== end) {
                  if (undefined !== duration) {
                    const _TypeError2 = TypeError;
                    const self19 = this;
                    const self20 = this;
                    const typeError2 = new TypeError("Failed to execute 'measure' on 'Performance': If a non-empty PerformanceMeasureOptions object was passed, it must not have all of its 'start', 'duration', and 'end' properties defined");
                    throw typeError2;
                  }
                }
              }
              let tmp54;
              if ("undefined" !== typeof start) {
                if ("number" === typeof start) {
                  tmp54 = start;
                } else if ("string" === typeof start) {
                  if (typeof getMarkTimeForMeasure === "function") {
                    tmp54 = authStore(start);
                    if (null == tmp54) {
                      const _HermesInternal6 = HermesInternal;
                      const self11 = this;
                      const self12 = this;
                      const tmp63 = _modDef157;
                      const tmp632 = new tmp63("Failed to execute 'measure' on 'Performance': The mark '" + start + "' does not exist.", "SyntaxError");
                      throw tmp632;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  const _String = String;
                  const StringResult1 = String(start);
                  if (typeof getMarkTimeForMeasure === "function") {
                    tmp54 = authStore(StringResult1);
                    if (null == tmp54) {
                      const _HermesInternal8 = HermesInternal;
                      const self25 = this;
                      const self26 = this;
                      const tmp120 = _modDef157;
                      const tmp1202 = new tmp120("Failed to execute 'measure' on 'Performance': The mark '" + StringResult1 + "' does not exist.", "SyntaxError");
                      throw tmp1202;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              if ("undefined" !== typeof end) {
                if ("number" === typeof end) {
                  tmp68 = end;
                } else if ("string" === typeof end) {
                  if (typeof getMarkTimeForMeasure === "function") {
                    tmp68 = authStore(end);
                    if (null == tmp68) {
                      const _HermesInternal7 = HermesInternal;
                      const self13 = this;
                      const self14 = this;
                      const tmp77 = _modDef157;
                      const tmp772 = new tmp77("Failed to execute 'measure' on 'Performance': The mark '" + end + "' does not exist.", "SyntaxError");
                      throw tmp772;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  const _String2 = String;
                  const StringResult2 = String(end);
                  if (typeof getMarkTimeForMeasure === "function") {
                    tmp68 = authStore(StringResult2);
                    if (null == tmp68) {
                      const _HermesInternal9 = HermesInternal;
                      const self27 = this;
                      const self28 = this;
                      const tmp125 = _modDef157;
                      const tmp1252 = new tmp125("Failed to execute 'measure' on 'Performance': The mark '" + StringResult2 + "' does not exist.", "SyntaxError");
                      throw tmp1252;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              let tmp82;
              if ("undefined" !== typeof duration) {
                if ("number" === typeof duration) {
                  tmp82 = duration;
                } else {
                  const _Number = Number;
                  const NumberResult = Number(duration);
                  const _Number2 = Number;
                  tmp82 = NumberResult;
                  if (!Number.isFinite(NumberResult)) {
                    const _TypeError = TypeError;
                    const self15 = this;
                    const self16 = this;
                    const typeError3 = new TypeError("Failed to execute 'measure' on 'Performance': Failed to read the 'duration' property from 'PerformanceMeasureOptions': The provided double value is non-finite.");
                    throw typeError3;
                  }
                }
              }
              if (undefined === tmp54) {
                let num4 = 0;
                if (undefined !== tmp68) {
                  num4 = 0;
                  if (undefined !== tmp82) {
                    num4 = tmp68 - tmp82;
                  }
                }
                tmp54 = num4;
              }
              if (undefined === tmp82) {
                if (undefined !== tmp54) {
                  if (undefined !== tmp68) {
                    diff = tmp68 - tmp54;
                  }
                  tmp82 = diff;
                }
                const obj4 = require("warnNoNativePerformance");
                diff = obj4.getCurrentTimeStamp() - tmp54;
              }
              currentTimeStamp = tmp82;
              num3 = tmp54;
              if (undefined !== detail) {
                currentTimeStamp = tmp82;
                num3 = tmp54;
                tmp10 = structuredCloneDefault(detail);
              }
            }
          } else if ("string" === typeof arg1) {
            if (typeof getMarkTimeForMeasure === "function") {
              const tmp36 = authStore(arg1);
              if (null == tmp36) {
                const _HermesInternal5 = HermesInternal;
                const self9 = this;
                const self10 = this;
                const tmp49 = _modDef157;
                const tmp492 = new tmp49("Failed to execute 'measure' on 'Performance': The mark '" + arg1 + "' does not exist.", "SyntaxError");
                throw tmp492;
              } else {
                let diff1;
                if (undefined !== arg2) {
                  if (typeof tmp34 === "function") {
                    const tmp35Result = authStore(arg2);
                    if (null == tmp35Result) {
                      const _HermesInternal4 = HermesInternal;
                      const self7 = this;
                      const self8 = this;
                      const tmp43 = _modDef157;
                      const tmp432 = new tmp43("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
                      throw tmp432;
                    } else {
                      diff1 = tmp35Result - tmp36;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  const obj3 = require("warnNoNativePerformance");
                  diff1 = obj3.getCurrentTimeStamp() - tmp36;
                }
                currentTimeStamp = diff1;
                num3 = tmp36;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            const _String4 = String;
            const StringResult3 = String(arg1);
            if (typeof getMarkTimeForMeasure === "function") {
              const tmp19 = authStore(StringResult3);
              if (null == tmp19) {
                const _HermesInternal3 = HermesInternal;
                const self5 = this;
                const self6 = this;
                const tmp31 = _modDef157;
                const tmp312 = new tmp31("Failed to execute 'measure' on 'Performance': The mark '" + StringResult3 + "' does not exist.", "SyntaxError");
                throw tmp312;
              } else {
                let diff2;
                if (undefined !== arg2) {
                  if (typeof getMarkTimeForMeasure === "function") {
                    const tmp18Result = authStore(arg2);
                    if (null == tmp18Result) {
                      const _HermesInternal2 = HermesInternal;
                      const self3 = this;
                      const self4 = this;
                      const tmp26 = _modDef157;
                      const tmp262 = new tmp26("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
                      throw tmp262;
                    } else {
                      diff2 = tmp18Result - tmp19;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  const obj2 = require("warnNoNativePerformance");
                  diff2 = obj2.getCurrentTimeStamp() - tmp19;
                }
                currentTimeStamp = diff2;
                num3 = tmp19;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          if (undefined !== arg2) {
            if (typeof getMarkTimeForMeasure === "function") {
              const tmp9 = authStore(arg2);
              if (null == tmp9) {
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const tmp13 = _modDef157;
                const tmp132 = new tmp13("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
                throw tmp132;
              } else {
                currentTimeStamp = tmp9;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            const obj = require("warnNoNativePerformance");
            currentTimeStamp = obj.getCurrentTimeStamp();
          }
          num3 = 0;
        }
        closure_14.name = StringResult;
        closure_14.startTime = num3;
        closure_14.duration = currentTimeStamp;
        closure_14.detail = tmp10;
        const self17 = this;
        const self18 = this;
        const performanceMeasure = new PerformanceMark.PerformanceMeasure(closure_14);
        React4(StringResult, num3, currentTimeStamp, performanceMeasure);
        return performanceMeasure;
      }
    }
  },
  {
    key: "clearMeasures",
    value: function clearMeasures(arg0) {
      closure_12(arg0);
    }
  },
  {
    key: "getEntries",
    value: function getEntries() {
      const entries = NativePerformanceCxx.getEntries();
      return entries.map(RawPerformanceEntryTypeValues.rawToPerformanceEntry);
    }
  },
  {
    key: "getEntriesByType",
    value: function getEntriesByType(type) {
      if (null != type) {
        let items;
        if (!closure_6.includes(type)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          items = [];
        }
        return items;
      }
      const getEntriesByType = NativePerformanceCxx.getEntriesByType;
      const obj = RawPerformanceEntryTypeValues;
      const entriesByType = getEntriesByType(obj.performanceEntryTypeToRaw(type));
      items = entriesByType.map(RawPerformanceEntryTypeValues.rawToPerformanceEntry);
    }
  },
  {
    key: "getEntriesByName",
    value: function getEntriesByName(arg0, type) {
      if (null != type) {
        let items;
        if (!closure_6.includes(type)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          items = [];
        }
        return items;
      }
      let result;
      const getEntriesByName = NativePerformanceCxx.getEntriesByName;
      if (null != type) {
        const obj = RawPerformanceEntryTypeValues;
        result = obj.performanceEntryTypeToRaw(type);
      }
      const entriesByName = getEntriesByName(arg0, result);
      items = entriesByName.map(RawPerformanceEntryTypeValues.rawToPerformanceEntry);
    }
  }
];
const importDefaultResultResult = _createClass(Performance, items);
tmp7.prototype = importDefaultResultResult.prototype;
module_126.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
export const Performance_public = tmp7;