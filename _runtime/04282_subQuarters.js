// === Module 4282: subQuarters ===

// Module 4282 (subQuarters)
import module_3849_mod from "module_3849" /* 3849 */;
import module_4011_mod from "module_4011" /* 4011 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let module_4011 = module_4011_mod;
if (!module_4011) {
  const obj2 = { default: module_4011 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4011;
}
module_4011 = tmp5;
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
  return module_4011.default(arg0, -module_3849.default(arg1));
};
export default exports.default;