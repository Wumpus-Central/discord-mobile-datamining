// === Module 4726: initialize ===

// Module 4726 (initialize)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("lib/LifecycleManager.tsx");
class LifecycleManager {
}
const prototype = LifecycleManager.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  const items = [...arguments];
  if (!this.isInitialized) {
    self.isInitialized = true;
    const _initialize = self._initialize;
    const items1 = [];
    HermesBuiltin.arraySpread(items, 0);
    HermesBuiltin.apply(items1, self);
  }
};
prototype["terminate"] = function terminate() {
  const self = this;
  if (this.isInitialized) {
    self.isInitialized = false;
    self._terminate();
  }
};

export default LifecycleManager;