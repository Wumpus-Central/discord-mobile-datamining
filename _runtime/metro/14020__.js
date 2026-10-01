// _runtime/metro/14020__.js
import _mod13992 from "13992__.js";
import _mod14018 from "14018__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13992[arg0];
    let tmp8;
    if (_mod14018(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13992[arg0];
    if (tmp3) {
      tmp3 = _mod13992[arg0][arg1];
    }
  }
  return tmp3;
};
