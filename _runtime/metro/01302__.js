// === Module 1302: ? ===

// Module 1302
import _mod1303 from "module_1303" /* 1303 */;
import _mod1305 from "module_1305" /* 1305 */;
import _mod1339 from "module_1339" /* 1339 */;
import _mod1341 from "module_1341" /* 1341 */;
import _mod1342 from "module_1342" /* 1342 */;

let closure_2 = _mod1303 || _mod1341 || _mod1342;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const tmp32 = new _mod1305("Side channel does not contain " + _mod1339(arg0));
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