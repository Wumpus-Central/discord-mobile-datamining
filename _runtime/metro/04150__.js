// === Module 4150: ? ===

// Module 4150
import module_3697 from "module_3697" /* 3697 */;

if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
function checkWeek(getTime, getTime2, arg2) {
  let str = "eeee p";
  if (!module_3697.default(getTime, getTime2, arg2)) {
    const time = getTime.getTime();
    let str2 = "'\u4E0A\u4E2A'eeee p";
    if (time > getTime2.getTime()) {
      str2 = "'\u4E0B\u4E2A'eeee p";
    }
    str = str2;
  }
  return str;
}
module_3697 = tmp3;
let closure_1 = { lastWeek: checkWeek, yesterday: "'\u6628\u5929' p", today: "'\u4ECA\u5929' p", tomorrow: "'\u660E\u5929' p", nextWeek: checkWeek, other: "PP p" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_1[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;