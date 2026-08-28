// _runtime/03600_formatDistance.js
let closure_0 = { about: "k\u00F6r\u00FClbel\u00FCl", over: "t\u00F6bb mint", almost: "majdnem", lessthan: "kevesebb mint" };
let closure_1 = { xseconds: " m\u00E1sodperc", halfaminute: "f\u00E9l perc", xminutes: " perc", xhours: " \u00F3ra", xdays: " nap", xweeks: " h\u00E9t", xmonths: " h\u00F3nap", xyears: " \u00E9v" };
let closure_2 = { xseconds: { "-1": " m\u00E1sodperccel ezel\u0151tt", 1: " m\u00E1sodperc m\u00FAlva", 0: " m\u00E1sodperce" }, halfaminute: { "-1": "f\u00E9l perccel ezel\u0151tt", 1: "f\u00E9l perc m\u00FAlva", 0: "f\u00E9l perce" }, xminutes: { "-1": " perccel ezel\u0151tt", 1: " perc m\u00FAlva", 0: " perce" }, xhours: { "-1": " \u00F3r\u00E1val ezel\u0151tt", 1: " \u00F3ra m\u00FAlva", 0: " \u00F3r\u00E1ja" }, xdays: { "-1": " nappal ezel\u0151tt", 1: " nap m\u00FAlva", 0: " napja" }, xweeks: { "-1": " h\u00E9ttel ezel\u0151tt", 1: " h\u00E9t m\u00FAlva", 0: " hete" }, xmonths: { "-1": " h\u00F3nappal ezel\u0151tt", 1: " h\u00F3nap m\u00FAlva", 0: " h\u00F3napja" }, xyears: { "-1": " \u00E9vvel ezel\u0151tt", 1: " \u00E9v m\u00FAlva", 0: " \u00E9ve" } };

export default function formatDistance(str, arg1, addSuffix) {
  const match = str.match(/about|over|almost|lessthan/i);
  if (match) {
    str = str.replace(match[0], "");
  }
  addSuffix = undefined;
  if (null != addSuffix) {
    addSuffix = addSuffix.addSuffix;
  }
  const formatted = str.toLowerCase();
  let num;
  if (null != addSuffix) {
    num = addSuffix.comparison;
  }
  if (!num) {
    num = 0;
  }
  if (true === addSuffix) {
    let tmp5 = table3[formatted][num];
  } else {
    tmp5 = table2[formatted];
  }
  let sum = tmp5;
  if ("halfaminute" !== formatted) {
    sum = arg1 + tmp5;
  }
  let text = sum;
  if (match) {
    text = `${closure_0[str3.toLowerCase(str3)]} ${tmp7}`;
  }
  return text;
};
export default exports.default;