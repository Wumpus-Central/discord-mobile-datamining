// _runtime/metro/04056__.js
import 04048__ from "04048__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_4048) {
  let obj = { default: module_4048 };
  let tmp3 = obj;
} else {
  tmp3 = module_4048;
}
module_4048 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4048.default(Date.now(), arg0);
};
export default exports.default;