// _runtime/metro/03943__.js
import 03942__ from "03942__.js";
import requiredArgs from "../03664_requiredArgs.js";

if (!module_3942) {
  let obj = { default: module_3942 };
  let tmp3 = obj;
} else {
  tmp3 = module_3942;
}
module_3942 = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_3942.default(arg0) / 1000);
};
export default exports.default;