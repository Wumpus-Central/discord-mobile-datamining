// === Module 4447: Timers ===

// Module 4447 (Timers)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

class Timeout {
}
const prototype = Timeout.prototype;
prototype["start"] = function start(arg0, arg1) {
  const self = this;
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
      closure_0();
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
    obj._handler = fn;
    if (typeof Timeout === "function") {
      obj._timeout = Object.create(Timeout.prototype);
      return obj;
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
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
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/timers/Timers.tsx");
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
    obj = fn;
    if (fn === undefined) {
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
    if (typeof tmp4 === "function") {
      fn = () => obj._flush();
      obj1 = Object.create(tmp4.prototype);
      obj1._delay = num;
      obj1._handler = fn;
      tmp6 = new.target;
      if (typeof Timeout === "function") {
        obj1._timeout = Object.create(Timeout.prototype);
        obj._flushHandler = obj1;
        return obj;
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype5 = BatchInvocationManager.prototype;
prototype5["queue"] = function queue(arg0) {
  const self = this;
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
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp6;
            closure_130_0 = undefined;
            closure_0 = 0;
            const items = [];
            closure_0 = HermesBuiltin.arraySpread(self._pending, closure_0);
            const _pending = self._pending;
            _pending.clear();
            closure_1 = 0;
            const items1 = [];
            closure_1 = HermesBuiltin.arraySpread(self._promises, closure_1);
            closure_130_0 = items1;
            const _promises = self._promises;
            _promises.clear();
            if (0 !== items.length) {
              c5 = 1;
              c3 = 2;
              c6 = 1;
              const obj1 = { value: obj5.invoke(items), done: false };
              return obj1;
            } else {
              const item = items1.forEach((resolve) => resolve.resolve());
            }
            obj5 = self;
          }
        } else {
          if (1 === tmp6) {
            c5 = 0;
            closure_130_1 = closure_4;
            const item1 = closure_130_0.forEach((reject) => reject.reject(closure_1_1));
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const item2 = closure_130_0.forEach((resolve) => resolve.resolve());
            c5 = 0;
          }
          c5 = 0;
          c6 = 3;
          obj = { value, done: true };
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
export const timeoutPromise = function timeoutPromise(result) {
  closure_0 = result;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timerId = setTimeout(() => closure_0(), closure_0);
  });
};
export const DEFAULT_BATCH_INVOCATION_DELAY_MS = 32;
export const BatchInvocationManagerResetError = prototype3;
export { BatchInvocationManager };