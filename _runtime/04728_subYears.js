// _runtime/04728_subYears.js
import module_4292_mod from "metro/04292__.js";
import module_4457_mod from "metro/04457__.js";
import requiredArgs_mod from "04289_requiredArgs.js";

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
let module_4457 = module_4457_mod;
if (!module_4457) {
  const obj2 = { default: module_4457 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4457;
}
module_4457 = tmp5;
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
  return module_4457.default(arg0, -module_4292.default(arg1));
};
export default exports.default;