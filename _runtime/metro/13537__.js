// _runtime/metro/13537__.js
import { 13535__ } from "13535__.js";

export default (arg0, arg1) => {
  const tmp = 13535__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};