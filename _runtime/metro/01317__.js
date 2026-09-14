// _runtime/metro/01317__.js
import _mod1280 from "01280__.js";
import _mod1281 from "01281__.js";
import callBoundIntrinsic from "../01314_callBoundIntrinsic.js";
import _mod1315 from "01315__.js";

let tmp = _mod1280("%Map%", true);
let closure_2 = tmp;
let closure_3 = callBoundIntrinsic("Map.prototype.get", true);
let closure_4 = callBoundIntrinsic("Map.prototype.set", true);
let closure_5 = callBoundIntrinsic("Map.prototype.has", true);
let closure_6 = callBoundIntrinsic("Map.prototype.delete", true);
let closure_7 = callBoundIntrinsic("Map.prototype.size", true);

export default tmp &&
  function getSideChannelMap() {
    const obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          const tmp32 = new _mod1281("Side channel does not contain " + _mod1315(arg0));
          throw tmp32;
        }
      },
      delete(arg0) {
        if (closure_0) {
          if (0 === closure_7(closure_0)) {
            closure_0 = undefined;
          }
          return closure_6(tmp, arg0);
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
        let tmp = closure_0;
        if (tmp) {
          tmp = closure_5(closure_0, arg0);
        }
        return tmp;
      },
      set(arg0, arg1) {
        let tmp = closure_0;
        if (!closure_0) {
          const tmp5 = new closure_2();
          closure_0 = tmp5;
          tmp = tmp5;
        }
        closure_4(tmp, arg0, arg1);
      },
    };
    return obj;
  };
