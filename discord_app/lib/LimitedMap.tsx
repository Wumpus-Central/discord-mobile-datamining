// discord_app/lib/LimitedMap.tsx
import size from "../../_runtime/metro/00002__.js";

class LimitedMap extends Map {
  constructor(arg0) {
    tmp = new LimitedMap(new.target);
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
const result = size.fileFinishedImporting("lib/LimitedMap.tsx");

export default LimitedMap;
