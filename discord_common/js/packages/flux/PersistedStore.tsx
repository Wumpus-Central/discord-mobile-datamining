// discord_common/js/packages/flux/PersistedStore.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import { Store } from "initialize";
import set from "Storage";
import { isTracing } from "../app-start-performance/AppStartPerformance.tsx";
import { Storage } from "../storage/Storage.tsx";

const require = arg1;
let closure_3 = ["_state", "_version"];
let closure_6 = { _state: "r", _version: "accessibilityRole" };
let c7 = null;
let PersistedStore;
class PersistedStore extends r10016 {
  constructor(arg0, arg1, arg2) {
    c0 = undefined;
    tmp3 = new tmp3(global, arg1, importDefault, new.target, tmp3, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    c0 = tmp3;
    num = 0;
    if (null != tmp3.getClass().migrations) {
      num = tmp3.getClass().migrations.length;
    }
    tmp3._version = num;
    tmp3.callback = function callback(arg0) {
      const persistKey = _undefined.getClass().persistKey;
      _undefined.persist();
      outer1_9._writePromises.delete(persistKey);
      const _writeResolvers = outer1_9._writeResolvers;
      _writeResolvers.delete(persistKey);
      arg0();
    };
    tmp4 = require("throttle");
    tmp3.throttledCallback = tmp4((arg0) => _undefined.callback(arg0), tmp3.getClass().throttleDelay, { leading: false });
    if (typeof tmp3.getClass().persistKey !== "string") {
      tmp15 = globalThis;
      _Error3 = Error;
      _HermesInternal3 = HermesInternal;
      str5 = " initialized without a `persistKey`. Add one so we know where to save your stuff!";
      str6 = "";
      tmp16 = new.target;
      tmp17 = new.target;
      error = new Error("" + tmp3.getClass().name + " initialized without a `persistKey`. Add one so we know where to save your stuff!");
      tmp19 = error;
      throw error;
    } else if (typeof tmp3.initialize !== "function") {
      tmp10 = globalThis;
      _Error2 = Error;
      _HermesInternal2 = HermesInternal;
      str3 = " initialized without an `initialize` method. Add one that accepts the initial cached state.";
      str4 = "";
      tmp11 = new.target;
      tmp12 = new.target;
      error1 = new Error("" + tmp3.getClass().name + " initialized without an `initialize` method. Add one that accepts the initial cached state.");
      tmp14 = error1;
      throw error1;
    } else if (typeof tmp3.getState !== "function") {
      tmp5 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.";
      str2 = "";
      tmp6 = new.target;
      tmp7 = new.target;
      error2 = new Error("" + tmp3.getClass().name + " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.");
      tmp9 = error2;
      throw error2;
    } else {
      addChangeListenerResult = tmp3.addChangeListener(() => obj.asyncPersist());
      return tmp3;
    }
  }
}
const prototype = PersistedStore.prototype;
prototype["getClass"] = function getClass() {
  return this.constructor;
};
PersistedStore["clearAll"] = function clearAll(arg0) {
  let closure_0 = arg0;
  let closure_7 = arg0;
  if (null == PersistedStore._clearAllPromise) {
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      requestIdleCallback(() => {
        outer2_9.clearPersistQueue(callback);
        const allPersistKeys = outer2_9.allPersistKeys;
        const item = allPersistKeys.forEach((persistKey) => {
          if (outer1_9.shouldClear(closure_0, persistKey)) {
            const Storage = outer1_0(outer1_2[2]).Storage;
            Storage.remove(persistKey);
          }
        });
        const all = outer2_5.getAll();
        const item1 = all.forEach((getClass) => {
          let shouldClearResult = getClass instanceof outer1_9;
          if (shouldClearResult) {
            shouldClearResult = outer1_9.shouldClear(closure_0, getClass.getClass().persistKey);
          }
          if (shouldClearResult) {
            getClass._isInitialized = false;
            getClass.initializeIfNeeded();
          }
        });
        outer2_9._clearAllPromise = null;
        callback();
      }, { timeout: 500 });
    });
    tmp._clearAllPromise = promise;
  }
  return PersistedStore._clearAllPromise;
};
PersistedStore["shouldClear"] = function shouldClear(closure_0, persistKey) {
  const omit = closure_0.omit;
  let hasItem;
  if (omit != null) {
    hasItem = omit.includes(persistKey);
  }
  if (hasItem) {
    return false;
  } else {
    const type = closure_0.type;
    if ("all" === type) {
      return true;
    } else if ("user-data-only" === type) {
      const userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
      return !userAgnosticPersistKeys.has(persistKey);
    } else {
      const type2 = closure_0.type;
      return false;
    }
  }
};
PersistedStore["clearPersistQueue"] = function clearPersistQueue(closure_0) {
  let _writeResolvers = PersistedStore._writeResolvers;
  const item = _writeResolvers.forEach((arg0, persistKey) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (outer1_9.shouldClear(closure_0, persistKey)) {
      tmp3._writePromises.delete(persistKey);
      const _writeResolvers = tmp3._writeResolvers;
      _writeResolvers.delete(persistKey);
      cancelIdleCallback(tmp2);
      tmp(false);
      const _writePromises = tmp3._writePromises;
    }
  });
  PersistedStore._writePromises.clear();
  _writeResolvers = PersistedStore._writeResolvers;
  _writeResolvers.clear();
};
PersistedStore["getAllStates"] = function getAllStates() {
  return Promise.all(Array.from(PersistedStore._writePromises.values())).then(() => {
    const obj = {};
    allPersistKeys = allPersistKeys.allPersistKeys;
    const item = allPersistKeys.forEach((arg0) => {
      const Storage = obj(outer1_2[2]).Storage;
      let value = Storage.get(arg0);
      if (value == null) {
        value = outer1_6;
      }
      obj[arg0] = value._state;
    });
    return obj;
  });
};
PersistedStore["initializeAll"] = function initializeAll(arg0) {
  let closure_0 = arg0;
  const all = Store.getAll();
  const item = all.forEach((getClass) => {
    if (getClass instanceof outer1_9) {
      const persistKey = getClass.getClass().persistKey;
      if (closure_0.hasOwnProperty(persistKey)) {
        getClass.initializeFromState(tmp[persistKey]);
      }
      tmp = closure_0;
    }
  });
};
prototype["initializeFromState"] = function initializeFromState(arg0) {
  const self = this;
  if (this.initialize(arg0)) {
    self.asyncPersist();
  }
  if (self._isInitialized) {
    self.emitChange();
  } else {
    const allPersistKeys = PersistedStore.allPersistKeys;
    allPersistKeys.add(self.getClass().persistKey);
    self._isInitialized = true;
  }
};
PersistedStore["destroy"] = function destroy() {
  let c7 = null;
  Store.destroy();
  PersistedStore.clearPersistQueue({ type: "all" });
  const allPersistKeys = PersistedStore.allPersistKeys;
  allPersistKeys.clear();
  const userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
  userAgnosticPersistKeys.clear();
};
prototype["initializeIfNeeded"] = function initializeIfNeeded() {
  const self = this;
  if (!this._isInitialized) {
    const _Date = Date;
    const allPersistKeys = PersistedStore.allPersistKeys;
    const timestamp = Date.now();
    allPersistKeys.add(self.getClass().persistKey);
    const result = PersistedStore.migrateAndReadStoreState(self.getClass().persistKey, self.getClass().migrations);
    if (self.initialize(result.state)) {
      self.asyncPersist();
    }
    if (result.requiresPersist) {
      self.asyncPersist();
    }
    self._isInitialized = true;
    const _Date2 = Date;
    const diff = Date.now() - timestamp;
    if (diff > 5) {
      isTracing.mark("\u{1F9A5}", `${self.getName()}.initialize()`, diff);
      const obj = isTracing;
    }
  }
};
PersistedStore["migrateAndReadStoreState"] = function migrateAndReadStoreState(EmojiStore, items) {
  let _state;
  let _version;
  if (null != c7) {
    if (PersistedStore.shouldClear(c7, EmojiStore)) {
      const Storage2 = Storage.Storage;
      Storage2.remove(EmojiStore);
      return { state: "ct", requiresPersist: "Array" };
    }
  }
  let value = null;
  if (null == PersistedStore._clearAllPromise) {
    const Storage = Storage.Storage;
    value = Storage.get(EmojiStore);
  }
  if (value == null) {
    value = closure_6;
  }
  ({ _state, _version } = value);
  const tmp6 = callback(value, closure_3);
  let num = 0;
  if (null != items) {
    num = items.length;
  }
  if (0 !== num) {
    if (_version !== num) {
      if (null != items) {
        let num2 = _version;
        if (_version == null) {
          num2 = 0;
        }
        if (null == _version) {
          _state = tmp6;
        }
        let tmp7 = _state;
        let tmp8 = _state;
        if (num2 < num) {
          do {
            tmp7 = items[num2](tmp7);
            num2 = num2 + 1;
            tmp8 = tmp7;
          } while (num2 < num);
        }
        let obj = { state: null, requiresPersist: true };
        obj[0] = tmp8;
        return obj;
      }
    }
  }
  if (Object.values(tmp6).length > 0) {
    obj = { state: null, requiresPersist: true };
    obj[0] = tmp6;
  } else {
    obj = { state: null, requiresPersist: false };
    obj[0] = _state;
  }
  return obj;
};
prototype["asyncPersist"] = function asyncPersist() {
  const self = this;
  const getClassResult = this.getClass();
  const persistKey = getClassResult.persistKey;
  const throttleDelay = getClassResult.throttleDelay;
  if (!PersistedStore.disableWrites) {
    if (!getClassResult.disableWrite) {
      let value = tmp2._writePromises.get(persistKey);
      if (null == value) {
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          const _writeResolvers = outer1_9._writeResolvers;
          const items = [arg0, requestIdleCallback(closure_0 > 0 ? (() => outer1_2.throttledCallback(closure_0)) : (() => outer1_2.callback(closure_0)), { timeout: 500 })];
          const result = _writeResolvers.set(persistKey, items);
        });
        let result = tmp2._writePromises.set(persistKey, promise);
        value = promise;
        const _writePromises2 = tmp2._writePromises;
      }
      return value;
    }
  }
  return Promise.resolve(false);
};
prototype["persist"] = function persist() {
  const state = this.getState();
  const Storage = Storage.Storage;
  const result = Storage.set(this.getClass().persistKey, { _state: state, _version: this._version });
};
prototype["clear"] = function clear() {
  const Storage = Storage.Storage;
  Storage.remove(this.getClass().persistKey);
};
let set = new Set();
PersistedStore.allPersistKeys = set;
PersistedStore.userAgnosticPersistKeys = new Set();
const set1 = new Set();
PersistedStore._writePromises = new Map();
const map = new Map();
PersistedStore._writeResolvers = new Map();
PersistedStore.disableWrites = false;
PersistedStore.disableWrite = false;
PersistedStore.throttleDelay = 0;
class UserAgnosticStore extends PersistedStore {
  initializeFromState(arg0) {
    userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
    addResult = userAgnosticPersistKeys.add(this.getClass().persistKey);
    return super.initializeFromState(global);
  }
  initializeIfNeeded() {
    userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
    addResult = userAgnosticPersistKeys.add(this.getClass().persistKey);
    return super.initializeIfNeeded();
  }
}
const prototype2 = UserAgnosticStore.prototype;
prototype2["getState"] = function getState() {
  return this.getUserAgnosticState();
};
let result = set.fileFinishedImporting("../discord_common/js/packages/flux/PersistedStore.tsx");
const prototype3 = function DeviceSettingsStore() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype3 extends UserAgnosticStore {
}
const prototype4 = function OfflineCacheStore() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype4 extends UserAgnosticStore {
}

export { PersistedStore };
export const DeviceSettingsStore = prototype3;
export const OfflineCacheStore = prototype4;