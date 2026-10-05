// _runtime/00163_PerformanceEntry.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import 00126__ from "metro/00126__.js";

function get() {
  return this.__name;
}
class PerformanceEntry {
  constructor(__entryType, arg1) {
    _classCallCheck(this, PerformanceEntry);
    this.__entryType = __entryType;
    ({ name: this.__name, startTime: this.__startTime, duration: this.__duration } = arg1);
  }
}
const items = [
  { key: "name", get },
  {
    key: "entryType",
    get() {
      return this.__entryType;
    }
  },
  {
    key: "startTime",
    get() {
      return this.__startTime;
    }
  },
  {
    key: "duration",
    get() {
      return this.__duration;
    }
  },
  {
    key: "toJSON",
    value: function toJSON() {
      return { name: this.__name, entryType: this.__entryType, startTime: this.__startTime, duration: this.__duration };
    }
  }
];
const obj = { key: "name", get };
const tmp2 = _createClassDefault(PerformanceEntry, items);
tmp3.prototype = tmp2.prototype;
module_126.setPlatformObject(tmp2);
const PerformanceEntry_export = tmp2;

export { PerformanceEntry_export as PerformanceEntry };
export const PerformanceEntry_public = tmp3;