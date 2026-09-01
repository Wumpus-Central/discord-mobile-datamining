// _runtime/metro/14003__.js
import _mod14001 from "14001__.js";

export default (arg0, arg1) => {
  const tmp = _mod14001(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
