// === Module 1748: ? ===

// Module 1748
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let _classCallCheck = _classCallCheck_mod;
_possibleConstructorReturnDefault;
class AbortSignal {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_0(this, AbortController);
    items1 = [...items];
    tmp2 = c2;
    obj = c2(AbortController);
    tmp3 = closure_1;
    if (closure_3()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.aborted = false;
    tmp3Result.reason = undefined;
    tmp3Result.onabort = null;
    return tmp3Result;
  }
}
_classCallCheck = AbortSignal;
_inherits(AbortSignal, fn(1740).EventTargetLite);
const entry = {
  key: "throwIfAborted",
  value: function throwIfAborted() {
    if (this.aborted) {
      throw this.reason;
    }
  }
};
let items = [
  entry,
  {
    key: "__abort",
    value: function __abort(error) {
      const self = this;
      if (!this.aborted) {
        let tmp = error;
        self.aborted = true;
        if (undefined === error) {
          const _Error = Error;
          error = new Error("[Worklets] The operation was aborted.");
          error.name = "AbortError";
          tmp = error;
        }
        self.reason = tmp;
        self.__dispatch("abort");
      }
    }
  }
];
const entry1 = {
  key: "abort",
  value: function abort(error) {
    const obj = _classCallCheck();
    obj.__abort(error);
    return obj;
  }
};
let items1 = [
  entry1,
  {
    key: "timeout",
    value: function timeout(promise) {
      const tmp = _classCallCheck();
      closure_0 = tmp;
      const timerId = setTimeout(() => {
        const error = new Error("[Worklets] The operation timed out.");
        error.name = "TimeoutError";
        return closure_0.__abort(error);
      }, promise);
      return tmp;
    }
  }
];
const importDefaultResultResult = _createClass(AbortSignal, items, items1);
class AbortController {
  constructor() {
    tmp = closure_0(this, AbortController);
    tmp2 = new closure_4();
    this.signal = tmp2;
    return;
  }
}
_classCallCheck = AbortController;
const entry2 = {
  key: "abort",
  value: function abort(error) {
    const signal = this.signal;
    signal.__abort(error);
  }
};
const items2 = [entry2];

export const AbortSignal = importDefaultResultResult;
export const AbortController = _createClass(AbortController, items2);