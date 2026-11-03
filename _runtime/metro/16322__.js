// _runtime/metro/16322__.js
import _mod16320 from "16320__.js";

export default (arg0, arg1) => {
  const tmp = _mod16320(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
