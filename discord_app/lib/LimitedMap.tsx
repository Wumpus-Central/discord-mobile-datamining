// === Module 7898: LimitedMap ===

// Module 7898 (LimitedMap)
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
const result = require("set").fileFinishedImporting("lib/LimitedMap.tsx");

export default LimitedMap;