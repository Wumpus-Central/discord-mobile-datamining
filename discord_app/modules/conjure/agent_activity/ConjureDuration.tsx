// === Module 17098: ConjureDuration ===

// Module 17098 (ConjureDuration)
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureDuration.tsx");

export const describeDuration = function describeDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = util.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3827["Cn+5go"], obj);
  } else {
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = util.intl;
      const obj2 = { count: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3827.lUCXD2, obj2);
    } else {
      const intl = util.intl;
      const time = { hours: null, minutes: null };
      const _Math = Math;
      time.hours = Math.floor(rounded / 60);
      time.minutes = rounded % 60;
      formatToPlainStringResult = intl.formatToPlainString(_modDef3827.Y1OsON, time);
    }
    return formatToPlainStringResult;
  }
};
export const describeTurnDuration = function describeTurnDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = util.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3827.yUXWd9, obj);
  } else {
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = util.intl;
      const obj2 = { count: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3827.v7Gf5b, obj2);
    } else {
      const intl = util.intl;
      const time = { hours: null, minutes: null };
      const _Math = Math;
      time.hours = Math.floor(rounded / 60);
      time.minutes = rounded % 60;
      formatToPlainStringResult = intl.formatToPlainString(_modDef3827.kyqrd4, time);
    }
    return formatToPlainStringResult;
  }
};
export const formatElapsed = function formatElapsed(conjureElapsedMs) {
  let num = 0;
  if (Number.isFinite(conjureElapsedMs)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(conjureElapsedMs / 1000));
  }
  const rounded = Math.floor(num / 3600);
  const result = Math.floor(num / 60) % 60;
  const result1 = num % 60;
  if (rounded > 0) {
    const intl3 = util.intl;
    const time = { hours: rounded, minutes: result, seconds: result1 };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3827["rIbuN/"], time);
  } else if (0 < result) {
    const intl2 = util.intl;
    const time1 = { minutes: result, seconds: result1 };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3827["/D79R7"], time1);
  } else {
    const intl = util.intl;
    const obj = { seconds: result1 };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3827.KrqS00, obj);
  }
  return formatToPlainStringResult;
};
export const describeElapsedLabel = function describeElapsedLabel(conjureElapsedMs) {
  let num = 0;
  if (Number.isFinite(conjureElapsedMs)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(conjureElapsedMs / 1000));
  }
  const rounded = Math.floor(num / 3600);
  const result = Math.floor(num / 60) % 60;
  if (rounded > 0) {
    const intl3 = util.intl;
    const time = { hours: rounded, minutes: result };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3827.HEBIhT, time);
  } else if (0 < result) {
    const intl2 = util.intl;
    const obj = { minutes: result };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3827.vvpiqt, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3827.dCg2BH);
  }
  return formatToPlainStringResult;
};