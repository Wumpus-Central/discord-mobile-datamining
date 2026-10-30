// _runtime/metro/04650__.js
import module_4642_mod from "04642__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4642 = module_4642_mod;
if (!module_4642) {
  const obj = { default: module_4642 };
  let tmp3 = obj;
} else {
  tmp3 = module_4642;
}
module_4642 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4642.default(Date.now(), arg0);
};
export default exports.default;