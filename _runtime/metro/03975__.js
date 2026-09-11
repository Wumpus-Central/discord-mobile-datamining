// _runtime/metro/03975__.js
import 03974__ from "03974__.js";
import requiredArgs from "../03696_requiredArgs.js";

if (!module_3974) {
  let obj = { default: module_3974 };
  let tmp3 = obj;
} else {
  tmp3 = module_3974;
}
module_3974 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_3974.default(arg0) / 1000);
};
export default exports.default;