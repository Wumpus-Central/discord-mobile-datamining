// _runtime/metro/00173__.js
import _modDef154 from "00154__.js";
import PerformanceEventTiming from "../00162_PerformanceEventTiming.js";
import PerformanceEntry from "../00163_PerformanceEntry.js";
import RawPerformanceEntryTypeValues from "../00170_RawPerformanceEntryTypeValues.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "../00091__classPrivateFieldKey.js";
import nullthrows from "../00070_nullthrows.js";

function _createNativeObserver2() {
  let self = this;
  _classPrivateFieldBase(this, closure_11)[closure_11] = false;
  const observer = NativePerformanceCxx.createObserver(function () {
    const takeRecordsResult = NativePerformanceCxx.takeRecords(observer, true);
    if (takeRecordsResult) {
      if (0 !== takeRecordsResult.length) {
        self = this;
        const self2 = this;
        let num2 = 0;
        const tmp9 = new metroImportDefault(takeRecordsResult.map(RawPerformanceEntryTypeValues.rawToPerformanceEntry));
        if (!_classPrivateFieldBase(self, closure_11)[closure_11]) {
          num2 = NativePerformanceCxx.getDroppedEntriesCount(observer);
          _classPrivateFieldBase(self, closure_11)[closure_11] = true;
        }
        const obj2 = { droppedEntriesCount: num2 };
        const tmp10Result = _classPrivateFieldBase(self, closure_9);
        tmp10Result[closure_9](tmp9, self, obj2);
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
      const self = this;
      const self2 = this;
      const typeError = new TypeError(
        "Failed to execute 'observe' on 'PerformanceObserver': An observe() call must not include both entryTypes and type arguments.",
      );
      throw typeError;
    }
  }
  if (entryTypes) {
    if (type) {
      const _TypeError3 = TypeError;
      const self9 = this;
      const self10 = this;
      const typeError1 = new TypeError(
        "Failed to execute 'observe' on 'PerformanceObserver': An observe() call must include either entryTypes or type arguments.",
      );
      throw typeError1;
    }
  }
  if ("multiple" === _classPrivateFieldBase(this, closure_10)[closure_10]) {
    if (type) {
      const _Error2 = Error;
      const self7 = this;
      const self8 = this;
      const error = new Error(
        "Failed to execute 'observe' on 'PerformanceObserver': This observer has performed observe({entryTypes:...}, therefore it cannot perform observe({type:...})",
      );
      throw error;
    }
  }
  if ("single" === _classPrivateFieldBase(this, closure_10)[closure_10]) {
    if (entryTypes) {
      const _Error = Error;
      const self5 = this;
      const self6 = this;
      const error1 = new Error(
        "Failed to execute 'observe' on 'PerformanceObserver': This PerformanceObserver has performed observe({type:...}, therefore it cannot perform observe({entryTypes:...})",
      );
      throw error1;
    }
  }
  if (entryTypes) {
    if (null != durationThreshold) {
      const _TypeError2 = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError2 = new TypeError(
        "Failed to execute 'observe' on 'PerformanceObserver': An observe() call must not include both entryTypes and durationThreshold arguments.",
      );
      throw typeError2;
    }
  }
}
let NativePerformanceCxx = nullthrows(_modDef154);
let closure_6 = _classPrivateFieldKey("entries");
class PerformanceObserverEntryList {
  constructor(arg0) {
    _classCallCheck(this, PerformanceObserverEntryList);
    Object.defineProperty(this, closure_6, { writable: true, value: "a" });
    _classPrivateFieldBase(this, closure_6)[closure_6] = arg0;
  }
}
const entry = {
  key: "getEntries",
  value: function getEntries() {
    return _classPrivateFieldBase(this, closure_6)[closure_6];
  },
};
let items = [
  entry,
  {
    key: "getEntriesByType",
    value: function getEntriesByType(arg0) {
      let closure_0 = arg0;
      const arr = _classPrivateFieldBase(this, closure_6)[closure_6];
      return arr.filter((entryType) => entryType.entryType === closure_0);
    },
  },
  {
    key: "getEntriesByName",
    value: function getEntriesByName(arg0, arg1) {
      let found;
      const self = this;
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (undefined === arg1) {
        const arr2 = _classPrivateFieldBase(self, closure_6)[closure_6];
        found = arr2.filter((name) => name.name === closure_0);
      } else {
        const arr = _classPrivateFieldBase(self, closure_6)[closure_6];
        found = arr.filter((name) => name.name === closure_0 && name.entryType === closure_1);
      }
      return found;
    },
  },
];
const importDefaultResultResult = _createClass(PerformanceObserverEntryList, items);
const metroImportDefault = importDefaultResultResult;
tmp6.prototype = importDefaultResultResult.prototype;
let closure_8 = _classPrivateFieldKey("nativeObserverHandle");
let closure_9 = _classPrivateFieldKey("callback");
let closure_10 = _classPrivateFieldKey("type");
let closure_11 = _classPrivateFieldKey("calledAtLeastOnce");
let closure_12 = _classPrivateFieldKey("createNativeObserver");
let closure_13 = _classPrivateFieldKey("validateObserveOptions");
class PerformanceObserver {
  constructor(arg0) {
    _classCallCheck(this, PerformanceObserver);
    const obj = { value: _validateObserveOptions2 };
    Object.defineProperty(this, closure_13, obj);
    const obj2 = { value: _createNativeObserver2 };
    Object.defineProperty(this, closure_12, obj2);
    Object.defineProperty(this, closure_8, { writable: true, value: null });
    Object.defineProperty(this, closure_9, { writable: true, value: "a" });
    Object.defineProperty(this, closure_10, { writable: true, value: "a" });
    Object.defineProperty(this, closure_11, { writable: true, value: false });
    _classPrivateFieldBase(this, closure_9)[closure_9] = arg0;
  }
}
const entry1 = {
  key: "observe",
  value: function observe(entryTypes) {
    let obj2;
    const self = this;
    const tmp2 = _classPrivateFieldBase(this, closure_13);
    tmp2[closure_13](entryTypes);
    if (null == _classPrivateFieldBase(this, closure_8)[closure_8]) {
      const tmpResult = _classPrivateFieldBase(self, closure_8);
      const tmpResult2 = _classPrivateFieldBase(self, closure_12);
      tmpResult[closure_8] = tmpResult2[closure_12]();
    }
    const tmp9 = nullthrows;
    const tmp9Result = tmp9(_classPrivateFieldBase(self, closure_8)[closure_8]);
    if (entryTypes.entryTypes) {
      _classPrivateFieldBase(self, closure_10)[closure_10] = "multiple";
      const obj3 = { entryTypes: entryTypes.map(RawPerformanceEntryTypeValues.performanceEntryTypeToRaw) };
      entryTypes = entryTypes.entryTypes;
      const observe2 = NativePerformanceCxx.observe;
      observe2(tmp9Result, obj3);
    } else if (entryTypes.type) {
      _classPrivateFieldBase(self, closure_10)[closure_10] = "single";
      const obj = { type: obj2.performanceEntryTypeToRaw(entryTypes.type), buffered: null, durationThreshold: null };
      const observe = NativePerformanceCxx.observe;
      ({ buffered: obj.buffered, durationThreshold: obj.durationThreshold } = entryTypes);
      obj2 = RawPerformanceEntryTypeValues;
      observe(tmp9Result, obj);
    }
  },
};
const items1 = [
  entry1,
  {
    key: "disconnect",
    value: function disconnect() {
      if (null != _classPrivateFieldBase(this, closure_8)[closure_8]) {
        NativePerformanceCxx.disconnect(_classPrivateFieldBase(this, closure_8)[closure_8]);
      }
    },
  },
  {
    key: "takeRecords",
    value: function takeRecords() {
      const items = [];
      let mapped = items;
      if (null != _classPrivateFieldBase(this, closure_8)[closure_8]) {
        const takeRecordsResult = NativePerformanceCxx.takeRecords(
          _classPrivateFieldBase(this, closure_8)[closure_8],
          true,
        );
        mapped = items;
        const tmp5 = takeRecordsResult && takeRecordsResult.length > 0;
        if (tmp5) {
          mapped = takeRecordsResult.map(RawPerformanceEntryTypeValues.rawToPerformanceEntry);
        }
      }
      return mapped;
    },
  },
];
const importDefaultResultResult1 = _createClass(PerformanceObserver, items1);
NativePerformanceCxx = NativePerformanceCxx.getSupportedPerformanceEntryTypes();
importDefaultResultResult1.supportedEntryTypes = freeze(
  NativePerformanceCxx.map(RawPerformanceEntryTypeValues.rawToPerformanceEntryType),
);
const PerformanceEntry_export = PerformanceEntry.PerformanceEntry;
const PerformanceObserverEntryList_export = importDefaultResultResult;
const PerformanceObserver_export = importDefaultResultResult1;
const PerformanceEventTiming_export = PerformanceEventTiming.PerformanceEventTiming;

export { PerformanceEntry_export as PerformanceEntry };
export { PerformanceObserverEntryList_export as PerformanceObserverEntryList };
export const PerformanceObserverEntryList_public = tmp6;
export { PerformanceObserver_export as PerformanceObserver };
export { PerformanceEventTiming_export as PerformanceEventTiming };
