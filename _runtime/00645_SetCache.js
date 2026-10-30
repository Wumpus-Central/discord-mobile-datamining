// === Module 645: SetCache ===

// Module 645 (SetCache)
import MapCache from "MapCache" /* 595 */;
import _mod647 from "module_647" /* 647 */;
import module_646 from "module_646" /* 646 */;

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
prototype2.push = module_646;
prototype.add = module_646;
SetCache.prototype.has = _mod647;

export default SetCache;