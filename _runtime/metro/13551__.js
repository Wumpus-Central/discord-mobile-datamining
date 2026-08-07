// _runtime/metro/13551__.js
import { 13549__ } from "13549__.js";

export default (arg0, arg1) => {
  const tmp = 13549__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};