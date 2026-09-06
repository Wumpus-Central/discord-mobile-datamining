// _runtime/00646_SetCache.js
import MapCache from "00596_MapCache.js";
import _mod648 from "metro/00648__.js";
import 00647__ from "metro/00647__.js";

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