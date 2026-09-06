// === Module 508: flux/Emitter ===

// Module 508 (flux/Emitter)
import logger_Logger from "logger/Logger" /* 4 */;
import LastFewActionsAll from "LastFewActions" /* 509 */;
import size from "module_2" /* 2 */;

const logger = new logger_Logger.Logger("Flux");
let global = function batchEmitChanges(fn) {
  return fn();
};
class Emitter {
  constructor() {
    merged = Object.assign({ changedStores: null, reactChangedStores: null, changeSentinel: 0, isBatchEmitting: false, isDispatching: false, isPaused: false, pauseTimer: null });
    set = new Set();
    merged[0] = set;
    set1 = new Set();
    merged[1] = set1;
    return merged;
  }
}
const prototype = Emitter.prototype;
prototype["destroy"] = function destroy() {
  const changedStores = this.changedStores;
  changedStores.clear();
  const reactChangedStores = this.reactChangedStores;
  reactChangedStores.clear();
  global = function batchEmitChanges(fn) {
    return fn();
  };
};
prototype["injectBatchEmitChanges"] = function injectBatchEmitChanges(batchUpdates) {
  global = batchUpdates;
};
prototype["pause"] = function pause() {
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
};
prototype["resume"] = function resume() {
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
};
prototype["batched"] = function batched(fn) {
  const self = this;
  if (this.isPaused) {
    return fn();
  } else {
    try {
      self.isPaused = true;
      self.resume(false);
      self.emit();
      return fn();
    } catch (tmp4) {
      obj.resume(false);
      obj.emit();
      throw tmp4;
    }
  }
};
prototype["emit"] = function emit() {
  const self = this;
  if (!tmp) {
    global(() => {
      try {
        let tmp2 = self;
        self.isBatchEmitting = true;
        self.changeSentinel = self.changeSentinel + 1;
        let num2 = 0;
        const _Set = Set;
        const set = new Set();
        const _Set2 = Set;
        if (self.changedStores.size > 0) {
          const sum = num2 + 1;
          num2 = sum;
          while (100 >= sum) {
            tmp2 = self;
            let emitNonReactOnceResult = self.emitNonReactOnce(set, tmp11);
          }
          const serializer2 = LastFewActionsAll;
          logger.error("LastFewActions", serializer2.serialize());
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
          const serializer = LastFewActionsAll;
          logger.error("LastFewActions", serializer.serialize());
          const _Error = Error;
          throw Error("react change emit loop detected, aborting");
        }
        tmp2.isBatchEmitting = false;
      } catch (tmp28) {
        self.isBatchEmitting = false;
        throw tmp28;
      }
    });
  }
};
prototype["getChangeSentinel"] = function getChangeSentinel() {
  return this.changeSentinel;
};
prototype["getIsPaused"] = function getIsPaused() {
  return this.isPaused;
};
prototype["markChanged"] = function markChanged(_changeCallbacks) {
  let hasAnyResult = _changeCallbacks._changeCallbacks.hasAny();
  if (!hasAnyResult) {
    hasAnyResult = _changeCallbacks._syncWiths.length > 0;
  }
  const self = this;
  if (hasAnyResult) {
    const changedStores = self.changedStores;
    changedStores.add(_changeCallbacks);
  }
  if (_reactChangeCallbacks.hasAny()) {
    const reactChangedStores = self.reactChangedStores;
    reactChangedStores.add(_changeCallbacks);
  }
  if (!tmp4) {
    self.emit();
  }
};
prototype["emitNonReactOnce"] = function emitNonReactOnce(arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  const timestamp = Date.now();
  let changedStores = this.changedStores;
  const set = new Set();
  this.changedStores = set;
  let item = changedStores.forEach((_changeCallbacks) => {
    set.add(_changeCallbacks);
    _changeCallbacks._changeCallbacks.invokeAll();
    const changedStores = self.changedStores;
    changedStores.delete(_changeCallbacks);
  });
  const item1 = changedStores.forEach((_syncWiths) => {
    _syncWiths = _syncWiths._syncWiths;
    const item = _syncWiths.forEach((item) => {
      ({ func, store } = item);
      if (!set2.has(func)) {
        set2.add(func);
        if (false !== func()) {
          if (!set.has(store)) {
            obj2.add(store);
            self.markChanged(store);
          }
          obj2 = set;
        }
      }
    });
  });
  const timestamp1 = Date.now();
  if (timestamp1 - timestamp > 100) {
    const _HermesInternal = HermesInternal;
    const combined = "Slow batch emitChanges took " + timestamp1 - timestamp + "ms recentActions:";
    const serializer = LastFewActionsAll;
    logger.verbose(combined, serializer.serialize());
  }
};
prototype["emitReactOnce"] = function emitReactOnce() {
  const self = this;
  const timestamp = Date.now();
  let reactChangedStores = this.reactChangedStores;
  this.reactChangedStores = new Set();
  const item = reactChangedStores.forEach((_reactChangeCallbacks) => {
    _reactChangeCallbacks._reactChangeCallbacks.invokeAll();
    const reactChangedStores = self.reactChangedStores;
    reactChangedStores.delete(_reactChangeCallbacks);
  });
  const timestamp1 = Date.now();
  if (timestamp1 - timestamp > 100) {
    const _HermesInternal = HermesInternal;
    const combined = "Slow batch emitReactChanges took " + timestamp1 - timestamp + "ms recentActions:";
    const serializer = LastFewActionsAll;
    logger.verbose(combined, serializer.serialize());
  }
};
let merged = Object.assign({ changedStores: null, reactChangedStores: null, changeSentinel: 0, isBatchEmitting: false, isDispatching: false, isPaused: false, pauseTimer: null });
merged[0] = new Set();
let set = new Set();
merged[1] = new Set();
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/Emitter.tsx");

export default merged;