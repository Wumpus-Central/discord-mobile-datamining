// _runtime/metro/05972__.js
import _mod1307 from "01307__.js";
import _mod5920 from "05920__.js";

let closure_2 = _mod1307("%Object.isExtensible%", true);

export default _mod1307("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod5920(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod5920(arg0);
    };
