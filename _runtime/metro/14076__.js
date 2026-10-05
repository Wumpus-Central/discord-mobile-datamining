// _runtime/metro/14076__.js
import _mod14077 from "14077__.js";

export default (arg0, arg1) => {
  let tmp3 = _mod14077[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod14077;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
