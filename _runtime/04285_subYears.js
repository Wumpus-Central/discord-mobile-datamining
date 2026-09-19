// === Module 4285: subYears ===

// Module 4285 (subYears)
import module_3849_mod from "module_3849" /* 3849 */;
import module_4014_mod from "module_4014" /* 4014 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let module_4014 = module_4014_mod;
if (!module_4014) {
  const obj2 = { default: module_4014 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4014;
}
module_4014 = tmp5;
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
  return module_4014.default(arg0, -module_3849.default(arg1));
};
export default exports.default;