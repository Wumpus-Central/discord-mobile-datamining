// _runtime/metro/04081__.js
import module_4070_mod from "04070__.js";
import requiredArgs_mod from "../03726_requiredArgs.js";

let module_4070 = module_4070_mod;
if (!module_4070) {
  const obj = { default: module_4070 };
  let tmp3 = obj;
} else {
  tmp3 = module_4070;
}
module_4070 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4070.default(Date.now(), arg0);
};
export default exports.default;