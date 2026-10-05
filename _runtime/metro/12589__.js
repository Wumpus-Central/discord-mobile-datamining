// === Module 12589: ? ===

// Module 12589
import _mod12572 from "module_12572" /* 12572 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let c3;

let obj = { PENDING: 0, RESOLVED: 1, REJECTED: 2 };
obj[0] = "PENDING";
obj[1] = "RESOLVED";
obj[2] = "REJECTED";
class SyncPromise {
  constructor(fn) {
    const self = this;
    _classCallCheck(this, SyncPromise);
    const __init = SyncPromise.prototype.__init;
    __init.call(self);
    const __init2 = SyncPromise.prototype.__init2;
    __init2.call(self);
    const __init3 = SyncPromise.prototype.__init3;
    __init3.call(self);
    const __init4 = SyncPromise.prototype.__init4;
    __init4.call(self);
    self._state = obj.PENDING;
    self._handlers = [];
    try {
      fn(self._resolve, self._reject);
    } catch (tmp5) {
      self._reject(tmp5);
    }
  }
}
const entry = {
  key: "then",
  value: function then(arg0, arg1) {
    const self = this;
    let closure_1 = arg0;
    let closure_0 = arg1;
    obj = Object.create(SyncPromise.prototype);
    SyncPromise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const _handlers = self._handlers;
      const items = [
        false,
        (arg0) => {
          if (closure_1) {
            try {
              closure_0(tmp(arg0));
            } catch (tmp6) {
              closure_1(tmp6);
            }
          } else {
            closure_0(arg0);
          }
        },
        (arg0) => {
          if (closure_0) {
            try {
              closure_0(tmp(arg0));
            } catch (tmp6) {
              closure_1(tmp6);
            }
          } else {
            closure_1(arg0);
          }
        }
      ];
      _handlers.push(items);
      self._executeHandlers();
    });
    return obj;
  }
};
let items = [
  entry,
  {
    key: "catch",
    value: function _catch(arg0) {
      return this.then((result) => result, arg0);
    }
  },
  {
    key: "finally",
    value: function _finally(arg0) {
      const self = this;
      let closure_0 = arg0;
      obj = Object.create(SyncPromise.prototype);
      SyncPromise((arg0, arg1) => {
        let closure_1;
        closure_0 = arg0;
        const nextPromise = arg1.then((result) => {
          c3 = false;
          let closure_1_2 = result;
          if (closure_0) {
            tmp();
          }
        }, (arg0) => {
          c3 = true;
          let closure_1_2 = arg0;
          if (closure_0) {
            tmp();
          }
        });
        return nextPromise.then(() => {
          if (c3) {
            closure_1(closure_1_2);
          } else {
            closure_0(closure_1_2);
          }
        });
      });
      return obj;
    }
  },
  {
    key: "__init",
    value: function __init() {
      const self = this;
      this._resolve = (arg0) => {
        self._setResult(obj.RESOLVED, arg0);
      };
    }
  },
  {
    key: "__init2",
    value: function __init2() {
      const self = this;
      this._reject = (arg0) => {
        self._setResult(obj.REJECTED, arg0);
      };
    }
  },
  {
    key: "__init3",
    value: function __init3() {
      const self = this;
      this._setResult = (_state, _value) => {
        if (self._state === self.PENDING) {
          const obj2 = _mod12572;
          if (obj2.isThenable(_value)) {
            _value.then(self._resolve, self._reject);
          } else {
            self._state = _state;
            self._value = _value;
            self._executeHandlers();
          }
        }
      };
    }
  },
  {
    key: "__init4",
    value: function __init4() {
      const self = this;
      this._executeHandlers = () => {
        let _state;
        if (self._state !== obj.PENDING) {
          const _handlers = self._handlers;
          const substr = _handlers.slice();
          self._handlers = [];
          const item = substr.forEach((item) => {
            if (!item[0]) {
              if (_state._state === constants.RESOLVED) {
                item[1](_state._value);
              }
              if (_state._state === constants.REJECTED) {
                item[2](_state._value);
              }
              item[0] = true;
            }
          });
        }
      };
    }
  }
];
const _moduleResult = _createClass(SyncPromise, items);
const SyncPromise_export = _moduleResult;

export { SyncPromise_export as SyncPromise };
export const rejectedSyncPromise = function rejectedSyncPromise(arg0) {
  let closure_0 = arg0;
  const tmp = new _moduleResult((arg0, fn) => {
    fn(closure_0);
  });
  return tmp;
};
export const resolvedSyncPromise = function resolvedSyncPromise(result) {
  let closure_0 = result;
  const tmp = new _moduleResult((fn) => {
    fn(closure_0);
  });
  return tmp;
};