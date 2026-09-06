// === Module 507: ChangeListeners ===

// Module 507 (ChangeListeners)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/flux/ChangeListeners.tsx");
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
    obj.addConditional = function addConditional(fn) {
      closure_0 = fn;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let conditionalCallback;
      if (!flag) {
        conditionalCallback = function conditionalCallback() {
          if (false === closure_0()) {
            obj.remove(conditionalCallback);
          }
        };
        closure_0.add(conditionalCallback);
        const conditionalListeners = closure_0.conditionalListeners;
        conditionalListeners.add(conditionalCallback);
      }
    };
    obj.removeAllConditional = function removeAllConditional() {
      let conditionalListeners = obj.conditionalListeners;
      const item = conditionalListeners.forEach((item) => {
        listeners = listeners.listeners;
        return listeners.delete(item);
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
  const item = listeners.forEach((fn) => fn());
};

export { ChangeListeners };