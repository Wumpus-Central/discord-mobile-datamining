// === Module 4352: subQuarters ===

// Module 4352 (subQuarters)
import module_3919_mod from "module_3919" /* 3919 */;
import module_4081_mod from "module_4081" /* 4081 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let module_4081 = module_4081_mod;
if (!module_4081) {
  const obj2 = { default: module_4081 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4081;
}
module_4081 = tmp5;
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
  return module_4081.default(arg0, -module_3919.default(arg1));
};
export default exports.default;