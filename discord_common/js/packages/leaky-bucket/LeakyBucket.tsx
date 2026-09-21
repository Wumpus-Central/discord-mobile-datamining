// === Module 9588: LeakyBucket ===

// Module 9588 (LeakyBucket)
import size from "module_2" /* 2 */;

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
      if (self._tokenCount > 0) {
        self._tokenCount = self._tokenCount - 1;
        if (null == self._intervalID) {
          const _setInterval = setInterval;
          self._intervalID = setInterval(() => self._iterate(), self._intervalPeriod);
        }
        const _queue = self._queue;
        const arr = _queue.shift();
        if (arr != null) {
          arr.resolve();
        }
        self._processQueue();
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
    let aborted;
    if (closure_0 != null) {
      aborted = obj.aborted;
    }
    if (aborted) {
      const _Error = Error;
      let error = new Error("Already aborted");
      fn(error);
    } else {
      const obj2 = { resolve, signal: obj };
      let _queue = obj2._queue;
      _queue.push(obj2);
      if (obj) {
        const listener = obj.addEventListener("abort", () => {
          const _queue = self._queue;
          const index = _queue.indexOf(obj2);
          if (index >= 0) {
            const _queue1 = self._queue;
            _queue1.splice(index, 1);
          }
          const error = new Error("Aborted");
          closure_0(error);
        }, { once: true });
      }
      obj2._processQueue();
    }
  });
};

export default LeakyBucket;