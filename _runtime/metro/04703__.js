// _runtime/metro/04703__.js
import module_4701_mod from "04701__.js";
import requiredArgs_mod from "../04451_requiredArgs.js";

let module_4701 = module_4701_mod;
if (!module_4701) {
  const obj = { default: module_4701 };
  let tmp3 = obj;
} else {
  tmp3 = module_4701;
}
module_4701 = tmp3;
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
  return module_4701.default(arg0, Date.now(), arg1);
};
export default exports.default;