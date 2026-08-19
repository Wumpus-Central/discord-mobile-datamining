// === Module 5038: initialize ===

// Module 5038 (initialize)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("lib/AutomaticLifecycleManager.tsx");
class AutomaticLifecycleManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[1] = {};
    map = new Map();
    obj[2] = map;
    return obj;
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
    const item = entries.forEach((item, index) => {
      [tmp, tmp2] = item;
      let callback = tmp2;
      if (typeof tmp2 !== "function") {
        callback = tmp2.callback;
      }
      const subscription = callback(table[0]).subscribe(tmp, callback);
    });
    const stores = self.stores;
    const item1 = stores.forEach((item, index) => {
      index.addChangeListener(item);
      item();
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
      const item = entries.forEach((item, index) => {
        [tmp, tmp2] = item;
        let callback = tmp2;
        if (typeof tmp2 !== "function") {
          callback = tmp2.callback;
        }
        callback(table[0]).unsubscribe(tmp, callback);
      });
      const stores = self.stores;
      const item1 = stores.forEach((item, index) => {
        index.removeChangeListener(item);
      });
    }
  }
};
prototype["_initialize"] = function _initialize() {

};
prototype["_terminate"] = function _terminate() {

};

export default AutomaticLifecycleManager;