// _runtime/metro/13724__.js
import { 13722__ } from "13722__.js";

export default (arg0, arg1) => {
  const tmp = 13722__(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};