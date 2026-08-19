// === Module 584: fails ===

// Module 584 (fails)
import obj132 from "obj132" /* 2 */;

let result = obj132.fileFinishedImporting("../discord_common/js/packages/backoff/Backoff.tsx");
class Backoff {
  constructor() {
    num = global;
    if (global === undefined) {
      num = 500;
    }
    result = require;
    if (require === undefined) {
      result = null;
    }
    flag = importDefault;
    if (importDefault === undefined) {
      flag = true;
    }
    if (num <= 0) {
      tmp5 = globalThis;
      _Error = Error;
      str = "Backoff min value must be greater than zero or backoff will never back-off.";
      throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
    } else {
      obj = Object.create(tmp2);
      obj.min = num;
      tmp4 = null;
      if (null == result) {
        num2 = 10;
        result = 10 * num;
      }
      obj.max = result;
      obj.jitter = flag;
      obj._current = num;
      return obj;
    }
  }
}
const prototype = Backoff.prototype;
Object.defineProperty(prototype, "fails", {
  get: function fails() {
    return this._fails;
  },
  set: undefined
});
Object.defineProperty(prototype, "current", {
  get: function current(closure_1_1, current, arg2) {
    return this._current;
  },
  set: undefined
});
Object.defineProperty(prototype, "pending", {
  get: function pending() {
    return null != this._timeoutId;
  },
  set: undefined
});
prototype["succeed"] = function succeed() {
  this.cancel();
  this._fails = 0;
  this._current = this.min;
};
prototype["fail"] = function fail(_callback) {
  const self = this;
  closure_0 = _callback;
  this._fails = this._fails + 1;
  const result = 2 * this._current;
  let result1 = result;
  if (this.jitter) {
    const _Math = Math;
    result1 = result * Math.random();
  }
  let _current = arg1;
  self._current = Math.min(self._current + result1, self.max);
  if (null == arg1) {
    _current = self._current;
  }
  if (null != _callback) {
    if (null != self._timeoutId) {
      if (self._callback !== _callback) {
        const _Error = Error;
        error = new Error("callback already pending");
        throw error;
      } else {
        self.cancel();
      }
    }
    self._callback = _callback;
    const _setTimeout = setTimeout;
    self._timeoutId = setTimeout(() => {
      try {
        if (null != closure_0) {
          tmp();
        }
        self.cancel();
      } catch (tmp6) {
        self.cancel();
        throw tmp6;
      }
    }, _current);
  }
  return _current;
};
prototype["cancel"] = function cancel() {
  const self = this;
  this._callback = null;
  if (null != this._timeoutId) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._timeoutId);
    self._timeoutId = null;
  }
};

export default Backoff;