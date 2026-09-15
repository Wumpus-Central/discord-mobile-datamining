// _runtime/04944_SameValue.js
import _mod1313 from "metro/01313__.js";

export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp4 = 0 !== arg0;
    if (!tmp4) {
      tmp4 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = _mod1313(arg0) && _mod1313(arg1);
  }
  return tmp3;
}
