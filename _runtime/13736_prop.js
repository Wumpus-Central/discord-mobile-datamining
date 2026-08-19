// _runtime/13736_prop.js
import prop from "13688_prop.js";
import sum from "13695_sum.js";

let closure_2 = prop("keys");

export default (arg0) => {
  let tmp2 = table[arg0];
  if (!tmp2) {
    const tmp5 = sum(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};