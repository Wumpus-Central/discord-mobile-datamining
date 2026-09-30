// _runtime/metro/13999__.js
import _mod14000 from "14000__.js";

export default (arg0, arg1) => {
  let tmp3 = _mod14000[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    _mod14000[arg0] = obj;
    tmp3 = obj;
    const tmpResult = _mod14000;
  }
  return tmp3;
};
