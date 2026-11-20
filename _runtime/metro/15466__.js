// _runtime/metro/15466__.js
import _mod15464 from "15464__.js";

export default (arg0, arg1) => {
  const tmp = _mod15464(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
