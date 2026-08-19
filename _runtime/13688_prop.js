// _runtime/13688_prop.js
import prop from "13689_prop.js";


export default (arg0, arg1) => {
  let tmp3 = prop[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    prop[arg0] = obj;
    tmp3 = obj;
    const tmpResult = prop;
  }
  return tmp3;
};