// _runtime/metro/13917__.js
import _mod13915 from "13915__.js";


export default (arg0, arg1) => {
  const tmp = _mod13915(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};