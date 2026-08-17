// _runtime/metro/00577__.js
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 574 */;

let tmp = getEvalledConstructor("%Map%", true);
let closure_2 = tmp;
let closure_3 = callBoundIntrinsic("Map.prototype.get", true);
let closure_4 = callBoundIntrinsic("Map.prototype.set", true);
let closure_5 = callBoundIntrinsic("Map.prototype.has", true);
let closure_6 = callBoundIntrinsic("Map.prototype.delete", true);
let closure_7 = callBoundIntrinsic("Map.prototype.size", true);

export default tmp && (function getSideChannelMap() {
  const obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = closure_1_0(obj[2]);
        tmp3 = new tmp3("Side channel does not contain " + closure_1_0(obj[3])(arg0));
        throw tmp3;
      }
    },
    delete(arg0) {
      if (c0) {
        if (0 === closure_1_7(c0)) {
          c0 = undefined;
        }
        return closure_1_6(tmp, arg0);
      } else {
        return false;
      }
    },
    get(arg0) {
      if (closure_0) {
        return closure_1_3(tmp, arg0);
      }
    },
    has(arg0) {
      let tmp = closure_0;
      if (tmp) {
        tmp = closure_1_5(closure_0, arg0);
      }
      return tmp;
    },
    set(arg0, arg1) {
      let tmp = closure_0;
      if (!closure_0) {
        const tmp5 = new closure_1_2();
        closure_0 = tmp5;
        tmp = tmp5;
      }
      closure_1_4(tmp, arg0, arg1);
    }
  };
  return obj;
});