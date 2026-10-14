// _runtime/metro/04481__.js
import module_4480_mod from "04480__.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4480 = module_4480_mod;
if (!module_4480) {
  const obj = { default: module_4480 };
  let tmp3 = obj;
} else {
  tmp3 = module_4480;
}
module_4480 = tmp3;
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
  return Math.floor(module_4480.default(arg0) / 1000);
};
export default exports.default;