// === Module 1306: ? ===

// Module 1306
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import _mod1342 from "module_1342" /* 1342 */;
import _mod1344 from "module_1344" /* 1344 */;

const tmp = _mod1307("%WeakMap%", true);
let closure_2 = tmp;
let closure_3 = callBoundIntrinsic("WeakMap.prototype.get", true);
let closure_4 = callBoundIntrinsic("WeakMap.prototype.set", true);
let closure_5 = callBoundIntrinsic("WeakMap.prototype.has", true);
let closure_6 = callBoundIntrinsic("WeakMap.prototype.delete", true);
if (tmp) {
  function getSideChannelWeakMap() {
    let obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          const tmp32 = new _mod1308("Side channel does not contain " + _mod1342(arg0));
          throw tmp32;
        }
      },
      delete(obj) {
        if (closure_2) {
          if (obj) {
            if (closure_0) {
              return closure_6(tmp, obj);
            }
          }
          return false;
        }
        if (_mod1344) {
          if (set) {
            return set.delete(obj);
          }
        }
      },
      get(obj) {
        if (closure_2) {
          if (obj) {
            if (typeof obj === "object") {
              if (closure_0) {
                value = closure_3(tmp, obj);
              }
              return value;
            }
          }
        }
        value = set;
        if (set) {
          value = set.get(obj);
        }
      },
      has(obj) {
        if (closure_2) {
          if (obj) {
            if (typeof obj === "object") {
              if (closure_0) {
                let hasItem = closure_5(tmp, obj);
              }
              return hasItem;
            }
          }
        }
        hasItem = set;
        if (hasItem) {
          hasItem = set.has(obj);
        }
      },
      set(obj, arg1) {
        if (closure_2) {
          if (obj) {
            let tmp6 = closure_0;
            if (!closure_0) {
              const tmp5 = new tmp();
              closure_0 = tmp5;
              tmp6 = tmp5;
            }
            closure_4(tmp6, obj, arg1);
          }
        }
        if (_mod1344) {
          obj = closure_1;
          if (!closure_1) {
            const tmp4 = _mod1344();
            closure_1 = tmp4;
            obj = tmp4;
          }
          const result = obj.set(obj, arg1);
        }
      }
    };
    return obj;
  }
} else {
  getSideChannelWeakMap = _mod1344;
}

export default getSideChannelWeakMap;