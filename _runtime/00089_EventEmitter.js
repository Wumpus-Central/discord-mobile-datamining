// _runtime/00089_EventEmitter.js
import _classPrivateFieldKeyDefault from "00091__classPrivateFieldKey.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";

let closure_2 = _classPrivateFieldKeyDefault("registry");
class EventEmitter {
  constructor() {
    tmp = closure_0(this, EventEmitter);
    definePropertyResult = Object.defineProperty(this, c2, { writable: true, value: "a" });
    closure_1(this, c2)[c2] = {};
    return;
  }
}
_classCallCheck = EventEmitter;
const entry = {
  key: "addListener",
  value: function addListener(arg0, listener, context) {
    if (typeof listener !== "function") {
      const _TypeError = TypeError;
      const typeError = new TypeError("EventEmitter.addListener(...): 2nd argument must be a function.");
      throw typeError;
    } else {
      const self = this;
      const tmp16 = _classPrivateFieldBase(this, closure_2)[closure_2];
      let obj = tmp16[arg0];
      if (null == obj) {
        const _Set = Set;
        const set = new Set();
        tmp16[arg0] = set;
        obj = set;
      }
      obj = {
        context,
        listener,
        remove() {
          obj.delete(obj);
        },
      };
      obj.add(obj);
      return obj;
    }
  },
};
const items = [
  entry,
  {
    key: "emit",
    value: function emit(arg0) {
      const substr = [...arguments].slice();
      const tmp2 = _classPrivateFieldBase(this, closure_2)[closure_2][arg0];
      if (null != tmp2) {
        const _Array = Array;
        const arr = Array.from(tmp2);
        for (const item10018 of arr) {
          let listener = item10018.listener;
          let applyResult = listener.apply(item10018.context, substr);
          continue;
        }
      }
    },
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      if (null == arg0) {
        _classPrivateFieldBase(self, closure_2)[closure_2] = {};
      } else {
        _classPrivateFieldBase(self, closure_2)[closure_2];
        delete tmp[tmp2];
      }
    },
  },
  {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      const tmp = _classPrivateFieldBase(this, closure_2)[closure_2][arg0];
      let num = 0;
      if (null != tmp) {
        num = tmp.size;
      }
      return num;
    },
  },
];

export default _createClass(EventEmitter, items);
