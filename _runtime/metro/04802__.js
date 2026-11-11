// _runtime/metro/04802__.js
import module_4801_mod from "04801__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4801 = module_4801_mod;
if (!module_4801) {
  const obj = { default: module_4801 };
  let tmp3 = obj;
} else {
  tmp3 = module_4801;
}
module_4801 = tmp3;
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
  return Math.floor(module_4801.default(arg0) / 1000);
};
export default exports.default;