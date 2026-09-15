// === Module 1279: ? ===

// Module 1279
import _mod1280 from "module_1280" /* 1280 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod1316 from "module_1316" /* 1316 */;
import _mod1318 from "module_1318" /* 1318 */;
import _mod1319 from "module_1319" /* 1319 */;

let closure_2 = _mod1280 || _mod1318 || _mod1319;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const tmp32 = new _mod1282("Side channel does not contain " + _mod1316(arg0));
        throw tmp32;
      }
    },
    delete(arg0) {
      let deleteResult = set;
      if (deleteResult) {
        deleteResult = set.delete(arg0);
      }
      return deleteResult;
    },
    get(arg0) {
      value = set;
      if (set) {
        value = set.get(arg0);
      }
      return value;
    },
    has(arg0) {
      let hasItem = set;
      if (hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    },
    set(arg0, arg1) {
      obj = closure_0;
      if (!closure_0) {
        const tmp2 = closure_2();
        closure_0 = tmp2;
        obj = tmp2;
      }
      const result = obj.set(arg0, arg1);
    }
  };
  return obj;
};