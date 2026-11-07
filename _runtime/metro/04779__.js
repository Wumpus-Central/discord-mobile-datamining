// _runtime/metro/04779__.js
import module_4771_mod from "04771__.js";
import requiredArgs_mod from "../04421_requiredArgs.js";

let module_4771 = module_4771_mod;
if (!module_4771) {
  const obj = { default: module_4771 };
  let tmp3 = obj;
} else {
  tmp3 = module_4771;
}
module_4771 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4771.default(Date.now(), arg0);
};
export default exports.default;