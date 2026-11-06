// _runtime/metro/16434__.js
import _mod16432 from "16432__.js";

export default (arg0, arg1) => {
  const tmp = _mod16432(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
