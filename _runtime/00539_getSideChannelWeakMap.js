// _runtime/00539_getSideChannelWeakMap.js
import getEvalledConstructor from "00540_getEvalledConstructor.js";
import _mod541 from "metro/00541__.js";
import callBoundIntrinsic from "00574_callBoundIntrinsic.js";
import addNumericSeparator from "00575_addNumericSeparator.js";
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
          let tmp3 = _mod541;
          tmp3 = new tmp3("Side channel does not contain " + addNumericSeparator(arg0));
          throw tmp3;
        }
      },
      delete(obj) {
        if (map) {
          if (obj) {
            if (closure_0) {
              return closure_1_6(tmp, obj);
            }
          }
          return false;
        }
        if (_mod577) {
          if (map) {
            return map.delete(obj);
          }
        }
      },
      get(obj) {
        if (map) {
          if (obj) {
            if (typeof obj === "object") {
              if (closure_0) {
                let value = closure_1_3(tmp, obj);
              }
              return value;
            }
          }
        }
        value = map;
        if (map) {
          value = map.get(obj);
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
        if (_mod577) {
          obj = closure_1;
          if (!closure_1) {
            const tmp4 = _mod577();
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