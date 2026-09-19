// _runtime/metro/04125__.js
import module_4124_mod from "04124__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_4124 = module_4124_mod;
if (!module_4124) {
  const obj = { default: module_4124 };
  let tmp3 = obj;
} else {
  tmp3 = module_4124;
}
module_4124 = tmp3;
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
  return Math.floor(module_4124.default(arg0) / 1000);
};
export default exports.default;