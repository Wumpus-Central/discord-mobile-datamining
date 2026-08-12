// _runtime/metro/13688__.js
import { 13686__ } from "13686__.js";

export default (arg0, arg1) => {
  const tmp = 13686__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};