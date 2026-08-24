// _runtime/13736___core-js_shared__.js
import __core_js_shared__ from "13688___core-js_shared__.js";
import sum from "13695_sum.js";

let closure_2 = __core_js_shared__("keys");

export default (arg0) => {
  let tmp2 = table[arg0];
  if (!tmp2) {
    const tmp5 = sum(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};