// _runtime/metro/03930__.js
import 03929__ from "03929__.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!module_3929) {
  let obj = { default: module_3929 };
  let tmp3 = obj;
} else {
  tmp3 = module_3929;
}
module_3929 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_3929.default(arg0) / 1000);
};
export default exports.default;