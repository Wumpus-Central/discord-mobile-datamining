// _runtime/metro/15371__.js
import _mod15369 from "15369__.js";

export default (arg0, arg1) => {
  const tmp = _mod15369(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
