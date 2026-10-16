// _runtime/metro/04620__.js
import module_4606_mod from "04606__.js";
import requiredArgs_mod from "../04259_requiredArgs.js";

let module_4606 = module_4606_mod;
if (!module_4606) {
  const obj = { default: module_4606 };
  let tmp3 = obj;
} else {
  tmp3 = module_4606;
}
module_4606 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4606.default(arg0, Date.now(), arg1);
};
export default exports.default;