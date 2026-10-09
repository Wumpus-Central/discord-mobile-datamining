// === Module 5704: SameValue ===

// Module 5704 (SameValue)
import _mod1337 from "module_1337" /* 1337 */;


export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp4 = 0 !== arg0;
    if (!tmp4) {
      tmp4 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = _mod1337(arg0) && _mod1337(arg1);
  }
  return tmp3;
};