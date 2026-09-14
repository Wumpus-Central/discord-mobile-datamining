// _runtime/metro/14437__.js
import _mod14435 from "14435__.js";

export default (arg0, arg1) => {
  const tmp = _mod14435(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
