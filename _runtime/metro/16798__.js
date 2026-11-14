// _runtime/metro/16798__.js
import _mod16796 from "16796__.js";

export default (arg0, arg1) => {
  const tmp = _mod16796(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
