// === Module 1748: WorkletEventHandler ===

// Module 1748 (WorkletEventHandler)
import startMapper from "startMapper" /* 1687 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;
import module_1646_mod from "module_1646" /* 1646 */;

const require = globalThis.__r;
let _require;

let module_1646 = module_1646_mod;
module_1646 = module_1646.shouldBeUseWeb();
let closure_4 = _classPrivateFieldKey("viewTags");
let closure_5 = _classPrivateFieldKey("registrations");
class WorkletEventHandlerNative {
  constructor(worklet, eventNames) {
    _classCallCheck(this, WorkletEventHandlerNative);
    Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    this.worklet = worklet;
    this.eventNames = eventNames;
    const tmp4 = _classPrivateFieldBase(this, closure_4);
    tmp4[closure_4] = new Set();
    new Set();
    const tmp6 = _classPrivateFieldBase(this, closure_5);
    tmp6[closure_5] = new Map();
    new Map();
  }
}
const entry = {
  key: "updateEventHandler",
  value: function updateEventHandler(worklet, eventNames) {
    const self = this;
    this.worklet = worklet;
    this.eventNames = eventNames;
    const arr = _classPrivateFieldBase(this, closure_5)[closure_5];
    let item = arr.forEach((arr) => {
      const item = arr.forEach((item) => {
        const obj = eventNames(closure_1_1[5]);
        return obj.unregisterEventHandler(item);
      });
    });
    const arr2 = Array.from(_classPrivateFieldBase(this, closure_4)[closure_4]);
    const item1 = arr2.forEach((item) => {
      eventNames = item;
      eventNames = eventNames.eventNames;
      const mapped = eventNames.map((item) => {
        const obj = startMapper;
        return obj.registerEventHandler(self.worklet, item, item);
      });
      let obj = _classPrivateFieldBase(eventNames, closure_1_5)[closure_1_5];
      const result = obj.set(item, mapped);
    });
  }
};
let items = [
  entry,
  {
    key: "registerForEvents",
    value: function registerForEvents(arg0, arg1) {
      let closure_0;
      const self = this;
      _require = arg0;
      let obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      obj.add(arg0);
      const eventNames = this.eventNames;
      const mapped = eventNames.map((item) => {
        const obj = startMapper;
        return obj.registerEventHandler(self.worklet, item, closure_0);
      });
      const obj2 = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj2.set(arg0, mapped);
      if (0 === this.eventNames.length) {
        const tmp6 = arg1;
        if (tmp6) {
          const obj3 = require("startMapper");
          const items = [obj3.registerEventHandler(self.worklet, arg1, arg0)];
          const registerEventHandlerResult = obj3.registerEventHandler(self.worklet, arg1, arg0);
          const obj4 = _classPrivateFieldBase(self, closure_5)[closure_5];
          const result1 = obj4.set(arg0, items);
        }
      }
    }
  },
  {
    key: "unregisterFromEvents",
    value: function unregisterFromEvents(arg0) {
      let obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      obj.delete(arg0);
      const obj2 = _classPrivateFieldBase(this, closure_5)[closure_5];
      const value = obj2.get(arg0);
      if (value != null) {
        const item = value.forEach((item) => {
          const obj = require("startMapper");
          const result = obj.unregisterEventHandler(item);
        });
      }
      const obj3 = _classPrivateFieldBase(this, closure_5)[closure_5];
      obj3.delete(arg0);
    }
  }
];
let importDefaultResultResult = _createClass(WorkletEventHandlerNative, items);
if (module_1646) {
  class WorkletEventHandlerWeb {
    constructor(worklet) {
      let items = arg1;
      if (arg1 === undefined) {
        items = [];
      }
      _classCallCheck(this, WorkletEventHandlerWeb);
      this.worklet = worklet;
      this.eventNames = items;
      this.listeners = {};
      this.setupWebListeners();
    }
  }
  const entry1 = {
    key: "setupWebListeners",
    value: function setupWebListeners() {
        const self = this;
        this.listeners = {};
        const eventNames = this.eventNames;
        const item = eventNames.forEach((item) => {
          let closure_0 = item;
          const worklet = self.worklet;
          self.listeners[item] = (nativeEvent) => {
            const obj = { eventName };
            const merged = Object.assign(nativeEvent.nativeEvent);
            worklet(obj);
          };
        });
      }
  };
  const items1 = [entry1, , , ];
  const entry2 = {
    key: "updateEventHandler",
    value: function updateEventHandler(worklet, eventNames) {
        const obj = { worklet, eventNames };
        obj.setupWebListeners();
      }
  };
  items1[1] = entry2;
  const entry3 = {
    key: "registerForEvents",
    value: function registerForEvents(arg0, arg1) {

      }
  };
  items1[2] = entry3;
  const entry4 = {
    key: "unregisterFromEvents",
    value: function unregisterFromEvents(arg0) {

      }
  };
  items1[3] = entry4;
  importDefaultResultResult = _createClass(WorkletEventHandlerWeb, items1);
}

export const WorkletEventHandler = importDefaultResultResult;