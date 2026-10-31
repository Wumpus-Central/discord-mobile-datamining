// _runtime/metro/04654__.js
import module_4646_mod from "04646__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let module_4646 = module_4646_mod;
if (!module_4646) {
  const obj = { default: module_4646 };
  let tmp3 = obj;
} else {
  tmp3 = module_4646;
}
module_4646 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4646.default(Date.now(), arg0);
};
export default exports.default;