// _runtime/metro/15516__.js
import _mod15514 from "15514__.js";

export default (arg0, arg1) => {
  const tmp = _mod15514(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
