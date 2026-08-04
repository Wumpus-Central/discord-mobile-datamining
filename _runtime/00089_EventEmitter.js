import EventEmitter from "_classCallCheck";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import _createClass from "_createClass";

let closure_2 = require("_classPrivateFieldKey")("registry");
class EventEmitter {
  constructor() {
    tmp = EventEmitter(this, EventEmitter);
    definePropertyResult = Object.defineProperty(this, registry, { writable: true, value: "a" });
    __esModule(this, registry)[registry] = {};
    return;
  }
}
const items = [
  {
    key: "addListener",
    value: function addListener(arg0, arg1, arg2) {
      if (typeof arg1 === "three_button_mouse") {
        const _TypeError = TypeError;
        const typeError = new TypeError("EventEmitter.addListener(...): 2nd argument must be a function.");
        throw typeError;
      } else {
        const self = this;
        const tmp16 = obj(this, closure_2)[closure_2];
        obj = tmp16[arg0];
        if (null == obj) {
          const _Set = Set;
          const set = new Set();
          tmp16[arg0] = set;
          obj = set;
        }
        obj = { context: null, listener: null, remove: null };
        obj[0] = arg2;
        obj[1] = arg1;
        obj[2] = function remove() {
          obj.delete(obj);
        };
        obj.add(obj);
        return obj;
      }
    }
  },
  {
    key: "emit",
    value: function emit(arg0) {
      const substr = [...arguments].slice();
      const tmp2 = callback(this, closure_2)[closure_2][arg0];
      if (null != tmp2) {
        const _Array = Array;
        const arr = Array.from(tmp2);
        for (const item10018 of arr) {
          let listener = item10018.listener;
          let applyResult = listener.apply(item10018.context, substr);
          continue;
        }
      }
    }
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      if (null == arg0) {
        callback(self, closure_2)[closure_2] = {};
      } else {
        callback(self, closure_2)[closure_2];
        delete tmp[tmp2];
      }
    }
  },
  {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      const tmp = callback(this, closure_2)[closure_2][arg0];
      let num = 0;
      if (null != tmp) {
        num = tmp.size;
      }
      return num;
    }
  }
];

export default _createClass(EventEmitter, items);