// _runtime/metro/04319__.js
import module_4311_mod from "04311__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4311 = module_4311_mod;
if (!module_4311) {
  const obj = { default: module_4311 };
  let tmp3 = obj;
} else {
  tmp3 = module_4311;
}
module_4311 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4311.default(Date.now(), arg0);
};
export default exports.default;