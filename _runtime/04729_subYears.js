// _runtime/04729_subYears.js
import module_4293_mod from "metro/04293__.js";
import module_4458_mod from "metro/04458__.js";
import requiredArgs_mod from "04290_requiredArgs.js";

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let module_4458 = module_4458_mod;
if (!module_4458) {
  const obj2 = { default: module_4458 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4458;
}
module_4458 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4458.default(arg0, -module_4293.default(arg1));
};
export default exports.default;