// _runtime/metro/04005__.js
import 04004__ from "04004__.js";
import requiredArgs from "../03726_requiredArgs.js";

if (!module_4004) {
  let obj = { default: module_4004 };
  let tmp3 = obj;
} else {
  tmp3 = module_4004;
}
module_4004 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4004.default(arg0) / 1000);
};
export default exports.default;