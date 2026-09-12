// _runtime/04164_subWeeks.js
import 03729__ from "metro/03729__.js";
import 03893__ from "metro/03893__.js";
import requiredArgs from "03726_requiredArgs.js";

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3893) {
  obj = { default: module_3893 };
  let tmp5 = obj;
} else {
  tmp5 = module_3893;
}
module_3893 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3893.default(arg0, -module_3729.default(arg1));
};
export default exports.default;