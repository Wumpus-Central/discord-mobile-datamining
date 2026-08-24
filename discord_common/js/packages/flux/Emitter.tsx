// === Module 593: logger ===

// Module 593 (logger)
import log from "log" /* 4 */;
import addAll from "add" /* 594 */;
import set from "set" /* 2 */;

const logger = new log.Logger("Flux");
function batchEmitChanges(arg0) {
  return arg0();
}
class Emitter {
  constructor() {
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[0] = set;
    set1 = new Set();
    obj[1] = set1;
    return obj;
  }
}
const prototype = Emitter.prototype;
prototype["destroy"] = function destroy() {
  const changedStores = this.changedStores;
  changedStores.clear();
  const reactChangedStores = this.reactChangedStores;
  reactChangedStores.clear();
  batchEmitChanges = function batchEmitChanges(arg0) {
    return arg0();
  };
};
prototype["injectBatchEmitChanges"] = function injectBatchEmitChanges(batchUpdates) {
  closure_3 = batchUpdates;
};
prototype["pause"] = function pause() {
  let self = this;
  self = this;
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
  let self = this;
  self = this;
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
prototype["batched"] = function batched(closure_1) {
  const self = this;
  if (this.isPaused) {
    return closure_1();
  } else {
    try {
      self.isPaused = true;
      self.resume(false);
      self.emit();
      return closure_1();
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
    batchEmitChanges(() => {
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
            let tmp31 = self;
            tmp2 = self;
            let tmp32 = set;
            let tmp33 = set1;
            let emitNonReactOnceResult = self.emitNonReactOnce(set, tmp11);
          }
          closure_1_2.error("LastFewActions", self(closure_1_1[1]).serialize());
          const _Error2 = Error;
          throw Error("change emit loop detected, aborting");
        }
        if (tmp2.reactChangedStores.size > 0) {
          const sum1 = num2 + 1;
          num2 = sum1;
          while (100 >= sum1) {
            let tmp17 = self;
            tmp2 = self;
            let emitReactOnceResult = self.emitReactOnce();
          }
          closure_1_2.error("LastFewActions", self(closure_1_1[1]).serialize());
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
  dependencyMap = arg0;
  importAll = arg1;
  const timestamp = Date.now();
  let changedStores = this.changedStores;
  this.changedStores = new Set();
  let item = changedStores.forEach((_changeCallbacks) => {
    set.add(_changeCallbacks);
    _changeCallbacks._changeCallbacks.invokeAll();
    const changedStores = self.changedStores;
    changedStores.delete(_changeCallbacks);
  });
  const item1 = changedStores.forEach((_syncWiths) => {
    _syncWiths = _syncWiths._syncWiths;
    const item = _syncWiths.forEach((arg0) => {
      ({ func, store } = arg0);
      if (!set2.has(func)) {
        set2.add(func);
        if (false !== func()) {
          if (!set.has(store)) {
            obj2.add(store);
            closure_2.markChanged(store);
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
    self.verbose(combined, addAll.serialize());
    const obj = addAll;
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
    logger.verbose(combined, self(594).serialize());
    const obj = self(594);
  }
};
let obj = Object.create(Emitter.prototype);
let set = new Set();
obj[0] = set;
obj[1] = new Set();
const result = set.fileFinishedImporting("../discord_common/js/packages/flux/Emitter.tsx");

export default obj;