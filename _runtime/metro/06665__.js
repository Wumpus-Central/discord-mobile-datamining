// _runtime/metro/06665__.js
import _mod1292 from "01292__.js";
import _mod6613 from "06613__.js";

let closure_2 = _mod1292("%Object.isExtensible%", true);

export default _mod1292("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod6613(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod6613(arg0);
    };
