// _runtime/03603_formatRelative.js
let c0 = ["vas\u00E1rnap", "h\u00E9tf\u0151n", "kedden", "szerd\u00E1n", "cs\u00FCt\u00F6rt\u00F6k\u00F6n", "p\u00E9nteken", "szombaton"];
const obj = {
  lastWeek: (arg0) => {
    let str = "'m\u00FAlt' ";
    if (_true) {
      str = "";
    }
    const combined = "".concat(str, "'");
    return combined.concat(_true[arg0.getUTCDay(arg0)], "' p'-kor'");
  },
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: (arg0) => {
    let str = "'m\u00FAlt' ";
    if (_true) {
      str = "";
    }
    const combined = "".concat(str, "'");
    return combined.concat(_true[arg0.getUTCDay(arg0)], "' p'-kor'");
  },
  other: "P"
};
c0 = false;
c0 = true;

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if (typeof obj[arg0] === "function") {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;