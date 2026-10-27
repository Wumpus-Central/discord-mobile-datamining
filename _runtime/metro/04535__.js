// _runtime/metro/04535__.js
import module_4534_mod from "04534__.js";
import requiredArgs_mod from "../04256_requiredArgs.js";

let module_4534 = module_4534_mod;
if (!module_4534) {
  const obj = { default: module_4534 };
  let tmp3 = obj;
} else {
  tmp3 = module_4534;
}
module_4534 = tmp3;
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
  return Math.floor(module_4534.default(arg0) / 1000);
};
export default exports.default;