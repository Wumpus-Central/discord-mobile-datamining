// === Module 873: SyncPromise ===

// Module 873 (SyncPromise)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const SyncPromise = require;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class SyncPromise {
  constructor(arg0) {
    tmp = closure_2(this, SyncPromise);
    this._state = 0;
    this._handlers = [];
    _runExecutorResult = this._runExecutor(global);
    return;
  }
}
let items = [
  {
    key: "then",
    value: function then(arg0, arg1) {
      const self = this;
      closure_1 = arg0;
      const obj = Object.create(arg1.prototype);
      _classCallCheck(obj, arg1);
      obj._state = 0;
      obj._handlers = [];
      obj._runExecutor((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
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
      return obj;
    }
  },
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
      const obj = Object.create(arg0.prototype);
      _classCallCheck(obj, arg0);
      obj._state = 0;
      obj._handlers = [];
      obj._runExecutor((arg0, arg1) => {
        closure_0 = arg0;
        const _self = arg1;
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
        }).then((result) => {
          if (closure_3) {
            callback2(closure_2);
          } else {
            callback(closure_2);
          }
        });
      });
      return obj;
    }
  },
  {
    key: "_executeHandlers",
    value: function _executeHandlers() {
      const self = this;
      if (0 !== this._state) {
        const _handlers = self._handlers;
        const substr = _handlers.slice();
        self._handlers = [];
        const item = substr.forEach((item, index) => {
          if (!item[0]) {
            if (1 === self._state) {
              item[1](self._value);
            }
            if (2 === self._state) {
              item[2](self._value);
            }
            item[0] = true;
          }
        });
      }
    }
  },
  {
    key: "_runExecutor",
    value: function _runExecutor(fn) {
      const self = this;
      function resolve(_value) {
        if (0 === self._state) {
          if (obj2.isThenable(_value)) {
            _value.then(resolve, reject);
          } else {
            self._state = 1;
            self._value = _value;
            self._executeHandlers();
          }
          obj2 = reject(resolve[2]);
        }
      }
      function reject(_value) {
        if (0 === self._state) {
          if (obj2.isThenable(_value)) {
            _value.then(resolve, reject);
          } else {
            self._state = 2;
            self._value = _value;
            self._executeHandlers();
          }
          obj2 = reject(resolve[2]);
        }
      }
      try {
        fn(resolve, reject);
      } catch (tmp4) {
        tmp(tmp4);
      }
    }
  }
];
const _moduleResult = _createClass(SyncPromise, items);
let c3 = _moduleResult;

export const SyncPromise = _moduleResult;
export const rejectedSyncPromise = function rejectedSyncPromise(arg0) {
  closure_0 = arg0;
  return new closure_3((arg0, fn) => {
    fn(closure_0);
  });
};
export const resolvedSyncPromise = function resolvedSyncPromise(arg0) {
  closure_0 = arg0;
  return new closure_3((fn) => {
    fn(closure_0);
  });
};