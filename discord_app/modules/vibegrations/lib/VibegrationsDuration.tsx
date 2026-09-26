// === Module 16350: VibegrationsDuration ===

// Module 16350 (VibegrationsDuration)
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDuration.tsx");

export const describeDuration = function describeDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = util.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3715.RsOwXc, obj);
  } else {
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = util.intl;
      const obj2 = { count: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3715["z+U4YX"], obj2);
    } else {
      const intl = util.intl;
      const time = { hours: null, minutes: null };
      const _Math = Math;
      time.hours = Math.floor(rounded / 60);
      time.minutes = rounded % 60;
      formatToPlainStringResult = intl.formatToPlainString(_modDef3715["7Q/vz0"], time);
    }
    return formatToPlainStringResult;
  }
};
export const describeTurnDuration = function describeTurnDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = util.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3715["49T8W0"], obj);
  } else {
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = util.intl;
      const obj2 = { count: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3715.NkZO2t, obj2);
    } else {
      const intl = util.intl;
      const time = { hours: null, minutes: null };
      const _Math = Math;
      time.hours = Math.floor(rounded / 60);
      time.minutes = rounded % 60;
      formatToPlainStringResult = intl.formatToPlainString(_modDef3715["2qYUUZ"], time);
    }
    return formatToPlainStringResult;
  }
};
export const formatElapsed = function formatElapsed(vibegrationsElapsedMs) {
  let num = 0;
  if (Number.isFinite(vibegrationsElapsedMs)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(vibegrationsElapsedMs / 1000));
  }
  const rounded = Math.floor(num / 3600);
  const result = Math.floor(num / 60) % 60;
  const result1 = num % 60;
  if (rounded > 0) {
    const intl3 = util.intl;
    const time = { hours: rounded, minutes: result, seconds: result1 };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3715.ru1bG9, time);
  } else if (0 < result) {
    const intl2 = util.intl;
    const time1 = { minutes: result, seconds: result1 };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3715["9/TJIF"], time1);
  } else {
    const intl = util.intl;
    const obj = { seconds: result1 };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3715.FqRCg2, obj);
  }
  return formatToPlainStringResult;
};
export const describeElapsedLabel = function describeElapsedLabel(vibegrationsElapsedMs) {
  let num = 0;
  if (Number.isFinite(vibegrationsElapsedMs)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(vibegrationsElapsedMs / 1000));
  }
  const rounded = Math.floor(num / 3600);
  const result = Math.floor(num / 60) % 60;
  if (rounded > 0) {
    const intl3 = util.intl;
    const time = { hours: rounded, minutes: result };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3715.RmLsRf, time);
  } else if (0 < result) {
    const intl2 = util.intl;
    const obj = { minutes: result };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3715["/J6kmO"], obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3715.gTzQ7A);
  }
  return formatToPlainStringResult;
};