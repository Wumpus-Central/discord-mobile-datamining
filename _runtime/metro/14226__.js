// _runtime/metro/14226__.js
import _mod14224 from "14224__.js";

export default (arg0, arg1) => {
  const tmp = _mod14224(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
