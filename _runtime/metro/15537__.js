// _runtime/metro/15537__.js
import _mod15535 from "15535__.js";

export default (arg0, arg1) => {
  const tmp = _mod15535(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
