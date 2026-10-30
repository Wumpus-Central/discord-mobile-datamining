// _runtime/04728_subWeeks.js
import module_4293_mod from "metro/04293__.js";
import module_4457_mod from "metro/04457__.js";
import requiredArgs_mod from "04290_requiredArgs.js";

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
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

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4457.default(arg0, -module_4293.default(arg1));
};
export default exports.default;