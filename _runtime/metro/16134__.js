// _runtime/metro/16134__.js
import _mod16132 from "16132__.js";

export default (arg0, arg1) => {
  const tmp = _mod16132(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
