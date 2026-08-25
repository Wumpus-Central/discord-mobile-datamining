// === Module 16757: _isNativeReflectConstruct ===

// Module 16757 (_isNativeReflectConstruct)
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 16758 */;
import Events from "Events" /* 16762 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import closure_3 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const PQueue = require;
let closure_1 = dependencyMap;
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
let closure_2 = asyncGeneratorStep;
function empty() {

}
const timeoutError = new _isNativeReflectConstruct2.TimeoutError();
closure_1 = undefined;
closure_2 = undefined;
closure_3 = undefined;
closure_4 = undefined;
class PQueue {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, PQueue);
    tmp2 = closure_5;
    obj = closure_5(PQueue);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._intervalCount = 0;
    tmp3Result._intervalEnd = 0;
    tmp3Result._pendingCount = 0;
    tmp3Result._resolveEmpty = empty;
    tmp3Result._resolveIdle = empty;
    obj = { carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: require("PriorityQueue").default };
    merged = Object.assign(obj, global);
    if (typeof merged.intervalCap === "number") {
      num = 1;
      if (merged.intervalCap >= 1) {
        if (undefined !== merged.interval) {
          _Number = Number;
          if (Number.isFinite(merged.interval)) {
            if (merged.interval >= 0) {
              tmp3Result._carryoverConcurrencyCount = merged.carryoverConcurrencyCount;
              num2 = Infinity;
              tmp3Result._isIntervalIgnored = merged.intervalCap === Infinity || 0 === merged.interval;
              ({ intervalCap: tmp6._intervalCap, interval: tmp6._interval } = merged);
              tmp10 = new.target;
              tmp11 = new.target;
              queueClass = new merged.queueClass();
              tmp13 = queueClass;
              tmp3Result._queue = queueClass;
              ({ queueClass: tmp6._queueClass, concurrency: tmp6.concurrency, timeout: tmp6._timeout } = merged);
              flag = true;
              tmp3Result._throwOnTimeout = true === merged.throwOnTimeout;
              flag2 = false;
              tmp3Result._isPaused = false === merged.autoStart;
              return tmp3Result;
            }
          }
        }
        str3 = merged.interval;
        tmp14 = null;
        str = undefined;
        if (null !== str3) {
          if (undefined !== str3) {
            str = str3.toString();
          }
        }
        str4 = "";
        str5 = "";
        if (null !== str) {
          str5 = "";
          if (undefined !== str) {
            str5 = str;
          }
        }
        _HermesInternal = HermesInternal;
        str6 = ")";
        str7 = "` (";
        str8 = "Expected `interval` to be a finite number >= 0, got `";
        tmp16 = str5;
        tmp17 = new.target;
        tmp18 = new.target;
        typeError = new TypeError("Expected `interval` to be a finite number >= 0, got `" + str5 + "` (" + typeof merged.interval + ")");
        tmp20 = typeError;
        throw typeError;
      }
    }
    str = merged.intervalCap;
    str1 = undefined;
    if (null !== str) {
      if (undefined !== str) {
        str1 = str.toString();
      }
    }
    str2 = "";
    if (null !== str1) {
      str2 = "";
      if (undefined !== str1) {
        str2 = str1;
      }
    }
    typeError1 = new TypeError("Expected `intervalCap` to be a number from 1 and up, got `" + str2 + "` (" + typeof merged.intervalCap + ")");
    throw typeError1;
  }
}
_inherits(PQueue, Events);
let obj = {
  key: "_doesIntervalAllowAnother",
  get() {
    const self = this;
    return this._isIntervalIgnored || self._intervalCount < self._intervalCap;
  }
};
const items = [
  obj,
  {
    key: "_doesConcurrentAllowAnother",
    get() {
      return this._pendingCount < this._concurrency;
    }
  },
  {
    key: "_next",
    value: function _next() {
      this._pendingCount = this._pendingCount - 1;
      this._tryToStartAnother();
      this.emit("next");
    }
  },
  {
    key: "_resolvePromises",
    value: function _resolvePromises() {
      const self = this;
      this._resolveEmpty();
      this._resolveEmpty = empty;
      if (0 === this._pendingCount) {
        self._resolveIdle();
        self._resolveIdle = tmp2;
        self.emit("idle");
      }
    }
  },
  {
    key: "_onResumeInterval",
    value: function _onResumeInterval() {
      this._onInterval();
      const result = this._initializeIntervalIfNeeded();
      this._timeoutId = undefined;
    }
  },
  {
    key: "_isIntervalPaused",
    value: function _isIntervalPaused() {
      let self = this;
      self = this;
      if (undefined === this._intervalId) {
        const diff = self._intervalEnd - tmp;
        if (diff < 0) {
          let num2 = 0;
          if (self._carryoverConcurrencyCount) {
            num2 = self._pendingCount;
          }
          self._intervalCount = num2;
        } else {
          if (undefined === self._timeoutId) {
            const _setTimeout = setTimeout;
            self._timeoutId = setTimeout(() => {
              self._onResumeInterval();
            }, diff);
          }
          return true;
        }
      }
      return false;
    }
  },
  {
    key: "_tryToStartAnother",
    value: function _tryToStartAnother() {
      const self = this;
      if (0 === this._queue.size) {
        if (self._intervalId) {
          const _clearInterval = clearInterval;
          clearInterval(self._intervalId);
        }
        self._intervalId = undefined;
        self._resolvePromises();
        return false;
      } else {
        if (!self._isPaused) {
          const _isIntervalPausedResult = self._isIntervalPaused();
          if (self._doesIntervalAllowAnother) {
            if (self._doesConcurrentAllowAnother) {
              const _queue = self._queue;
              const dequeueResult = _queue.dequeue();
              let flag = dequeueResult;
              if (flag) {
                self.emit("active");
                dequeueResult();
                flag = true;
                if (!_isIntervalPausedResult) {
                  const result = self._initializeIntervalIfNeeded();
                  flag = true;
                }
              }
              return flag;
            }
          }
        }
        return false;
      }
    }
  },
  {
    key: "_initializeIntervalIfNeeded",
    value: function _initializeIntervalIfNeeded() {
      let self = this;
      self = this;
      let _isIntervalIgnored = this._isIntervalIgnored;
      if (!_isIntervalIgnored) {
        _isIntervalIgnored = undefined !== self._intervalId;
      }
      if (!_isIntervalIgnored) {
        const _setInterval = setInterval;
        self._intervalId = setInterval(() => {
          self._onInterval();
        }, self._interval);
        const _Date = Date;
        self._intervalEnd = Date.now() + self._interval;
      }
    }
  },
  {
    key: "_onInterval",
    value: function _onInterval() {
      const self = this;
      if (tmp) {
        const _clearInterval = clearInterval;
        clearInterval(self._intervalId);
        self._intervalId = undefined;
      }
      let num = 0;
      if (self._carryoverConcurrencyCount) {
        num = self._pendingCount;
      }
      self._intervalCount = num;
      self._processQueue();
    }
  },
  {
    key: "_processQueue",
    value: function _processQueue() {
      let _tryToStartAnotherResult;
      const self = this;
      if (this._tryToStartAnother()) {
        do {
          _tryToStartAnotherResult = self._tryToStartAnother();
        } while (_tryToStartAnotherResult);
      }
    }
  },
  {
    key: "concurrency",
    get() {
      return this._concurrency;
    },
    set(num) {
      if (typeof num === "number") {
        if (num >= 1) {
          const self = this;
          this._concurrency = num;
          this._processQueue();
        }
      }
      const typeError = new TypeError("Expected `concurrency` to be a number from 1 and up, got `" + num + "` (" + typeof num + ")");
      throw typeError;
    }
  },
,
,
,
,
,
,
,
,
,
,
,

];
obj = { key: "add", value: null };
closure_4 = asyncGeneratorStep(function(arg0) {
  let self = this;
  closure_1 = arg0;
  closure_2 = arg1;
  c5 = 0;
  c6 = 0;
  const iter = (function*(arg0) {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_4 = closure_0;
            closure_3 = tmp2;
            closure_3 = closure_0;
            obj1 = undefined;
            if (obj1 === undefined) {
              obj1 = {};
            }
            closure_0 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "ct", done: true };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = closure_4;
          const promise = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            closure_0 = obj1(function*() {
              if (c5 === 2) {
                c5 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp6 === 3) {
                if (arg0 === 1) {
                  throw arg1;
                } else if (arg0 === 2) {
                  let obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } else {
                try {
                  c5 = 2;
                  if (0 === c4) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c5 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      const dependencyMap = tmp3;
                      lib._pendingCount = lib._pendingCount + 1;
                      lib._intervalCount = lib._intervalCount + 1;
                      c3 = 1;
                      if (undefined !== lib._timeout) {
                        const resolved = Promise.resolve(dependencyMap());
                        if (undefined === closure_2_2.timeout) {
                          let timeout = lib._timeout;
                        } else {
                          timeout = tmp23.timeout;
                        }
                        lib(16758).default(resolved, timeout, () => {
                          if (undefined === tmp29.throwOnTimeout) {
                            let throwOnTimeout = _throwOnTimeout._throwOnTimeout;
                          } else {
                            throwOnTimeout = tmp.throwOnTimeout;
                          }
                          if (throwOnTimeout) {
                            tmp3(closure_2_8);
                          }
                        });
                        lib = closure_1_0;
                        c4 = 2;
                        c5 = 1;
                        const obj2 = lib(16758);
                      }
                      dependencyMap();
                    }
                  } else {
                    if (1 === tmp7) {
                      c3 = 0;
                      closure_1_1(closure_2);
                      lib._next();
                      c5 = 3;
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw arg1;
                    } else if (arg0 !== 2) {
                      lib(arg1);
                      c3 = 0;
                    }
                    c3 = 0;
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  }
                } catch (tmp29) {
                  closure_2 = tmp29;
                  if (tmp4 === c3) {
                    c5 = tmp2;
                    throw tmp29;
                  } else {
                    c4 = tmp;
                  }
                }
              }
            });
            const _queue = closure_3._queue;
            _queue.enqueue(function run() {
              self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }, obj1);
            closure_3._tryToStartAnother();
            closure_3.emit("add");
          });
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = promise;
          return obj;
        }
      } catch (tmp15) {
        c6 = tmp;
        throw tmp15;
      }
    }
  })();
  iter.next();
  return iter;
});
obj[1] = function add(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[11] = obj;
obj = { key: "addAll", value: null };
closure_3 = asyncGeneratorStep(function(arg0, arg1) {
  let self = this;
  closure_1 = arg0;
  closure_2 = arg1;
  c3 = 0;
  return (function*(arg0, arg1) {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = closure_2;
          closure_1 = closure_0;
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = Promise.all(closure_1.map((() => {
            closure_0 = closure_1_2((arg0) => {
              closure_0 = arg0;
              c1 = 0;
              return (function*(arg0) {
                if (set === 2) {
                  set = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else {
                  try {
                    set = 2;
                    if (arg0 === 1) {
                      set = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      set = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      set = 3;
                      obj = { value: null, done: true };
                      obj[0] = set.add(closure_0, closure_0);
                      return obj;
                    }
                  } catch (tmp7) {
                    set = tmp;
                    throw tmp7;
                  }
                }
              })();
            });
            return function(arg0) {
              self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
          })()));
          return obj;
        }
      } catch (tmp8) {
        c3 = tmp;
        throw tmp8;
      }
    }
  })();
});
obj[1] = function addAll(arg0, arg1) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[12] = obj;
items[13] = {
  key: "start",
  value: function start() {
    const self = this;
    if (this._isPaused) {
      self._isPaused = false;
      self._processQueue();
    }
    return self;
  }
};
items[14] = {
  key: "pause",
  value: function pause() {
    this._isPaused = true;
  }
};
items[15] = {
  key: "clear",
  value: function clear() {
    const _queueClass = new this._queueClass();
    this._queue = _queueClass;
  }
};
let obj1 = { key: "onEmpty", value: null };
closure_2 = asyncGeneratorStep(function() {
  const self = this;
  c1 = 0;
  return (function*() {
    if (c1 === 2) {
      c1 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (0 !== _self._queue.size) {
          const promise = new Promise((arg0) => {
            let _resolveEmpty = arg0;
            _resolveEmpty = _resolveEmpty._resolveEmpty;
            _resolveEmpty._resolveEmpty = () => {
              _resolveEmpty();
              callback();
            };
          });
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = promise;
          return obj;
        } else {
          c1 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        c1 = tmp;
        throw tmp10;
      }
    }
  })();
});
obj1[1] = function onEmpty() {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[16] = obj1;
let obj2 = { key: "onIdle", value: null };
closure_1 = asyncGeneratorStep(function() {
  const self = this;
  c1 = 0;
  return (function*() {
    if (c1 === 2) {
      c1 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          if (0 === _self._pendingCount) {
            if (0 === _self._queue.size) {
              c1 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
          const promise = new Promise((arg0) => {
            let _resolveIdle = arg0;
            _resolveIdle = _resolveIdle._resolveIdle;
            _resolveIdle._resolveIdle = () => {
              _resolveIdle();
              callback();
            };
          });
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = promise;
          return obj;
        }
      } catch (tmp9) {
        c1 = tmp;
        throw tmp9;
      }
    }
  })();
});
obj2[1] = function onIdle() {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[17] = obj2;
items[18] = {
  key: "size",
  get() {
    return this._queue.size;
  }
};
items[19] = {
  key: "sizeBy",
  value: function sizeBy(arg0) {
    const _queue = this._queue;
    return _queue.filter(arg0).length;
  }
};
items[20] = {
  key: "pending",
  get() {
    return this._pendingCount;
  }
};
items[21] = {
  key: "isPaused",
  get() {
    return this._isPaused;
  }
};
items[22] = {
  key: "timeout",
  get() {
    return this._timeout;
  },
  set(_timeout) {
    this._timeout = _timeout;
  }
};

export default _createClass(PQueue, items);