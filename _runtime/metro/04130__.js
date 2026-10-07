// === Module 4130: ? ===

// Module 4130
import module_3968_mod from "module_3968" /* 3968 */;
import module_4113_mod from "module_4113" /* 4113 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj = { default: module_3968 };
  let tmp3 = obj;
} else {
  tmp3 = module_3968;
}
module_3968 = tmp3;
let module_4113 = module_4113_mod;
if (!module_4113) {
  const obj2 = { default: module_4113 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4113;
}
module_4113 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4113.default(arg0, 3 * module_3968.default(arg1));
};
export default exports.default;