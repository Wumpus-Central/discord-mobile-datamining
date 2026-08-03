let tmp = require("getEvalledConstructor")("%Map%", true);
let closure_3 = require("callBoundIntrinsic")("Map.prototype.get", true);
let closure_4 = require("callBoundIntrinsic")("Map.prototype.set", true);
let closure_5 = require("callBoundIntrinsic")("Map.prototype.has", true);
let closure_6 = require("callBoundIntrinsic")("Map.prototype.delete", true);
let closure_7 = require("callBoundIntrinsic")("Map.prototype.size", true);

export default tmp && (function getSideChannelMap() {
  const obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = outer1_0(obj[2]);
        tmp3 = new tmp3("Side channel does not contain " + outer1_0(obj[3])(arg0));
        throw tmp3;
      }
    },
    delete(arg0) {
      if (c0) {
        if (0 === outer1_7(c0)) {
          c0 = undefined;
        }
        return outer1_6(tmp, arg0);
      } else {
        return false;
      }
    },
    get(arg0) {
      if (closure_0) {
        return outer1_3(tmp, arg0);
      }
    },
    has(arg0) {
      let tmp = closure_0;
      if (tmp) {
        tmp = outer1_5(closure_0, arg0);
      }
      return tmp;
    },
    set(arg0, arg1) {
      let tmp = closure_0;
      if (!closure_0) {
        const tmp5 = new outer1_2();
        closure_0 = tmp5;
        tmp = tmp5;
      }
      outer1_4(tmp, arg0, arg1);
    }
  };
  return obj;
});