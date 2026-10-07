// _runtime/metro/04244__.js
import module_4243_mod from "04243__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4243 = module_4243_mod;
if (!module_4243) {
  const obj = { default: module_4243 };
  let tmp3 = obj;
} else {
  tmp3 = module_4243;
}
module_4243 = tmp3;
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
  return Math.floor(module_4243.default(arg0) / 1000);
};
export default exports.default;