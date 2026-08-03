// === Module 7387: SyncPromise ===

// Module 7387 (SyncPromise)
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const SyncPromise = require;
let obj = { PENDING: 0 };
obj[0] = "PENDING";
obj.RESOLVED = 1;
obj[1] = "RESOLVED";
obj.REJECTED = 2;
obj[2] = "REJECTED";
class SyncPromise {
  constructor(arg0) {
    self = this;
    tmp = SyncPromise;
    tmp2 = outer1_3(this, SyncPromise);
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
    self._state = __esModule.PENDING;
    self._handlers = [];
    return;
  }
}
obj = {
  key: "then",
  value: function then(arg0, arg1) {
    const self = this;
    let closure_1 = arg0;
    arg1((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const _handlers = self._handlers;
      const items = [
        false,
        (arg0) => {
          if (callback2) {
            try {
              callback(tmp(arg0));
            } catch (tmp6) {
              callback2(tmp6);
            }
          } else {
            callback(arg0);
          }
        },
        (arg0) => {
          if (callback) {
            try {
              callback(tmp(arg0));
            } catch (tmp6) {
              callback2(tmp6);
            }
          } else {
            callback2(arg0);
          }
        }
      ];
      _handlers.push(items);
      self._executeHandlers();
    });
    return Object.create(arg1.prototype);
  }
};
let items = [
  obj,
  {
    key: "catch",
    value: function _catch(arg0) {
      return this.then((arg0) => arg0, arg0);
    }
  },
  {
    key: "finally",
    value: function _finally(arg0) {
      const self = this;
      arg0((arg0, arg1) => {
        let closure_0 = arg0;
        const _self = arg1;
        return _self.then((arg0) => {
          let c3 = false;
          let closure_2 = arg0;
          if (closure_0) {
            tmp();
          }
        }, (arg0) => {
          let c3 = true;
          let closure_2 = arg0;
          if (closure_0) {
            tmp();
          }
        }).then(() => {
          if (closure_3) {
            callback2(closure_2);
          } else {
            callback(closure_2);
          }
        });
      });
      return Object.create(arg0.prototype);
    }
  },
  {
    key: "__init",
    value: function __init() {
      const self = this;
      this._resolve = (arg0) => {
        self._setResult(outer1_2.RESOLVED, arg0);
      };
    }
  },
  {
    key: "__init2",
    value: function __init2() {
      const self = this;
      this._reject = (arg0) => {
        self._setResult(outer1_2.REJECTED, arg0);
      };
    }
  },
  {
    key: "__init3",
    value: function __init3() {
      const self = this;
      this._setResult = (_state, promise) => {
        if (self._state === outer1_2.PENDING) {
          if (obj2.isThenable(promise)) {
            promise.then(obj._resolve, obj._reject);
          } else {
            obj._state = _state;
            obj._value = promise;
            obj._executeHandlers();
          }
          obj2 = self(outer1_1[2]);
        }
      };
    }
  },
  {
    key: "__init4",
    value: function __init4() {
      const self = this;
      this._executeHandlers = () => {
        if (self._state !== outer1_2.PENDING) {
          const _handlers = tmp._handlers;
          const substr = _handlers.slice();
          tmp._handlers = [];
          const item = substr.forEach((arg0) => {
            if (!arg0[0]) {
              if (_state._state === outer1_2.RESOLVED) {
                arg0[1](tmp._value);
              }
              if (_state._state === tmp2.REJECTED) {
                arg0[2](tmp._value);
              }
              arg0[0] = true;
              tmp2 = outer1_2;
            }
          });
        }
      };
    }
  }
];
const _moduleResult = _createClass(SyncPromise, items);
let c4 = _moduleResult;

export const SyncPromise = _moduleResult;
export const rejectedSyncPromise = function rejectedSyncPromise(arg0) {
  let closure_0 = arg0;
  return new closure_4((arg0, arg1) => {
    arg1(closure_0);
  });
};
export const resolvedSyncPromise = function resolvedSyncPromise(arg0) {
  let closure_0 = arg0;
  return new closure_4((arg0) => {
    arg0(closure_0);
  });
};