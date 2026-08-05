import { nullthrows } from "00070_nullthrows.js";
// _runtime/00173__createNativeObserver2.js
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult1 from "_classPrivateFieldKey";
import importDefaultResult2Result from "NativePerformanceCxx";

let PerformanceObserver = arg1;
function _createNativeObserver2() {
  const self = this;
  callback2(this, closure_11)[closure_11] = false;
  const observer = importDefaultResult2Result.createObserver(() => {
    let obj = outer1_5;
    const takeRecordsResult = outer1_5.takeRecords(observer, true);
    if (takeRecordsResult) {
      if (0 !== takeRecordsResult.length) {
        const tmp11 = new outer1_7(takeRecordsResult.map(observer(outer1_2[6]).rawToPerformanceEntry));
        let num2 = 0;
        if (!outer1_4(self, outer1_11)[outer1_11]) {
          num2 = obj.getDroppedEntriesCount(observer);
          tmp12(tmp13, tmp14)[tmp14] = true;
        }
        obj = { droppedEntriesCount: null };
        obj[0] = num2;
        outer1_4(self, outer1_9)[outer1_9](tmp11, self, obj);
        const tmp12Result = outer1_4(self, outer1_9);
      }
    }
  });
  return observer;
}
function _validateObserveOptions2(arg0) {
  let durationThreshold;
  let entryTypes;
  let type;
  ({ type, entryTypes, durationThreshold } = arg0);
  if (!type) {
    if (!entryTypes) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Failed to execute 'observe' on 'PerformanceObserver': An observe() call must not include both entryTypes and type arguments.");
      throw typeError;
    }
  }
  if (entryTypes) {
    if (type) {
      const _TypeError3 = TypeError;
      const typeError1 = new TypeError("Failed to execute 'observe' on 'PerformanceObserver': An observe() call must include either entryTypes or type arguments.");
      throw typeError1;
    }
  }
  if ("multiple" === callback2(this, closure_10)[closure_10]) {
    if (type) {
      const _Error2 = Error;
      const error = new Error("Failed to execute 'observe' on 'PerformanceObserver': This observer has performed observe({entryTypes:...}, therefore it cannot perform observe({type:...})");
      throw error;
    }
  }
  if ("single" === callback2(this, closure_10)[closure_10]) {
    if (entryTypes) {
      const _Error = Error;
      const error1 = new Error("Failed to execute 'observe' on 'PerformanceObserver': This PerformanceObserver has performed observe({type:...}, therefore it cannot perform observe({entryTypes:...})");
      throw error1;
    }
  }
  if (entryTypes) {
    if (null != durationThreshold) {
      const _TypeError2 = TypeError;
      const typeError2 = new TypeError("Failed to execute 'observe' on 'PerformanceObserver': An observe() call must not include both entryTypes and durationThreshold arguments.");
      throw typeError2;
    }
  }
}
let c5 = importDefaultResult2Result;
let closure_6 = importDefaultResult1("entries");
class PerformanceObserverEntryList {
  constructor(arg0) {
    tmp = _validateObserveOptions2(this, PerformanceObserver);
    definePropertyResult = Object.defineProperty(this, entries, { writable: true, value: "a" });
    _validateObserveOptions2(this, entries)[entries] = global;
    return;
  }
}
PerformanceObserver = PerformanceObserverEntryList;
let obj = {
  key: "getEntries",
  value: function getEntries() {
    return callback2(this, closure_6)[closure_6];
  }
};
let items = [
  obj,
  {
    key: "getEntriesByType",
    value: function getEntriesByType(arg0) {
      let closure_0 = arg0;
      return callback2(this, closure_6)[closure_6].filter((entryType) => entryType.entryType === closure_0);
    }
  },
  {
    key: "getEntriesByName",
    value: function getEntriesByName(arg0, arg1) {
      const self = this;
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (undefined === arg1) {
        let found = callback2(self, closure_6)[closure_6].filter((name) => name.name === closure_0);
        const arr2 = callback2(self, closure_6)[closure_6];
      } else {
        found = callback2(self, closure_6)[closure_6].filter((name) => {
          let tmp = name.name === closure_0;
          if (tmp) {
            tmp = name.entryType === closure_1;
          }
          return tmp;
        });
        const arr = callback2(self, closure_6)[closure_6];
      }
      return found;
    }
  }
];
const importDefaultResultResult = importDefaultResult(PerformanceObserverEntryList, items);
let error = importDefaultResultResult;
class PerformanceObserverEntryList {
  constructor() {
    typeError = new TypeError("Failed to construct 'PerformanceObserverEntryList': Illegal constructor");
    throw typeError;
  }
}
PerformanceObserverEntryList.prototype = importDefaultResultResult.prototype;
let closure_8 = importDefaultResult1("nativeObserverHandle");
let closure_9 = importDefaultResult1("callback");
let closure_10 = importDefaultResult1("type");
let closure_11 = importDefaultResult1("calledAtLeastOnce");
let closure_12 = importDefaultResult1("createNativeObserver");
let closure_13 = importDefaultResult1("validateObserveOptions");
class PerformanceObserver {
  constructor(arg0) {
    tmp = _validateObserveOptions2(this, PerformanceObserver);
    obj = { value: _validateObserveOptions2 };
    definePropertyResult = Object.defineProperty(this, validateObserveOptions, obj);
    obj = { value: _createNativeObserver2 };
    definePropertyResult1 = Object.defineProperty(this, createNativeObserver, obj);
    definePropertyResult2 = Object.defineProperty(this, nativeObserverHandle, { writable: true, value: null });
    definePropertyResult3 = Object.defineProperty(this, callback, { writable: true, value: "a" });
    definePropertyResult4 = Object.defineProperty(this, type, { writable: true, value: "a" });
    definePropertyResult5 = Object.defineProperty(this, calledAtLeastOnce, { writable: true, value: false });
    _validateObserveOptions2(this, callback)[callback] = global;
    return;
  }
}
obj = {
  key: "observe",
  value: function observe(entryTypes) {
    const self = this;
    callback2(this, closure_13)[closure_13](entryTypes);
    if (null == callback2(this, closure_8)[closure_8]) {
      let tmpResult = tmp(self, tmp4);
      tmpResult = tmp(self, closure_12);
      tmpResult[tmp4] = tmpResult[closure_12]();
    }
    const tmp2 = callback2(this, closure_13);
    const tmp9Result = nullthrows(callback2(self, closure_8)[closure_8]);
    if (entryTypes.entryTypes) {
      tmp(self, closure_10)[closure_10] = "multiple";
      let obj = { entryTypes: null };
      entryTypes = entryTypes.entryTypes;
      obj[0] = entryTypes.map(PerformanceObserver(170).performanceEntryTypeToRaw);
      importDefaultResult2Result.observe(tmp9Result, obj);
    } else if (entryTypes.type) {
      tmp(self, closure_10)[closure_10] = "single";
      obj = { type: null, buffered: null, durationThreshold: null };
      obj[0] = PerformanceObserver(170).performanceEntryTypeToRaw(entryTypes.type);
      ({ buffered: obj[1], durationThreshold: obj[2] } = entryTypes);
      importDefaultResult2Result.observe(tmp9Result, obj);
      const obj2 = PerformanceObserver(170);
    }
  }
};
const items1 = [
  obj,
  {
    key: "disconnect",
    value: function disconnect() {
      if (null != callback2(this, closure_8)[closure_8]) {
        importDefaultResult2Result.disconnect(callback2(this, tmp2)[tmp2]);
      }
    }
  },
  {
    key: "takeRecords",
    value: function takeRecords(observer, arg1) {
      const items = [];
      let mapped = items;
      if (null != callback2(this, closure_8)[closure_8]) {
        const takeRecordsResult = importDefaultResult2Result.takeRecords(callback2(this, tmp2)[tmp2], true);
        let tmp5 = takeRecordsResult;
        if (takeRecordsResult) {
          tmp5 = takeRecordsResult.length > 0;
        }
        mapped = items;
        if (tmp5) {
          mapped = takeRecordsResult.map(PerformanceObserver(170).rawToPerformanceEntry);
        }
      }
      return mapped;
    }
  }
];
const importDefaultResultResult1 = importDefaultResult(PerformanceObserver, items1);
const supportedPerformanceEntryTypes = importDefaultResult2Result.getSupportedPerformanceEntryTypes();
importDefaultResultResult1.supportedEntryTypes = Object.freeze(supportedPerformanceEntryTypes.map(require("rawToPerformanceEntry").rawToPerformanceEntryType));

export const PerformanceEntry = require("PerformanceEntry").PerformanceEntry;
export const PerformanceObserverEntryList = importDefaultResultResult;
export const PerformanceObserverEntryList_public = PerformanceObserverEntryList;
export const PerformanceObserver = importDefaultResultResult1;
export const PerformanceEventTiming = require("_isNativeReflectConstruct").PerformanceEventTiming;