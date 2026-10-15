// _runtime/metro/15234__.js
import _mod15206 from "15206__.js";
import _mod15232 from "15232__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15206[arg0];
    let tmp8;
    if (_mod15232(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15206[arg0];
    if (tmp3) {
      tmp3 = _mod15206[arg0][arg1];
    }
  }
  return tmp3;
};
