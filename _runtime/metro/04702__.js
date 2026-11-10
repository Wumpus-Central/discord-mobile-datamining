// _runtime/metro/04702__.js
import module_4701_mod from "04701__.js";
import requiredArgs_mod from "../04423_requiredArgs.js";

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

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_4701.default(arg0) / 1000);
};
export default exports.default;