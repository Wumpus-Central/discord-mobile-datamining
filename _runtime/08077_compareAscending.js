// _runtime/08077_compareAscending.js
import isSymbol from "00553_isSymbol.js";

export default function compareAscending(arg0, arg1) {
  if (arg0 !== arg1) {
    const tmp4 = arg0 == arg0;
    const tmp7 = isSymbol(arg0);
    const tmp9 = null === arg1;
    const tmp11 = isSymbol(arg1);
    if (!tmp9) {
      if (!tmp11) {
        return 1;
      }
    }
    const tmp2 = null === arg0;
    const tmp3 = undefined !== arg0;
    if (tmp3) {
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
