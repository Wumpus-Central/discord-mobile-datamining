// _runtime/metro/15502__.js
import _mod15500 from "15500__.js";

export default (arg0, arg1) => {
  const tmp = _mod15500(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
