// discord_common/js/packages/flux/BatchedStoreListener.tsx
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("../discord_common/js/packages/flux/BatchedStoreListener.tsx");
class BatchedStoreListener {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.handleStoreChange = function handleStoreChange() {
      obj = obj(closure_1_1[0]);
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
  const item = stores.forEach((addReactChangeListener) => {
    if (null == addReactChangeListener) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("" + closure_0 + " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded " + arg1 + " stores before error.");
      throw error;
    } else {
      const result = addReactChangeListener.addReactChangeListener(self.handleStoreChange);
    }
  });
};
prototype["detach"] = function detach() {
  const self = this;
  const stores = this.stores;
  const item = stores.forEach((removeReactChangeListener) => removeReactChangeListener.removeReactChangeListener(self.handleStoreChange));
};

export { BatchedStoreListener };