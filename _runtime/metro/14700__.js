// _runtime/metro/14700__.js
import _mod14672 from "14672__.js";
import _mod14698 from "14698__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14672[arg0];
    let tmp8;
    if (_mod14698(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14672[arg0];
    if (tmp3) {
      tmp3 = _mod14672[arg0][arg1];
    }
  }
  return tmp3;
};
