// === Module 4133: subYears ===

// Module 4133 (subYears)
import module_3697 from "module_3697" /* 3697 */;
import module_3862 from "module_3862" /* 3862 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3862) {
  obj = { default: module_3862 };
  let tmp5 = obj;
} else {
  tmp5 = module_3862;
}
module_3862 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3862.default(arg0, -module_3697.default(arg1));
};
export default exports.default;