// _runtime/metro/04088__.js
import module_4080_mod from "04080__.js";
import requiredArgs_mod from "../03726_requiredArgs.js";

let module_4080 = module_4080_mod;
if (!module_4080) {
  const obj = { default: module_4080 };
  let tmp3 = obj;
} else {
  tmp3 = module_4080;
}
module_4080 = tmp3;
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
  return module_4080.default(arg0, Date.now());
};
export default exports.default;