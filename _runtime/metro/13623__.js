// _runtime/metro/13623__.js
import { 13621__ } from "13621__.js";

export default (arg0, arg1) => {
  const tmp = 13621__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};