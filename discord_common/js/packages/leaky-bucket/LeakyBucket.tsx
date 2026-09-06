// discord_common/js/packages/leaky-bucket/LeakyBucket.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx");
class LeakyBucket {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj._capacity = global;
    obj._tokenCount = global;
    obj._queue = [];
    obj._intervalPeriod = require / global;
    obj._intervalID = null;
    return obj;
  }
}
const prototype = LeakyBucket.prototype;
prototype["_processQueue"] = function _processQueue() {
  const self = this;
  const timerId = setTimeout(() => {
    if (self._queue.length > 0) {
      if (obj._tokenCount > 0) {
        obj._tokenCount = obj._tokenCount - 1;
        if (null == obj._intervalID) {
          const _setInterval = setInterval;
          obj._intervalID = setInterval(() => self._iterate(), obj._intervalPeriod);
        }
        const _queue = obj._queue;
        const arr = _queue.shift();
        if (arr != null) {
          arr.resolve();
        }
        obj._processQueue();
      }
    }
  }, 0);
};
prototype["_iterate"] = function _iterate() {
  const self = this;
  this._tokenCount = Math.min(this._capacity, this._tokenCount + 1);
  let tmp = this._tokenCount >= this._capacity;
  if (tmp) {
    tmp = null != self._intervalID;
  }
  if (tmp) {
    const _clearInterval = clearInterval;
    clearInterval(self._intervalID);
    self._intervalID = null;
  }
  self._processQueue();
};
prototype["process"] = function process(arg0) {
  const self = this;
  closure_0 = arg0;
  return new Promise((resolve, fn) => {
    closure_0 = fn;
    let signal = closure_0;
    let aborted;
    if (closure_0 != null) {
      aborted = signal.aborted;
    }
    if (aborted) {
      const _Error = Error;
      let error = new Error("Already aborted");
      fn(error);
    } else {
      signal = { resolve, signal: null };
      signal.signal = signal;
      let _queue = signal._queue;
      _queue.push(signal);
      if (signal) {
        const listener = signal.addEventListener(
          "abort",
          () => {
            const _queue = self._queue;
            const index = _queue.indexOf(obj);
            if (index >= 0) {
              const _queue1 = self._queue;
              _queue1.splice(index, 1);
            }
            const error = new Error("Aborted");
            closure_0(error);
          },
          { once: true },
        );
      }
      signal._processQueue();
    }
  });
};

export default LeakyBucket;
