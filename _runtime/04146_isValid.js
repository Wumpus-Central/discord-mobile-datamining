// _runtime/04146_isValid.js
import isDate_mod from "04147_isDate.js";
import toDate_mod from "03964_toDate.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let isDate = isDate_mod;
if (!isDate) {
  tmp3 = { default: isDate };
  const obj = { default: isDate };
} else {
  tmp3 = isDate;
}
isDate = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isValid(num) {
  requiredArgs.default(1, arguments);
  if (!isDate.default(num)) {
    if (typeof num !== "number") {
      return false;
    }
  }
  return !isNaN(Number(toDate.default(num)));
}
