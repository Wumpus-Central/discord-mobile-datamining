// _runtime/03375_formatRelative.js
let closure_0 = ["ned\u011Bli", "pond\u011Bl\u00ED", "\u00FAter\u00FD", "st\u0159edu", "\u010Dtvrtek", "p\u00E1tek", "sobotu"];
let closure_1 = {
  lastWeek: "'posledn\u00ED' eeee 've' p",
  yesterday: "'v\u010Dera v' p",
  today: "'dnes v' p",
  tomorrow: "'z\u00EDtra v' p",
  nextWeek(arg0) {
    return "'v " + table[arg0.getUTCDay(arg0)] + " o' p";
  },
  other: "P"
};

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if (typeof table2[arg0] === "function") {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;