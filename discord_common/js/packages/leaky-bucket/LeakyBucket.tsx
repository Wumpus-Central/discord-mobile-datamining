// discord_common/js/packages/leaky-bucket/LeakyBucket.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx");
class LeakyBucket {
  constructor(_capacity, MINUTE) {
    const obj = Object.create(new.target.prototype);
    obj._capacity = _capacity;
    obj._tokenCount = _capacity;
    obj._queue = [];
    obj._intervalPeriod = MINUTE / _capacity;
    obj._intervalID = null;
    return obj;
  }
  _processQueue() {
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
  }
  _iterate() {
    const self = this;
    this._tokenCount = Math.min(this._capacity, this._tokenCount + 1);
    const tmp = this._tokenCount >= this._capacity && null != self._intervalID;
    if (tmp) {
      const _clearInterval = clearInterval;
      clearInterval(self._intervalID);
      self._intervalID = null;
    }
    self._processQueue();
  }
  process(signal) {
    let self = this;
    const promise = new Promise(function (resolve, fn) {
      signal = fn;
      let aborted;
      if (signal != null) {
        aborted = obj.aborted;
      }
      if (aborted) {
        const _Error = Error;
        self = this;
        const self2 = this;
        let error = new Error("Already aborted");
        fn(error);
      } else {
        const obj2 = { resolve, signal };
        let _queue = obj2._queue;
        _queue.push(obj2);
        const obj3 = obj2;
        if (signal) {
          const listener = obj.addEventListener(
            "abort",
            () => {
              const _queue = self._queue;
              const index = _queue.indexOf(obj2);
              if (index >= 0) {
                const _queue1 = self._queue;
                _queue1.splice(index, 1);
              }
              const error = new Error("Aborted");
              fn(error);
            },
            { once: true },
          );
        }
        obj3._processQueue();
      }
    });
    return promise;
  }
}
const prototype = LeakyBucket.prototype;

export default LeakyBucket;
