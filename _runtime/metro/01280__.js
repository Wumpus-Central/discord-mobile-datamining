// === Module 1280: ? ===

// Module 1280
import _mod1281 from "module_1281" /* 1281 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod1317 from "module_1317" /* 1317 */;
import _mod1319 from "module_1319" /* 1319 */;
import _mod1320 from "module_1320" /* 1320 */;

let closure_2 = _mod1281 || _mod1319 || _mod1320;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = _mod1283;
        tmp3 = new tmp3("Side channel does not contain " + _mod1317(arg0));
        throw tmp3;
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