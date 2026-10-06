// _runtime/04225_fromUnixTime.js
import toDate_mod from "03964_toDate.js";
import toInteger_mod from "03968_toInteger.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp5 = { default: toInteger };
  const obj2 = { default: toInteger };
} else {
  tmp5 = toInteger;
}
toInteger = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return toDate.default(1000 * toInteger.default(arg0));
}
