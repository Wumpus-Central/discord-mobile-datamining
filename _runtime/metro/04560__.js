// _runtime/metro/04560__.js
import module_4552_mod from "04552__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4552 = module_4552_mod;
if (!module_4552) {
  const obj = { default: module_4552 };
  let tmp3 = obj;
} else {
  tmp3 = module_4552;
}
module_4552 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4552.default(Date.now(), arg0);
};
export default exports.default;