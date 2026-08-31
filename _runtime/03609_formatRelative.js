// === Module 3609: formatRelative ===

// Module 3609 (formatRelative)
import isSameUTCWeek from "isSameUTCWeek" /* 3544 */;

if (!isSameUTCWeek) {
  const obj = { default: null };
  obj[0] = isSameUTCWeek;
  let tmp3 = obj;
} else {
  tmp3 = isSameUTCWeek;
}
isSameUTCWeek = tmp3;
let closure_1 = ["domenica", "luned\u00EC", "marted\u00EC", "mercoled\u00EC", "gioved\u00EC", "venerd\u00EC", "sabato"];
let closure_2 = {
  lastWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (isSameUTCWeek.default(getUTCDay, arg1, arg2)) {
      let str = `${"'" + closure_1[tmp]} alle' p`;
    } else {
      str = "'domenica scorsa alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} scorso alle' p`;
      }
    }
    return str;
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (isSameUTCWeek.default(getUTCDay, arg1, arg2)) {
      let str = `${"'" + closure_1[tmp]} alle' p`;
    } else {
      str = "'domenica prossima alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} prossimo alle' p`;
      }
    }
    return str;
  },
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof table[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;