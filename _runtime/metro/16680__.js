// _runtime/metro/16680__.js
import _mod16678 from "16678__.js";

export default (arg0, arg1) => {
  const tmp = _mod16678(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
