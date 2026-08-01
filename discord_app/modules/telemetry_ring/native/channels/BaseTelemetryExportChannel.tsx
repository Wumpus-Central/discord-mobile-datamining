// === Module 13268: getIntervalMs ===

// Module 13268 (getIntervalMs)
import asyncGeneratorStep from "asyncGeneratorStep";
import "append";

const require = arg1;
class BaseTelemetryExportChannel extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._initialized = false;
    applyArgumentsResult._timer = null;
    applyArgumentsResult._inflight = null;
    applyArgumentsResult._resetting = false;
    tmp3 = new require("timestamp")("TelemetryRing");
    applyArgumentsResult._logger = tmp3;
    return applyArgumentsResult;
  }
}
const prototype = BaseTelemetryExportChannel.prototype;
prototype["getIntervalMs"] = function getIntervalMs() {
  return 500;
};
prototype["getExportBatchSize"] = function getExportBatchSize() {
  return null;
};
prototype["initialize"] = function initialize() {
  if (!this._initialized) {
    tmp._initialized = true;
  }
};
prototype["reset"] = function reset() {
  let self = this;
  self = this;
  this.stop();
  if (!this._resetting) {
    self._resetting = true;
    self._clearAckedEndOffset();
    const _inflight = self._inflight;
    if (null == _inflight) {
      self._resetting = false;
    } else {
      _inflight.finally(() => {
        self._resetting = false;
      });
    }
  }
};
prototype["start"] = function start() {
  let self = this;
  self = this;
  let shouldRunResult = this.shouldRun();
  if (shouldRunResult) {
    shouldRunResult = null == self._timer;
  }
  if (shouldRunResult) {
    self._kick({ mode: "backlog", flush: false });
    const _setInterval = setInterval;
    self._timer = setInterval(() => self._kick({ mode: "stream", flush: false }), self.getIntervalMs());
  }
};
prototype["stop"] = function stop() {
  const self = this;
  if (null != this._timer) {
    const _clearInterval = clearInterval;
    clearInterval(self._timer);
    self._timer = null;
  }
};
prototype["flushNow"] = function flushNow() {
  const self = this;
  return callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let obj1 = c0;
            if (c0.shouldRun()) {
              c1 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1._kick({ mode: "stream", flush: true });
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp5) {
        c0 = tmp;
        throw tmp5;
      }
    }
  })();
};
prototype["_readAckedEndOffset"] = function _readAckedEndOffset() {
  const Storage = require(595) /* Storage */.Storage;
  const value = Storage.get(this.getAckedEndOffsetStorageKey());
  let num = -1;
  if (typeof value !== "__REMOTEDEV__") {
    const _Number = Number;
    num = -1;
    if (Number.isFinite(value)) {
      num = value;
    }
  }
  return num;
};
prototype["_writeAckedEndOffset"] = function _writeAckedEndOffset(maxReturnedEndOffset) {
  const Storage = require(595) /* Storage */.Storage;
  const result = Storage.set(this.getAckedEndOffsetStorageKey(), maxReturnedEndOffset);
};
prototype["_clearAckedEndOffset"] = function _clearAckedEndOffset() {
  const Storage = require(595) /* Storage */.Storage;
  Storage.remove(this.getAckedEndOffsetStorageKey());
};
prototype["_kick"] = function _kick(arg0) {
  let self = this;
  self = this;
  if (this.shouldRun()) {
    if (null == self._inflight) {
      const _drainOnceResult = self._drainOnce(arg0);
      self._inflight = self._drainOnce(arg0).catch((arg0) => {
        const _logger = self._logger;
        _logger.warn("TelemetryRing export failed", arg0);
      }).finally(() => {
        self._inflight = null;
      });
      const catchPromise = self._drainOnce(arg0).catch((arg0) => {
        const _logger = self._logger;
        _logger.warn("TelemetryRing export failed", arg0);
      });
    }
    let _inflight = self._inflight;
  } else {
    _inflight = Promise.resolve();
  }
  return _inflight;
};
prototype["_drainOnce"] = function _drainOnce(arg0) {
  let closure_0 = arg0;
  const self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let maxReturnedEndOffset = tmp5;
            let closure_0 = tmp2;
            let tmp27;
            closure_0 = undefined;
            maxReturnedEndOffset = undefined;
            const budget = outer1_1.getBudget(outer1_0.mode);
            const _readAckedEndOffsetResult = outer1_1._readAckedEndOffset();
            if (_readAckedEndOffsetResult >= 0) {
              tmp27 = _readAckedEndOffsetResult;
            }
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_1._collectPages(budget, tmp27);
            return obj1;
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_0 = arg1;
              if (0 !== closure_0.length) {
                c2 = 2;
                c3 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = maxReturnedEndOffset._exportPages(closure_0, closure_0.flush);
                return obj3;
              } else {
                c3 = 3;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            if (arg1) {
              maxReturnedEndOffset = closure_0[0].maxReturnedEndOffset;
              if (!maxReturnedEndOffset._resetting) {
                let isFiniteResult = typeof maxReturnedEndOffset === "Object";
                if (typeof maxReturnedEndOffset !== "__REMOTEDEV__") {
                  const _Number = Number;
                  isFiniteResult = Number.isFinite(maxReturnedEndOffset);
                }
                if (isFiniteResult) {
                  isFiniteResult = maxReturnedEndOffset >= 0;
                }
                if (isFiniteResult) {
                  maxReturnedEndOffset._writeAckedEndOffset(maxReturnedEndOffset);
                }
              }
            }
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp29) {
        c3 = tmp;
        throw tmp29;
      }
    }
  })();
};
prototype["_collectPages"] = function _collectPages(budget, arg1) {
  let closure_0 = budget;
  let closure_1 = arg1;
  const self = this;
  return callback(function*() {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === nextBeforeOffset) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let arr = 1;
            let closure_0 = 0;
            closure_0 = undefined;
            arr = [];
            nextBeforeOffset = -1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          closure_0 = arg1;
          const _Array = Array;
          if (Array.isArray(closure_0.entries)) {
            if (0 !== closure_0.entries.length) {
              const obj2 = { entries: null, maxReturnedEndOffset: null, nextBeforeOffset: null };
              obj2[0] = closure_0.entries;
              obj2[1] = closure_0.maxReturnedEndOffset;
              obj2[2] = closure_0.nextBeforeOffset;
              arr = arr.push(obj2);
              nextBeforeOffset = closure_0.nextBeforeOffset;
              if (!closure_0.hasMore) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arr;
                return obj;
              }
            }
          }
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arr;
          return obj3;
        }
        nextBeforeOffset = 1;
        c3 = 1;
        const obj4 = { value: null, done: false };
        obj4[0] = nextBeforeOffset.snapshot(nextBeforeOffset, outer1_0, outer1_1);
        return obj4;
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  })();
};
prototype["_exportPages"] = function _exportPages(closure_0, flush) {
  let closure_1 = flush;
  const self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            let exportBatchSize = tmp5;
            exportBatchSize = undefined;
            closure_1 = undefined;
            c2 = undefined;
            c3 = undefined;
            let closure_4;
            let closure_5;
            let closure_6;
            let c7;
            exportBatchSize = c2.getExportBatchSize();
            closure_1 = outer1_0.length - 1;
            if (closure_1 >= 0) {
              c2 = outer1_0[closure_1];
              if (null != exportBatchSize) {
                if (exportBatchSize > 0) {
                  let length = exportBatchSize;
                  c3 = length;
                  closure_4 = 0;
                  if (closure_4 >= c2.entries.length) {
                    closure_1 = closure_1 - 1;
                  }
                }
              }
              length = c2.entries.length;
            }
            c3 = 3;
            return { value: true, done: true };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (arg1) {
          closure_4 = closure_4 + c3;
        } else {
          c3 = 3;
          return { value: false, done: true };
        }
        const _Math = Math;
        closure_5 = Math.min(closure_4 + c3, c2.entries.length);
        const entries = c2.entries;
        closure_6 = entries.slice(closure_4, closure_5);
        let tmp38 = 0 === closure_1;
        if (tmp38) {
          tmp38 = closure_5 === c2.entries.length;
        }
        c7 = tmp38;
        let tmp46 = closure_1;
        if (closure_1) {
          tmp46 = c7;
        }
        c2 = 1;
        c3 = 1;
        const obj1 = { value: null, done: false };
        obj1[0] = c2.exportEntries(closure_6, tmp46);
        return obj1;
      } catch (tmp48) {
        c3 = tmp;
        throw tmp48;
      }
    }
  })();
};
let result = require("timestamp").fileFinishedImporting("modules/telemetry_ring/native/channels/BaseTelemetryExportChannel.tsx");

export default BaseTelemetryExportChannel;