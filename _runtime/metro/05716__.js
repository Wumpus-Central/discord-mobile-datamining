// _runtime/metro/05716__.js
import _mod1305 from "01305__.js";
import _mod5664 from "05664__.js";

let closure_2 = _mod1305("%Object.isExtensible%", true);

export default _mod1305("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod5664(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod5664(arg0);
    };
