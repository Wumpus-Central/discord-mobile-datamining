// _runtime/05385_SameValue.js
import _mod1324 from "metro/01324__.js";

export default function SameValue(arg0, arg1) {
  let tmp3;
  if (arg0 === arg1) {
    tmp3 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    const tmp4 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
  } else {
    tmp3 = _mod1324(arg0) && _mod1324(arg1);
  }
  return tmp3;
}
