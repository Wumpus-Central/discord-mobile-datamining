// _runtime/01863_WorkletEventHandler.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "00091__classPrivateFieldKey.js";

const WorkletEventHandler = arg1;
let closure_4 = _classPrivateFieldKey("viewTags");
let closure_5 = _classPrivateFieldKey("registrations");
class WorkletEventHandler {
  constructor(arg0, arg1) {
    tmp = c2(this, WorkletEventHandler);
    definePropertyResult = Object.defineProperty(this, closure_4, { writable: true, value: "Array" });
    definePropertyResult1 = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "Array" });
    this.worklet = global;
    this.eventNames = arg1;
    tmp4 = closure_3(this, closure_4);
    set = new Set();
    tmp4[closure_4] = set;
    tmp6 = closure_3(this, hasOwnProperty);
    map = new Map();
    tmp6[hasOwnProperty] = map;
    return;
  }
}
const entry = {
  key: "updateEventHandler",
  value: function updateEventHandler(worklet, items) {
    const self = this;
    this.worklet = worklet;
    this.eventNames = items;
    let item = _classPrivateFieldBase(this, closure_5)[closure_5].forEach((arr) => {
      const item = arr.forEach((item) => _self(closure_1_1[4]).unregisterEventHandler(item));
    });
    const arr = _classPrivateFieldBase(this, closure_5)[closure_5];
    const item1 = Array.from(_classPrivateFieldBase(this, closure_4)[closure_4]).forEach((item) => {
      _self = item;
      const eventNames = _self.eventNames;
      const mapped = eventNames.map((item) =>
        WorkletEventHandler(1827).registerEventHandler(self.worklet, item, closure_0),
      );
      const result = _classPrivateFieldBase(_self, closure_1_5)[closure_1_5].set(item, mapped);
    });
  },
};
let items = [
  entry,
  {
    key: "registerForEvents",
    value: function registerForEvents(findNodeHandleResult, key10010) {
      const self = this;
      _classPrivateFieldBase(this, closure_4)[closure_4].add(findNodeHandleResult);
      const eventNames = this.eventNames;
      const mapped = eventNames.map((item) =>
        WorkletEventHandler(1827).registerEventHandler(self.worklet, item, closure_0),
      );
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      const result = _classPrivateFieldBase(this, closure_5)[closure_5].set(findNodeHandleResult, mapped);
      if (0 === this.eventNames.length) {
        if (key10010) {
          const obj3 = WorkletEventHandler(self[4]);
          const registerEventHandlerResult = WorkletEventHandler(self[4]).registerEventHandler(
            self.worklet,
            key10010,
            findNodeHandleResult,
          );
          items = [registerEventHandlerResult];
          const result1 = _classPrivateFieldBase(self, closure_5)[closure_5].set(findNodeHandleResult, items);
          const obj4 = _classPrivateFieldBase(self, closure_5)[closure_5];
        }
      }
      const obj2 = _classPrivateFieldBase(this, closure_5)[closure_5];
    },
  },
  {
    key: "unregisterFromEvents",
    value: function unregisterFromEvents(findNodeHandleResult) {
      _classPrivateFieldBase(this, closure_4)[closure_4].delete(findNodeHandleResult);
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      value = _classPrivateFieldBase(this, closure_5)[closure_5].get(findNodeHandleResult);
      if (value != null) {
        const item = value.forEach((item) => {
          const result = WorkletEventHandler(dependencyMap[4]).unregisterEventHandler(item);
        });
      }
      const obj2 = _classPrivateFieldBase(this, closure_5)[closure_5];
      _classPrivateFieldBase(this, closure_5)[closure_5].delete(findNodeHandleResult);
      const obj3 = _classPrivateFieldBase(this, closure_5)[closure_5];
    },
  },
];

export const WorkletEventHandler = _createClass(WorkletEventHandler, items);
