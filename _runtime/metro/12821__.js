// === Module 12821: ? ===

// Module 12821
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const SyncPromise = require;
const obj = { PENDING: 0 };
obj[0] = "PENDING";
obj.RESOLVED = 1;
obj[1] = "RESOLVED";
obj.REJECTED = 2;
obj[2] = "REJECTED";
class SyncPromise {
  constructor(arg0) {
    self = this;
    tmp = SyncPromise;
    tmp2 = closure_3(this, SyncPromise);
    __init = SyncPromise.prototype.__init;
    call = __init.call;
    if (typeof call === "unknown") {
      __initResult = __init();
    } else {
      callResult = call(self);
    }
    __init2 = tmp.prototype.__init2;
    call2 = __init2.call;
    if (typeof call2 === "unknown") {
      __init2Result = __init2();
    } else {
      call2Result = call2(self);
    }
    __init3 = tmp.prototype.__init3;
    call3 = __init3.call;
    if (typeof call3 === "unknown") {
      __init3Result = __init3();
    } else {
      call3Result = call3(self);
    }
    __init4 = tmp.prototype.__init4;
    call4 = __init4.call;
    if (typeof call4 === "unknown") {
      __init4 = __init4();
    } else {
      call4Result = call4(self);
    }
    self._state = c2.PENDING;
    self._handlers = [];
    return;
  }
}
const entry = {
  key: "then",
  value: function then(arg0, arg1) {
    const self = this;
    closure_1 = arg0;
    closure_0 = arg1;
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
    return Object.create(SyncPromise.prototype);
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
      closure_0 = arg0;
      SyncPromise((arg0, arg1) => {
        closure_0 = arg0;
        _self = arg1;
        return _self.then((result) => {
          c3 = false;
          closure_2 = result;
          if (closure_0) {
            tmp();
          }
        }, (arg0) => {
          c3 = true;
          closure_2 = arg0;
          if (closure_0) {
            tmp();
          }
        }).then(() => {
          if (c3) {
            closure_1(closure_2);
          } else {
            closure_0(closure_2);
          }
        });
      });
      return Object.create(SyncPromise.prototype);
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
          if (obj2.isThenable(_value)) {
            _value.then(self._resolve, self._reject);
          } else {
            self._state = _state;
            self._value = _value;
            self._executeHandlers();
          }
          obj2 = SyncPromise(12804);
        }
      };
    }
  },
  {
    key: "__init4",
    value: function __init4() {
      const self = this;
      this._executeHandlers = () => {
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

export const SyncPromise = _moduleResult;
export const rejectedSyncPromise = function rejectedSyncPromise(arg0) {
  closure_0 = arg0;
  return new _moduleResult((arg0, fn) => {
    fn(closure_0);
  });
};
export const resolvedSyncPromise = function resolvedSyncPromise(item) {
  closure_0 = item;
  return new _moduleResult((fn) => {
    fn(closure_0);
  });
};