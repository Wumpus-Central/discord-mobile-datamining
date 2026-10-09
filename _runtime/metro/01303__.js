// === Module 1303: ? ===

// Module 1303
import _mod1304 from "module_1304" /* 1304 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod1340 from "module_1340" /* 1340 */;
import _mod1342 from "module_1342" /* 1342 */;
import _mod1343 from "module_1343" /* 1343 */;

let closure_2 = _mod1304 || _mod1342 || _mod1343;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const tmp32 = new _mod1306("Side channel does not contain " + _mod1340(arg0));
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