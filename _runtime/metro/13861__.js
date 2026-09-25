// _runtime/metro/13861__.js
import _mod13833 from "13833__.js";
import _mod13859 from "13859__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13833[arg0];
    let tmp8;
    if (_mod13859(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13833[arg0];
    if (tmp3) {
      tmp3 = _mod13833[arg0][arg1];
    }
  }
  return tmp3;
};
