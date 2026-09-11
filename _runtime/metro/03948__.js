// _runtime/metro/03948__.js
import 03946__ from "03946__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3946) {
  let obj = { default: module_3946 };
  let tmp3 = obj;
} else {
  tmp3 = module_3946;
}
module_3946 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3946.default(arg0, Date.now(), arg1);
};
export default exports.default;