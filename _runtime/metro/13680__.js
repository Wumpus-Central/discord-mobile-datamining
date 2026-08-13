// _runtime/metro/13680__.js
import { 13678__ } from "13678__.js";

export default (arg0, arg1) => {
  const tmp = 13678__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};