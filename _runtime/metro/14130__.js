// _runtime/metro/14130__.js
import _mod14128 from "14128__.js";

export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14128(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
