// _runtime/metro/14634__.js
import _mod14632 from "14632__.js";

export default (arg0, arg1) => {
  const tmp = _mod14632(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
