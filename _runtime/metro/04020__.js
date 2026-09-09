// _runtime/metro/04020__.js
import 04010__ from "04010__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_4010) {
  let obj = { default: module_4010 };
  let tmp3 = obj;
} else {
  tmp3 = module_4010;
}
module_4010 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4010.default(arg0, Date.now());
};
export default exports.default;