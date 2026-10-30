// === Module 6512: SameValue ===

// Module 6512 (SameValue)
import _mod1325 from "module_1325" /* 1325 */;


export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp4 = 0 !== arg0;
    if (!tmp4) {
      tmp4 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = _mod1325(arg0) && _mod1325(arg1);
  }
  return tmp3;
};