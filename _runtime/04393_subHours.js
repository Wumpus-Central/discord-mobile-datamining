// _runtime/04393_subHours.js
import addHours_mod from "04112_addHours.js";
import requiredArgs_mod from "03959_requiredArgs.js";
import toInteger_mod from "03962_toInteger.js";

let tmp3;
let tmp5;
let tmp7;
let addHours = addHours_mod;
if (!addHours) {
  tmp3 = { default: addHours };
  const obj = { default: addHours };
} else {
  tmp3 = addHours;
}
addHours = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addHours.default(arg0, -toInteger.default(arg1));
}
