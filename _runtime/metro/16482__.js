// _runtime/metro/16482__.js
import _mod16480 from "16480__.js";

export default (arg0, arg1) => {
  const tmp = _mod16480(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
