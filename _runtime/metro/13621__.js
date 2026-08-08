// _runtime/metro/13621__.js
import { 13619__ } from "13619__.js";

export default (arg0, arg1) => {
  const tmp = 13619__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};