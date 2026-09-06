// === Module 646: SetCache ===

// Module 646 (SetCache)
import MapCache from "MapCache" /* 596 */;
import _mod648 from "module_648" /* 648 */;
import module_647 from "module_647" /* 647 */;

class SetCache {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    tmp = new closure_0(closure_1[0])();
    this.__data__ = tmp;
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      addResult = self.add(global[num2]);
    }
    return;
  }
}
({ prototype, prototype: prototype2 } = SetCache);
prototype2.push = module_647;
prototype.add = module_647;
SetCache.prototype.has = _mod648;

export default SetCache;