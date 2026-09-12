// _runtime/metro/04086__.js
import 04078__ from "04078__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_4078) {
  let obj = { default: module_4078 };
  let tmp3 = obj;
} else {
  tmp3 = module_4078;
}
module_4078 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4078.default(Date.now(), arg0);
};
export default exports.default;