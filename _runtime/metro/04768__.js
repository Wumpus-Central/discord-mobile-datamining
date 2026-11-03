// _runtime/metro/04768__.js
import module_4769_mod from "04769__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";

let module_4769 = module_4769_mod;
if (!module_4769) {
  const obj = { default: module_4769 };
  let tmp3 = obj;
} else {
  tmp3 = module_4769;
}
module_4769 = tmp3;
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
  return module_4769.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;