// _runtime/metro/15571__.js
import _mod15569 from "15569__.js";

export default (arg0, arg1) => {
  const tmp = _mod15569(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
