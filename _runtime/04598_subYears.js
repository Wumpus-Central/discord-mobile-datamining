// === Module 4598: subYears ===

// Module 4598 (subYears)
import module_4162_mod from "module_4162" /* 4162 */;
import module_4327_mod from "module_4327" /* 4327 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let module_4327 = module_4327_mod;
if (!module_4327) {
  const obj2 = { default: module_4327 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4327;
}
module_4327 = tmp5;
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
  return module_4327.default(arg0, -module_4162.default(arg1));
};
export default exports.default;