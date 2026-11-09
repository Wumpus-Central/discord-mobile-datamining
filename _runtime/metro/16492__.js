// _runtime/metro/16492__.js
import _mod16490 from "16490__.js";

export default (arg0, arg1) => {
  const tmp = _mod16490(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
