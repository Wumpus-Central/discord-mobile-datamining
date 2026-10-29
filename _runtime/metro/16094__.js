// _runtime/metro/16094__.js
import _mod16092 from "16092__.js";

export default (arg0, arg1) => {
  const tmp = _mod16092(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
