// _runtime/04025_formatRelative.js
import isSameUTCWeek_mod from "03960_isSameUTCWeek.js";

let tmp3;
let isSameUTCWeek = isSameUTCWeek_mod;
if (!isSameUTCWeek) {
  tmp3 = { default: isSameUTCWeek };
  const obj = { default: isSameUTCWeek };
} else {
  tmp3 = isSameUTCWeek;
}
isSameUTCWeek = tmp3;
let closure_1 = ["domenica", "luned\u00EC", "marted\u00EC", "mercoled\u00EC", "gioved\u00EC", "venerd\u00EC", "sabato"];
let closure_2 = {
  lastWeek(getUTCDay, arg1, arg2) {
    let str;
    const uTCDay = getUTCDay.getUTCDay();
    if (isSameUTCWeek.default(getUTCDay, arg1, arg2)) {
      str = `${"'" + closure_1[tmp]} alle' p`;
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
  nextWeek(getUTCDay, arg1, arg2) {
    let str;
    const uTCDay = getUTCDay.getUTCDay();
    if (isSameUTCWeek.default(getUTCDay, arg1, arg2)) {
      str = `${"'" + closure_1[tmp]} alle' p`;
    } else {
      str = "'domenica prossima alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} prossimo alle' p`;
      }
    }
    return str;
  },
  other: "P",
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_2[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
}
