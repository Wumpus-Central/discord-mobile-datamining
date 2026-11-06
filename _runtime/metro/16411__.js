// _runtime/metro/16411__.js
import _mod16383 from "16383__.js";
import _mod16409 from "16409__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16383[arg0];
    let tmp8;
    if (_mod16409(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16383[arg0];
    if (tmp3) {
      tmp3 = _mod16383[arg0][arg1];
    }
  }
  return tmp3;
};
