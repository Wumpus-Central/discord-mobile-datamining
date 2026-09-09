// _runtime/metro/04021__.js
import 04013__ from "04013__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_4013) {
  let obj = { default: module_4013 };
  let tmp3 = obj;
} else {
  tmp3 = module_4013;
}
module_4013 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4013.default(Date.now(), arg0);
};
export default exports.default;