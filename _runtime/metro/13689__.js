// _runtime/metro/13689__.js
import { 13687__ } from "13687__.js";

export default (arg0, arg1) => {
  const tmp = 13687__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};