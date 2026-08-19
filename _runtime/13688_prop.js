// === Module 13688: prop ===

// Module 13688 (prop)
import prop from "prop" /* 13689 */;


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