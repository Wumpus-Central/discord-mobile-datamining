// === Module 4133: subSeconds ===

// Module 4133 (subSeconds)
import module_3699 from "module_3699" /* 3699 */;
import module_3862 from "module_3862" /* 3862 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
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

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3862.default(arg0, -module_3699.default(arg1));
};
export default exports.default;