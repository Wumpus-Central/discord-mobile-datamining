// === Module 1291: ? ===

// Module 1291
import _mod1292 from "module_1292" /* 1292 */;
import _mod1294 from "module_1294" /* 1294 */;
import _mod1328 from "module_1328" /* 1328 */;
import _mod1330 from "module_1330" /* 1330 */;
import _mod1331 from "module_1331" /* 1331 */;

let closure_2 = _mod1292 || _mod1330 || _mod1331;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const tmp32 = new _mod1294("Side channel does not contain " + _mod1328(arg0));
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