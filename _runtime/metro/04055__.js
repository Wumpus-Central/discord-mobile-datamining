// _runtime/metro/04055__.js
import 04047__ from "04047__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_4047) {
  let obj = { default: module_4047 };
  let tmp3 = obj;
} else {
  tmp3 = module_4047;
}
module_4047 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4047.default(Date.now(), arg0);
};
export default exports.default;