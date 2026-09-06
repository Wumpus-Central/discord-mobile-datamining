// discord_app/modules/telemetry_ring/native/channels/BaseTelemetryExportChannel.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import Storage2 from "../../../../../discord_common/js/packages/storage/Storage.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import BaseTelemetryChannel from "BaseTelemetryChannel.tsx";

require = fn;
class BaseTelemetryExportChannel extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._initialized = false;
    applyArgumentsResult._timer = null;
    applyArgumentsResult._inflight = null;
    applyArgumentsResult._resetting = false;
    tmp3 = new closure_1(closure_2[2])("TelemetryRing");
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
  const self = this;
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
  const self = this;
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
  return (async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = self;
            if (self.shouldRun()) {
              c1 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1._kick({ mode: "stream", flush: true });
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
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
  const Storage = Storage2.Storage;
  value = Storage.get(this.getAckedEndOffsetStorageKey());
  let num = -1;
  if (typeof value === "number") {
    const _Number = Number;
    num = -1;
    if (Number.isFinite(value)) {
      num = value;
    }
  }
  return num;
};
prototype["_writeAckedEndOffset"] = function _writeAckedEndOffset(arg0) {
  const Storage = Storage2.Storage;
  const result = Storage.set(this.getAckedEndOffsetStorageKey(), arg0);
};
prototype["_clearAckedEndOffset"] = function _clearAckedEndOffset() {
  const Storage = Storage2.Storage;
  Storage.remove(this.getAckedEndOffsetStorageKey());
};
prototype["_kick"] = function _kick(arg0) {
  const self = this;
  if (this.shouldRun()) {
    if (null == self._inflight) {
      const _drainOnceResult = self._drainOnce(arg0);
      self._inflight = self
        ._drainOnce(arg0)
        .catch((error) => {
          const _logger = self._logger;
          _logger.warn("TelemetryRing export failed", error);
        })
        .finally(() => {
          self._inflight = null;
        });
      const catchPromise = self._drainOnce(arg0).catch((error) => {
        const _logger = self._logger;
        _logger.warn("TelemetryRing export failed", error);
      });
    }
    let _inflight = self._inflight;
  } else {
    _inflight = Promise.resolve();
  }
  return _inflight;
};
prototype["_drainOnce"] = function _drainOnce(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async (arg0, value) => {
    const budget = self.getBudget(tmp2.mode);
    const _readAckedEndOffsetResult = self._readAckedEndOffset();
    if (_readAckedEndOffsetResult >= 0) {
      const tmp27 = _readAckedEndOffsetResult;
    }
    await self._collectPages(budget, tmp27);
    if (1 === tmp5) {
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        return { value, done: true };
      } else {
        closure_128_0 = value;
        if (0 !== closure_128_0.length) {
          c2 = 2;
          c3 = 1;
          return { value: closure_129_1._exportPages(closure_128_0, closure_129_0.flush), done: false };
        } else {
          c3 = 3;
        }
      }
    } else if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (value) {
        if (!closure_129_1._resetting) {
          let isFiniteResult = typeof maxReturnedEndOffset === "number";
          if (typeof maxReturnedEndOffset === "number") {
            const _Number = Number;
            isFiniteResult = Number.isFinite(maxReturnedEndOffset);
          }
          if (isFiniteResult) {
            isFiniteResult = maxReturnedEndOffset >= 0;
          }
          if (isFiniteResult) {
            closure_129_1._writeAckedEndOffset(maxReturnedEndOffset);
          }
        }
      }
    }
    return value;
  })();
};
prototype["_collectPages"] = function _collectPages(budget, arg1) {
  closure_0 = budget;
  closure_1 = arg1;
  const self = this;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 1;
            c0 = 0;
            closure_128_0 = undefined;
            closure_128_1 = [];
            let nextBeforeOffset = -1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_128_0 = value;
          const _Array = Array;
          if (Array.isArray(closure_128_0.entries)) {
            if (0 !== closure_128_0.entries.length) {
              const obj2 = {
                entries: closure_128_0.entries,
                maxReturnedEndOffset: closure_128_0.maxReturnedEndOffset,
                nextBeforeOffset: closure_128_0.nextBeforeOffset,
              };
              closure_128_1.push(obj2);
              nextBeforeOffset = closure_128_0.nextBeforeOffset;
              if (!closure_128_0.hasMore) {
                c3 = 3;
                obj = { value: closure_128_1, done: true };
                return obj;
              }
            }
          }
          c3 = 3;
          const obj3 = { value: closure_128_1, done: true };
          return obj3;
        }
        c2 = 1;
        c3 = 1;
        const obj4 = { value: closure_129_2.snapshot(nextBeforeOffset, closure_129_0, closure_129_1), done: false };
        return obj4;
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  })();
};
prototype["_exportPages"] = function _exportPages(arg0, flush) {
  closure_0 = arg0;
  closure_1 = flush;
  const self = this;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            let exportBatchSize;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            closure_128_5 = undefined;
            closure_128_6 = undefined;
            closure_128_7 = undefined;
            exportBatchSize = self.getExportBatchSize();
            closure_128_1 = tmp5.length - 1;
            if (closure_128_1 >= 0) {
              closure_128_2 = closure_129_0[closure_128_1];
              if (null != exportBatchSize) {
                if (exportBatchSize > 0) {
                  let length = exportBatchSize;
                  closure_128_3 = length;
                  closure_128_4 = 0;
                  if (closure_128_4 >= closure_128_2.entries.length) {
                    closure_128_1 = closure_128_1 - 1;
                  }
                }
              }
              length = closure_128_2.entries.length;
            }
            c3 = 3;
            return { value: true, done: true };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else if (value) {
          closure_128_4 = closure_128_4 + closure_128_3;
        } else {
          c3 = 3;
          return { value: false, done: true };
        }
        const _Math = Math;
        closure_128_5 = Math.min(closure_128_4 + closure_128_3, closure_128_2.entries.length);
        const entries = closure_128_2.entries;
        closure_128_6 = entries.slice(closure_128_4, closure_128_5);
        let tmp38 = 0 === closure_128_1;
        if (tmp38) {
          tmp38 = closure_128_5 === closure_128_2.entries.length;
        }
        closure_128_7 = tmp38;
        let tmp46 = closure_129_1;
        if (closure_129_1) {
          tmp46 = closure_128_7;
        }
        c2 = 1;
        c3 = 1;
        const obj1 = { value: closure_129_2.exportEntries(closure_128_6, tmp46), done: false };
        return obj1;
      } catch (tmp48) {
        c3 = tmp;
        throw tmp48;
      }
    }
  })();
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/BaseTelemetryExportChannel.tsx");

export default BaseTelemetryExportChannel;
