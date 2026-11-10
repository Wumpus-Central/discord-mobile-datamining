// _runtime/metro/16519__.js
import _mod16517 from "16517__.js";

export default (arg0, arg1) => {
  const tmp = _mod16517(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
