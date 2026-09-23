// _runtime/metro/04191__.js
import module_4190_mod from "04190__.js";
import requiredArgs_mod from "../03912_requiredArgs.js";

let module_4190 = module_4190_mod;
if (!module_4190) {
  const obj = { default: module_4190 };
  let tmp3 = obj;
} else {
  tmp3 = module_4190;
}
module_4190 = tmp3;
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
  return Math.floor(module_4190.default(arg0) / 1000);
};
export default exports.default;