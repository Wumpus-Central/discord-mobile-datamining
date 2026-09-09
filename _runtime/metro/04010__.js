// _runtime/metro/04010__.js
import 04011__ from "04011__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_4011) {
  let obj = { default: module_4011 };
  let tmp3 = obj;
} else {
  tmp3 = module_4011;
}
module_4011 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4011.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;