// === Module 7441: canBypassSlowmodeHelper ===

// Module 7441 (canBypassSlowmodeHelper)
import obj132Default from "obj132" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import tDefault from "t" /* 3975 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export const canBypassSlowmodeHelper = function canBypassSlowmodeHelper(item, closure_9) {
  return closure_9.can(Permissions.BYPASS_SLOWMODE, item);
};
export const canBypassSlowmode = function canBypassSlowmode(channel) {
  return closure_3.can(Permissions.BYPASS_SLOWMODE, channel);
};
export const useCanBypassSlowmode = function useCanBypassSlowmode(channel) {
  const _require = channel;
  const items = [closure_3];
  return _require(589).useStateFromStores(items, () => closure_1_3.can(Permissions.BYPASS_SLOWMODE, closure_0));
};
export const getSlowmodeIndicatorText = function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  if (canBypassSlowmode) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["8+NidX"]);
  } else if (stateFromStores >= obj132Default.Millis.HOUR) {
    let tmp2Result = tDefault;
    const time2 = tmp2Result.duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + time2.minutes();
    const _HermesInternal4 = HermesInternal;
    const combined1 = "" + time2.seconds();
    const padStartResult = combined.padStart(2, "0");
    const _HermesInternal5 = HermesInternal;
    return "" + time2.hours() + ":" + padStartResult + ":" + combined1.padStart(2, "0");
  } else if (stateFromStores > 0) {
    tmp2Result = tDefault;
    const time = tmp2Result.duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + time.seconds();
    const _HermesInternal2 = HermesInternal;
    return "" + time.minutes() + ":" + combined2.padStart(2, "0");
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Icu3bf);
  }
};
export const getSlowmodeDescription = function getSlowmodeDescription(rateLimitPerUser) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (rateLimitPerUser >= obj132Default.Seconds.HOUR) {
    const _Math2 = Math;
    const rounded = Math.floor(rateLimitPerUser / obj132Default.Seconds.HOUR);
    const _Math3 = Math;
    const diff = rateLimitPerUser - rounded * obj132Default.Seconds.HOUR;
    const rounded1 = Math.floor(diff / obj132Default.Seconds.MINUTE);
    const diff1 = rateLimitPerUser - rounded * obj132Default.Seconds.HOUR;
    const diff2 = diff1 - rounded1 * obj132Default.Seconds.MINUTE;
    const intl3 = getSystemLocale.intl;
    const t3 = getSystemLocale.t;
    let obj = { hours: null, minutes: null, seconds: null };
    obj[0] = rounded;
    obj[1] = rounded1;
    obj[2] = diff2;
    return intl3.formatToPlainString(flag ? t3.oEwLez : t3["3hz51F"], obj);
  } else if (rateLimitPerUser >= 60) {
    const _Math = Math;
    const rounded2 = Math.floor(rateLimitPerUser / 60);
    const intl2 = getSystemLocale.intl;
    const t2 = getSystemLocale.t;
    obj = { minutes: null, seconds: null };
    obj[0] = rounded2;
    obj[1] = rateLimitPerUser - 60 * rounded2;
    return intl2.formatToPlainString(flag ? t2.DARKYm : t2.sY3wlG, obj);
  } else {
    const intl = getSystemLocale.intl;
    const t = getSystemLocale.t;
    obj = { seconds: null };
    obj[0] = rateLimitPerUser;
    return intl.formatToPlainString(flag ? t["9yE8Ga"] : t.IWntYg, obj);
  }
};