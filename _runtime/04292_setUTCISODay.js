// _runtime/04292_setUTCISODay.js
import toDate_mod from "03964_toDate.js";
import requiredArgs_mod from "03965_requiredArgs.js";
import toInteger_mod from "03968_toInteger.js";

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

export default function setUTCISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toInteger.default(arg1);
  let diff = defaultResult1;
  if (defaultResult1 % 7 === 0) {
    diff = defaultResult1 - 7;
  }
  const defaultResult2 = toDate.default(arg0);
  let num = 0;
  const uTCDay = defaultResult2.getUTCDay();
  if (((diff % 7) + 7) % 7 < 1) {
    num = 7;
  }
  const diff1 = num + diff - uTCDay;
  defaultResult2.setUTCDate(defaultResult2.getUTCDate() + diff1);
  return defaultResult2;
}
