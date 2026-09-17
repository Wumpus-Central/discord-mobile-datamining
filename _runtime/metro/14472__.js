// _runtime/metro/14472__.js
import _mod14470 from "14470__.js";

export default (arg0, arg1) => {
  const tmp = _mod14470(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
