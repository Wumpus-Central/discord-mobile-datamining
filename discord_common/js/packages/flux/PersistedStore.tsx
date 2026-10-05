// discord_common/js/packages/flux/PersistedStore.tsx
import AppStartPerformanceDefault from "../app-start-performance/AppStartPerformance.tsx";
import Store2 from "Store.tsx";
import Storage3 from "../storage/Storage.tsx";
import throttleDefault from "../../../../_runtime/00550_throttle.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = ["_state", "_version"];
const Store = Store2.Store;
let closure_6 = { _state: "Array", _version: "Set" };
let c7 = null;
class PersistedStore extends Store {
  constructor(arg0, arg1, arg2) {
    const tmp32 = new tmp3(arg0, arg1, arg2, new.target, tmp3, tmp2, tmp, this);
    let closure_0 = tmp32;
    let num = 0;
    if (null != tmp32.getClass().migrations) {
      num = tmp32.getClass().migrations.length;
    }
    tmp32._version = num;
    tmp32.callback = function callback(fn) {
      const persistKey = closure_0.getClass().persistKey;
      closure_0.persist();
      const _writePromises = PersistedStore._writePromises;
      _writePromises.delete(persistKey);
      const _writeResolvers = PersistedStore._writeResolvers;
      _writeResolvers.delete(persistKey);
      fn();
    };
    const tmp4 = throttleDefault;
    tmp32.throttledCallback = tmp4((arg0) => closure_0.callback(arg0), tmp32.getClass().throttleDelay, {
      leading: false,
    });
    if (typeof tmp32.getClass().persistKey !== "string") {
      const _Error3 = Error;
      const _HermesInternal3 = HermesInternal;
      const self5 = this;
      const self6 = this;
      const error = new Error(
        "" +
          tmp32.getClass().name +
          " initialized without a `persistKey`. Add one so we know where to save your stuff!",
      );
      throw error;
    } else if (typeof tmp32.initialize !== "function") {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error1 = new Error(
        "" +
          tmp32.getClass().name +
          " initialized without an `initialize` method. Add one that accepts the initial cached state.",
      );
      throw error1;
    } else if (typeof tmp32.getState !== "function") {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error2 = new Error(
        "" +
          tmp32.getClass().name +
          " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.",
      );
      throw error2;
    } else {
      tmp32.addChangeListener(() => closure_0.asyncPersist());
      return tmp32;
    }
  }
  getClass() {
    return this.constructor;
  }
  static clearAll(arg0) {
    let closure_0 = arg0;
    let closure_7 = arg0;
    if (null == PersistedStore._clearAllPromise) {
      const self = this;
      const self2 = this;
      const promise = new Promise((arg0) => {
        closure_0 = arg0;
        requestIdleCallback(
          () => {
            PersistedStore.clearPersistQueue(closure_0);
            const allPersistKeys = PersistedStore.allPersistKeys;
            const item = allPersistKeys.forEach((item) => {
              if (closure_2_9.shouldClear(closure_1_0, item)) {
                const Storage = closure_0(closure_2_2[2]).Storage;
                Storage.remove(item);
              }
            });
            const all = Store.getAll();
            const item1 = all.forEach((getClass) => {
              const shouldClearResult =
                getClass instanceof closure_2_9 && closure_2_9.shouldClear(closure_1_0, getClass.getClass().persistKey);
              if (shouldClearResult) {
                getClass._isInitialized = false;
                getClass.initializeIfNeeded();
              }
            });
            PersistedStore._clearAllPromise = null;
            closure_0();
          },
          { timeout: 500 },
        );
      });
      PersistedStore._clearAllPromise = promise;
    }
    return PersistedStore._clearAllPromise;
  }
  static shouldClear(c7, persistKey) {
    const omit = _null.omit;
    let hasItem;
    if (omit != null) {
      hasItem = omit.includes(persistKey);
    }
    if (hasItem) {
      return false;
    } else {
      const type = _null.type;
      if ("all" === type) {
        return true;
      } else if ("user-data-only" === type) {
        const userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
        return !userAgnosticPersistKeys.has(persistKey);
      } else {
        const type2 = _null.type;
        return false;
      }
    }
  }
  static clearPersistQueue(arg0) {
    let closure_0 = arg0;
    const _writeResolvers1 = PersistedStore._writeResolvers;
    const item = _writeResolvers1.forEach((item, index) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      if (PersistedStore.shouldClear(closure_0, index)) {
        const _writePromises = PersistedStore._writePromises;
        _writePromises.delete(index);
        const _writeResolvers = PersistedStore._writeResolvers;
        _writeResolvers.delete(index);
        cancelIdleCallback(tmp2);
        tmp(false);
      }
    });
    let _writePromises = PersistedStore._writePromises;
    _writePromises.clear();
    let _writeResolvers = PersistedStore._writeResolvers;
    _writeResolvers.clear();
  }
  static getAllStates() {
    const _writePromises = PersistedStore._writePromises;
    const allPromises = Promise.all(Array.from(_writePromises.values()));
    return allPromises.then(() => {
      const obj = {};
      allPersistKeys = allPersistKeys.allPersistKeys;
      const item = allPersistKeys.forEach((item) => {
        const Storage = Storage3.Storage;
        let value = Storage.get(item);
        if (value == null) {
          value = closure_2_6;
        }
        obj[item] = value._state;
      });
      return obj;
    });
  }
  static initializeAll(arg0) {
    let closure_0 = arg0;
    const all = Store.getAll();
    const item = all.forEach((getClass) => {
      if (getClass instanceof PersistedStore) {
        const persistKey = getClass.getClass().persistKey;
        if (closure_0.hasOwnProperty(persistKey)) {
          getClass.initializeFromState(closure_0[persistKey]);
        }
      }
    });
  }
  initializeFromState(arg0) {
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
  }
  static destroy() {
    let c7 = null;
    Store.destroy();
    PersistedStore.clearPersistQueue({ type: "all" });
    const allPersistKeys = PersistedStore.allPersistKeys;
    allPersistKeys.clear();
    const userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
    userAgnosticPersistKeys.clear();
  }
  initializeIfNeeded() {
    const self = this;
    if (!this._isInitialized) {
      const _Date = Date;
      const allPersistKeys = PersistedStore.allPersistKeys;
      const timestamp = Date.now();
      allPersistKeys.add(self.getClass().persistKey);
      const migrateAndReadStoreState = PersistedStore.migrateAndReadStoreState;
      const result = migrateAndReadStoreState(self.getClass().persistKey, self.getClass().migrations);
      const requiresPersist = result.requiresPersist;
      if (self.initialize(result.state)) {
        self.asyncPersist();
      }
      if (requiresPersist) {
        self.asyncPersist();
      }
      self._isInitialized = true;
      const _Date2 = Date;
      const diff = Date.now() - timestamp;
      if (diff > 5) {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F9A5}", `${self.getName()}.initialize()`, diff);
      }
    }
  }
  static migrateAndReadStoreState(EmojiStore, items) {
    let _state;
    let _version;
    let obj;
    if (null != c7) {
      if (PersistedStore.shouldClear(c7, EmojiStore)) {
        const Storage2 = Storage3.Storage;
        Storage2.remove(EmojiStore);
        return { state: "Set", requiresPersist: true };
      }
    }
    let value = null;
    if (null == PersistedStore._clearAllPromise) {
      const Storage = Storage3.Storage;
      value = Storage.get(EmojiStore);
    }
    if (value == null) {
      value = closure_6;
    }
    ({ _state, _version } = value);
    const tmp6 = _objectWithoutProperties(value, closure_3);
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
          return { state: tmp8, requiresPersist: true };
        }
      }
    }
    if (Object.values(tmp6).length > 0) {
      obj = { state: tmp6, requiresPersist: true };
      const obj3 = { state: tmp6, requiresPersist: true };
    } else {
      obj = { state: _state, requiresPersist: false };
    }
    return obj;
  }
  asyncPersist() {
    let self = this;
    const getClassResult = this.getClass();
    const persistKey = getClassResult.persistKey;
    const throttleDelay = getClassResult.throttleDelay;
    if (!PersistedStore.disableWrites) {
      if (!getClassResult.disableWrite) {
        const _writePromises = PersistedStore._writePromises;
        let value = _writePromises.get(persistKey);
        if (null == value) {
          self = this;
          const self2 = this;
          const promise = new Promise((arg0) => {
            let closure_0 = arg0;
            _writeResolvers = _writeResolvers._writeResolvers;
            const items = [arg0];
            set = _writeResolvers.set;
            items[1] = requestIdleCallback(
              closure_0 > 0 ? () => self.throttledCallback(closure_0) : () => self.callback(closure_0),
              { timeout: 500 },
            );
            const result = set(persistKey, items);
          });
          const _writePromises2 = PersistedStore._writePromises;
          let result = _writePromises2.set(persistKey, promise);
          value = promise;
        }
        return value;
      }
    }
    return Promise.resolve(false);
  }
  persist() {
    const persistKey = this.getClass().persistKey;
    const state = this.getState();
    const _version = this._version;
    const Storage = Storage3.Storage;
    const result = Storage.set(persistKey, { _state: state, _version });
  }
  clear() {
    const persistKey = this.getClass().persistKey;
    const Storage = Storage3.Storage;
    Storage.remove(persistKey);
  }
}
const prototype = PersistedStore.prototype;
let set = new Set();
PersistedStore.allPersistKeys = set;
PersistedStore.userAgnosticPersistKeys = new Set();
new Set();
PersistedStore._writePromises = new Map();
new Map();
PersistedStore._writeResolvers = new Map();
PersistedStore.disableWrites = false;
PersistedStore.disableWrite = false;
PersistedStore.throttleDelay = 0;
new Map();
class UserAgnosticStore extends PersistedStore {
  initializeFromState(arg0) {
    const userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
    userAgnosticPersistKeys.add(this.getClass().persistKey);
    return super.initializeFromState(arg0);
  }
  initializeIfNeeded() {
    const userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
    userAgnosticPersistKeys.add(this.getClass().persistKey);
    return super.initializeIfNeeded();
  }
  getState() {
    return this.getUserAgnosticState();
  }
}
let closure_11 = UserAgnosticStore.prototype;
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/PersistedStore.tsx");
class DeviceSettingsStore extends UserAgnosticStore {}
class OfflineCacheStore extends UserAgnosticStore {}

export { PersistedStore };
export { DeviceSettingsStore };
export { OfflineCacheStore };
