// _runtime/metro/04813__.js
import module_4805_mod from "04805__.js";
import requiredArgs_mod from "../04451_requiredArgs.js";

let module_4805 = module_4805_mod;
if (!module_4805) {
  const obj = { default: module_4805 };
  let tmp3 = obj;
} else {
  tmp3 = module_4805;
}
module_4805 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4805.default(arg0, Date.now());
};
export default exports.default;