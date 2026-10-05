// === Module 508: Emitter ===

// Module 508 (Emitter)
import logger_Logger from "logger/Logger" /* 4 */;
import LastFewActionsAll from "LastFewActions" /* 509 */;
import size from "module_2" /* 2 */;

let _syncWiths;

const logger = new logger_Logger.Logger("Flux");
function batchEmitChanges(fn) {
  return fn();
}
class Emitter {
  constructor() {
    const merged = Object.assign({ changedStores: null, reactChangedStores: null, changeSentinel: 0, isBatchEmitting: false, isDispatching: false, isPaused: false, pauseTimer: null });
    merged[0] = new Set();
    new Set();
    merged[1] = new Set();
    new Set();
    return merged;
  }
  destroy() {
    const changedStores = this.changedStores;
    changedStores.clear();
    const reactChangedStores = this.reactChangedStores;
    reactChangedStores.clear();
    batchEmitChanges = function batchEmitChanges(fn) {
      return fn();
    };
  }
  injectBatchEmitChanges(batchUpdates) {
    batchEmitChanges = batchUpdates;
  }
  pause() {
    const self = this;
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = null;
    }
    self.isPaused = true;
    if (null !== self.pauseTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.pauseTimer);
    }
    if (null !== tmp) {
      const _setTimeout = setTimeout;
      self.pauseTimer = setTimeout(() => {
        self.pauseTimer = null;
        self.resume();
      }, tmp);
    }
  }
  resume() {
    const self = this;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    clearTimeout(self.pauseTimer);
    self.pauseTimer = null;
    if (self.isPaused) {
      self.isPaused = false;
      if (flag) {
        flag = self.changedStores.size > 0;
      }
      if (flag) {
        const _setImmediate = setImmediate;
        setImmediate(() => self.emit());
      }
    }
  }
  batched(fn) {
    const self = this;
    if (this.isPaused) {
      return fn();
    } else {
      try {
        self.isPaused = true;
        const tmp = fn();
        self.resume(false);
        self.emit();
        return tmp;
      } catch (tmp4) {
        self.resume(false);
        self.emit();
        throw tmp4;
      }
    }
  }
  emit() {
    let self = this;
    const tmp = this.isBatchEmitting || this.isPaused;
    if (!tmp) {
      batchEmitChanges(function() {
        try {
          let tmp2 = self;
          self.isBatchEmitting = true;
          self.changeSentinel = self.changeSentinel + 1;
          let num2 = 0;
          const _Set = Set;
          self = this;
          const self2 = this;
          set = new Set();
          const _Set2 = Set;
          const self3 = this;
          const self4 = this;
          const set1 = new Set();
          const tmp5 = set;
          if (self.changedStores.size > 0) {
            const sum = num2 + 1;
            num2 = sum;
            while (100 >= sum) {
              tmp2 = self;
              let emitNonReactOnceResult = self.emitNonReactOnce(tmp5, tmp7);
            }
            const error2 = logger.error;
            const serializer2 = LastFewActionsAll;
            error2("LastFewActions", serializer2.serialize());
            const _Error2 = Error;
            throw Error("change emit loop detected, aborting");
          }
          if (tmp2.reactChangedStores.size > 0) {
            const sum1 = num2 + 1;
            num2 = sum1;
            while (100 >= sum1) {
              tmp2 = self;
              let emitReactOnceResult = self.emitReactOnce();
            }
            const error = logger.error;
            const serializer = LastFewActionsAll;
            error("LastFewActions", serializer.serialize());
            const _Error = Error;
            throw Error("react change emit loop detected, aborting");
          }
          tmp2.isBatchEmitting = false;
        } catch (tmp24) {
          self.isBatchEmitting = false;
          throw tmp24;
        }
      });
    }
  }
  getChangeSentinel() {
    return this.changeSentinel;
  }
  getIsPaused() {
    return this.isPaused;
  }
  markChanged(_changeCallbacks) {
    const self = this;
    const hasAnyResult = _changeCallbacks.hasAny() || _changeCallbacks._syncWiths.length > 0;
    if (hasAnyResult) {
      const changedStores = self.changedStores;
      changedStores.add(_changeCallbacks._changeCallbacks);
    }
    const _reactChangeCallbacks = _changeCallbacks._changeCallbacks._reactChangeCallbacks;
    if (_reactChangeCallbacks.hasAny()) {
      const reactChangedStores = self.reactChangedStores;
      reactChangedStores.add(_changeCallbacks._changeCallbacks);
    }
    const tmp4 = self.isBatchEmitting || self.isDispatching || self.isPaused;
    if (!tmp4) {
      self.emit();
    }
  }
  emitNonReactOnce(arg0, arg1) {
    const self = this;
    let closure_1 = arg0;
    let closure_0 = arg1;
    const timestamp = Date.now();
    let changedStores = this.changedStores;
    set = new Set();
    this.changedStores = set;
    let item = changedStores.forEach((_changeCallbacks) => {
      set.add(_changeCallbacks);
      _changeCallbacks._changeCallbacks.invokeAll();
      const changedStores = self.changedStores;
      changedStores.delete(_changeCallbacks._changeCallbacks);
    });
    const item1 = changedStores.forEach((_syncWiths) => {
      _syncWiths = _syncWiths._syncWiths;
      const item = _syncWiths.forEach((item) => {
        let func;
        let store;
        ({ func, store } = item);
        if (!set2.has(func)) {
          set2.add(func);
          if (false !== func()) {
            if (!set.has(store)) {
              set.add(store);
              self.markChanged(store);
            }
          }
        }
      });
    });
    const timestamp1 = Date.now();
    if (timestamp1 - timestamp > 100) {
      const _HermesInternal = HermesInternal;
      const verbose = logger.verbose;
      const combined = "Slow batch emitChanges took " + timestamp1 - timestamp + "ms recentActions:";
      const serializer = LastFewActionsAll;
      verbose(combined, serializer.serialize());
    }
  }
  emitReactOnce() {
    const self = this;
    const timestamp = Date.now();
    let reactChangedStores = this.reactChangedStores;
    this.reactChangedStores = new Set();
    new Set();
    const item = reactChangedStores.forEach((_reactChangeCallbacks) => {
      _reactChangeCallbacks._reactChangeCallbacks.invokeAll();
      const reactChangedStores = self.reactChangedStores;
      reactChangedStores.delete(_reactChangeCallbacks._reactChangeCallbacks);
    });
    const timestamp1 = Date.now();
    if (timestamp1 - timestamp > 100) {
      const _HermesInternal = HermesInternal;
      const verbose = logger.verbose;
      const combined = "Slow batch emitReactChanges took " + timestamp1 - timestamp + "ms recentActions:";
      const serializer = LastFewActionsAll;
      verbose(combined, serializer.serialize());
    }
  }
}
const prototype = Emitter.prototype;
let merged = Object.assign({ changedStores: null, reactChangedStores: null, changeSentinel: 0, isBatchEmitting: false, isDispatching: false, isPaused: false, pauseTimer: null });
let set = new Set();
merged[0] = set;
let set1 = new Set();
merged[1] = set1;
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/Emitter.tsx");

export default merged;