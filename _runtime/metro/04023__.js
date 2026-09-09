// _runtime/metro/04023__.js
import 04015__ from "04015__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_4015) {
  let obj = { default: module_4015 };
  let tmp3 = obj;
} else {
  tmp3 = module_4015;
}
module_4015 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4015.default(Date.now(), arg0);
};
export default exports.default;