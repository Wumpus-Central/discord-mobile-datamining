// === Module 7118: AutomaticLifecycleManager ===

// Module 7118 (AutomaticLifecycleManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/AutomaticLifecycleManager.tsx");
class AutomaticLifecycleManager {
  constructor() {
    merged = Object.assign({ initializedCount: 0, actions: null, stores: null });
    merged[1] = {};
    map = new Map();
    merged[2] = map;
    return merged;
  }
}
const prototype = AutomaticLifecycleManager.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.initializedCount = this.initializedCount + 1;
  if (this.initializedCount <= 1) {
    self._initialize();
    const _Object = Object;
    const entries = Object.entries(self.actions);
    const item = entries.forEach((item) => {
      [tmp, tmp2] = item;
      let callback = tmp2;
      if (typeof tmp2 !== "function") {
        callback = tmp2.callback;
      }
      const subscription = DispatcherDefault.subscribe(tmp, callback);
    });
    const stores = self.stores;
    const item1 = stores.forEach((fn, addChangeListener) => {
      addChangeListener.addChangeListener(fn);
      fn();
    });
  }
};
prototype["terminate"] = function terminate(arg0) {
  const self = this;
  if (this.initializedCount > 0) {
    if (arg0) {
      self.initializedCount = 0;
    } else {
      self.initializedCount = self.initializedCount - 1;
    }
    if (0 === self.initializedCount) {
      self._terminate();
      const _Object = Object;
      const entries = Object.entries(self.actions);
      const item = entries.forEach((item) => {
        [tmp, tmp2] = item;
        let callback = tmp2;
        if (typeof tmp2 !== "function") {
          callback = tmp2.callback;
        }
        DispatcherDefault.unsubscribe(tmp, callback);
      });
      const stores = self.stores;
      const item1 = stores.forEach((item, removeChangeListener) => {
        removeChangeListener.removeChangeListener(item);
      });
    }
  }
};
prototype["_initialize"] = function _initialize() {

};
prototype["_terminate"] = function _terminate() {

};

export default AutomaticLifecycleManager;