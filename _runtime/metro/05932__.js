// _runtime/metro/05932__.js
import _mod1305 from "01305__.js";
import _mod5880 from "05880__.js";

let closure_2 = _mod1305("%Object.isExtensible%", true);

export default _mod1305("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod5880(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod5880(arg0);
    };
