// === Module 648: attach ===

// Module 648 (attach)
import obj132 from "obj132" /* 2 */;

let result = obj132.fileFinishedImporting("../discord_common/js/packages/flux/BatchedStoreListener.tsx");
class BatchedStoreListener {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.handleStoreChange = function handleStoreChange() {
      obj = obj(dependencyMap[0]);
      const changeSentinel = obj.getChangeSentinel();
      if (obj.storeVersionHandled !== changeSentinel) {
        obj2.changeCallback();
        obj2.storeVersionHandled = changeSentinel;
      }
    };
    obj.stores = global;
    obj.changeCallback = require;
    return obj;
  }
}
const prototype = BatchedStoreListener.prototype;
prototype["attach"] = function attach(arg0) {
  const self = this;
  closure_0 = arg0;
  const stores = this.stores;
  const item = stores.forEach((item, index) => {
    if (null == item) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("" + closure_0 + " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded " + index + " stores before error.");
      throw error;
    } else {
      const result = item.addReactChangeListener(self.handleStoreChange);
    }
  });
};
prototype["detach"] = function detach() {
  const self = this;
  const stores = this.stores;
  const item = stores.forEach((item, index) => item.removeReactChangeListener(self.handleStoreChange));
};

export { BatchedStoreListener };