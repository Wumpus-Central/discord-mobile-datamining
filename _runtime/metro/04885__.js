// _runtime/metro/04885__.js
import module_4877_mod from "04877__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4877 = module_4877_mod;
if (!module_4877) {
  const obj = { default: module_4877 };
  let tmp3 = obj;
} else {
  tmp3 = module_4877;
}
module_4877 = tmp3;
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
  return module_4877.default(arg0, Date.now());
};
export default exports.default;