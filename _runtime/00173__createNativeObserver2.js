// === Module 173: _createNativeObserver2 ===

// Module 173 (_createNativeObserver2)
import _modDef154 from "module_154" /* 154 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;
import nullthrows from "nullthrows" /* 70 */;

let PerformanceObserver = fn;
function _createNativeObserver2() {
  const self = this;
  _classPrivateFieldBase(this, closure_11)[closure_11] = false;
  const observer = NativePerformanceCxx.createObserver(() => {
    let obj = NativePerformanceCxx;
    const takeRecordsResult = NativePerformanceCxx.takeRecords(observer, true);
    if (takeRecordsResult) {
      if (0 !== takeRecordsResult.length) {
        const tmp11 = new importDefaultResultResult(takeRecordsResult.map(PerformanceObserver(170).rawToPerformanceEntry));
        let num2 = 0;
        if (!_classPrivateFieldBase(self, closure_11)[closure_11]) {
          num2 = obj.getDroppedEntriesCount(observer);
          tmp12(tmp13, tmp14)[tmp14] = true;
        }
        obj = { droppedEntriesCount: num2 };
        _classPrivateFieldBase(self, closure_9)[closure_9](tmp11, self, obj);
        const tmp12Result = _classPrivateFieldBase(self, closure_9);
      }
    }
  });
  return observer;
}
function _validateObserveOptions2(arg0) {
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
  if ("multiple" === _classPrivateFieldBase(this, closure_10)[closure_10]) {
    if (type) {
      const _Error2 = Error;
      const error = new Error("Failed to execute 'observe' on 'PerformanceObserver': This observer has performed observe({entryTypes:...}, therefore it cannot perform observe({type:...})");
      throw error;
    }
  }
  if ("single" === _classPrivateFieldBase(this, closure_10)[closure_10]) {
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
let NativePerformanceCxx = nullthrows(_modDef154);
let closure_6 = _classPrivateFieldKey("entries");
class PerformanceObserverEntryList {
  constructor(arg0) {
    tmp = closure_3(this, PerformanceObserver);
    definePropertyResult = Object.defineProperty(this, metroRequire, { writable: true, value: "a" });
    closure_4(this, metroRequire)[metroRequire] = global;
    return;
  }
}
PerformanceObserver = PerformanceObserverEntryList;
const entry = {
  key: "getEntries",
  value: function getEntries() {
    return _classPrivateFieldBase(this, closure_6)[closure_6];
  }
};
let items = [
  entry,
  {
    key: "getEntriesByType",
    value: function getEntriesByType(arg0) {
      closure_0 = arg0;
      return _classPrivateFieldBase(this, closure_6)[closure_6].filter((entryType) => entryType.entryType === closure_0);
    }
  },
  {
    key: "getEntriesByName",
    value: function getEntriesByName(arg0, arg1) {
      const self = this;
      closure_0 = arg0;
      closure_1 = arg1;
      if (undefined === arg1) {
        let found = _classPrivateFieldBase(self, closure_6)[closure_6].filter((name) => name.name === closure_0);
        const arr2 = _classPrivateFieldBase(self, closure_6)[closure_6];
      } else {
        found = _classPrivateFieldBase(self, closure_6)[closure_6].filter((name) => {
          let tmp = name.name === closure_0;
          if (tmp) {
            tmp = name.entryType === closure_1;
          }
          return tmp;
        });
        const arr = _classPrivateFieldBase(self, closure_6)[closure_6];
      }
      return found;
    }
  }
];
const importDefaultResultResult = _createClass(PerformanceObserverEntryList, items);
class PerformanceObserverEntryList {
  constructor() {
    typeError = new TypeError("Failed to construct 'PerformanceObserverEntryList': Illegal constructor");
    throw typeError;
  }
}
PerformanceObserverEntryList.prototype = importDefaultResultResult.prototype;
let closure_8 = _classPrivateFieldKey("nativeObserverHandle");
let closure_9 = _classPrivateFieldKey("callback");
let closure_10 = _classPrivateFieldKey("type");
let closure_11 = _classPrivateFieldKey("calledAtLeastOnce");
let closure_12 = _classPrivateFieldKey("createNativeObserver");
let closure_13 = _classPrivateFieldKey("validateObserveOptions");
class PerformanceObserver {
  constructor(arg0) {
    tmp = closure_3(this, PerformanceObserver);
    obj = { value: closure_2_15 };
    definePropertyResult = Object.defineProperty(this, closure_13, obj);
    obj = { value: closure_2_14 };
    definePropertyResult1 = Object.defineProperty(this, closure_12, obj);
    definePropertyResult2 = Object.defineProperty(this, closure_8, { writable: true, value: null });
    definePropertyResult3 = Object.defineProperty(this, closure_9, { writable: true, value: "a" });
    definePropertyResult4 = Object.defineProperty(this, c10, { writable: true, value: "a" });
    definePropertyResult5 = Object.defineProperty(this, closure_11, { writable: true, value: false });
    closure_4(this, closure_9)[closure_9] = global;
    return;
  }
}
const entry1 = {
  key: "observe",
  value: function observe(entryTypes) {
    const self = this;
    _classPrivateFieldBase(this, closure_13)[closure_13](entryTypes);
    if (null == _classPrivateFieldBase(this, closure_8)[closure_8]) {
      tmp(self, tmp4);
      const tmpResult = tmp(self, closure_12);
      tmpResult[tmp4] = tmpResult[closure_12]();
    }
    const tmp2 = _classPrivateFieldBase(this, closure_13);
    const tmp9Result = nullthrows(_classPrivateFieldBase(self, closure_8)[closure_8]);
    if (entryTypes.entryTypes) {
      tmp(self, closure_10)[closure_10] = "multiple";
      let obj = { entryTypes: null };
      entryTypes = entryTypes.entryTypes;
      obj.entryTypes = entryTypes.map(PerformanceObserver(170).performanceEntryTypeToRaw);
      NativePerformanceCxx.observe(tmp9Result, obj);
    } else if (entryTypes.type) {
      tmp(self, closure_10)[closure_10] = "single";
      obj = { type: PerformanceObserver(170).performanceEntryTypeToRaw(entryTypes.type), buffered: null, durationThreshold: null };
      ({ buffered: obj.buffered, durationThreshold: obj.durationThreshold } = entryTypes);
      NativePerformanceCxx.observe(tmp9Result, obj);
      const obj2 = PerformanceObserver(170);
    }
  }
};
const items1 = [
  entry1,
  {
    key: "disconnect",
    value: function disconnect() {
      if (null != _classPrivateFieldBase(this, closure_8)[closure_8]) {
        NativePerformanceCxx.disconnect(_classPrivateFieldBase(this, tmp2)[tmp2]);
      }
    }
  },
  {
    key: "takeRecords",
    value: function takeRecords() {
      const items = [];
      let mapped = items;
      if (null != _classPrivateFieldBase(this, closure_8)[closure_8]) {
        const takeRecordsResult = NativePerformanceCxx.takeRecords(_classPrivateFieldBase(this, tmp2)[tmp2], true);
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
const importDefaultResultResult1 = _createClass(PerformanceObserver, items1);
NativePerformanceCxx = NativePerformanceCxx.getSupportedPerformanceEntryTypes();
importDefaultResultResult1.supportedEntryTypes = Object.freeze(NativePerformanceCxx.map(fn(170).rawToPerformanceEntryType));

export const PerformanceEntry = fn(163).PerformanceEntry;
export const PerformanceObserverEntryList = importDefaultResultResult;
export const PerformanceObserverEntryList_public = PerformanceObserverEntryList;
export const PerformanceObserver = importDefaultResultResult1;
export const PerformanceEventTiming = fn(162).PerformanceEventTiming;