// _runtime/04723_subBusinessDays.js
import module_4439_mod from "metro/04439__.js";
import requiredArgs_mod from "04290_requiredArgs.js";
import module_4293_mod from "metro/04293__.js";

let module_4439 = module_4439_mod;
if (!module_4439) {
  const obj = { default: module_4439 };
  let tmp3 = obj;
} else {
  tmp3 = module_4439;
}
module_4439 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj3 = { default: module_4293 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4293;
}
module_4293 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4439.default(arg0, -module_4293.default(arg1));
};
export default exports.default;