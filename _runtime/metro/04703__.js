// _runtime/metro/04703__.js
import module_4702_mod from "04702__.js";
import requiredArgs_mod from "../04424_requiredArgs.js";

let module_4702 = module_4702_mod;
if (!module_4702) {
  const obj = { default: module_4702 };
  let tmp3 = obj;
} else {
  tmp3 = module_4702;
}
module_4702 = tmp3;
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
  return Math.floor(module_4702.default(arg0) / 1000);
};
export default exports.default;