// _runtime/metro/16437__.js
import _mod16435 from "16435__.js";

export default (arg0, arg1) => {
  const tmp = _mod16435(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
