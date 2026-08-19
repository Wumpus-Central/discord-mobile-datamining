// === Module 593: logger ===

// Module 593 (logger)
import obj132 from "obj132" /* 2 */;
import log from "log" /* 4 */;
import addAll from "add" /* 594 */;

const logger = new log.Logger("Flux");
function batchEmitChanges(fn) {
  return fn();
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
  batchEmitChanges = function batchEmitChanges(fn) {
    return fn();
  };
};
prototype["injectBatchEmitChanges"] = function injectBatchEmitChanges(batchUpdates) {
  closure_3 = batchUpdates;
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
prototype["batched"] = function batched(closure_1) {
  const self = this;
  if (this.isPaused) {
    return dependencyMap();
  } else {
    try {
      self.isPaused = true;
      self.resume(false);
      self.emit();
      return dependencyMap();
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
            tmp2 = self;
            let emitNonReactOnceResult = self.emitNonReactOnce(tmp7, tmp11);
          }
          const serializer2 = self(dependencyMap[1]);
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
          const serializer = self(dependencyMap[1]);
          logger.error("LastFewActions", serializer.serialize());
          const _Error = Error;
          throw Error("react change emit loop detected, aborting");
        }
        tmp2.isBatchEmitting = false;
        const set1 = new Set();
        tmp7 = set;
      } catch (tmp28) {
        self.isBatchEmitting = false;
        throw tmp28;
      }
    });
  }
  tmp = this.isBatchEmitting || this.isPaused;
};
prototype["getChangeSentinel"] = function getChangeSentinel() {
  return this.changeSentinel;
};
prototype["getIsPaused"] = function getIsPaused() {
  return this.isPaused;
};
prototype["markChanged"] = function markChanged(_changeCallbacks) {
  let hasAnyResult = _changeCallbacks.hasAny();
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
  let item = changedStores.forEach((item, index) => {
    set.add(item);
    item._changeCallbacks.invokeAll();
    const changedStores = self.changedStores;
    changedStores.delete(item);
  });
  const item1 = changedStores.forEach((item, index) => {
    const _syncWiths = item._syncWiths;
    item = _syncWiths.forEach((item, index) => {
      ({ func, store } = item);
      if (!set2.has(func)) {
        set2.add(func);
        if (false !== func()) {
          if (!set.has(store)) {
            set.add(store);
            closure_2.markChanged(store);
          }
        }
      }
    });
  });
  const timestamp1 = Date.now();
  if (timestamp1 - timestamp > 100) {
    const _HermesInternal = HermesInternal;
    const combined = "Slow batch emitChanges took " + timestamp1 - timestamp + "ms recentActions:";
    const serializer = addAll;
    self.verbose(combined, serializer.serialize());
  }
};
prototype["emitReactOnce"] = function emitReactOnce() {
  const self = this;
  const timestamp = Date.now();
  let reactChangedStores = this.reactChangedStores;
  this.reactChangedStores = new Set();
  const item = reactChangedStores.forEach((item, index) => {
    item._reactChangeCallbacks.invokeAll();
    const reactChangedStores = self.reactChangedStores;
    reactChangedStores.delete(item);
  });
  const timestamp1 = Date.now();
  if (timestamp1 - timestamp > 100) {
    const _HermesInternal = HermesInternal;
    const combined = "Slow batch emitReactChanges took " + timestamp1 - timestamp + "ms recentActions:";
    const serializer = self(594);
    logger.verbose(combined, serializer.serialize());
  }
  const set = new Set();
};
let obj = Object.create(Emitter.prototype);
obj[0] = new Set();
let set = new Set();
obj[1] = new Set();
let set1 = new Set();
const result = obj132.fileFinishedImporting("../discord_common/js/packages/flux/Emitter.tsx");

export default obj;