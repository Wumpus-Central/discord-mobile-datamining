// === Module 1281: ? ===

// Module 1281
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import _mod1317 from "module_1317" /* 1317 */;
import _mod1319 from "module_1319" /* 1319 */;

let tmp = _mod1282("%WeakMap%", true);
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
          let tmp3 = _mod1283;
          tmp3 = new tmp3("Side channel does not contain " + _mod1317(arg0));
          throw tmp3;
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
        if (_mod1319) {
          if (closure_1) {
            return obj.delete(obj);
          }
          obj = closure_1;
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
              tmp = new tmp();
              closure_0 = tmp;
              tmp6 = tmp;
            }
            closure_4(tmp6, obj, arg1);
          }
        }
        if (_mod1319) {
          obj = closure_1;
          if (!closure_1) {
            const tmp4 = _mod1319();
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
  getSideChannelWeakMap = _mod1319;
}

export default getSideChannelWeakMap;