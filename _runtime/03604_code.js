// _runtime/03604_code.js
import formatDistance from "03605_formatDistance.js";
import buildFormatLongFn from "03606_buildFormatLongFn.js";
import formatRelative from "03607_formatRelative.js";
import buildLocalizeFn from "03608_buildLocalizeFn.js";
import 03609__ from "metro/03609__.js";

if (!formatDistance) {
  let obj = { default: null };
  obj[0] = formatDistance;
  let tmp3 = obj;
} else {
  tmp3 = formatDistance;
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
if (!module_3609) {
  const obj2 = { default: null };
  obj2[0] = module_3609;
  let tmp11 = obj2;
} else {
  tmp11 = module_3609;
}

export default { code: "it", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;