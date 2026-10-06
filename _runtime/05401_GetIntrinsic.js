// _runtime/05401_GetIntrinsic.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import isPrimitive from "05349_isPrimitive.js";

const tmp = GetIntrinsic("%Object.preventExtensions%", true);
let closure_2 = GetIntrinsic("%Object.isExtensible%", true);

export default tmp
  ? function IsExtensible(arg0) {
      let tmp2 = !isPrimitive(arg0);
      isPrimitive(arg0);
      if (tmp2) {
        tmp2 = closure_2(arg0);
      }
      return tmp2;
    }
  : function IsExtensible(arg0) {
      return !isPrimitive(arg0);
    };
