// discord_common/js/packages/flux/Store.tsx
import AppStartPerformanceDefault from "../app-start-performance/AppStartPerformance.tsx";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import EmitterDefault from "Emitter.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _syncWiths, c2, c3;

const React3 = [];
let c5 = false;
const promise = new Promise((arg0) => {
  let closure_0 = arg0;
  function t() {
    closure_0();
    c3 = null;
  }
});
const result = size.fileFinishedImporting("../discord_common/js/packages/flux/Store.tsx");
class Store {
  constructor(_dispatcher, arg1, arg2) {
    let obj = arg1;
    let obj2 = Object.create(new.target.prototype);
    const changeListeners = new obj2(507).ChangeListeners();
    obj2._changeCallbacks = changeListeners;
    const changeListeners1 = new obj2(507).ChangeListeners();
    obj2._reactChangeCallbacks = changeListeners1;
    obj2._syncWiths = [];
    obj2._isInitialized = false;
    obj2.doEmitChanges = function doEmitChanges(type) {
      const _changeCallbacks = obj2._changeCallbacks;
      let hasAnyResult = _changeCallbacks.hasAny();
      if (!hasAnyResult) {
        const _reactChangeCallbacks = obj2._reactChangeCallbacks;
        hasAnyResult = _reactChangeCallbacks.hasAny();
      }
      if (!hasAnyResult) {
        hasAnyResult = obj._syncWiths.length > 0;
      }
      if (hasAnyResult) {
        obj2 = EmitterDefault;
        obj2.markChanged(obj2);
        const obj3 = EmitterDefault;
        const isPaused = obj3.getIsPaused() && null != obj._mustEmitChanges && obj._mustEmitChanges(type);
        if (isPaused) {
          const tmp2Result = EmitterDefault;
          tmp2Result.resume(false);
        }
      }
    };
    obj2.addChangeListener = obj2._changeCallbacks.add;
    obj2.removeChangeListener = obj2._changeCallbacks.remove;
    obj2.addConditionalChangeListener = obj2._changeCallbacks.addConditional;
    obj2.removeAllConditionalChangeListeners = obj2._changeCallbacks.removeAllConditional;
    obj2.addReactChangeListener = obj2._reactChangeCallbacks.add;
    obj2.removeReactChangeListener = obj2._reactChangeCallbacks.remove;
    obj2._dispatcher = _dispatcher;
    _dispatcher = obj2._dispatcher;
    const register = _dispatcher.register;
    const name = obj2.getName();
    if (arg1 == null) {
      obj = {};
    }
    obj2._dispatchToken = register(name, obj, obj2.doEmitChanges, arg2);
    closure_4.push(obj2);
    if (c5) {
      obj2.initializeIfNeeded();
    }
    return obj2;
  }
  static initialize() {
    c5 = true;
    const item = closure_4.forEach((initializeIfNeeded) => initializeIfNeeded.initializeIfNeeded());
    if (null != c3) {
      if (typeof c3 === "function") {
        closure_131_0();
        c3 = null;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  static destroy() {
    closure_4.length = 0;
    const obj = EmitterDefault;
    obj.destroy();
  }
  static getAll() {
    return closure_4;
  }
  static removeAllConditionalListeners() {
    const item = closure_4.forEach((_changeCallbacks) => {
      _changeCallbacks._changeCallbacks.removeAllConditional();
    });
  }
  getName() {
    let name = this.constructor.displayName;
    if (name == null) {
      name = this.constructor.name;
    }
    return name;
  }
  initializeIfNeeded() {
    const self = this;
    if (!this._isInitialized) {
      const _Date = Date;
      const timestamp = Date.now();
      self.initialize();
      self._isInitialized = true;
      const _Date2 = Date;
      const diff = Date.now() - timestamp;
      if (diff > 5) {
        const obj = AppStartPerformanceDefault;
        obj.mark("\u{1F9A5}", `${self.getName()}.initialize()`, diff);
      }
    }
  }
  initialize() {}
  syncWith(items, handleUserSettingsProtoStoreChange, arg2) {
    const self = this;
    const func = handleUserSettingsProtoStoreChange;
    let num = arg2;
    items = [...items];
    this.waitFor.apply(items);
    if (null != arg2) {
      let closure_2 = 0;
      function wrapper() {
        let changeSentinel;
        const obj = EmitterDefault;
        if (changeSentinel !== obj.getChangeSentinel()) {
          const tmpResult = EmitterDefault;
          changeSentinel = tmpResult.getChangeSentinel();
          if (false !== func()) {
            self.emitChange();
          }
        }
      }
      let closure_0 = wrapper;
      if (num == null) {
        num = 0;
      }
      closure_2 = null;
      closure_0 =
        0 === num
          ? () => {
              let immediate;
              clearImmediate(immediate);
              immediate = setImmediate(wrapper);
            }
          : () => {
              let timeout;
              if (null == timeout) {
                const _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  try {
                    wrapper();
                    c2 = null;
                  } catch (tmp4) {
                    c2 = null;
                    throw tmp4;
                  }
                }, num);
              }
            };
      const item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
    } else {
      const item1 = items.forEach((_syncWiths) => {
        _syncWiths = _syncWiths._syncWiths;
        const obj = { func, store: self };
        _syncWiths.push(obj);
      });
    }
  }
  waitFor() {
    const self = this;
    const items = [...arguments];
    const mapped = items.map((_dispatcher, index) => {
      let dispatchToken = null;
      const tmp3 = _modDef38;
      const tmp5 = null != _dispatcher;
      tmp3(tmp5, "Store.waitFor(...) called with null Store at index " + index + " for store " + self.getName());
      if (null != _dispatcher._dispatcher) {
        _modDef38(_dispatcher._dispatcher === self._dispatcher, "Stores belong to two separate dispatchers.");
        dispatchToken = _dispatcher.getDispatchToken();
      }
      return dispatchToken;
    });
    const _dispatcher = this._dispatcher;
    const addDependencies = _dispatcher.addDependencies;
    let dispatchToken = this.getDispatchToken();
    addDependencies(
      dispatchToken,
      mapped.filter((item) => null != item),
    );
  }
  emitChange() {
    const obj = EmitterDefault;
    obj.markChanged(this);
  }
  getDispatchToken() {
    return this._dispatchToken;
  }
  mustEmitChanges(arg0) {
    let fn = arg0;
    if (arg0 === undefined) {
      fn = function t() {
        return true;
      };
    }
    this._mustEmitChanges = fn;
  }
}
const prototype = Store.prototype;
Store.initialized = promise;

export { Store };
