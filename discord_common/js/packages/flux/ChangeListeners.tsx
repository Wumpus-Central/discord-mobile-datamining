// discord_common/js/packages/flux/ChangeListeners.tsx
import set2 from "../../../../_runtime/00002_set.js";

const result = set2.fileFinishedImporting("../discord_common/js/packages/flux/ChangeListeners.tsx");
class ChangeListeners {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    set = new Set();
    obj.listeners = set;
    set1 = new Set();
    obj.conditionalListeners = set1;
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
    obj.addConditional = function addConditional(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let conditionalCallback;
      if (!flag) {
        conditionalCallback = function conditionalCallback() {
          if (false === lib()) {
            lib.remove(conditionalCallback);
          }
        };
        obj.add(conditionalCallback);
        const conditionalListeners = obj.conditionalListeners;
        conditionalListeners.add(conditionalCallback);
      }
    };
    obj.removeAllConditional = function removeAllConditional() {
      let conditionalListeners = obj.conditionalListeners;
      const item = conditionalListeners.forEach((arg0) => {
        listeners = listeners.listeners;
        return listeners.delete(arg0);
      });
      conditionalListeners = obj.conditionalListeners;
      conditionalListeners.clear();
    };
    return obj;
  }
}
const prototype = ChangeListeners.prototype;
prototype["has"] = function has(arg0) {
  const listeners = this.listeners;
  return listeners.has(arg0);
};
prototype["hasAny"] = function hasAny() {
  return this.listeners.size > 0;
};
prototype["invokeAll"] = function invokeAll() {
  const listeners = this.listeners;
  const item = listeners.forEach((arg0) => arg0());
};

export { ChangeListeners };
