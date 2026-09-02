// === Module 7442: canBypassSlowmodeHelper ===

// Module 7442 (canBypassSlowmodeHelper)
import setDefault from "set" /* 684 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_3 from "getUncachedChannelPermissions" /* 4120 */;
import { Permissions } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export const canBypassSlowmodeHelper = function canBypassSlowmodeHelper(rateLimitPerUser, can) {
  return can.can(Permissions.BYPASS_SLOWMODE, rateLimitPerUser);
};
export const canBypassSlowmode = function canBypassSlowmode(channel) {
  return closure_3.can(Permissions.BYPASS_SLOWMODE, channel);
};
export const useCanBypassSlowmode = function useCanBypassSlowmode(channel) {
  const _require = channel;
  const items = [closure_3];
  return _require(586).useStateFromStores(items, () => closure_1_3.can(closure_1_4.BYPASS_SLOWMODE, closure_0));
};
export const getSlowmodeIndicatorText = function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  if (canBypassSlowmode) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["8+NidX"]);
  } else if (stateFromStores >= setDefault.Millis.HOUR) {
    let tmp2Result = tmp2(4074);
    const durationResult = tmp2Result.duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + durationResult.minutes();
    const _HermesInternal4 = HermesInternal;
    const combined1 = "" + durationResult.seconds();
    const padStartResult = combined.padStart(2, "0");
    const _HermesInternal5 = HermesInternal;
    return "" + durationResult.hours() + ":" + padStartResult + ":" + combined1.padStart(2, "0");
  } else if (stateFromStores > 0) {
    tmp2Result = tmp2(4074);
    const durationResult1 = tmp2Result.duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + durationResult1.seconds();
    const _HermesInternal2 = HermesInternal;
    return "" + durationResult1.minutes() + ":" + combined2.padStart(2, "0");
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
  if (rateLimitPerUser >= setDefault.Seconds.HOUR) {
    const _Math2 = Math;
    const rounded = Math.floor(rateLimitPerUser / tmp(684).Seconds.HOUR);
    const _Math3 = Math;
    const diff = rateLimitPerUser - rounded * tmp(684).Seconds.HOUR;
    const rounded1 = Math.floor(diff / tmp(684).Seconds.MINUTE);
    const diff1 = rateLimitPerUser - rounded * tmp(684).Seconds.HOUR;
    const diff2 = diff1 - rounded1 * tmp(684).Seconds.MINUTE;
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