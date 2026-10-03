// === Module 657: SetCache ===

// Module 657 (SetCache)
import MapCache from "MapCache" /* 607 */;
import _mod659 from "module_659" /* 659 */;
import module_658 from "module_658" /* 658 */;

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
prototype2.push = module_658;
prototype.add = module_658;
SetCache.prototype.has = _mod659;

export default SetCache;