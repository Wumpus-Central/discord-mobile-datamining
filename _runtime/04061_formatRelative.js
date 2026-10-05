// === Module 4061: formatRelative ===

// Module 4061 (formatRelative)
import isSameUTCWeek_mod from "isSameUTCWeek" /* 3960 */;

let tmp3;
let isSameUTCWeek = isSameUTCWeek_mod;
if (!isSameUTCWeek) {
  tmp3 = { default: isSameUTCWeek };
  const obj = { default: isSameUTCWeek };
} else {
  tmp3 = isSameUTCWeek;
}
function dayAndTimeWithAdjective(arg0, arg1, arg2, arg3) {
  let tmp2;
  if (isSameUTCWeek.default(arg1, arg2, arg3)) {
    tmp2 = closure_2;
  } else if ("lastWeek" === arg0) {
    tmp2 = closure_1;
  } else if ("nextWeek" !== arg0) {
    const _Error = Error;
    const concat = "Cannot determine adjectives for token ".concat;
    const self = this;
    const self2 = this;
    const error = new Error("Cannot determine adjectives for token ".concat(arg0));
    throw error;
  } else {
    tmp2 = closure_3;
  }
  return "'".concat(tmp2[closure_4[arg1.getUTCDay(arg1)]], "' eeee 'o' p");
}
isSameUTCWeek = tmp3;
let closure_1 = { masculine: "ostatni", feminine: "ostatnia" };
let closure_2 = { masculine: "ten", feminine: "ta" };
let closure_3 = { masculine: "nast\u0119pny", feminine: "nast\u0119pna" };
let closure_4 = { 0: "feminine", 1: "masculine", 2: "masculine", 3: "feminine", 4: "masculine", 5: "masculine", 6: "feminine" };
let closure_5 = { lastWeek: dayAndTimeWithAdjective, yesterday: "'wczoraj o' p", today: "'dzisiaj o' p", tomorrow: "'jutro o' p", nextWeek: dayAndTimeWithAdjective, other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_5[arg0] === "function") {
    tmpResult = tmp(arg0, arg1, arg2, arg3);
  }
  return tmpResult;
};