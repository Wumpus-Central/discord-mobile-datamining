// _runtime/metro/04281__.js
import module_4273_mod from "04273__.js";
import requiredArgs_mod from "../03919_requiredArgs.js";

let module_4273 = module_4273_mod;
if (!module_4273) {
  const obj = { default: module_4273 };
  let tmp3 = obj;
} else {
  tmp3 = module_4273;
}
module_4273 = tmp3;
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
  return module_4273.default(arg0, Date.now());
};
export default exports.default;