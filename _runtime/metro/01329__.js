// _runtime/metro/01329__.js
import GetIntrinsic from "../01292_GetIntrinsic.js";
import _mod1293 from "01293__.js";
import callBoundIntrinsic from "../01326_callBoundIntrinsic.js";
import inspect_ from "../01327_inspect_.js";

let closure_0;

let tmp = GetIntrinsic("%Map%", true);
let closure_2 = tmp;
let closure_3 = callBoundIntrinsic("Map.prototype.get", true);
let closure_4 = callBoundIntrinsic("Map.prototype.set", true);
let closure_5 = callBoundIntrinsic("Map.prototype.has", true);
let closure_6 = callBoundIntrinsic("Map.prototype.delete", true);
let closure_7 = callBoundIntrinsic("Map.prototype.size", true);
const tmp2 =
  tmp &&
  function getSideChannelMap() {
    const obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          const self = this;
          const self2 = this;
          const tmp3 = _mod1293;
          const tmp32 = new tmp3("Side channel does not contain " + inspect_(arg0));
          throw tmp32;
        }
      },
      delete: (arg0) => {
        if (closure_0) {
          const tmp4 = closure_6(tmp, arg0);
          if (0 === closure_7(closure_0)) {
            closure_0 = undefined;
          }
          return tmp4;
        } else {
          return false;
        }
      },
      get(arg0) {
        if (closure_0) {
          return closure_3(tmp, arg0);
        }
      },
      has(arg0) {
        const tmp = closure_0 && closure_5(closure_0, arg0);
        return tmp;
      },
      set(arg0, arg1) {
        let tmp = closure_0;
        if (!tmp) {
          const self = this;
          const self2 = this;
          const tmp3 = new closure_2();
          closure_0 = tmp3;
          tmp = tmp3;
        }
        closure_4(tmp, arg0, arg1);
      },
    };
    return obj;
  };

export default tmp2;
