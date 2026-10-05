// === Module 89: ? ===

// Module 89
import _classPrivateFieldKeyDefault from "_classPrivateFieldKey" /* 91 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;

let set;

let closure_2 = _classPrivateFieldKeyDefault("registry");
class EventEmitter {
  constructor() {
    _classCallCheck(this, EventEmitter);
    Object.defineProperty(this, closure_2, { writable: true, value: "a" });
    _classPrivateFieldBase(this, closure_2)[closure_2] = {};
  }
}
const entry = {
  key: "addListener",
  value: function addListener(arg0, listener, context) {
    if (typeof listener !== "function") {
      const _TypeError = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError = new TypeError("EventEmitter.addListener(...): 2nd argument must be a function.");
      throw typeError;
    } else {
      const self5 = this;
      const tmp12 = _classPrivateFieldBase(this, closure_2)[closure_2];
      let obj = tmp12[arg0];
      if (null == obj) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        tmp12[arg0] = set;
        obj = set;
      }
      const obj2 = {
        context,
        listener,
        remove() {
            obj.delete(obj2);
          }
      };
      obj.add(obj2);
      return obj2;
    }
  }
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
    }
  },
  {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      if (null == arg0) {
        _classPrivateFieldBase(self, closure_2)[closure_2] = {};
      } else {
        delete _classPrivateFieldBase(undefined, self, closure_2)[closure_2][tmp];
      }
    }
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
    }
  }
];

export default _createClass(EventEmitter, items);