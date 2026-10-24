// _runtime/metro/04611__.js
import module_4601_mod from "04601__.js";
import requiredArgs_mod from "../04255_requiredArgs.js";

let module_4601 = module_4601_mod;
if (!module_4601) {
  const obj = { default: module_4601 };
  let tmp3 = obj;
} else {
  tmp3 = module_4601;
}
module_4601 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4601.default(arg0, Date.now());
};
export default exports.default;