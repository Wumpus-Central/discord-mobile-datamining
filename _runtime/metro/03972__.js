// _runtime/metro/03972__.js
import formatDistance from "../03973_formatDistance.js";
import buildFormatLongFn from "../03974_buildFormatLongFn.js";
import formatRelative from "../03975_formatRelative.js";
import date_mod from "03976__.js";
import date_mod2 from "03977__.js";

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
  code: "cs",
  formatDistance: tmp3.default,
  formatLong: tmp5.default,
  formatRelative: tmp7.default,
  localize: tmp9.default,
  match: tmp11.default,
  options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
