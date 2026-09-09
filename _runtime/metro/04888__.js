// _runtime/metro/04888__.js
import _mod1282 from "01282__.js";
import _mod4836 from "04836__.js";

let closure_2 = _mod1282("%Object.isExtensible%", true);

export default _mod1282("%Object.preventExtensions%", true)
  ? function IsExtensible(arg0) {
      const tmp = _mod4836(arg0);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !_mod4836(arg0);
    };
