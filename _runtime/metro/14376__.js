// _runtime/metro/14376__.js
import _mod14374 from "14374__.js";

export default (arg0, arg1) => {
  const tmp = _mod14374(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
