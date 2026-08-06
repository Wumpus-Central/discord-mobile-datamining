// _runtime/01739_importDefaultResult1.js
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult1 from "_classPrivateFieldKey";
import isJest from "isJest";

let WorkletEventHandlerWeb = arg1;
isJest = isJest.shouldBeUseWeb();
let closure_4 = importDefaultResult1("viewTags");
let closure_5 = importDefaultResult1("registrations");
class WorkletEventHandlerNative {
  constructor(arg0, arg1) {
    tmp = outer1_2(this, WorkletEventHandlerWeb);
    definePropertyResult = Object.defineProperty(this, viewTags, { writable: true, value: "a" });
    definePropertyResult1 = Object.defineProperty(this, registrations, { writable: true, value: "a" });
    this.worklet = global;
    this.eventNames = arg1;
    tmp4 = __esModule(this, viewTags);
    set = new Set();
    tmp4[viewTags] = set;
    tmp6 = __esModule(this, registrations);
    map = new Map();
    tmp6[registrations] = map;
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
    let item = arr.forEach((arr) => {
      const item = arr.forEach((arg0) => callback(table[5]).unregisterEventHandler(arg0));
    });
    arr = Array.from(callback2(this, closure_4)[closure_4]);
    const item1 = arr.forEach((arg0) => {
      const _self = arg0;
      const eventNames = _self.eventNames;
      const mapped = eventNames.map((arg0) => self(outer2_1[5]).registerEventHandler(worklet.worklet, arg0, worklet));
      const result = outer1_3(_self, outer1_5)[outer1_5].set(arg0, mapped);
    });
  }
};
let items = [
  isJest,
  {
    key: "registerForEvents",
    value: function registerForEvents(arg0, arg1) {
      let self = this;
      self = this;
      callback2(this, closure_4)[closure_4].add(arg0);
      const eventNames = this.eventNames;
      const mapped = eventNames.map((arg0) => callback(self[5]).registerEventHandler(self.worklet, arg0, callback));
      const obj = callback2(this, closure_4)[closure_4];
      const tmp = callback2;
      const result = callback2(this, closure_5)[closure_5].set(arg0, mapped);
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
      callback2(this, closure_4)[closure_4].delete(arg0);
      const obj = callback2(this, closure_4)[closure_4];
      const tmp = callback2;
      const value = callback2(this, closure_5)[closure_5].get(arg0);
      if (value != null) {
        const item = value.forEach((arg0) => {
          const result = callback(table[5]).unregisterEventHandler(arg0);
        });
      }
      const obj2 = callback2(this, closure_5)[closure_5];
      tmp(this, closure_5)[closure_5].delete(arg0);
    }
  }
];
let importDefaultResultResult = importDefaultResult(WorkletEventHandlerNative, items);
if (isJest) {
  class WorkletEventHandlerWeb {
    constructor(arg0) {
      items = arg1;
      if (arg1 === undefined) {
        items = [];
      }
      tmp = outer1_2(this, WorkletEventHandlerWeb);
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
    const item = eventNames.forEach((arg0) => {
      const _self = arg0;
      const worklet = _self.worklet;
      _self.listeners[arg0] = (nativeEvent) => {
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