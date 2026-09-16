// _runtime/metro/04006__.js
import module_4005_mod from "04005__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_4005 = module_4005_mod;
if (!module_4005) {
  const obj = { default: module_4005 };
  let tmp3 = obj;
} else {
  tmp3 = module_4005;
}
module_4005 = tmp3;
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
  return Math.floor(module_4005.default(arg0) / 1000);
};
export default exports.default;