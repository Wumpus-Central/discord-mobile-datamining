// _runtime/metro/04070__.js
import formatDistance from "../04071_formatDistance.js";
import buildFormatLongFn from "../04072_buildFormatLongFn.js";
import formatRelative from "../04073_formatRelative.js";
import date_mod from "04074__.js";
import date_mod2 from "04075__.js";

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
  code: "pt-BR",
  formatDistance: tmp3.default,
  formatLong: tmp5.default,
  formatRelative: tmp7.default,
  localize: tmp9.default,
  match: tmp11.default,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
