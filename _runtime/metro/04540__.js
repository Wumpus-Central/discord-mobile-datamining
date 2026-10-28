// _runtime/metro/04540__.js
import module_4538_mod from "04538__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4538 = module_4538_mod;
if (!module_4538) {
  const obj = { default: module_4538 };
  let tmp3 = obj;
} else {
  tmp3 = module_4538;
}
module_4538 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4538.default(arg0, Date.now(), arg1);
};
export default exports.default;