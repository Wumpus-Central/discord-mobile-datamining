// === Module 782: SetCache ===

// Module 782 (SetCache)
import setCacheAdd from "setCacheAdd";

let prototype;
let prototype2;
class SetCache {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    tmp = new require("MapCache")();
    this.__data__ = tmp;
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      addResult = self.add(global[num2]);
    }
    return;
  }
}
({ prototype, prototype: prototype2 } = SetCache);
prototype2.push = setCacheAdd;
prototype.add = setCacheAdd;
SetCache.prototype.has = require("setCacheHas");

export default SetCache;