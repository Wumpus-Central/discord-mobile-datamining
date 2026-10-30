// === Module 4727: subSeconds ===

// Module 4727 (subSeconds)
import module_4293_mod from "module_4293" /* 4293 */;
import module_4456_mod from "module_4456" /* 4456 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let module_4456 = module_4456_mod;
if (!module_4456) {
  const obj2 = { default: module_4456 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4456;
}
module_4456 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4456.default(arg0, -module_4293.default(arg1));
};
export default exports.default;