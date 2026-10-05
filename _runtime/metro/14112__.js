// _runtime/metro/14112__.js
import _mod14110 from "14110__.js";

export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14110(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
