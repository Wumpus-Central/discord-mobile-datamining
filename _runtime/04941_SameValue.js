// === Module 4941: SameValue ===

// Module 4941 (SameValue)
import _mod1312 from "module_1312" /* 1312 */;


export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp4 = 0 !== arg0;
    if (!tmp4) {
      tmp4 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = _mod1312(arg0) && _mod1312(arg1);
  }
  return tmp3;
};