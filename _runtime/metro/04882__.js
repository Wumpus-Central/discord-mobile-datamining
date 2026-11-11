// _runtime/metro/04882__.js
import module_4874_mod from "04874__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4874 = module_4874_mod;
if (!module_4874) {
  const obj = { default: module_4874 };
  let tmp3 = obj;
} else {
  tmp3 = module_4874;
}
module_4874 = tmp3;
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
  return module_4874.default(Date.now(), arg0);
};
export default exports.default;