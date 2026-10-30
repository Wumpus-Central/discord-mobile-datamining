// _runtime/metro/04569__.js
import module_4568_mod from "04568__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4568 = module_4568_mod;
if (!module_4568) {
  const obj = { default: module_4568 };
  let tmp3 = obj;
} else {
  tmp3 = module_4568;
}
module_4568 = tmp3;
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
  return Math.floor(module_4568.default(arg0) / 1000);
};
export default exports.default;