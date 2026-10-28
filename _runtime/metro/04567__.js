// _runtime/metro/04567__.js
import module_4566_mod from "04566__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4566 = module_4566_mod;
if (!module_4566) {
  const obj = { default: module_4566 };
  let tmp3 = obj;
} else {
  tmp3 = module_4566;
}
module_4566 = tmp3;
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
  return Math.floor(module_4566.default(arg0) / 1000);
};
export default exports.default;