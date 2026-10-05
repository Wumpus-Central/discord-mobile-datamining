// discord_common/js/packages/timers/Timers.tsx
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c7, c8, closure_5;

class Timeout {
  start(arg0, arg1) {
    const self = this;
    let closure_0 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    const tmp = self.isStarted() && !flag;
    if (!tmp) {
      self.stop();
      const _window = window;
      self._ref = window.setTimeout(() => {
        self._ref = null;
        closure_0();
      }, arg0);
    }
  }
  stop() {
    const self = this;
    if (null != this._ref) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self._ref);
      self._ref = null;
    }
  }
  isStarted() {
    return null != this._ref;
  }
}
const prototype = Timeout.prototype;
class DelayedCall {
  constructor(MINUTE, update) {
    const obj = Object.create(new.target.prototype);
    obj._delay = MINUTE;
    obj._handler = update;
    if (typeof Timeout === "function") {
      obj._timeout = Object.create(Timeout.prototype);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  set(_delay) {
    this._delay = _delay;
    return this;
  }
  delay() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const _timeout = this._timeout;
    _timeout.start(this._delay, this._handler, flag);
  }
  cancel() {
    const _timeout = this._timeout;
    _timeout.stop();
  }
  isDelayed() {
    const _timeout = this._timeout;
    return _timeout.isStarted();
  }
}
const prototype2 = DelayedCall.prototype;
class BatchInvocationManagerResetError extends Error {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.name = "BatchInvocationManagerResetError";
    return applyArgumentsResult;
  }
}
const result = size.fileFinishedImporting("../discord_common/js/packages/timers/Timers.tsx");
class Interval {
  start(arg0, arg1) {
    this.stop();
    this._ref = window.setInterval(arg1, arg0);
  }
  stop() {
    const self = this;
    if (null != this._ref) {
      const _clearInterval = clearInterval;
      clearInterval(self._ref);
      self._ref = null;
    }
  }
  isStarted() {
    return null != this._ref;
  }
}
const prototype3 = Interval.prototype;
class BatchInvocationManager {
  constructor(fetchAuthorizedApps, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const obj3 = Object.create(new.target.prototype);
    obj3._promises = new Set();
    new Set();
    obj3._pending = new Set();
    obj3._activeInvocationCount = 0;
    obj3._flushReady = false;
    obj3.invoke = fetchAuthorizedApps;
    obj3.options = obj;
    let num = obj3.options.delay;
    new Set();
    if (num == null) {
      num = 32;
    }
    if (typeof DelayedCall === "function") {
      const fn = () => {
        obj3._flushReady = true;
        obj3._flush();
      };
      const obj4 = Object.create(DelayedCall.prototype);
      obj4._delay = num;
      obj4._handler = fn;
      const self = this;
      if (typeof Timeout === "function") {
        obj4._timeout = Object.create(Timeout.prototype);
        obj3._flushHandler = obj4;
        return obj3;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  queue(items) {
    let resolved;
    const self = this;
    let tmp = items;
    if (!Array.isArray(items)) {
      items = [];
      items[0] = items;
      tmp = items;
    }
    const items1 = [];
    const iter = tmp[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let options = self.options;
      let predicate = options.predicate;
      let num;
      if (predicate != null) {
        num = predicate(tmp3);
      }
      if (num == null) {
        num = 1;
      }
      if (num) {
        let _pending = self._pending;
        num = !_pending.has(tmp3);
      }
      if (num) {
        let _pending2 = self._pending;
        let addResult = _pending2.add(tmp3);
        let arr = items1.push(tmp3);
      }
      continue;
    }
    if (items1.length > 0) {
      const options2 = self.options;
      const onQueued = options2.onQueued;
      if (onQueued != null) {
        onQueued(items1);
      }
    }
    if (0 === self._pending.size) {
      resolved = Promise.resolve();
    } else {
      const self2 = this;
      const self3 = this;
      resolved = new Promise((resolve, reject) => {
        const _promises = self._promises;
        const obj = { resolve, reject };
        _promises.add(obj);
        if (!self._flushReady) {
          const _flushHandler = self._flushHandler;
          _flushHandler.delay(false);
        }
      });
    }
    return resolved;
  }
  reset() {
    const items = [...this._pending];
    const items1 = [...this._promises];
    let closure_0 = new BatchInvocationManagerResetError("BatchInvocationManager was reset");
    const _pending = this._pending;
    _pending.clear();
    const _promises = this._promises;
    _promises.clear();
    this._flushReady = false;
    const _flushHandler = this._flushHandler;
    _flushHandler.cancel();
    if (items.length > 0) {
      const options = this.options;
      const onCancelled = options.onCancelled;
      if (onCancelled != null) {
        onCancelled(items);
      }
    }
    const item = items1.forEach((reject) => reject.reject(closure_0));
  }
  isPending() {
    return this._pending.size > 0;
  }
  isInvoking() {
    return this._activeInvocationCount > 0;
  }
  _flush() {
    const self = this;
    return (async () => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        try {
          let items1;
          let closure_1;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_4 = tmp;
              let closure_3 = tmp5;
              items1 = undefined;
              const maxConcurrentInvocations = self.options.maxConcurrentInvocations;
              let Infinity = maxConcurrentInvocations;
              if (maxConcurrentInvocations == null) {
                Infinity = Infinity;
              }
              if (self._flushReady) {
                if (self._activeInvocationCount < tmp28) {
                  closure_1 = 0;
                  const items = [];
                  closure_1 = HermesBuiltin.arraySpread(items, self._pending, closure_1);
                  const _pending = self._pending;
                  _pending.clear();
                  let closure_2 = 0;
                  items1 = [];
                  closure_2 = HermesBuiltin.arraySpread(items1, self._promises, closure_2);
                  const _promises = self._promises;
                  _promises.clear();
                  self._flushReady = false;
                  if (0 !== items.length) {
                    self._activeInvocationCount = self._activeInvocationCount + 1;
                    c6 = 2;
                    c7 = 3;
                    c8 = 1;
                    const obj4 = { value: self.invoke(items), done: false };
                    return obj4;
                  } else {
                    const item = items1.forEach((resolve) => resolve.resolve());
                  }
                }
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_132_0._activeInvocationCount = closure_132_0._activeInvocationCount - 1;
            closure_132_0._flush();
            throw closure_5;
          } else {
            if (2 === c7) {
              c6 = 1;
              closure_1 = closure_5;
              const item1 = items1.forEach((reject) => reject.reject(closure_1_1));
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_132_0._activeInvocationCount = closure_132_0._activeInvocationCount - 1;
              closure_132_0._flush();
              c8 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const item2 = items1.forEach((resolve) => resolve.resolve());
              c6 = 1;
            }
            c6 = 0;
            closure_132_0._activeInvocationCount = closure_132_0._activeInvocationCount - 1;
            closure_132_0._flush();
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp34) {
          closure_5 = tmp34;
          if (0 === c6) {
            c8 = 3;
            throw tmp34;
          } else if (1 === tmp36) {
            c7 = 1;
          } else {
            c7 = 2;
          }
        }
      }
    })();
  }
}
const prototype4 = BatchInvocationManager.prototype;

export { Timeout };
export { DelayedCall };
export { Interval };
export const timeoutPromise = function timeoutPromise(result) {
  let closure_0 = result;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    const timerId = setTimeout(() => closure_0(), closure_0);
  });
  return promise;
};
export const DEFAULT_BATCH_INVOCATION_DELAY_MS = 32;
export { BatchInvocationManagerResetError };
export { BatchInvocationManager };
