// === Module 1992: BaseTelemetryExportChannel ===

// Module 1992 (BaseTelemetryExportChannel)
import LoggerDefault from "Logger" /* 3 */;
import Storage2 from "Storage" /* 510 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import BaseTelemetryChannel from "BaseTelemetryChannel" /* 1993 */;
import size from "module_2" /* 2 */;

let _self, c2, c3;

class BaseTelemetryExportChannel extends BaseTelemetryChannel {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult._initialized = false;
    applyArgumentsResult._timer = null;
    applyArgumentsResult._inflight = null;
    applyArgumentsResult._resetting = false;
    applyArgumentsResult._logger = new LoggerDefault("TelemetryRing");
    new LoggerDefault("TelemetryRing");
    return applyArgumentsResult;
  }
  getIntervalMs() {
    return 500;
  }
  getExportBatchSize() {
    return null;
  }
  initialize() {
    if (!this._initialized) {
      tmp._initialized = true;
    }
  }
  reset() {
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
  }
  start() {
    const self = this;
    const shouldRunResult = this.shouldRun() && null == self._timer;
    if (shouldRunResult) {
      self._kick({ mode: "backlog", flush: false });
      const _setInterval = setInterval;
      self._timer = setInterval(() => self._kick({ mode: "stream", flush: false }), self.getIntervalMs());
    }
  }
  stop() {
    const self = this;
    if (null != this._timer) {
      const _clearInterval = clearInterval;
      clearInterval(self._timer);
      self._timer = null;
    }
  }
  flushNow() {
    const self = this;
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj4 = { value, done: true };
              return obj4;
            } else if (self.shouldRun()) {
              c1 = 1;
              c0 = 1;
              const obj5 = { value: self._kick({ mode: "stream", flush: true }), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp4) {
          c0 = 3;
          throw tmp4;
        }
      }
    })();
  }
  _readAckedEndOffset() {
    const Storage = Storage2.Storage;
    const value = Storage.get(this.getAckedEndOffsetStorageKey());
    let num = -1;
    if (typeof value === "number") {
      const _Number = Number;
      num = -1;
      if (Number.isFinite(value)) {
        num = value;
      }
    }
    return num;
  }
  _writeAckedEndOffset(maxReturnedEndOffset) {
    const Storage = Storage2.Storage;
    const result = Storage.set(this.getAckedEndOffsetStorageKey(), maxReturnedEndOffset);
  }
  _clearAckedEndOffset() {
    const Storage = Storage2.Storage;
    Storage.remove(this.getAckedEndOffsetStorageKey());
  }
  _kick(arg0) {
    let _inflight;
    const self = this;
    if (this.shouldRun()) {
      if (null == self._inflight) {
        const _drainOnceResult = self._drainOnce(arg0);
        const catchPromise = _drainOnceResult.catch((error) => {
          const _logger = self._logger;
          _logger.warn("TelemetryRing export failed", error);
        });
        self._inflight = catchPromise.finally(() => {
          self._inflight = null;
        });
      }
      _inflight = self._inflight;
    } else {
      _inflight = Promise.resolve();
    }
    return _inflight;
  }
  _drainOnce(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let tmp;
          let maxReturnedEndOffset;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              let tmp26;
              tmp = undefined;
              maxReturnedEndOffset = undefined;
              const budget = self.getBudget(tmp.mode);
              const _readAckedEndOffsetResult = self._readAckedEndOffset();
              if (_readAckedEndOffsetResult >= 0) {
                tmp26 = _readAckedEndOffsetResult;
              }
              c2 = 1;
              c3 = 1;
              const obj4 = { value: self._collectPages(budget, tmp26), done: false };
              return obj4;
            }
          } else {
            if (1 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                tmp = value;
                if (0 !== tmp.length) {
                  c2 = 2;
                  c3 = 1;
                  const obj6 = { value: closure_129_1._exportPages(tmp, closure_129_0.flush), done: false };
                  return obj6;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else if (value) {
              maxReturnedEndOffset = tmp[0].maxReturnedEndOffset;
              if (!closure_129_1._resetting) {
                let isFiniteResult = typeof maxReturnedEndOffset === "number";
                if (isFiniteResult) {
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
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp33) {
          c3 = 3;
          throw tmp33;
        }
      }
    })();
  }
  _collectPages(budget, arg1) {
    let closure_0 = budget;
    let closure_1 = arg1;
    const self = this;
    return (async () => {
      let value;
      if (c3 === 2) {
        c3 = 3;
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
          let nextBeforeOffset;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let c1 = 1;
              let c0 = 0;
              closure_0 = undefined;
              value = [];
              nextBeforeOffset = -1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = value;
            const _Array = Array;
            if (Array.isArray(closure_0.entries)) {
              if (0 !== closure_0.entries.length) {
                const obj5 = { entries: closure_0.entries, maxReturnedEndOffset: closure_0.maxReturnedEndOffset, nextBeforeOffset: closure_0.nextBeforeOffset };
                value.push(obj5);
                nextBeforeOffset = closure_0.nextBeforeOffset;
                if (!closure_0.hasMore) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
              }
            }
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
          c2 = 1;
          c3 = 1;
          const obj7 = { value: closure_129_2.snapshot(nextBeforeOffset, closure_129_0, closure_129_1), done: false };
          return obj7;
        } catch (tmp14) {
          c3 = 3;
          throw tmp14;
        }
      }
    })();
  }
  _exportPages(value, flush) {
    let closure_0 = value;
    let closure_1 = flush;
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let closure_4;
          let closure_5;
          let closure_6;
          let closure_7;
          let length;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              _self = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              closure_7 = undefined;
              length = self.getExportBatchSize();
              closure_1 = length.length - 1;
              if (closure_1 >= 0) {
                _self = closure_129_0[closure_1];
                if (null != length) {
                  if (length > 0) {
                    closure_4 = 0;
                    if (closure_4 >= _self.entries.length) {
                      closure_1 = closure_1 - 1;
                    }
                  }
                }
                length = _self.entries.length;
              }
              c3 = 3;
              return { value: true, done: true };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else if (value) {
            closure_4 = closure_4 + length;
          } else {
            c3 = 3;
            return { value: false, done: true };
          }
          const _Math = Math;
          closure_5 = Math.min(closure_4 + length, _self.entries.length);
          const entries = _self.entries;
          closure_6 = entries.slice(closure_4, closure_5);
          const tmp37 = 0 === closure_1 && closure_5 === _self.entries.length;
          closure_7 = tmp37;
          let tmp45 = closure_129_1;
          const exportEntries = closure_129_2.exportEntries;
          const tmp44 = closure_6;
          if (closure_129_1) {
            tmp45 = closure_7;
          }
          c2 = 1;
          c3 = 1;
          const obj4 = { value: exportEntries(tmp44, tmp45), done: false };
          return obj4;
        } catch (tmp47) {
          c3 = 3;
          throw tmp47;
        }
      }
    })();
  }
}
const prototype = BaseTelemetryExportChannel.prototype;
let result = size.fileFinishedImporting("modules/telemetry_ring/native/channels/BaseTelemetryExportChannel.tsx");

export default BaseTelemetryExportChannel;