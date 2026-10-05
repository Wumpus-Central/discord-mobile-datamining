// === Module 6613: AutomaticLifecycleManager ===

// Module 6613 (AutomaticLifecycleManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/AutomaticLifecycleManager.tsx");
class AutomaticLifecycleManager {
  constructor() {
    const merged = Object.assign({ initializedCount: 0, actions: null, stores: null });
    merged[1] = {};
    merged[2] = new Map();
    new Map();
    return merged;
  }
  initialize() {
    const self = this;
    this.initializedCount = this.initializedCount + 1;
    if (this.initializedCount <= 1) {
      self._initialize();
      const tmp2 = globalThis;
      const _Object = Object;
      const entries = Object.entries(self.actions);
      const item = entries.forEach((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        let callback = tmp2;
        const subscribe = DispatcherDefault.subscribe;
        DispatcherDefault;
        if (typeof tmp2 !== "function") {
          callback = tmp2.callback;
        }
        const subscription = subscribe(tmp, callback);
      });
      const stores = self.stores;
      const item1 = stores.forEach((fn, addChangeListener) => {
        addChangeListener.addChangeListener(fn);
        fn();
      });
    }
  }
  terminate(arg0) {
    const self = this;
    if (this.initializedCount > 0) {
      const tmp = arg0;
      if (tmp) {
        self.initializedCount = 0;
      } else {
        self.initializedCount = self.initializedCount - 1;
      }
      if (0 === self.initializedCount) {
        self._terminate();
        const tmp3 = globalThis;
        const _Object = Object;
        const entries = Object.entries(self.actions);
        const item = entries.forEach((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          let callback = tmp2;
          const unsubscribe = DispatcherDefault.unsubscribe;
          DispatcherDefault;
          if (typeof tmp2 !== "function") {
            callback = tmp2.callback;
          }
          unsubscribe(tmp, callback);
        });
        const stores = self.stores;
        const item1 = stores.forEach((item, removeChangeListener) => {
          removeChangeListener.removeChangeListener(item);
        });
      }
    }
  }
  _initialize() {

  }
  _terminate() {

  }
}
const prototype = AutomaticLifecycleManager.prototype;

export default AutomaticLifecycleManager;