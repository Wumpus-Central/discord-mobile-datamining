// _runtime/03418_formatRelative.js
let closure_0 = {
  lastWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (0 === uTCDay) {
      return "'pro\u0161lu nedjelju u' p";
    } else if (3 === uTCDay) {
      return "'pro\u0161lu srijedu u' p";
    } else if (6 === uTCDay) {
      return "'pro\u0161lu subotu u' p";
    } else {
      return "'pro\u0161li' EEEE 'u' p";
    }
  },
  yesterday: "'ju\u010Der u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    if (0 === uTCDay) {
      return "'idu\u0107u nedjelju u' p";
    } else if (3 === uTCDay) {
      return "'idu\u0107u srijedu u' p";
    } else if (6 === uTCDay) {
      return "'idu\u0107u subotu u' p";
    } else {
      return "'pro\u0161li' EEEE 'u' p";
    }
  },
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof table[arg0] === "function") {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;