// _runtime/00163_PerformanceEntry.js
import _createClassDefault from "metro/00042__createClass.js";
import PerformanceEntry from "metro/00041__classCallCheck.js";
import setPlatformObject from "00126_setPlatformObject.js";

class PerformanceEntry {
  constructor(arg0, arg1) {
    tmp = PerformanceEntry(this, PerformanceEntry);
    this.__entryType = global;
    ({ name: this.__name, startTime: this.__startTime, duration: this.__duration } = arg1);
    return;
  }
}
const items = [
  {
    key: "name",
    get() {
      return this.__name;
    }
  },
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
const tmp2 = _createClassDefault(PerformanceEntry, items);
class PerformanceEntry {
  constructor() {
    typeError = new TypeError("Failed to construct 'PerformanceEntry': Illegal constructor");
    throw typeError;
  }
}
PerformanceEntry.prototype = tmp2.prototype;
setPlatformObject.setPlatformObject(tmp2);

export const PerformanceEntry = tmp2;
export const PerformanceEntry_public = PerformanceEntry;