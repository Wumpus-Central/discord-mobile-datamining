// _runtime/03466_formatRelative.js
import isSameUTCWeek from "isSameUTCWeek";

if (!isSameUTCWeek) {
  const obj = { default: null };
  obj[0] = isSameUTCWeek;
  let tmp3 = obj;
} else {
  tmp3 = isSameUTCWeek;
}
let c0 = tmp3;
let closure_1 = ["domenica", "luned\u00EC", "marted\u00EC", "mercoled\u00EC", "gioved\u00EC", "venerd\u00EC", "sabato"];
let closure_2 = {
  lastWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (tmp3.default(getUTCDay, arg1, arg2)) {
      let str = `${"'" + closure_1[tmp]} alle' p`;
      tmp3 = dependencyMap;
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
    if (tmp3.default(getUTCDay, arg1, arg2)) {
      let str = `${"'" + closure_1[tmp]} alle' p`;
      tmp3 = dependencyMap;
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