// _runtime/metro/03890__.js
import 03729__ from "03729__.js";
import 03880__ from "03880__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!module_3880) {
  obj = { default: module_3880 };
  let tmp5 = obj;
} else {
  tmp5 = module_3880;
}
module_3880 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3880.default(interval, module_3729.default(arg1) * c3);
};
export default exports.default;