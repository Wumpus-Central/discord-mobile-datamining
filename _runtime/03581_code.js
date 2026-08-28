// _runtime/03581_code.js
import futureSeconds from "03582_futureSeconds.js";
import buildFormatLongFn from "03583_buildFormatLongFn.js";
import formatRelative from "03584_formatRelative.js";
import buildLocalizeFn from "03585_buildLocalizeFn.js";
import 03586__ from "metro/03586__.js";

if (!futureSeconds) {
  let obj = { default: null };
  obj[0] = futureSeconds;
  let tmp3 = obj;
} else {
  tmp3 = futureSeconds;
}
if (!buildFormatLongFn) {
  obj = { default: null };
  obj[0] = buildFormatLongFn;
  let tmp5 = obj;
} else {
  tmp5 = buildFormatLongFn;
}
if (!formatRelative) {
  obj = { default: null };
  obj[0] = formatRelative;
  let tmp7 = obj;
} else {
  tmp7 = formatRelative;
}
if (!buildLocalizeFn) {
  const obj1 = { default: null };
  obj1[0] = buildLocalizeFn;
  let tmp9 = obj1;
} else {
  tmp9 = buildLocalizeFn;
}
if (!module_3586) {
  const obj2 = { default: null };
  obj2[0] = module_3586;
  let tmp11 = obj2;
} else {
  tmp11 = module_3586;
}

export default { code: "fi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;