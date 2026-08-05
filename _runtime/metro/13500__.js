// _runtime/metro/13500__.js
import { 13498__ } from "13498__.js";

export default (arg0, arg1) => {
  const tmp = 13498__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};