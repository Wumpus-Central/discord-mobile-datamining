// _runtime/00539_getSideChannelWeakMap.js
import getEvalledConstructor from "00540_getEvalledConstructor.js";
import callBoundIntrinsic from "00574_callBoundIntrinsic.js";
import _mod577 from "metro/00577__.js";

let tmp = getEvalledConstructor("%WeakMap%", true);
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
          let tmp3 = closure_1_0(closure_1_1[2]);
          tmp3 = new tmp3("Side channel does not contain " + closure_1_0(closure_1_1[3])(arg0));
          throw tmp3;
        }
      },
      delete(obj) {
        if (obj) {
          if (obj) {
            if (closure_0) {
              return closure_1_6(tmp, obj);
            }
          }
          return false;
        }
        if (closure_1_0(closure_1_1[4])) {
          if (closure_1) {
            return obj.delete(obj);
          }
        }
      },
      get(obj) {
        if (obj) {
          if (obj) {
            if (typeof obj === "object") {
              if (closure_0) {
                let value = closure_1_3(tmp, obj);
              }
              return value;
            }
          }
        }
        value = closure_1;
        if (closure_1) {
          value = obj.get(obj);
        }
      },
      has(obj) {
        if (obj) {
          if (obj) {
            if (typeof obj === "object") {
              if (closure_0) {
                let hasItem = closure_1_5(tmp, obj);
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
      set(obj) {
        if (obj) {
          if (obj) {
            let tmp6 = closure_0;
            if (!closure_0) {
              tmp = new tmp();
              closure_0 = tmp;
              tmp6 = tmp;
            }
            closure_1_4(tmp6, obj, arg1);
          }
        }
        if (closure_1_0(closure_1_1[4])) {
          obj = closure_1;
          if (!closure_1) {
            const tmp4 = closure_1_0(closure_1_1[4])();
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
  getSideChannelWeakMap = _mod577;
}

export default getSideChannelWeakMap;