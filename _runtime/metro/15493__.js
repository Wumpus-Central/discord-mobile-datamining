// _runtime/metro/15493__.js
import _mod15491 from "15491__.js";

export default (arg0, arg1) => {
  const tmp = _mod15491(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
