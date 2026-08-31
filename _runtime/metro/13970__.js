// _runtime/metro/13970__.js
import _mod13968 from "13968__.js";


export default (arg0, arg1) => {
  const tmp = _mod13968(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};