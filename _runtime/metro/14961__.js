// _runtime/metro/14961__.js
import _mod14959 from "14959__.js";

export default (arg0, arg1) => {
  const tmp = _mod14959(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
