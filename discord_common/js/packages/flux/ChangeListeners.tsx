// discord_common/js/packages/flux/ChangeListeners.tsx
import size from "../../../../_runtime/metro/00002__.js";

let set;

const result = size.fileFinishedImporting("../discord_common/js/packages/flux/ChangeListeners.tsx");
class ChangeListeners {
  constructor() {
    const obj = Object.create(new.target.prototype);
    set = new Set();
    obj.listeners = set;
    obj.conditionalListeners = new Set();
    obj.add = function add(arg0) {
      const listeners = obj.listeners;
      listeners.add(arg0);
    };
    obj.remove = function remove(arg0) {
      const listeners = obj.listeners;
      listeners.delete(arg0);
      const conditionalListeners = obj.conditionalListeners;
      conditionalListeners.delete(arg0);
    };
    obj.addConditional = function addConditional(fn) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let conditionalCallback;
      if (!flag) {
        conditionalCallback = function conditionalCallback() {
          if (false === fn()) {
            obj.remove(conditionalCallback);
          }
        };
        fn.add(conditionalCallback);
        const conditionalListeners = set.conditionalListeners;
        conditionalListeners.add(conditionalCallback);
      }
    };
    obj.removeAllConditional = function removeAllConditional() {
      const conditionalListeners1 = obj.conditionalListeners;
      const item = conditionalListeners1.forEach((item) => {
        listeners = listeners.listeners;
        return listeners.delete(item);
      });
      const conditionalListeners = obj.conditionalListeners;
      conditionalListeners.clear();
    };
    new Set();
    return obj;
  }
  has(arg0) {
    const listeners = this.listeners;
    return listeners.has(arg0);
  }
  hasAny() {
    return this.listeners.size > 0;
  }
  invokeAll() {
    const listeners = this.listeners;
    const item = listeners.forEach((fn) => fn());
  }
}
const prototype = ChangeListeners.prototype;

export { ChangeListeners };
