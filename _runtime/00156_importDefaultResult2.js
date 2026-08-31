// _runtime/00156_importDefaultResult2.js
import nullthrowsDefault from "00070_nullthrows.js";
import NativePerformanceCxxDefault from "00154_NativePerformanceCxx.js";
import _isNativeReflectConstructDefault from "00157__isNativeReflectConstruct.js";
import structuredCloneInternalDefault from "00168_structuredCloneInternal.js";
import closure_4 from "metro/00041__classCallCheck.js";
import closure_5 from "00090__classPrivateFieldBase.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00091__classPrivateFieldKey.js";
import setPlatformObject from "00126_setPlatformObject.js";
import { importDefaultResult1 } from "00166_importDefaultResult1.js";
import { importDefaultResult1 } from "00167_importDefaultResult1.js";

const Performance = arg1;
let closure_6 = ["mark", "measure"];
const importDefaultResult2Result = nullthrowsDefault(NativePerformanceCxxDefault);
const error = importDefaultResult2Result;
({ reportMark: closure_8, reportMeasure: c9, getMarkTime: c10, clearMarks: unpackModuleId, clearMeasures: closure_12 } = importDefaultResult2Result);
let closure_13 = { startTime: 0, detail: "call" };
let closure_14 = { name: "", startTime: 0, duration: 0, detail: "disabled" };
function getMarkTimeForMeasure(arg0) {

}
let closure_16 = importDefaultResult1("eventCounts");
class Performance {
  constructor() {
    tmp = closure_4(this, Performance);
    obj = { writable: true, value: null };
    eventCounts = new require("_isNativeReflectConstruct").EventCounts();
    obj[1] = eventCounts;
    definePropertyResult = Object.defineProperty(this, closure_16, obj);
    this.now = require("warnNoNativePerformance").getCurrentTimeStamp;
    return;
  }
}
let items = [
  {
    key: "eventCounts",
    get() {
      return callback2(this, closure_16)[closure_16];
    }
  },
  {
    key: "memory",
    get() {
      const simpleMemoryInfo = importDefaultResult2Result.getSimpleMemoryInfo();
      if (simpleMemoryInfo.hasOwnProperty("hermes_heapSize")) {
        ({ hermes_heapSize, hermes_allocatedBytes } = simpleMemoryInfo);
        const obj = { jsHeapSizeLimit: null, totalJSHeapSize: null, usedJSHeapSize: null };
        obj[1] = hermes_heapSize;
        obj[2] = hermes_allocatedBytes;
        const tmp12 = new importDefaultResult1(obj);
        return tmp12;
      } else {
        const tmp5 = new importDefaultResult1();
        return tmp5;
      }
    }
  },
  {
    key: "rnStartupTiming",
    get() {
      const reactNativeStartupTiming = importDefaultResult2Result.getReactNativeStartupTiming();
      ({ startTime, initializeRuntimeStart, executeJavaScriptBundleEntryPointStart, endTime } = reactNativeStartupTiming);
      return new importDefaultResult1({ startTime, initializeRuntimeStart, executeJavaScriptBundleEntryPointStart, endTime });
    }
  },
  {
    key: "timeOrigin",
    get() {
      let tmp = null;
      if (null != closure_3) {
        return closure_3;
      } else {
        if (importDefaultResult2Result.timeOrigin) {
          tmp = obj == tmp;
          let timeOriginResult;
          if (!tmp) {
            timeOriginResult = obj.timeOrigin();
          }
          let diff = timeOriginResult;
        } else {
          const _Date = Date;
          const timestamp = Date.now();
          diff = timestamp - Performance(164).getCurrentTimeStamp();
          const obj2 = Performance(164);
        }
        closure_3 = diff;
      }
    }
  },
  {
    key: "mark",
    value: function mark(StringResult) {
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
        callback3(StringResult, currentTimeStamp, performanceMark);
        return performanceMark;
      }
    }
  },
  {
    key: "clearMarks",
    value: function clearMarks(arg0) {
      callback6(arg0);
    }
  },
  {
    key: "measure",
    value: function measure(str) {
      if (undefined === str) {
        let typeError = globalThis;
        const _TypeError4 = TypeError;
        typeError = new.target;
        typeError = new.target;
        typeError = new TypeError("Failed to execute 'measure' on 'Performance': 1 argument required, but only 0 present.");
        throw typeError;
      } else {
        typeError = str;
        if (typeof str !== "string") {
          typeError = globalThis;
          const _String3 = String;
          typeError = String(str);
        }
        typeError = arg1;
        if (null != arg1) {
          if ("object" === typeof arg1) {
            if (undefined !== arg2) {
              typeError = globalThis;
              const _TypeError3 = TypeError;
              typeError = new.target;
              typeError = new.target;
              typeError = new TypeError("Failed to execute 'measure' on 'Performance': If a non-empty PerformanceMeasureOptions object was passed, |end_mark| must not be passed.");
              throw typeError;
            } else {
              ({ start, end, duration, detail } = arg1);
              if (undefined !== start) {
                if (undefined !== end) {
                  if (undefined !== duration) {
                    typeError = globalThis;
                    const _TypeError2 = TypeError;
                    typeError = new.target;
                    typeError = new.target;
                    typeError = new TypeError("Failed to execute 'measure' on 'Performance': If a non-empty PerformanceMeasureOptions object was passed, it must not have all of its 'start', 'duration', and 'end' properties defined");
                    throw typeError;
                  }
                }
              }
              let tmp64;
              if ("undefined" !== typeof start) {
                if ("number" === tmp63) {
                  tmp64 = start;
                } else if ("string" === tmp63) {
                  if (typeof getMarkTimeForMeasure !== "function") {
                    typeError = HermesBuiltin.throwTypeError();
                  }
                  tmp64 = callback5(start);
                  if (null == tmp64) {
                    const _HermesInternal6 = HermesInternal;
                    let tmp73 = _isNativeReflectConstructDefault;
                    tmp73 = new tmp73("Failed to execute 'measure' on 'Performance': The mark '" + start + "' does not exist.", "SyntaxError");
                    throw tmp73;
                  }
                } else {
                  const _String = String;
                  const StringResult = String(start);
                  if (typeof getMarkTimeForMeasure !== "function") {
                    typeError = HermesBuiltin.throwTypeError();
                  }
                  tmp64 = callback5(StringResult);
                  if (null == tmp64) {
                    typeError = importDefault;
                    typeError = dependencyMap;
                    const _HermesInternal8 = HermesInternal;
                    typeError = _isNativeReflectConstructDefault;
                    typeError = new.target;
                    typeError = new.target;
                    typeError = new typeError("Failed to execute 'measure' on 'Performance': The mark '" + StringResult + "' does not exist.", "SyntaxError");
                    throw typeError;
                  }
                }
              }
              if ("undefined" !== typeof end) {
                if ("number" === tmp79) {
                  let tmp80 = end;
                } else if ("string" === tmp79) {
                  if (typeof getMarkTimeForMeasure !== "function") {
                    typeError = HermesBuiltin.throwTypeError();
                  }
                  tmp80 = callback5(end);
                  if (null == tmp80) {
                    const _HermesInternal7 = HermesInternal;
                    let tmp89 = _isNativeReflectConstructDefault;
                    tmp89 = new tmp89("Failed to execute 'measure' on 'Performance': The mark '" + end + "' does not exist.", "SyntaxError");
                    throw tmp89;
                  }
                } else {
                  const _String2 = String;
                  const StringResult1 = String(end);
                  if (typeof getMarkTimeForMeasure !== "function") {
                    typeError = HermesBuiltin.throwTypeError();
                  }
                  tmp80 = callback5(StringResult1);
                  if (null == tmp80) {
                    typeError = importDefault;
                    typeError = dependencyMap;
                    const _HermesInternal9 = HermesInternal;
                    typeError = _isNativeReflectConstructDefault;
                    typeError = new.target;
                    typeError = new.target;
                    typeError = new typeError("Failed to execute 'measure' on 'Performance': The mark '" + StringResult1 + "' does not exist.", "SyntaxError");
                    throw typeError;
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
                    typeError = new.target;
                    typeError = new TypeError("Failed to execute 'measure' on 'Performance': Failed to read the 'duration' property from 'PerformanceMeasureOptions': The provided double value is non-finite.");
                    throw typeError;
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
                  typeError = importDefault;
                  typeError = dependencyMap;
                  currentTimeStamp = tmp96;
                  num3 = tmp64;
                  const tmp10 = structuredCloneInternalDefault(detail);
                }
              } else {
                if (undefined === tmp64) {
                  typeError = Performance;
                  typeError = dependencyMap;
                  typeError = Performance(164).getCurrentTimeStamp() - tmp64;
                  const obj4 = Performance(164);
                }
                typeError = tmp80 - tmp64;
              }
            }
          } else if ("string" === tmp19) {
            if (typeof getMarkTimeForMeasure !== "function") {
              typeError = HermesBuiltin.throwTypeError();
            }
            const tmp42 = callback5(arg1);
            if (null == tmp42) {
              const _HermesInternal5 = HermesInternal;
              let tmp57 = _isNativeReflectConstructDefault;
              tmp57 = new tmp57("Failed to execute 'measure' on 'Performance': The mark '" + arg1 + "' does not exist.", "SyntaxError");
              throw tmp57;
            } else {
              if (undefined !== arg2) {
                if (typeof tmp40 !== "function") {
                  typeError = HermesBuiltin.throwTypeError();
                }
                const tmp41Result = tmp41(arg2);
                if (null == tmp41Result) {
                  const _HermesInternal4 = HermesInternal;
                  let tmp49 = _isNativeReflectConstructDefault;
                  tmp49 = new tmp49("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
                  throw tmp49;
                } else {
                  let diff = tmp41Result - tmp42;
                }
              } else {
                diff = Performance(164).getCurrentTimeStamp() - tmp42;
                const obj3 = Performance(164);
              }
              currentTimeStamp = diff;
              num3 = tmp42;
            }
            tmp40 = getMarkTimeForMeasure;
            tmp41 = callback5;
          } else {
            typeError = globalThis;
            const _String4 = String;
            typeError = getMarkTimeForMeasure;
            typeError = String(arg1);
            if (typeof getMarkTimeForMeasure !== "function") {
              typeError = HermesBuiltin.throwTypeError();
            }
            const tmp21 = callback5(typeError);
            if (null == tmp21) {
              const _HermesInternal3 = HermesInternal;
              let tmp35 = _isNativeReflectConstructDefault;
              tmp35 = new tmp35("Failed to execute 'measure' on 'Performance': The mark '" + typeError + "' does not exist.", "SyntaxError");
              throw tmp35;
            } else {
              if (undefined !== arg2) {
                if (typeof typeError !== "function") {
                  typeError = HermesBuiltin.throwTypeError();
                }
                const tmp20Result = tmp20(arg2);
                if (null == tmp20Result) {
                  const _HermesInternal2 = HermesInternal;
                  let tmp28 = _isNativeReflectConstructDefault;
                  tmp28 = new tmp28("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
                  throw tmp28;
                } else {
                  let diff1 = tmp20Result - tmp21;
                }
              } else {
                diff1 = Performance(164).getCurrentTimeStamp() - tmp21;
                const obj2 = Performance(164);
              }
              currentTimeStamp = diff1;
              num3 = tmp21;
            }
            tmp20 = callback5;
          }
        } else {
          if (undefined !== arg2) {
            if (typeof getMarkTimeForMeasure !== "function") {
              typeError = HermesBuiltin.throwTypeError();
            }
            const tmp9 = callback5(arg2);
            if (null == tmp9) {
              const _HermesInternal = HermesInternal;
              let tmp13 = _isNativeReflectConstructDefault;
              tmp13 = new tmp13("Failed to execute 'measure' on 'Performance': The mark '" + arg2 + "' does not exist.", "SyntaxError");
              throw tmp13;
            } else {
              currentTimeStamp = tmp9;
            }
          } else {
            currentTimeStamp = Performance(164).getCurrentTimeStamp();
            const obj = Performance(164);
          }
          num3 = 0;
        }
        typeError = closure_14;
        closure_14.name = typeError;
        closure_14.startTime = num3;
        closure_14.duration = currentTimeStamp;
        closure_14.detail = tmp10;
        typeError = Performance;
        typeError = dependencyMap;
        typeError = new.target;
        typeError = new.target;
        typeError = closure_14;
        typeError = new Performance(169).PerformanceMeasure(closure_14);
        typeError = callback4;
        typeError = num3;
        typeError = currentTimeStamp;
        typeError = callback4(typeError, num3, currentTimeStamp, typeError);
        return typeError;
      }
    }
  },
  {
    key: "clearMeasures",
    value: function clearMeasures(arg0) {
      callback7(arg0);
    }
  },
  {
    key: "getEntries",
    value: function getEntries() {
      const entries = importDefaultResult2Result.getEntries();
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
      const entriesByType = importDefaultResult2Result.getEntriesByType(Performance(170).performanceEntryTypeToRaw(type));
      items = entriesByType.map(Performance(170).rawToPerformanceEntry);
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
      const entriesByName = importDefaultResult2Result.getEntriesByName(arg0, result);
      items = entriesByName.map(Performance(170).rawToPerformanceEntry);
    }
  }
];
const importDefaultResultResult = importDefaultResult(Performance, items);
class Performance {
  constructor() {
    typeError = new TypeError("Failed to construct 'Performance': Illegal constructor");
    throw typeError;
  }
}
Performance.prototype = importDefaultResultResult.prototype;
setPlatformObject.setPlatformObject(importDefaultResultResult);

export default importDefaultResultResult;
export const Performance_public = Performance;