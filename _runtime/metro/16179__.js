// _runtime/metro/16179__.js
import _mod16177 from "16177__.js";

export default (arg0, arg1) => {
  const tmp = _mod16177(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
