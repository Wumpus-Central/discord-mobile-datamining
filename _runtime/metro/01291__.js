// === Module 1291: ? ===

// Module 1291
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import inspect_ from "inspect_" /* 1327 */;
import _mod1329 from "module_1329" /* 1329 */;

let closure_0, closure_1;

let getSideChannelWeakMap;
const tmp = GetIntrinsic("%WeakMap%", true);
let closure_2 = tmp;
let closure_3 = callBoundIntrinsic("WeakMap.prototype.get", true);
let closure_4 = callBoundIntrinsic("WeakMap.prototype.set", true);
let closure_5 = callBoundIntrinsic("WeakMap.prototype.has", true);
let closure_6 = callBoundIntrinsic("WeakMap.prototype.delete", true);
if (tmp) {
  getSideChannelWeakMap = function getSideChannelWeakMap() {
    let obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          const self = this;
          const self2 = this;
          const tmp3 = _mod1293;
          const tmp32 = new tmp3("Side channel does not contain " + inspect_(arg0));
          throw tmp32;
        }
      },
      delete: (obj) => {
        if (closure_2) {
          if (obj) {
            if (closure_0) {
              return closure_6(tmp2, obj);
            }
          }
          return false;
        }
        if (_mod1329) {
          if (set) {
            return set.delete(obj);
          }
        }
      },
      get(obj) {
        if (closure_2) {
          if (obj) {
            if (typeof obj === "object") {
              let tmp3;
              if (closure_0) {
                tmp3 = closure_3(tmp2, obj);
              }
              return tmp3;
            }
          }
        }
        tmp3 = set && set.get(obj);
      },
      has(obj) {
        if (closure_2) {
          if (obj) {
            if (typeof obj === "object") {
              let hasItem;
              if (closure_0) {
                hasItem = closure_5(tmp2, obj);
              }
              return hasItem;
            }
          }
        }
        hasItem = set && set.has(obj);
      },
      set(obj, arg1) {
        if (closure_2) {
          if (obj) {
            let tmp6 = closure_0;
            if (!tmp6) {
              const self = this;
              const self2 = this;
              const tmp5 = new tmp();
              closure_0 = tmp5;
              tmp6 = tmp5;
            }
            closure_4(tmp6, obj, arg1);
          }
        }
        if (_mod1329) {
          obj = closure_1;
          if (!obj) {
            const tmp4 = _mod1329();
            closure_1 = tmp4;
            obj = tmp4;
          }
          const result = obj.set(obj, arg1);
        }
      }
    };
    return obj;
  };
} else {
  getSideChannelWeakMap = _mod1329;
}

export default getSideChannelWeakMap;