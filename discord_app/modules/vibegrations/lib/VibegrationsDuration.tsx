// === Module 17027: VibegrationsDuration ===

// Module 17027 (VibegrationsDuration)
import util from "util" /* 1115 */;
import _modDef3678 from "module_3678" /* 3678 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDuration.tsx");

export const describeDuration = function describeDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = util.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3678.RsOwXc, obj);
  } else {
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = util.intl;
      const obj2 = { count: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3678["z+U4YX"], obj2);
    } else {
      const intl = util.intl;
      const time = { hours: null, minutes: null };
      const _Math = Math;
      time.hours = Math.floor(rounded / 60);
      time.minutes = rounded % 60;
      formatToPlainStringResult = intl.formatToPlainString(_modDef3678["7Q/vz0"], time);
    }
    return formatToPlainStringResult;
  }
};
export const describeTurnDuration = function describeTurnDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = util.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3678["49T8W0"], obj);
  } else {
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = util.intl;
      const obj2 = { count: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3678.NkZO2t, obj2);
    } else {
      const intl = util.intl;
      const time = { hours: null, minutes: null };
      const _Math = Math;
      time.hours = Math.floor(rounded / 60);
      time.minutes = rounded % 60;
      formatToPlainStringResult = intl.formatToPlainString(_modDef3678["2qYUUZ"], time);
    }
    return formatToPlainStringResult;
  }
};