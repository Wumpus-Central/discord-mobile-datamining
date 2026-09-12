// _runtime/04165_subYears.js
import 03729__ from "metro/03729__.js";
import 03894__ from "metro/03894__.js";
import requiredArgs from "03726_requiredArgs.js";

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3894) {
  obj = { default: module_3894 };
  let tmp5 = obj;
} else {
  tmp5 = module_3894;
}
module_3894 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3894.default(arg0, -module_3729.default(arg1));
};
export default exports.default;