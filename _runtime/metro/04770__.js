// _runtime/metro/04770__.js
import module_4771_mod from "04771__.js";
import requiredArgs_mod from "../04424_requiredArgs.js";

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

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4771.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;