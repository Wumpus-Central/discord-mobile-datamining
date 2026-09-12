// _runtime/04163_subSeconds.js
import 03729__ from "metro/03729__.js";
import 03892__ from "metro/03892__.js";
import requiredArgs from "03726_requiredArgs.js";

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3892) {
  obj = { default: module_3892 };
  let tmp5 = obj;
} else {
  tmp5 = module_3892;
}
module_3892 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3892.default(arg0, -module_3729.default(arg1));
};
export default exports.default;