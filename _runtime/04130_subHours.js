// === Module 4130: subHours ===

// Module 4130 (subHours)
import module_3849 from "module_3849" /* 3849 */;
import requiredArgs from "requiredArgs" /* 3696 */;
import module_3699 from "module_3699" /* 3699 */;

if (!module_3849) {
  let obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!module_3699) {
  obj = { default: module_3699 };
  let tmp7 = obj;
} else {
  tmp7 = module_3699;
}
module_3699 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3849.default(arg0, -module_3699.default(arg1));
};
export default exports.default;