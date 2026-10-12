// _runtime/metro/14602__.js
import _mod14600 from "14600__.js";

export default (arg0, arg1) => {
  const tmp = _mod14600(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
