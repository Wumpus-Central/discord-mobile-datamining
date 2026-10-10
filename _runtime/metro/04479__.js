// _runtime/metro/04479__.js
import module_4478_mod from "04478__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4478 = module_4478_mod;
if (!module_4478) {
  const obj = { default: module_4478 };
  let tmp3 = obj;
} else {
  tmp3 = module_4478;
}
module_4478 = tmp3;
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
  return Math.floor(module_4478.default(arg0) / 1000);
};
export default exports.default;