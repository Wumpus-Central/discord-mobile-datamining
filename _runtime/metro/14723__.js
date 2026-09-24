// _runtime/metro/14723__.js
import _mod14721 from "14721__.js";

export default (arg0, arg1) => {
  const tmp = _mod14721(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
