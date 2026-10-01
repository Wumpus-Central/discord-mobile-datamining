// _runtime/metro/04227__.js
import module_4226_mod from "04226__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_4226 = module_4226_mod;
if (!module_4226) {
  const obj = { default: module_4226 };
  let tmp3 = obj;
} else {
  tmp3 = module_4226;
}
module_4226 = tmp3;
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
  return Math.floor(module_4226.default(arg0) / 1000);
};
export default exports.default;