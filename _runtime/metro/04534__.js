// _runtime/metro/04534__.js
import module_4533_mod from "04533__.js";
import requiredArgs_mod from "../04255_requiredArgs.js";

let module_4533 = module_4533_mod;
if (!module_4533) {
  const obj = { default: module_4533 };
  let tmp3 = obj;
} else {
  tmp3 = module_4533;
}
module_4533 = tmp3;
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
  return Math.floor(module_4533.default(arg0) / 1000);
};
export default exports.default;