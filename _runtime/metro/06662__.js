// _runtime/metro/06662__.js
import _mod1292 from "01292__.js";
import _mod6610 from "06610__.js";

let closure_2 = _mod1292("%Object.isExtensible%", true);

export default _mod1292("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod6610(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod6610(arg0);
    };
