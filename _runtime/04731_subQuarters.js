// _runtime/04731_subQuarters.js
import module_4298_mod from "metro/04298__.js";
import module_4460_mod from "metro/04460__.js";
import requiredArgs_mod from "04295_requiredArgs.js";

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let module_4460 = module_4460_mod;
if (!module_4460) {
  const obj2 = { default: module_4460 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4460;
}
module_4460 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4460.default(arg0, -module_4298.default(arg1));
};
export default exports.default;