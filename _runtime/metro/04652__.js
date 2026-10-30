// _runtime/metro/04652__.js
import module_4644_mod from "04644__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4644 = module_4644_mod;
if (!module_4644) {
  const obj = { default: module_4644 };
  let tmp3 = obj;
} else {
  tmp3 = module_4644;
}
module_4644 = tmp3;
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
  return module_4644.default(arg0, Date.now());
};
export default exports.default;