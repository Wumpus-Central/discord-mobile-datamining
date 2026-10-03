// _runtime/metro/14087__.js
import _mod14059 from "14059__.js";
import _mod14085 from "14085__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14059[arg0];
    let tmp8;
    if (_mod14085(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14059[arg0];
    if (tmp3) {
      tmp3 = _mod14059[arg0][arg1];
    }
  }
  return tmp3;
};
