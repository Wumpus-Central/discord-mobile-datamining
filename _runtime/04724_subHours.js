// === Module 4724: subHours ===

// Module 4724 (subHours)
import module_4443_mod from "module_4443" /* 4443 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;
import module_4293_mod from "module_4293" /* 4293 */;

let module_4443 = module_4443_mod;
if (!module_4443) {
  const obj = { default: module_4443 };
  let tmp3 = obj;
} else {
  tmp3 = module_4443;
}
module_4443 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4443.default(arg0, -module_4293.default(arg1));
};
export default exports.default;