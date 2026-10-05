// === Module 4067: formatRelative ===

// Module 4067 (formatRelative)
let closure_0 = {
  lastWeek(getUTCDay) {
    let str;
    const uTCDay = getUTCDay.getUTCDay();
    if (0 === uTCDay) {
      str = "\u00FAltimo";
    } else {
      str = "\u00FAltima";
    }
    return "'" + str + "' eeee '\u00E0s' p";
  },
  yesterday: "'ontem \u00E0s' p",
  today: "'hoje \u00E0s' p",
  tomorrow: "'amanh\u00E3 \u00E0s' p",
  nextWeek: "eeee '\u00E0s' p",
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_0[arg0] === "function") {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};