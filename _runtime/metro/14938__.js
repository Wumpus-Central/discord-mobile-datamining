// _runtime/metro/14938__.js
import _mod14910 from "14910__.js";
import _mod14936 from "14936__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14910[arg0];
    let tmp8;
    if (_mod14936(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14910[arg0];
    if (tmp3) {
      tmp3 = _mod14910[arg0][arg1];
    }
  }
  return tmp3;
};
