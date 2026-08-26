// _runtime/03676_code.js
import formatDistance from "03677_formatDistance.js";
import buildFormatLongFn from "03678_buildFormatLongFn.js";
import formatRelative from "03679_formatRelative.js";
import buildLocalizeFn from "03680_buildLocalizeFn.js";
import 03681__ from "metro/03681__.js";

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
if (!module_3681) {
  const obj2 = { default: null };
  obj2[0] = module_3681;
  let tmp11 = obj2;
} else {
  tmp11 = module_3681;
}

export default { code: "tr", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;