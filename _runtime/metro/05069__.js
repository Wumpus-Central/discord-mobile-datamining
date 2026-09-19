// _runtime/metro/05069__.js
import _mod1281 from "01281__.js";
import _mod5017 from "05017__.js";

let closure_2 = _mod1281("%Object.isExtensible%", true);

export default _mod1281("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod5017(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod5017(arg0);
    };
