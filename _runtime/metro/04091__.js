// _runtime/metro/04091__.js
import 03873__ from "03873__.js";
import 03906__ from "03906__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_3873) {
  let obj = { default: module_3873 };
  let tmp3 = obj;
} else {
  tmp3 = module_3873;
}
module_3873 = tmp3;
if (!module_3906) {
  obj = { default: module_3906 };
  let tmp5 = obj;
} else {
  tmp5 = module_3906;
}
module_3906 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3906.default(arg0, module_3873.default(Date.now(), 1));
};
export default exports.default;