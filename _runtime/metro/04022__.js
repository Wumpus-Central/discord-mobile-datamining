// _runtime/metro/04022__.js
import 04014__ from "04014__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_4014) {
  let obj = { default: module_4014 };
  let tmp3 = obj;
} else {
  tmp3 = module_4014;
}
module_4014 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4014.default(Date.now(), arg0);
};
export default exports.default;