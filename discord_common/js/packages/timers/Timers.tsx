// === Module 4328: start ===

// Module 4328 (start)
import closure_0 from "asyncGeneratorStep" /* 5 */;

class Timeout {
}
const prototype = Timeout.prototype;
prototype["start"] = function start(arg0, arg1) {
  let self = this;
  self = this;
  closure_0 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (!tmp) {
    self.stop();
    const _window = window;
    self._ref = window.setTimeout(() => {
      self._ref = null;
      callback();
    }, arg0);
  }
};
prototype["stop"] = function stop() {
  const self = this;
  if (null != this._ref) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._ref);
    self._ref = null;
  }
};
prototype["isStarted"] = function isStarted() {
  return null != this._ref;
};
class DelayedCall {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj._delay = global;
    obj._handler = arg1;
    tmp2 = Timeout;
    if (typeof Timeout !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj._timeout = Object.create(tmp2.prototype);
    return obj;
  }
}
const prototype2 = DelayedCall.prototype;
prototype2["set"] = function set(_delay) {
  this._delay = _delay;
  return this;
};
prototype2["delay"] = function delay() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const _timeout = this._timeout;
  _timeout.start(this._delay, this._handler, flag);
};
prototype2["cancel"] = function cancel() {
  const _timeout = this._timeout;
  _timeout.stop();
};
prototype2["isDelayed"] = function isDelayed() {
  const _timeout = this._timeout;
  return _timeout.isStarted();
};
const prototype3 = function BatchInvocationManagerResetError() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.name = "BatchInvocationManagerResetError";
  return applyArgumentsResult;
}.prototype;
class prototype3 extends Error {
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/timers/Timers.tsx");
class Interval {
}
const prototype4 = Interval.prototype;
prototype4["start"] = function start(arg0, arg1) {
  this.stop();
  this._ref = window.setInterval(arg1, arg0);
};
prototype4["stop"] = function stop() {
  const self = this;
  if (null != this._ref) {
    const _clearInterval = clearInterval;
    clearInterval(self._ref);
    self._ref = null;
  }
};
prototype4["isStarted"] = function isStarted() {
  return null != this._ref;
};
class BatchInvocationManager {
  constructor(arg0) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    set = new Set();
    obj._promises = set;
    set1 = new Set();
    obj._pending = set1;
    obj.invoke = global;
    obj.options = obj;
    tmp4 = DelayedCall;
    num = obj.options.delay;
    if (num == null) {
      num = 32;
    }
    if (typeof tmp4 !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    fn = () => obj._flush();
    obj1 = Object.create(tmp4.prototype);
    obj1._delay = num;
    obj1._handler = fn;
    tmp6 = Timeout;
    if (typeof Timeout !== "function") {
      str2 = "Trying to call a non-function";
      throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
    }
    obj1._timeout = Object.create(tmp6.prototype);
    obj._flushHandler = obj1;
    return obj;
  }
}
const prototype5 = BatchInvocationManager.prototype;
prototype5["queue"] = function queue(arg0) {
  let self = this;
  self = this;
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
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
      let tmp4 = nextResult;
      num = predicate(tmp3);
    }
    if (num == null) {
      num = 1;
    }
    if (num) {
      let _pending = self._pending;
      let tmp5 = nextResult;
      num = !_pending.has(tmp3);
    }
    if (num) {
      let _pending2 = self._pending;
      let tmp6 = nextResult;
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
    let resolved = Promise.resolve();
  } else {
    resolved = new Promise((resolve, reject) => {
      const _promises = self._promises;
      _promises.add({ resolve, reject });
      self._flushHandler.delay(false);
    });
  }
  return resolved;
};
prototype5["reset"] = function reset() {
  const items = [...this._pending];
  const items1 = [...this._promises];
  closure_0 = new prototype3("BatchInvocationManager was reset");
  const _pending = this._pending;
  _pending.clear();
  const _promises = this._promises;
  _promises.clear();
  this._flushHandler.cancel();
  if (items.length > 0) {
    const options = this.options;
    const onCancelled = options.onCancelled;
    if (onCancelled != null) {
      onCancelled(items);
    }
  }
  const item = items1.forEach((reject) => reject.reject(closure_0));
};
prototype5["_flush"] = function _flush() {
  const self = this;
  return self(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp6;
            let items1;
            items1 = 0;
            const items = [];
            items1 = HermesBuiltin.arraySpread(closure_1_0._pending, items1);
            const _pending = closure_1_0._pending;
            _pending.clear();
            closure_1 = 0;
            items1 = [];
            closure_1 = HermesBuiltin.arraySpread(closure_1_0._promises, closure_1);
            const _promises = closure_1_0._promises;
            _promises.clear();
            if (0 !== items.length) {
              c5 = 1;
              c3 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj5.invoke(items);
              return obj1;
            } else {
              const item = items1.forEach((resolve) => resolve.resolve());
            }
            obj5 = closure_1_0;
          }
        } else {
          if (1 === tmp6) {
            c5 = 0;
            closure_1 = closure_4;
            const item1 = items1.forEach((reject) => reject.reject(closure_1));
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const item2 = items1.forEach((resolve) => resolve.resolve());
            c5 = 0;
          }
          c5 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c6 = 3;
      } catch (tmp16) {
        closure_4 = tmp16;
        if (tmp3 === c5) {
          c6 = tmp2;
          throw tmp16;
        } else {
          c3 = tmp;
        }
      }
    }
  })();
};

export { Timeout };
export { DelayedCall };
export { Interval };
export const timeoutPromise = function timeoutPromise(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timerId = setTimeout(() => callback(), closure_0);
  });
};
export const DEFAULT_BATCH_INVOCATION_DELAY_MS = 32;
export const BatchInvocationManagerResetError = prototype3;
export { BatchInvocationManager };