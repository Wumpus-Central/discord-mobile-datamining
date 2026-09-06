// discord_app/lib/LifecycleManager.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("lib/LifecycleManager.tsx");
class LifecycleManager {
  constructor() {
    return Object.assign({ isInitialized: false });
  }
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
