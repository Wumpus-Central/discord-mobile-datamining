// _runtime/metro/04238__.js
import module_4237_mod from "04237__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4237 = module_4237_mod;
if (!module_4237) {
  const obj = { default: module_4237 };
  let tmp3 = obj;
} else {
  tmp3 = module_4237;
}
module_4237 = tmp3;
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
  return Math.floor(module_4237.default(arg0) / 1000);
};
export default exports.default;