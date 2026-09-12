// _runtime/04162_subQuarters.js
import 03729__ from "metro/03729__.js";
import 03891__ from "metro/03891__.js";
import requiredArgs from "03726_requiredArgs.js";

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3891) {
  obj = { default: module_3891 };
  let tmp5 = obj;
} else {
  tmp5 = module_3891;
}
module_3891 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3891.default(arg0, -module_3729.default(arg1));
};
export default exports.default;