// _runtime/03672_code.js
import formatDistance from "03673_formatDistance.js";
import buildFormatLongFn from "03674_buildFormatLongFn.js";
import formatRelative from "03675_formatRelative.js";
import buildLocalizeFn from "03676_buildLocalizeFn.js";
import 03677__ from "metro/03677__.js";

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
if (!module_3677) {
  const obj2 = { default: null };
  obj2[0] = module_3677;
  let tmp11 = obj2;
} else {
  tmp11 = module_3677;
}

export default { code: "th", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };
export default exports.default;