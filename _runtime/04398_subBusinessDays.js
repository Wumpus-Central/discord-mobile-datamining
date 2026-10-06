// _runtime/04398_subBusinessDays.js
import addBusinessDays_mod from "04114_addBusinessDays.js";
import requiredArgs_mod from "03965_requiredArgs.js";
import toInteger_mod from "03968_toInteger.js";

let tmp3;
let tmp5;
let tmp7;
let addBusinessDays = addBusinessDays_mod;
if (!addBusinessDays) {
  tmp3 = { default: addBusinessDays };
  const obj = { default: addBusinessDays };
} else {
  tmp3 = addBusinessDays;
}
addBusinessDays = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp7 = { default: toInteger };
  const obj3 = { default: toInteger };
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addBusinessDays.default(arg0, -toInteger.default(arg1));
}
