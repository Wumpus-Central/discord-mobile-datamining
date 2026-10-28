// _runtime/metro/04634__.js
import module_4635_mod from "04635__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4635 = module_4635_mod;
if (!module_4635) {
  const obj = { default: module_4635 };
  let tmp3 = obj;
} else {
  tmp3 = module_4635;
}
module_4635 = tmp3;
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
  return module_4635.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;