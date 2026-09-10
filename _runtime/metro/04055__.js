// _runtime/metro/04055__.js
import 04041__ from "04041__.js";
import requiredArgs from "../03694_requiredArgs.js";

if (!module_4041) {
  let obj = { default: module_4041 };
  let tmp3 = obj;
} else {
  tmp3 = module_4041;
}
module_4041 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4041.default(arg0, Date.now(), arg1);
};
export default exports.default;