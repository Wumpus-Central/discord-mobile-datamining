// discord_common/js/packages/backoff/Backoff.tsx
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("../discord_common/js/packages/backoff/Backoff.tsx");
class Backoff {
  constructor() {
    let num = SECOND;
    if (SECOND === undefined) {
      num = 500;
    }
    let result = MINUTE;
    if (MINUTE === undefined) {
      result = null;
    }
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    if (num <= 0) {
      const _Error = Error;
      throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
    } else {
      const merged = Object.assign({ _fails: 0 });
      merged.min = num;
      if (null == result) {
        result = 10 * num;
      }
      merged.max = result;
      merged.jitter = flag;
      merged._current = num;
      return merged;
    }
  }
  succeed() {
    this.cancel();
    this._fails = 0;
    this._current = this.min;
  }
  fail(_callback, arg1) {
    const self = this;
    let closure_0 = _callback;
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
          const self2 = this;
          const self3 = this;
          const error = new Error("callback already pending");
          const tmp6 = error;
          throw error;
        } else {
          self.cancel();
        }
      }
      self._callback = _callback;
      const _setTimeout = setTimeout;
      self._timeoutId = setTimeout(() => {
        try {
          if (null != _callback) {
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
  }
  cancel() {
    const self = this;
    this._callback = null;
    if (null != this._timeoutId) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self._timeoutId);
      self._timeoutId = null;
    }
  }
}
const prototype = Backoff.prototype;
Object.defineProperty(prototype, "fails", {
  get: function fails() {
    return this._fails;
  },
  set: undefined,
});
Object.defineProperty(prototype, "current", {
  get: function current() {
    return this._current;
  },
  set: undefined,
});
Object.defineProperty(prototype, "pending", {
  get: function pending() {
    return null != this._timeoutId;
  },
  set: undefined,
});

export default Backoff;
