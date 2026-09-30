// _runtime/metro/14035__.js
import _mod14033 from "14033__.js";

export default (arg0, arg1) => {
  const tmp = _mod14033(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
