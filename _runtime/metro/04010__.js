// _runtime/metro/04010__.js
import 04002__ from "04002__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_4002) {
  let obj = { default: module_4002 };
  let tmp3 = obj;
} else {
  tmp3 = module_4002;
}
module_4002 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4002.default(Date.now(), arg0);
};
export default exports.default;