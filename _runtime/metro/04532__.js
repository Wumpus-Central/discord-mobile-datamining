// _runtime/metro/04532__.js
import module_4531_mod from "04531__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4531 = module_4531_mod;
if (!module_4531) {
  const obj = { default: module_4531 };
  let tmp3 = obj;
} else {
  tmp3 = module_4531;
}
module_4531 = tmp3;
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
  return Math.floor(module_4531.default(arg0) / 1000);
};
export default exports.default;