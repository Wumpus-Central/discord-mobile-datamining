// _runtime/04728_subBusinessDays.js
import module_4444_mod from "metro/04444__.js";
import requiredArgs_mod from "04295_requiredArgs.js";
import module_4298_mod from "metro/04298__.js";

let module_4444 = module_4444_mod;
if (!module_4444) {
  const obj = { default: module_4444 };
  let tmp3 = obj;
} else {
  tmp3 = module_4444;
}
module_4444 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj3 = { default: module_4298 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4298;
}
module_4298 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4444.default(arg0, -module_4298.default(arg1));
};
export default exports.default;