// _runtime/metro/04953__.js
import _mod1281 from "01281__.js";
import _mod4901 from "04901__.js";

let closure_2 = _mod1281("%Object.isExtensible%", true);

export default _mod1281("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod4901(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod4901(arg0);
    };
