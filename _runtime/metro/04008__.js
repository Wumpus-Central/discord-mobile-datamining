// _runtime/metro/04008__.js
import module_4007_mod from "04007__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_4007 = module_4007_mod;
if (!module_4007) {
  const obj = { default: module_4007 };
  let tmp3 = obj;
} else {
  tmp3 = module_4007;
}
module_4007 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4007.default(arg0) / 1000);
};
export default exports.default;