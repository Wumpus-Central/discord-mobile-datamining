// _runtime/08662_compareAscending.js
import isSymbol from "00638_isSymbol.js";

export default function compareAscending(arg0, arg1) {
  if (arg0 !== arg1) {
    const tmp7 = isSymbol(arg0);
    const tmp11 = isSymbol(arg1);
    if (null !== arg1) {
      if (!tmp11) {
        return 1;
      }
    }
    if (undefined !== arg0) {
      if (tmp4) {
        if (!tmp2) {
          if (!tmp7) {
            return -1;
          }
        }
      }
    }
  }
  return 0;
}
