// _runtime/metro/13724__.js
import _mod13722 from "13722__.js";


export default (arg0, arg1) => {
  const tmp = _mod13722(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};