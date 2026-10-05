// === Module 17548: ? ===

// Module 17548
import pTimeout from "pTimeout" /* 17549 */;
import _mod17551 from "module_17551" /* 17551 */;
import _mod17553 from "module_17553" /* 17553 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let _resolveEmpty, _resolveIdle, c4, closure_1, closure_3, set;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function empty() {

}
const timeoutError = new pTimeout.TimeoutError();
let closure_2;
let _false;
let closure_4;
class PQueue {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, PQueue);
    const obj = _getPrototypeOf(PQueue);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    tmp3Result._intervalCount = 0;
    tmp3Result._intervalEnd = 0;
    tmp3Result._pendingCount = 0;
    tmp3Result._resolveEmpty = empty;
    tmp3Result._resolveIdle = empty;
    const obj2 = { carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: _mod17551.default };
    const merged = Object.assign(obj2, arg0);
    if (typeof merged.intervalCap === "number") {
      if (merged.intervalCap >= 1) {
        if (undefined !== merged.interval) {
          const _Number = Number;
          if (Number.isFinite(merged.interval)) {
            if (merged.interval >= 0) {
              tmp3Result._carryoverConcurrencyCount = merged.carryoverConcurrencyCount;
              tmp3Result._isIntervalIgnored = merged.intervalCap === Infinity || 0 === merged.interval;
              ({ intervalCap: tmp6._intervalCap, interval: tmp6._interval } = merged);
              const self2 = this;
              const self3 = this;
              const queueClass = new merged.queueClass();
              tmp3Result._queue = queueClass;
              ({ queueClass: tmp6._queueClass, concurrency: tmp6.concurrency, timeout: tmp6._timeout } = merged);
              tmp3Result._throwOnTimeout = true === merged.throwOnTimeout;
              tmp3Result._isPaused = false === merged.autoStart;
              return tmp3Result;
            }
          }
        }
        let str1;
        const _TypeError2 = TypeError;
        if (null !== merged.interval) {
          if (undefined !== merged.interval) {
            str1 = str3.toString();
          }
        }
        let str5 = "";
        if (null !== str1) {
          str5 = "";
          if (undefined !== str1) {
            str5 = str1;
          }
        }
        const _HermesInternal = HermesInternal;
        const self4 = this;
        const self5 = this;
        const _TypeError21 = new _TypeError2("Expected `interval` to be a finite number >= 0, got `" + str5 + "` (" + typeof merged.interval + ")");
        throw _TypeError21;
      }
    }
    let str9;
    const _TypeError = TypeError;
    if (null !== merged.intervalCap) {
      if (undefined !== merged.intervalCap) {
        str9 = str.toString();
      }
    }
    let str2 = "";
    if (null !== str9) {
      str2 = "";
      if (undefined !== str9) {
        str2 = str9;
      }
    }
    const _TypeError1 = new _TypeError("Expected `intervalCap` to be a number from 1 and up, got `" + str2 + "` (" + typeof merged.intervalCap + ")");
    throw _TypeError1;
  }
}
_inherits(PQueue, _mod17553);
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
      const self = this;
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
      const self = this;
      const _isIntervalIgnored = this._isIntervalIgnored || undefined !== self._intervalId;
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
      const tmp = 0 === this._intervalCount && 0 === self._pendingCount && self._intervalId;
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
    set(_concurrency) {
      if (typeof _concurrency === "number") {
        if (_concurrency >= 1) {
          const self = this;
          this._concurrency = _concurrency;
          this._processQueue();
        }
      }
      const typeError = new TypeError("Expected `concurrency` to be a number from 1 and up, got `" + _concurrency + "` (" + typeof _concurrency + ")");
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
const entry = {
  key: "add",
  value: function add(arg0) {
    return closure_4(...arguments);
  }
};
closure_4 = _asyncToGenerator(async function(arg0) {
  let self = this;
  closure_1 = arg0;
  closure_2 = arg1;
  let c5 = 0;
  let c6 = 0;
  const iter = (async function(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = self;
            closure_3 = self;
            let obj4 = closure_2;
            if (closure_2 === undefined) {
              obj4 = {};
            }
            let closure_0;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          return { value, done: true };
        } else {
          closure_0 = closure_4;
          self = this;
          const self2 = this;
          const promise = new Promise((arg0, arg1) => {
            closure_1 = arg1;
            let closure_0 = closure_1_2(function*() {
              let throwOnTimeout;
              if (c5 === 2) {
                c5 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                let c3;
                try {
                  c5 = 2;
                  if (0 === c4) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c5 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      let timeout;
                      closure_1 = tmp;
                      _throwOnTimeout._pendingCount = _throwOnTimeout._pendingCount + 1;
                      _throwOnTimeout._intervalCount = _throwOnTimeout._intervalCount + 1;
                      c3 = 1;
                      if (undefined === _throwOnTimeout._timeout) {
                        let _defaultResult;
                        if (undefined === config.timeout) {
                          _defaultResult = closure_2_1();
                        }
                        c4 = 2;
                        c5 = 1;
                        const obj4 = { value: _defaultResult, done: false };
                        return obj4;
                      }
                      const _default = _throwOnTimeout(closure_1[6]).default;
                      const resolved = Promise.resolve(closure_2_1());
                      if (undefined === config.timeout) {
                        timeout = _throwOnTimeout._timeout;
                      } else {
                        timeout = tmp21.timeout;
                      }
                      _defaultResult = _default(resolved, timeout, () => {
                        if (undefined === throwOnTimeout.throwOnTimeout) {
                          throwOnTimeout = _throwOnTimeout._throwOnTimeout;
                        } else {
                          throwOnTimeout = tmp.throwOnTimeout;
                        }
                        if (throwOnTimeout) {
                          closure_1_1(closure_3_8);
                        }
                      });
                    }
                  } else {
                    if (1 === tmp4) {
                      c3 = 0;
                      closure_1(throwOnTimeout);
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      c5 = 3;
                      const obj = { value, done: true };
                      return obj;
                    } else {
                      _throwOnTimeout(value);
                      c3 = 0;
                    }
                    _throwOnTimeout._next();
                    c5 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp26) {
                  throwOnTimeout = tmp26;
                  if (0 === c3) {
                    c5 = 3;
                    throw tmp26;
                  } else {
                    c4 = 1;
                  }
                }
              }
            });
            const _queue = closure_3._queue;
            _queue.enqueue(function run() {
              return closure_0(...arguments);
            }, closure_2);
            closure_3._tryToStartAnother();
            closure_3.emit("add");
          });
          c6 = 3;
          let obj = { value: promise, done: true };
          return obj;
        }
      } catch (tmp12) {
        c6 = 3;
        throw tmp12;
      }
    }
  })();
  iter.next();
  return iter;
});
items[11] = entry;
const entry1 = {
  key: "addAll",
  value: function addAll(arg0, arg1) {
    return closure_3(...arguments);
  }
};
_false = _asyncToGenerator(async function(arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  closure_2 = arg1;
  let c3 = 0;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          let closure_0 = closure_2;
          closure_1 = self;
          const tmp6 = globalThis;
          c3 = 3;
          let obj = {
            value: Promise.all(closure_1.map((() => {
                    closure_0 = closure_1_2(function*(arg0) {
                      closure_0 = arg0;
                      if (set === 2) {
                        set = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp2 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj2 = { value, done: true };
                          return obj2;
                        } else {
                          return { value: "IconComponent", done: null };
                        }
                      } else {
                        try {
                          set = 2;
                          if (arg0 === 1) {
                            set = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            set = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            set = 3;
                            const obj = { value: set.add(closure_0, closure_0), done: true };
                            return obj;
                          }
                        } catch (tmp6) {
                          set = 3;
                          throw tmp6;
                        }
                      }
                    });
                    return function(arg0) {
                      return closure_0(...arguments);
                    };
                  })())),
            done: true
          };
          return obj;
        }
      } catch (tmp7) {
        c3 = 3;
        throw tmp7;
      }
    }
  })();
});
items[12] = entry1;
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
const entry2 = {
  key: "onEmpty",
  value: function onEmpty() {
    return closure_2(...arguments);
  }
};
closure_2 = _asyncToGenerator(async function() {
  let self = this;
  let c1 = 0;
  return (async function(arg0) {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          return { value, done: true };
        } else {
          let closure_0 = self;
          if (0 !== self._queue.size) {
            self = this;
            const self2 = this;
            c1 = 3;
            const obj = {
              value: new Promise((arg0) => {
                        _resolveEmpty = arg0;
                        _resolveEmpty = _resolveEmpty._resolveEmpty;
                        _resolveEmpty._resolveEmpty = () => {
                          _resolveEmpty();
                          closure_0();
                        };
                      }),
              done: true
            };
            return obj;
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  })();
});
items[16] = entry2;
const entry3 = {
  key: "onIdle",
  value: function onIdle() {
    return closure_1(...arguments);
  }
};
_asyncToGenerator(async function() {
  let self = this;
  let c1 = 0;
  return (async function(arg0) {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          return { value, done: true };
        } else {
          let closure_0 = self;
          if (0 === self._pendingCount) {
            if (0 === self._queue.size) {
              c1 = 3;
              return { value: "IconComponent", done: null };
            }
          }
          self = this;
          const self2 = this;
          c1 = 3;
          const obj = {
            value: new Promise((arg0) => {
                    _resolveIdle = arg0;
                    _resolveIdle = _resolveIdle._resolveIdle;
                    _resolveIdle._resolveIdle = () => {
                      _resolveIdle();
                      closure_0();
                    };
                  }),
            done: true
          };
          return obj;
        }
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  })();
});
items[17] = entry3;
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