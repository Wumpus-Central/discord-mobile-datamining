// discord_common/js/packages/flux/Store.tsx
import AppStartPerformanceDefault from "../app-start-performance/AppStartPerformance.tsx";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import flux_EmitterDefault from "Emitter.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const React4 = [];
let c5 = false;
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/Store.tsx");
class Store {
  constructor(arg0, arg1, arg2) {
    obj = require;
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    changeListeners = new closure_0(closure_2[0]).ChangeListeners();
    obj._changeCallbacks = changeListeners;
    changeListeners1 = new closure_0(closure_2[0]).ChangeListeners();
    obj._reactChangeCallbacks = changeListeners1;
    obj._syncWiths = [];
    obj._isInitialized = false;
    obj.doEmitChanges = function doEmitChanges(arg0) {
      let hasAnyResult = obj._changeCallbacks.hasAny();
      if (!hasAnyResult) {
        hasAnyResult = obj._reactChangeCallbacks.hasAny();
        const _reactChangeCallbacks = obj._reactChangeCallbacks;
      }
      if (!hasAnyResult) {
        hasAnyResult = obj._syncWiths.length > 0;
      }
      if (hasAnyResult) {
        flux_EmitterDefault.markChanged(obj);
        let isPaused = flux_EmitterDefault.getIsPaused();
        if (isPaused) {
          isPaused = null != obj._mustEmitChanges;
        }
        if (isPaused) {
          isPaused = obj._mustEmitChanges(arg0);
        }
        if (isPaused) {
          flux_EmitterDefault.resume(false);
          const tmp2Result = flux_EmitterDefault;
        }
      }
      const _changeCallbacks = obj._changeCallbacks;
    };
    obj.addChangeListener = obj._changeCallbacks.add;
    obj.removeChangeListener = obj._changeCallbacks.remove;
    obj.addConditionalChangeListener = obj._changeCallbacks.addConditional;
    obj.removeAllConditionalChangeListeners = obj._changeCallbacks.removeAllConditional;
    obj.addReactChangeListener = obj._reactChangeCallbacks.add;
    obj.removeReactChangeListener = obj._reactChangeCallbacks.remove;
    obj._dispatcher = global;
    _dispatcher = obj._dispatcher;
    obj._dispatchToken = _dispatcher.createToken();
    if (require == null) {
      obj = {};
    }
    result = obj.registerActionHandlers(obj, importDefault);
    arr = closure_4.push(obj);
    if (c5) {
      initializeIfNeededResult = obj.initializeIfNeeded();
    }
    return obj;
  }
}
const prototype = Store.prototype;
Store["initialize"] = function initialize() {
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
};
Store["destroy"] = function destroy() {
  closure_4.length = 0;
  flux_EmitterDefault.destroy();
};
Store["getAll"] = function getAll() {
  return closure_4;
};
Store["removeAllConditionalListeners"] = function removeAllConditionalListeners() {
  const item = closure_4.forEach((_changeCallbacks) => {
    _changeCallbacks._changeCallbacks.removeAllConditional();
  });
};
prototype["registerActionHandlers"] = function registerActionHandlers(arg0, arg1) {
  const _dispatcher = this._dispatcher;
  _dispatcher.register(this.getName(), arg0, this.doEmitChanges, arg1, this._dispatchToken);
};
prototype["getName"] = function getName() {
  let name = this.constructor.displayName;
  if (name == null) {
    name = this.constructor.name;
  }
  return name;
};
prototype["initializeIfNeeded"] = function initializeIfNeeded() {
  const self = this;
  if (!this._isInitialized) {
    const _Date = Date;
    const timestamp = Date.now();
    self.initialize();
    self._isInitialized = true;
    const _Date2 = Date;
    const diff = Date.now() - timestamp;
    if (diff > 5) {
      AppStartPerformanceDefault.mark("\u{1F9A5}", `${self.getName()}.initialize()`, diff);
    }
  }
};
prototype["initialize"] = function initialize() {};
prototype["syncWith"] = function syncWith(items, handleUserSettingsProtoStoreChange, arg2) {
  const self = this;
  let wrapper = handleUserSettingsProtoStoreChange;
  let num = arg2;
  items = [...items];
  this.waitFor.apply(items);
  if (null != arg2) {
    closure_2 = 0;
    wrapper = function wrapper() {
      if (changeSentinel !== obj.getChangeSentinel()) {
        changeSentinel = flux_EmitterDefault.getChangeSentinel();
        if (false !== wrapper()) {
          self.emitChange();
        }
        const tmpResult = flux_EmitterDefault;
      }
      obj = flux_EmitterDefault;
    };
    closure_0 = wrapper;
    if (num == null) {
      num = 0;
    }
    closure_2 = null;
    closure_0 =
      0 === num
        ? () => {
            clearImmediate(immediate);
            immediate = setImmediate(wrapper);
          }
        : () => {
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
              }, closure_0);
            }
          };
    const item = items.forEach((addChangeListener) => addChangeListener.addChangeListener(closure_0));
  } else {
    const item1 = items.forEach((_syncWiths) => {
      _syncWiths = _syncWiths._syncWiths;
      _syncWiths.push({ func: wrapper, store: self });
    });
  }
};
prototype["waitFor"] = function waitFor() {
  const self = this;
  const items = [...arguments];
  const mapped = items.map((_dispatcher, index) => {
    let dispatchToken = null;
    _modDef38(
      null != _dispatcher,
      "Store.waitFor(...) called with null Store at index " + index + " for store " + self.getName(),
    );
    if (null != _dispatcher._dispatcher) {
      _modDef38(_dispatcher._dispatcher === self._dispatcher, "Stores belong to two separate dispatchers.");
      dispatchToken = _dispatcher.getDispatchToken();
    }
    return dispatchToken;
  });
  const _dispatcher = this._dispatcher;
  let dispatchToken = this.getDispatchToken();
  _dispatcher.addDependencies(
    dispatchToken,
    mapped.filter((item) => null != item),
  );
};
prototype["emitChange"] = function emitChange() {
  flux_EmitterDefault.markChanged(this);
};
prototype["getDispatchToken"] = function getDispatchToken() {
  return this._dispatchToken;
};
prototype["mustEmitChanges"] = function mustEmitChanges(arg0) {
  let fn = arg0;
  if (arg0 === undefined) {
    fn = function t() {
      return true;
    };
  }
  this._mustEmitChanges = fn;
};
Store.initialized = new Promise((arg0) => {
  closure_0 = arg0;
  function t() {
    closure_0();
    c3 = null;
  }
});

export { Store };
