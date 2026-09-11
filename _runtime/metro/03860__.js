// _runtime/metro/03860__.js
import 03699__ from "03699__.js";
import 03850__ from "03850__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3699) {
  let obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
if (!module_3850) {
  obj = { default: module_3850 };
  let tmp5 = obj;
} else {
  tmp5 = module_3850;
}
module_3850 = tmp5;
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
  return module_3850.default(interval, module_3699.default(arg1) * c3);
};
export default exports.default;