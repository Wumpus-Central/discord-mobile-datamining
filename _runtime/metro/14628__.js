// _runtime/metro/14628__.js
import _mod14626 from "14626__.js";

export default (arg0, arg1) => {
  const tmp = _mod14626(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
