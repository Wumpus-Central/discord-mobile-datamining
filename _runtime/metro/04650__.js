// _runtime/metro/04650__.js
import module_4642_mod from "04642__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

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

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4642.default(arg0, Date.now());
};
export default exports.default;