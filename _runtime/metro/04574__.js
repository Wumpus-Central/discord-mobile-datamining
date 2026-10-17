// _runtime/metro/04574__.js
import module_4573_mod from "04573__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let module_4573 = module_4573_mod;
if (!module_4573) {
  const obj = { default: module_4573 };
  let tmp3 = obj;
} else {
  tmp3 = module_4573;
}
module_4573 = tmp3;
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
  return Math.floor(module_4573.default(arg0) / 1000);
};
export default exports.default;