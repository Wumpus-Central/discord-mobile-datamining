// _runtime/03701_code.js
import formatDistance from "03702_formatDistance.js";
import buildFormatLongFn from "03703_buildFormatLongFn.js";
import formatRelative from "03704_formatRelative.js";
import buildLocalizeFn from "03705_buildLocalizeFn.js";
import 03706__ from "metro/03706__.js";

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
if (!module_3706) {
  const obj2 = { default: null };
  obj2[0] = module_3706;
  let tmp11 = obj2;
} else {
  tmp11 = module_3706;
}

export default { code: "th", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };
export default exports.default;