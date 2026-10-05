// === Module 4413: formatRelative ===

// Module 4413 (formatRelative)
import isSameUTCWeek_mod from "isSameUTCWeek" /* 3960 */;

let tmp3;
let isSameUTCWeek = isSameUTCWeek_mod;
if (!isSameUTCWeek) {
  tmp3 = { default: isSameUTCWeek };
  const obj = { default: isSameUTCWeek };
} else {
  tmp3 = isSameUTCWeek;
}
function checkWeek(getTime, getTime2, arg2) {
  let str = "eeee p";
  if (!isSameUTCWeek.default(getTime, getTime2, arg2)) {
    const time = getTime.getTime();
    let str2 = "'\u4E0A\u4E2A'eeee p";
    if (time > getTime2.getTime()) {
      str2 = "'\u4E0B\u4E2A'eeee p";
    }
    str = str2;
  }
  return str;
}
isSameUTCWeek = tmp3;
let closure_1 = { lastWeek: checkWeek, yesterday: "'\u6628\u5929' p", today: "'\u4ECA\u5929' p", tomorrow: "'\u660E\u5929' p", nextWeek: checkWeek, other: "PP p" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_1[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};