// discord_common/js/packages/flux/BatchedStoreListener.tsx
import EmitterDefault from "Emitter.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("../discord_common/js/packages/flux/BatchedStoreListener.tsx");
class BatchedStoreListener {
  constructor(items, memo) {
    let obj = Object.create(new.target.prototype);
    obj.handleStoreChange = function handleStoreChange() {
      obj = EmitterDefault;
      const changeSentinel = obj.getChangeSentinel();
      if (obj.storeVersionHandled !== changeSentinel) {
        obj.changeCallback();
        obj.storeVersionHandled = changeSentinel;
      }
    };
    obj.stores = items;
    obj.changeCallback = memo;
    return obj;
  }
  attach(arg0) {
    let self = this;
    let closure_0 = arg0;
    const stores = this.stores;
    const item = stores.forEach(function (addReactChangeListener, index) {
      if (null == addReactChangeListener) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        self = this;
        const self2 = this;
        const error = new Error(
          "" +
            closure_0 +
            " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded " +
            index +
            " stores before error.",
        );
        throw error;
      } else {
        const result = addReactChangeListener.addReactChangeListener(self.handleStoreChange);
      }
    });
  }
  detach() {
    const self = this;
    const stores = this.stores;
    const item = stores.forEach((removeReactChangeListener) =>
      removeReactChangeListener.removeReactChangeListener(self.handleStoreChange),
    );
  }
}
const prototype = BatchedStoreListener.prototype;

export { BatchedStoreListener };
