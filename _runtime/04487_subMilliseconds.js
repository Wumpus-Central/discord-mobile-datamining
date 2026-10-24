// === Module 4487: subMilliseconds ===

// Module 4487 (subMilliseconds)
import module_4409_mod from "module_4409" /* 4409 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;
import module_4258_mod from "module_4258" /* 4258 */;

let module_4409 = module_4409_mod;
if (!module_4409) {
  const obj = { default: module_4409 };
  let tmp3 = obj;
} else {
  tmp3 = module_4409;
}
module_4409 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj3 = { default: module_4258 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4258;
}
module_4258 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4409.default(arg0, -module_4258.default(arg1));
};
export default exports.default;