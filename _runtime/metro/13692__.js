// _runtime/metro/13692__.js
import { 13690__ } from "13690__.js";

export default (arg0, arg1) => {
  const tmp = 13690__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};