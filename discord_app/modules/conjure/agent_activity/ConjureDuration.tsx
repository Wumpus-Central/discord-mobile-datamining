// === Module 16693: ConjureDuration ===

// Module 16693 (ConjureDuration)
import intl4 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureDuration.tsx");

export const describeDuration = function describeDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = intl4.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3753["Cn+5go"], obj);
  } else {
    let formatToPlainStringResult;
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = intl4.intl;
      const obj2 = { count: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3753.lUCXD2, obj2);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const time = { hours: Math.floor(rounded / 60), minutes: rounded % 60 };
      const _Math = Math;
      const Y1OsON = _modDef3753.Y1OsON;
      formatToPlainStringResult = formatToPlainString(Y1OsON, time);
    }
    return formatToPlainStringResult;
  }
};
export const describeTurnDuration = function describeTurnDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = intl4.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3753.yUXWd9, obj);
  } else {
    let formatToPlainStringResult;
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = intl4.intl;
      const obj2 = { count: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3753.v7Gf5b, obj2);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const time = { hours: Math.floor(rounded / 60), minutes: rounded % 60 };
      const _Math = Math;
      const kyqrd4 = _modDef3753.kyqrd4;
      formatToPlainStringResult = formatToPlainString(kyqrd4, time);
    }
    return formatToPlainStringResult;
  }
};
export const formatElapsed = function formatElapsed(conjureElapsedMs) {
  let formatToPlainStringResult;
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
    const intl3 = intl4.intl;
    const time = { hours: rounded, minutes: result, seconds: result1 };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3753["rIbuN/"], time);
  } else if (0 < result) {
    const intl2 = intl4.intl;
    const time1 = { minutes: result, seconds: result1 };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3753["/D79R7"], time1);
  } else {
    const intl = intl4.intl;
    const obj = { seconds: result1 };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3753.KrqS00, obj);
  }
  return formatToPlainStringResult;
};
export const describeElapsedLabel = function describeElapsedLabel(conjureElapsedMs) {
  let formatToPlainStringResult;
  let num = 0;
  if (Number.isFinite(conjureElapsedMs)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(conjureElapsedMs / 1000));
  }
  const rounded = Math.floor(num / 3600);
  const result = Math.floor(num / 60) % 60;
  if (rounded > 0) {
    const intl3 = intl4.intl;
    const time = { hours: rounded, minutes: result };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3753.HEBIhT, time);
  } else if (0 < result) {
    const intl2 = intl4.intl;
    const obj = { minutes: result };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3753.vvpiqt, obj);
  } else {
    const intl = intl4.intl;
    formatToPlainStringResult = intl.string(_modDef3753.dCg2BH);
  }
  return formatToPlainStringResult;
};