// _runtime/metro/14043__.js
import _mod14041 from "14041__.js";

export default (arg0, arg1) => {
  const tmp = _mod14041(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
