// _runtime/metro/03893__.js
import 03729__ from "03729__.js";
import 03873__ from "03873__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3873) {
  obj = { default: module_3873 };
  let tmp5 = obj;
} else {
  tmp5 = module_3873;
}
module_3873 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3873.default(arg0, 7 * module_3729.default(arg1));
};
export default exports.default;