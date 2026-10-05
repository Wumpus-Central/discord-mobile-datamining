// _runtime/00749_SyncPromise.js
import _mod703 from "metro/00703__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class SyncPromise {
  constructor(fn) {
    _classCallCheck(this, SyncPromise);
    this._state = 0;
    this._handlers = [];
    this._runExecutor(fn);
  }
}
const entry = {
  key: "then",
  value: function then(arg0, arg1) {
    const self = this;
    let closure_1 = arg0;
    let closure_0 = arg1;
    const obj = Object.create(SyncPromise.prototype);
    const tmp = _classCallCheck(obj, SyncPromise);
    obj._state = 0;
    obj._handlers = [];
    obj._runExecutor((arg0, arg1) => {
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
        },
      ];
      _handlers.push(items);
      self._executeHandlers();
    });
    return obj;
  },
};
let items = [
  entry,
  {
    key: "catch",
    value: function _catch(arg0) {
      return this.then((result) => result, arg0);
    },
  },
  {
    key: "finally",
    value: function _finally(arg0) {
      const self = this;
      let closure_0 = arg0;
      const obj = Object.create(SyncPromise.prototype);
      const tmp = _classCallCheck(obj, SyncPromise);
      obj._state = 0;
      obj._handlers = [];
      obj._runExecutor((arg0, arg1) => {
        let closure_1;
        closure_0 = arg0;
        const nextPromise = arg1.then(
          (result) => {
            c3 = false;
            let closure_1_2 = result;
            if (closure_0) {
              tmp();
            }
          },
          (arg0) => {
            c3 = true;
            let closure_1_2 = arg0;
            if (closure_0) {
              tmp();
            }
          },
        );
        return nextPromise.then(() => {
          if (c3) {
            closure_1(closure_1_2);
          } else {
            closure_0(closure_1_2);
          }
        });
      });
      return obj;
    },
  },
  {
    key: "_executeHandlers",
    value: function _executeHandlers() {
      const self = this;
      if (0 !== this._state) {
        const _handlers = self._handlers;
        const substr = _handlers.slice();
        self._handlers = [];
        const item = substr.forEach((item) => {
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
    },
  },
  {
    key: "_runExecutor",
    value: function _runExecutor(fn) {
      const self = this;
      function resolve(_value) {
        if (0 === self._state) {
          const obj2 = _mod703;
          if (obj2.isThenable(_value)) {
            _value.then(resolve, reject);
          } else {
            self._state = 1;
            self._value = _value;
            self._executeHandlers();
          }
        }
      }
      function reject(_value) {
        if (0 === self._state) {
          const obj2 = _mod703;
          if (obj2.isThenable(_value)) {
            _value.then(resolve, reject);
          } else {
            self._state = 2;
            self._value = _value;
            self._executeHandlers();
          }
        }
      }
      try {
        fn(resolve, reject);
      } catch (tmp3) {
        reject(tmp3);
      }
    },
  },
];
const _moduleResult = _createClass(SyncPromise, items);
let c3 = _moduleResult;
const SyncPromise_export = _moduleResult;

export { SyncPromise_export as SyncPromise };
export const rejectedSyncPromise = function rejectedSyncPromise(arg0) {
  let closure_0 = arg0;
  const tmp = new c3((arg0, fn) => {
    fn(closure_0);
  });
  return tmp;
};
export const resolvedSyncPromise = function resolvedSyncPromise(result) {
  let closure_0 = result;
  const tmp = new c3((fn) => {
    fn(closure_0);
  });
  return tmp;
};
