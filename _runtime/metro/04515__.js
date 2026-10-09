// _runtime/metro/04515__.js
import module_4505_mod from "04505__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4505 = module_4505_mod;
if (!module_4505) {
  const obj = { default: module_4505 };
  let tmp3 = obj;
} else {
  tmp3 = module_4505;
}
module_4505 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4505.default(arg0, Date.now());
};
export default exports.default;