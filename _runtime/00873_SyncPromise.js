// _runtime/00873_SyncPromise.js
import closure_2 from "_classCallCheck" /* 41 */;
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
      callback(obj, arg1);
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
      return this.then((arg0) => arg0, arg0);
    }
  },
  {
    key: "finally",
    value: function _finally(arg0) {
      const self = this;
      const obj = Object.create(arg0.prototype);
      callback(obj, arg0);
      obj._state = 0;
      obj._handlers = [];
      obj._runExecutor((arg0, arg1) => {
        closure_0 = arg0;
        const _self = arg1;
        return _self.then((arg0) => {
          c3 = false;
          closure_2 = arg0;
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
      let self = this;
      self = this;
      if (0 !== this._state) {
        const _handlers = self._handlers;
        const substr = _handlers.slice();
        self._handlers = [];
        const item = substr.forEach((arg0) => {
          if (!arg0[0]) {
            if (1 === self._state) {
              arg0[1](tmp._value);
            }
            if (2 === self._state) {
              arg0[2](tmp._value);
            }
            arg0[0] = true;
          }
        });
      }
    }
  },
  {
    key: "_runExecutor",
    value: function _runExecutor(arg0) {
      const self = this;
      function resolve(promise) {
        if (0 === self._state) {
          if (obj2.isThenable(promise)) {
            promise.then(resolve, reject);
          } else {
            obj._state = 1;
            obj._value = promise;
            obj._executeHandlers();
          }
          obj2 = reject(resolve[2]);
        }
      }
      function reject(promise) {
        if (0 === self._state) {
          if (obj2.isThenable(promise)) {
            promise.then(resolve, reject);
          } else {
            obj._state = 2;
            obj._value = promise;
            obj._executeHandlers();
          }
          obj2 = reject(resolve[2]);
        }
      }
      try {
        arg0(resolve, reject);
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
  return new closure_3((arg0, arg1) => {
    arg1(closure_0);
  });
};
export const resolvedSyncPromise = function resolvedSyncPromise(arg0) {
  closure_0 = arg0;
  return new closure_3((arg0) => {
    arg0(closure_0);
  });
};