// _runtime/metro/04072__.js
import 04073__ from "04073__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_4073) {
  let obj = { default: module_4073 };
  let tmp3 = obj;
} else {
  tmp3 = module_4073;
}
module_4073 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4073.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;