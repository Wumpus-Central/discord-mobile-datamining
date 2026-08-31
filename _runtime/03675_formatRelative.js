// _runtime/03675_formatRelative.js
let closure_0 = { lastWeek: "eeee'\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27\u0E40\u0E27\u0E25\u0E32' p", yesterday: "'\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p", today: "'\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p", tomorrow: "'\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p", nextWeek: "eeee '\u0E40\u0E27\u0E25\u0E32' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return table[arg0];
};
export default exports.default;