// === Module 4720: initialize ===

// Module 4720 (initialize)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("lib/LifecycleManager.tsx");
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