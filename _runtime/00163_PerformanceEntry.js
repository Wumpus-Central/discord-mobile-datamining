// === Module 163: PerformanceEntry ===

// Module 163 (PerformanceEntry)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class PerformanceEntry {
  constructor(arg0, arg1) {
    tmp = closure_0(this, PerformanceEntry);
    this.__entryType = global;
    ({ name: this.__name, startTime: this.__startTime, duration: this.__duration } = fn);
    return;
  }
}
_classCallCheck = PerformanceEntry;
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
const module_126 = fn(126);
module_126.setPlatformObject(tmp2);

export const PerformanceEntry = tmp2;
export const PerformanceEntry_public = PerformanceEntry;