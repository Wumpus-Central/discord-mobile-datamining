// _runtime/metro/04016__.js
import formatDistance from "../04017_formatDistance.js";
import buildFormatLongFn from "../04018_buildFormatLongFn.js";
import formatRelative from "../04019_formatRelative.js";
import date_mod from "04020__.js";
import date_mod2 from "04021__.js";

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
if (!formatDistance) {
  tmp3 = { default: formatDistance };
  const obj = { default: formatDistance };
} else {
  tmp3 = formatDistance;
}
if (!buildFormatLongFn) {
  tmp5 = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  tmp5 = buildFormatLongFn;
}
if (!formatRelative) {
  tmp7 = { default: formatRelative };
  const obj3 = { default: formatRelative };
} else {
  tmp7 = formatRelative;
}
let date = date_mod2;
if (!date) {
  tmp9 = { default: date };
  const obj4 = { default: date };
} else {
  tmp9 = date;
}
date = date_mod2;
if (!date) {
  tmp11 = { default: date };
  const obj5 = { default: date };
} else {
  tmp11 = date;
}

export default {
  code: "hu",
  formatDistance: tmp3.default,
  formatLong: tmp5.default,
  formatRelative: tmp7.default,
  localize: tmp9.default,
  match: tmp11.default,
  options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
