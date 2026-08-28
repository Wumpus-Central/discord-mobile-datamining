// _runtime/03987_code.js
import formatDistance from "03988_formatDistance.js";
import buildFormatLongFn from "03989_buildFormatLongFn.js";
import formatRelative from "03990_formatRelative.js";
import buildLocalizeFn from "03991_buildLocalizeFn.js";
import 03992__ from "metro/03992__.js";

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
if (!module_3992) {
  const obj2 = { default: null };
  obj2[0] = module_3992;
  let tmp11 = obj2;
} else {
  tmp11 = module_3992;
}

export default { code: "vi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;