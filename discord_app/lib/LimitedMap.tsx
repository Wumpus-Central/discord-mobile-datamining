// === Module 7797: LimitedMap ===

// Module 7797 (LimitedMap)
import size from "module_2" /* 2 */;

class LimitedMap extends Map {
  constructor(maxSize) {
    const tmp = new LimitedMap(new.target);
    tmp.maxSize = maxSize;
    return tmp;
  }
  set(arg0, arg1) {
    const self = this;
    if (this.size >= this.maxSize) {
      const _delete = self.delete;
      const iter = self.keys();
      _delete(iter.next().value);
    }
    return super.set(arg0, arg1);
  }
}
let closure_0 = LimitedMap.prototype;
const result = size.fileFinishedImporting("lib/LimitedMap.tsx");

export default LimitedMap;