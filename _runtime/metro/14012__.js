// _runtime/metro/14012__.js
import _mod13984 from "13984__.js";
import _mod14010 from "14010__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13984[arg0];
    let tmp8;
    if (_mod14010(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13984[arg0];
    if (tmp3) {
      tmp3 = _mod13984[arg0][arg1];
    }
  }
  return tmp3;
};
