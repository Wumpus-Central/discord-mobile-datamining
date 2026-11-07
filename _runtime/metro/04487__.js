// === Module 4487: ? ===

// Module 4487
import module_4422_mod from "module_4422" /* 4422 */;

let module_4422 = module_4422_mod;
if (!module_4422) {
  const obj = { default: module_4422 };
  let tmp3 = obj;
} else {
  tmp3 = module_4422;
}
module_4422 = tmp3;
const dependencyMap = ["domenica", "luned\u00EC", "marted\u00EC", "mercoled\u00EC", "gioved\u00EC", "venerd\u00EC", "sabato"];
let closure_2 = {
  lastWeek(getUTCDay, arg1, arg2) {
    const uTCDay = getUTCDay.getUTCDay();
    if (module_4422.default(getUTCDay, arg1, arg2)) {
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
  nextWeek(getUTCDay, arg1, arg2) {
    const uTCDay = getUTCDay.getUTCDay();
    if (module_4422.default(getUTCDay, arg1, arg2)) {
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
  if (typeof closure_2[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;