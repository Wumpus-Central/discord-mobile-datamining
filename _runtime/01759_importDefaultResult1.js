// _runtime/01759_importDefaultResult1.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import importDefaultResult from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import importDefaultResult1 from "00091__classPrivateFieldKey.js";
import isJest from "01657_isJest.js";

let WorkletEventHandlerWeb = fn;
isJest = isJest.shouldBeUseWeb();
let closure_4 = importDefaultResult1("viewTags");
let closure_5 = importDefaultResult1("registrations");
class WorkletEventHandlerNative {
  constructor(arg0, arg1) {
    tmp = closure_2(this, WorkletEventHandlerWeb);
    definePropertyResult = Object.defineProperty(this, closure_4, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    this.worklet = global;
    this.eventNames = fn;
    tmp4 = closure_3(this, closure_4);
    set = new Set();
    tmp4[closure_4] = set;
    tmp6 = closure_3(this, closure_5);
    map = new Map();
    tmp6[closure_5] = map;
    return;
  }
}
WorkletEventHandlerWeb = WorkletEventHandlerNative;
isJest = {
  key: "updateEventHandler",
  value: function updateEventHandler(worklet, eventNames) {
    const self = this;
    this.worklet = worklet;
    this.eventNames = eventNames;
    let arr = callback2(this, closure_5)[closure_5];
    let item = arr.forEach((item, index) => {
      item = item.forEach((item, index) => callback(table[5]).unregisterEventHandler(item));
    });
    arr = Array.from(callback2(this, closure_4)[closure_4]);
    const item1 = arr.forEach((item, index) => {
      const _self = item;
      const eventNames = _self.eventNames;
      const mapped = eventNames.map((item, index) => self(dependencyMap[5]).registerEventHandler(item.worklet, item, item));
      const result = closure_1_3(_self, closure_1_5)[closure_1_5].set(item, mapped);
    });
  }
};
let items = [
  isJest,
  {
    key: "registerForEvents",
    value: function registerForEvents(arg0, arg1) {
      const self = this;
      callback2(this, closure_4)[closure_4].add(arg0);
      const eventNames = this.eventNames;
      const mapped = eventNames.map((item, index) => callback(self[5]).registerEventHandler(self.worklet, item, callback));
      const obj = callback2(this, closure_4)[closure_4];
      const result = callback2(this, closure_5)[closure_5].set(arg0, mapped);
      if (0 === this.eventNames.length) {
        if (arg1) {
          const obj3 = WorkletEventHandlerWeb(self[5]);
          const registerEventHandlerResult = WorkletEventHandlerWeb(self[5]).registerEventHandler(self.worklet, arg1, arg0);
          const items = [registerEventHandlerResult];
          const result1 = callback2(self, closure_5)[closure_5].set(arg0, items);
          const obj4 = callback2(self, closure_5)[closure_5];
        }
      }
      const obj2 = callback2(this, closure_5)[closure_5];
    }
  },
  {
    key: "unregisterFromEvents",
    value: function unregisterFromEvents(arg0) {
      callback2(this, closure_4)[closure_4].delete(arg0);
      const obj = callback2(this, closure_4)[closure_4];
      const value = callback2(this, closure_5)[closure_5].get(arg0);
      if (value != null) {
        const item = value.forEach((item, index) => {
          const result = callback(table[5]).unregisterEventHandler(item);
        });
      }
      const obj2 = callback2(this, closure_5)[closure_5];
      callback2(this, closure_5)[closure_5].delete(arg0);
      const obj3 = callback2(this, closure_5)[closure_5];
    }
  }
];
let importDefaultResultResult = importDefaultResult(WorkletEventHandlerNative, items);
if (isJest) {
  class WorkletEventHandlerWeb {
    constructor(arg0) {
      items = fn;
      if (fn === undefined) {
        items = [];
      }
      tmp = closure_2(this, WorkletEventHandlerWeb);
      this.worklet = global;
      this.eventNames = items;
      this.listeners = {};
      setupWebListenersResult = this.setupWebListeners();
      return;
    }
  }
  isJest = { key: "setupWebListeners", value: null };
  isJest[1] = function setupWebListeners() {
    const self = this;
    this.listeners = {};
    const eventNames = this.eventNames;
    const item = eventNames.forEach((item, index) => {
      const _self = item;
      const worklet = _self.worklet;
      _self.listeners[item] = (nativeEvent) => {
        const obj = {};
        const merged = Object.assign(nativeEvent.nativeEvent);
        obj.eventName = closure_0;
        worklet(obj);
      };
    });
  };
  const items1 = [isJest, , , ];
  const obj1 = { key: "updateEventHandler", value: null };
  obj1[1] = function updateEventHandler(worklet, eventNames) {
    { worklet, eventNames }.setupWebListeners();
  };
  items1[1] = obj1;
  let obj2 = { key: "registerForEvents", value: null };
  obj2[1] = function registerForEvents(arg0, arg1) {

  };
  items1[2] = obj2;
  let obj3 = { key: "unregisterFromEvents", value: null };
  obj3[1] = function unregisterFromEvents(arg0) {

  };
  items1[3] = obj3;
  importDefaultResultResult = importDefaultResult(WorkletEventHandlerWeb, items1);
}

export const WorkletEventHandler = importDefaultResultResult;