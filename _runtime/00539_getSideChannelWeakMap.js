let tmp = require("getEvalledConstructor")("%WeakMap%", true);
let closure_3 = require("callBoundIntrinsic")("WeakMap.prototype.get", true);
let closure_4 = require("callBoundIntrinsic")("WeakMap.prototype.set", true);
let closure_5 = require("callBoundIntrinsic")("WeakMap.prototype.has", true);
let closure_6 = require("callBoundIntrinsic")("WeakMap.prototype.delete", true);
if (tmp) {
  function getSideChannelWeakMap() {
    let obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          let tmp3 = outer1_0(outer1_1[2]);
          tmp3 = new tmp3("Side channel does not contain " + outer1_0(outer1_1[3])(arg0));
          throw tmp3;
        }
      },
      delete(obj) {
        if (obj) {
          if (obj) {
            if (closure_0) {
              return outer1_6(tmp, obj);
            }
          }
          return false;
        }
        if (outer1_0(outer1_1[4])) {
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
                let value = outer1_3(tmp, obj);
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
                let hasItem = outer1_5(tmp, obj);
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
            outer1_4(tmp6, obj, arg1);
          }
        }
        if (outer1_0(outer1_1[4])) {
          obj = closure_1;
          if (!closure_1) {
            const tmp4 = outer1_0(outer1_1[4])();
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
  getSideChannelWeakMap = require("module_577");
}

export default getSideChannelWeakMap;