// _runtime/metro/04228__.js
import module_4227_mod from "04227__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_4227 = module_4227_mod;
if (!module_4227) {
  const obj = { default: module_4227 };
  let tmp3 = obj;
} else {
  tmp3 = module_4227;
}
module_4227 = tmp3;
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
  return Math.floor(module_4227.default(arg0) / 1000);
};
export default exports.default;