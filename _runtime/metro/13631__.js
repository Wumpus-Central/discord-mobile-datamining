// _runtime/metro/13631__.js
import { 13629__ } from "13629__.js";

export default (arg0, arg1) => {
  const tmp = 13629__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};