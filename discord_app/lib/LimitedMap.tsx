// === Module 8023: LimitedMap ===

// Module 8023 (LimitedMap)
import set from "set" /* 2 */;

class LimitedMap extends Map {
  constructor(arg0) {
    tmp = new LimitedMap(new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp.maxSize = global;
    return tmp;
  }
  set(arg0, arg1) {
    self = this;
    if (this.size >= this.maxSize) {
      iter = self.keys();
      deleteResult = self.delete(iter.next().value);
    }
    return super.set(global, require);
  }
}
let closure_0 = LimitedMap.prototype;
const result = set.fileFinishedImporting("lib/LimitedMap.tsx");

export default LimitedMap;