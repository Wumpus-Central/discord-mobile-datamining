// === Module 156: ? ===

// Module 156
import _modDef154 from "module_154" /* 154 */;
import _modDef157 from "module_157" /* 157 */;
import structuredCloneInternalDefault from "structuredCloneInternal" /* 168 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;
import nullthrows from "nullthrows" /* 70 */;

const Performance = fn;
let closure_6 = ["mark", "measure"];
const NativePerformanceCxx = nullthrows(_modDef154);
({ reportMark: closure_8, reportMeasure: closure_9, getMarkTime: c10, clearMarks: closure_11, clearMeasures: closure_12 } = NativePerformanceCxx);
let closure_13 = { startTime: 0, detail: "channel" };
let closure_14 = { name: "", startTime: 0, duration: 0, detail: "disabled" };
function getMarkTimeForMeasure(arg0) {

}
let closure_16 = _classPrivateFieldKey("eventCounts");
class Performance {
  constructor() {
    tmp = closure_4(this, Performance);
    obj = { writable: true, value: null };
    eventCounts = new closure_0(c2[7]).EventCounts();
    obj.value = eventCounts;
    definePropertyResult = Object.defineProperty(this, closure_2_16, obj);
    this.now = closure_0(c2[8]).getCurrentTimeStamp;
    return;
  }
}
let items = [
  {
    key: "eventCounts",
    get() {
      return _classPrivateFieldBase(this, closure_16)[closure_16];
    }
  },
  {
    key: "memory",
    get() {
      const simpleMemoryInfo = NativePerformanceCxx.getSimpleMemoryInfo();
      if (simpleMemoryInfo.hasOwnProperty("hermes_heapSize")) {
        ({ hermes_heapSize, hermes_allocatedBytes } = simpleMemoryInfo);
        const obj = { jsHeapSizeLimit: null, totalJSHeapSize: hermes_heapSize, usedJSHeapSize: hermes_allocatedBytes };
        const tmp12 = new require("MemoryInfo")(obj);
        return tmp12;
      } else {
        const tmp5 = new require("MemoryInfo")();
        return tmp5;
      }
    }
  },
  {
    key: "rnStartupTiming",
    get() {
      const reactNativeStartupTiming = NativePerformanceCxx.getReactNativeStartupTiming();
      ({ startTime, initializeRuntimeStart, executeJavaScriptBundleEntryPointStart, endTime } = reactNativeStartupTiming);
      return new require("ReactNativeStartupTiming")({ startTime, initializeRuntimeStart, executeJavaScriptBundleEntryPointStart, endTime });
    }
  },
  {
    key: "timeOrigin",
    get() {
      let tmp = null;
      if (null != diff) {
        return diff;
      } else if (NativePerformanceCxx.timeOrigin) {
        tmp = NativePerformanceCxx == tmp;
        let timeOriginResult;
        if (!tmp) {
          timeOriginResult = NativePerformanceCxx.timeOrigin();
        }
        diff = timeOriginResult;
      } else {
        const _Date = Date;
        const timestamp = Date.now();
        diff = timestamp - Performance(164).getCurrentTimeStamp();
        const obj2 = Performance(164);
      }
    }
  },
  {
    key: "mark",
    value: function mark(StringResult, arg1) {
      if (undefined === StringResult) {
        const _TypeError3 = TypeError;
        const typeError = new TypeError("Failed to execute 'mark' on 'Performance': 1 argument required, but only 0 present.");
        throw typeError;
      } else {
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
            const typeError1 = new TypeError("Failed to execute 'mark' on 'Performance': '" + StringResult + "' cannot have a negative start time.");
            throw typeError1;
          } else {
            if (NumberResult == NumberResult) {
              let currentTimeStamp = NumberResult;
            }
            const _TypeError = TypeError;
            const typeError2 = new TypeError("Failed to execute 'mark' on 'Performance': Failed to read the 'startTime' property from 'PerformanceMarkOptions': The provided double value is non-finite.");
            throw typeError2;
          }
        } else {
          currentTimeStamp = Performance(164).getCurrentTimeStamp();
          const obj = Performance(164);
        }
        let tmp7;
        if (undefined !== detail) {
          tmp7 = structuredCloneInternalDefault(detail);
        }
        closure_13.startTime = currentTimeStamp;
        closure_13.detail = tmp7;
        const performanceMark = new Performance(169).PerformanceMark(StringResult, closure_13);
        React6(StringResult, currentTimeStamp, performanceMark);
        return performanceMark;
      }
    }
  },
  {
    key: "clearMarks",
    value: function clearMarks(arg0) {
      closure_1_11(arg0);
    }
  },
  {
    key: "measure",
    value: function measure(str, arg1, arg2) {
      if (undefined === str) {
        const _TypeError4 = TypeError;
        const typeError = new TypeError("Failed to execute 'measure' on 'Performance': 1 argument required, but only 0 present.");
        throw typeError;
      } else {
        let StringResult = str;
        if (typeof str !== "string") {
          const _String3 = String;
          StringResult = String(str);
        }
        if (null != arg1) {
          if ("object" === typeof arg1) {
            if (undefined !== arg2) {
              const _TypeError3 = TypeError;
              const typeError1 = new TypeError("Failed to execute 'measure' on 'Performance': If a non-empty PerformanceMeasureOptions object was passed, |end_mark| must not be passed.");
              throw typeError1;
            } else {
              ({ start, end, duration, detail } = arg1);
              if (undefined !== start) {
                if (undefined !== end) {
                  if (undefined !== duration) {
                    const _TypeError2 = TypeError;
                    const typeError2 = new TypeError("Failed to execute 'measure' on 'Performance': If a non-empty PerformanceMeasureOptions object was passed, it must not have all of its 'start', 'duration', and 'end' properties defined");
                    throw typeError2;
                  }
                }
              }
              let tmp64;
              if ("undefined" !== typeof start) {
                if ("number" === tmp63) {
                  tmp64 = start;
                } else if ("string" === tmp63) {
                  if (typeof getMarkTimeForMeasure === "function") {
                    tmp64 = closure_1_10(start);
                    if (null == tmp64) {
                      const _HermesInternal6 = HermesInternal;
                      let tmp73 = _modDef157;
                      tmp73 = new tmp73("Failed to execute 'measure' on 'Performance': The mark '" + start + "' does not exist.", "SyntaxError");
                      throw tmp73;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  const _String = String;
                  const StringResult1 = String(start);
                  if (typeof getMarkTimeForMeasure === "function") {
                    tmp64 = closure_1_10(StringResult1);
                    if (null == tmp64) {
                      const _HermesInternal8 = HermesInternal;
                      let tmp145 = _modDef157;
                      tmp145 = new tmp145("Failed to execute 'measure' on 'Performance': The mark '" + StringResult1 + "' does not exist.", "SyntaxError");
                      throw tmp145;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              if ("undefined" !== typeof end) {
                if ("number" === tmp79) {
                  let tmp80 = end;
                } else if ("string" === tmp79) {
                  if (typeof getMarkTimeForMeasure === "function") {
                    tmp80 = closure_1_10(end);
                    if (null == tmp80) {
                      const _HermesInternal7 = HermesInternal;
                      let tmp89 = _modDef157;
                      tmp89 = new tmp89("Failed to execute 'measure' on 'Performance': The mark '" + end + "' does not exist.", "SyntaxError");
                      throw tmp89;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  const _String2 = String;
                  const StringResult2 = String(end);
                  if (typeof getMarkTimeForMeasure === "function") {
                    tmp80 = closure_1_10(StringResult2);
                    if (null == tmp80) {
                      const _HermesInternal9 = HermesInternal;
                      let tmp152 = _modDef157;
                      tmp152 = new tmp152("Failed to execute 'measure' on 'Performance': The mark '" + StringResult2 + "' does not exist.", "SyntaxError");
                      throw tmp152;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              let tmp96;
              if ("undefined" !== typeof duration) {
                if ("number" === tmp95) {
                  tmp96 = duration;
                } else {
                  const _Number = Number;
                  const NumberResult = Number(duration);
                  const _Number2 = Number;
                  tmp96 = NumberResult;
                  if (!Number.isFinite(NumberResult)) {
                    const _TypeError = TypeError;
                    const typeError3 = new TypeError("Failed to execute 'measure' on 'Performance': Failed to read the 'duration' property from 'PerformanceMeasureOptions': The provided double value is non-finite.");
                    throw typeError3;
                  }
                }
              }
              if (undefined === tmp64) {
                let num4 = 0;
                if (undefined !== tmp80) {
                  num4 = 0;
                  if (undefined !== tmp96) {
                    num4 = tmp80 - tmp96;
                  }
                }
                tmp64 = num4;
              }
              if (undefined !== tmp96) {
                let currentTimeStamp = tmp96;
                let num3 = tmp64;
                if (undefined !== detail) {
                  currentTimeStamp = tmp96;
                  num3 = tmp64;
                  const tmp10 = structuredCloneInternalDefault(detail);
                }
              } else {
                if (undefined === tmp64) {
                  diff = Performance(164).getCurrentTimeStamp() - tmp64;
                  const obj4 = Performance(164);
                }
                diff = tmp80 - tmp64;
              }
            }
          } else if ("string" === tmp19) {
            if (typeof getMarkTimeForMeasure === "function") {
              const tmp42 = closure_1_10(arg1);
              if (null == tmp42) {
                const _HermesInternal5 = HermesInternal;
                let tmp57 = _modDef157;
                tmp57 = new tmp57("Failed to execute 'measure' on 'Performance': The mark '" + arg1 + "' does not exist.", "SyntaxError");
                throw tmp57;
              } else {
                if (undefined !== arg2) {
                  if (typeof tmp40 === "function") {
                    const tmp41Result = closure_1_10(arg2);
                    if (null == tmp41Result) {
                      const _HermesInternal4 = HermesInternal;
                      let tmp49 = _modDef157;
                      tmp49 = new tmp49("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
                      throw tmp49;
                    } else {
                      let diff1 = tmp41Result - tmp42;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  diff1 = Performance(164).getCurrentTimeStamp() - tmp42;
                  const obj3 = Performance(164);
                }
                currentTimeStamp = diff1;
                num3 = tmp42;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            const _String4 = String;
            const StringResult3 = String(arg1);
            if (typeof getMarkTimeForMeasure === "function") {
              const tmp21 = closure_1_10(StringResult3);
              if (null == tmp21) {
                const _HermesInternal3 = HermesInternal;
                let tmp35 = _modDef157;
                tmp35 = new tmp35("Failed to execute 'measure' on 'Performance': The mark '" + StringResult3 + "' does not exist.", "SyntaxError");
                throw tmp35;
              } else {
                if (undefined !== arg2) {
                  if (typeof getMarkTimeForMeasure === "function") {
                    const tmp20Result = closure_1_10(arg2);
                    if (null == tmp20Result) {
                      const _HermesInternal2 = HermesInternal;
                      let tmp28 = _modDef157;
                      tmp28 = new tmp28("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
                      throw tmp28;
                    } else {
                      let diff2 = tmp20Result - tmp21;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  diff2 = Performance(164).getCurrentTimeStamp() - tmp21;
                  const obj2 = Performance(164);
                }
                currentTimeStamp = diff2;
                num3 = tmp21;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          if (undefined !== arg2) {
            if (typeof getMarkTimeForMeasure === "function") {
              const tmp9 = closure_1_10(arg2);
              if (null == tmp9) {
                const _HermesInternal = HermesInternal;
                let tmp13 = _modDef157;
                tmp13 = new tmp13("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
                throw tmp13;
              } else {
                currentTimeStamp = tmp9;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            currentTimeStamp = Performance(164).getCurrentTimeStamp();
            const obj = Performance(164);
          }
          num3 = 0;
        }
        closure_14.name = StringResult;
        closure_14.startTime = num3;
        closure_14.duration = currentTimeStamp;
        closure_14.detail = tmp10;
        const performanceMeasure = new Performance(169).PerformanceMeasure(closure_14);
        React7(StringResult, num3, currentTimeStamp, performanceMeasure);
        return performanceMeasure;
      }
    }
  },
  {
    key: "clearMeasures",
    value: function clearMeasures(arg0) {
      closure_1_12(arg0);
    }
  },
  {
    key: "getEntries",
    value: function getEntries() {
      const entries = NativePerformanceCxx.getEntries();
      return entries.map(Performance(170).rawToPerformanceEntry);
    }
  },
  {
    key: "getEntriesByType",
    value: function getEntriesByType(type) {
      if (null != type) {
        if (!closure_6.includes(type)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          let items = [];
        }
        return items;
      }
      const entriesByType = NativePerformanceCxx.getEntriesByType(Performance(170).performanceEntryTypeToRaw(type));
      items = entriesByType.map(Performance(170).rawToPerformanceEntry);
      const obj = Performance(170);
    }
  },
  {
    key: "getEntriesByName",
    value: function getEntriesByName(arg0, type) {
      if (null != type) {
        if (!closure_6.includes(type)) {
          const _console = console;
          console.warn("Deprecated API for given entry type.");
          let items = [];
        }
        return items;
      }
      let result;
      if (null != type) {
        result = Performance(170).performanceEntryTypeToRaw(type);
        const obj = Performance(170);
      }
      const entriesByName = NativePerformanceCxx.getEntriesByName(arg0, result);
      items = entriesByName.map(Performance(170).rawToPerformanceEntry);
    }
  }
];
const importDefaultResultResult = _createClass(Performance, items);
class Performance {
  constructor() {
    typeError = new TypeError("Failed to construct 'Performance': Illegal constructor");
    throw typeError;
  }
}
Performance.prototype = importDefaultResultResult.prototype;
const module_126 = fn(126);
module_126.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
export const Performance_public = Performance;