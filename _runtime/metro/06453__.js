// _runtime/metro/06453__.js
import _mod1307 from "01307__.js";
import _mod6401 from "06401__.js";

let closure_2 = _mod1307("%Object.isExtensible%", true);

export default _mod1307("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod6401(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod6401(arg0);
    };
