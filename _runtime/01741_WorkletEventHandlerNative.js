// _runtime/01741_WorkletEventHandlerNative.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "00091__classPrivateFieldKey.js";

let WorkletEventHandlerWeb = fn;
let module_1639 = fn(1639);
module_1639 = module_1639.shouldBeUseWeb();
let closure_4 = _classPrivateFieldKey("viewTags");
let closure_5 = _classPrivateFieldKey("registrations");
class WorkletEventHandlerNative {
  constructor(arg0, arg1) {
    tmp = c2(this, WorkletEventHandlerWeb);
    definePropertyResult = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "a" });
    this.worklet = global;
    this.eventNames = fn;
    tmp4 = closure_3(this, closure_4);
    set = new Set();
    tmp4[closure_4] = set;
    tmp6 = closure_3(this, hasOwnProperty);
    map = new Map();
    tmp6[hasOwnProperty] = map;
    return;
  }
}
WorkletEventHandlerWeb = WorkletEventHandlerNative;
const entry = {
  key: "updateEventHandler",
  value: function updateEventHandler(worklet, eventNames) {
    const self = this;
    this.worklet = worklet;
    this.eventNames = eventNames;
    let arr = _classPrivateFieldBase(this, closure_5)[closure_5];
    let item = arr.forEach((arr) => {
      const item = arr.forEach((item) => _self(closure_1_1[5]).unregisterEventHandler(item));
    });
    arr = Array.from(_classPrivateFieldBase(this, closure_4)[closure_4]);
    const item1 = arr.forEach((item) => {
      _self = item;
      const eventNames = _self.eventNames;
      const mapped = eventNames.map((item) => WorkletEventHandlerWeb(1680).registerEventHandler(self.worklet, item, closure_0));
      const result = _classPrivateFieldBase(_self, closure_1_5)[closure_1_5].set(item, mapped);
    });
  }
};
let items = [
  entry,
  {
    key: "registerForEvents",
    value: function registerForEvents(arg0, arg1) {
      const self = this;
      _classPrivateFieldBase(this, closure_4)[closure_4].add(arg0);
      const eventNames = this.eventNames;
      const mapped = eventNames.map((item) => WorkletEventHandlerWeb(1680).registerEventHandler(self.worklet, item, closure_0));
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      const tmp = _classPrivateFieldBase;
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].set(arg0, mapped);
      if (0 === this.eventNames.length) {
        if (arg1) {
          const obj3 = WorkletEventHandlerWeb(self[5]);
          const registerEventHandlerResult = WorkletEventHandlerWeb(self[5]).registerEventHandler(self.worklet, arg1, arg0);
          const items = [registerEventHandlerResult];
          const result1 = tmp(self, tmp4)[tmp4].set(arg0, items);
          const obj4 = tmp(self, tmp4)[tmp4];
        }
      }
    }
  },
  {
    key: "unregisterFromEvents",
    value: function unregisterFromEvents(arg0) {
      _classPrivateFieldBase(this, closure_4)[closure_4].delete(arg0);
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      const tmp = _classPrivateFieldBase;
      value = _classPrivateFieldBase(this, closure_5)[closure_5].get(arg0);
      if (value != null) {
        const item = value.forEach((item) => {
          const result = WorkletEventHandlerWeb(dependencyMap[5]).unregisterEventHandler(item);
        });
      }
      const obj2 = _classPrivateFieldBase(this, closure_5)[closure_5];
      tmp(this, closure_5)[closure_5].delete(arg0);
    }
  }
];
let importDefaultResultResult = _createClass(WorkletEventHandlerNative, items);
if (module_1639) {
  class WorkletEventHandlerWeb {
    constructor(arg0) {
      items = fn;
      if (fn === undefined) {
        items = [];
      }
      tmp = c2(this, WorkletEventHandlerWeb);
      this.worklet = global;
      this.eventNames = items;
      this.listeners = {};
      setupWebListenersResult = this.setupWebListeners();
      return;
    }
  }
  const entry1 = {
    key: "setupWebListeners",
    value: function setupWebListeners() {
        const self = this;
        this.listeners = {};
        const eventNames = this.eventNames;
        const item = eventNames.forEach((item) => {
          const eventName = item;
          const worklet = self.worklet;
          self.listeners[item] = (nativeEvent) => {
            const obj = {};
            const merged = Object.assign(nativeEvent.nativeEvent);
            obj.eventName = eventName;
            worklet(obj);
          };
        });
      }
  };
  const items1 = [entry1, , , ];
  const entry2 = {
    key: "updateEventHandler",
    value: function updateEventHandler(worklet, eventNames) {
        { worklet, eventNames }.setupWebListeners();
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