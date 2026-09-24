// _runtime/metro/04260__.js
import module_4261_mod from "04261__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_4261 = module_4261_mod;
if (!module_4261) {
  const obj = { default: module_4261 };
  let tmp3 = obj;
} else {
  tmp3 = module_4261;
}
module_4261 = tmp3;
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
  return module_4261.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;