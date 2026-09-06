// === Module 7688: SlowmodeUtils ===

// Module 7688 (SlowmodeUtils)
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export const canBypassSlowmodeHelper = function canBypassSlowmodeHelper(rateLimitPerUser, can) {
  return can.can(Permissions.BYPASS_SLOWMODE, rateLimitPerUser);
};
export const canBypassSlowmode = function canBypassSlowmode(channel) {
  return PermissionStore.can(Permissions.BYPASS_SLOWMODE, channel);
};
export const useCanBypassSlowmode = function useCanBypassSlowmode(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.BYPASS_SLOWMODE, closure_0));
};
export const getSlowmodeIndicatorText = function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  if (canBypassSlowmode) {
    const intl2 = util.intl;
    return intl2.string(util.t["8+NidX"]);
  } else if (stateFromStores >= DurationsDefault.Millis.HOUR) {
    let tmp2Result = tmp2(4153);
    const time2 = tmp2Result.duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + time2.minutes();
    const _HermesInternal4 = HermesInternal;
    const combined1 = "" + time2.seconds();
    const padStartResult = combined.padStart(2, "0");
    const _HermesInternal5 = HermesInternal;
    return "" + time2.hours() + ":" + padStartResult + ":" + combined1.padStart(2, "0");
  } else if (stateFromStores > 0) {
    tmp2Result = tmp2(4153);
    const time = tmp2Result.duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + time.seconds();
    const _HermesInternal2 = HermesInternal;
    return "" + time.minutes() + ":" + combined2.padStart(2, "0");
  } else {
    const intl = util.intl;
    return intl.string(util.t.Icu3bf);
  }
};
export const getSlowmodeDescription = function getSlowmodeDescription(rateLimitPerUser) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (rateLimitPerUser >= DurationsDefault.Seconds.HOUR) {
    const _Math2 = Math;
    const rounded = Math.floor(rateLimitPerUser / tmp(1090).Seconds.HOUR);
    const _Math3 = Math;
    const diff = rateLimitPerUser - rounded * tmp(1090).Seconds.HOUR;
    const rounded1 = Math.floor(diff / tmp(1090).Seconds.MINUTE);
    const diff1 = rateLimitPerUser - rounded * tmp(1090).Seconds.HOUR;
    const diff2 = diff1 - rounded1 * tmp(1090).Seconds.MINUTE;
    const intl3 = util.intl;
    const t3 = util.t;
    const time = { hours: rounded, minutes: rounded1, seconds: diff2 };
    return intl3.formatToPlainString(flag ? t3.oEwLez : t3["3hz51F"], time);
  } else if (rateLimitPerUser >= 60) {
    const _Math = Math;
    const rounded2 = Math.floor(rateLimitPerUser / 60);
    const intl2 = util.intl;
    const t2 = util.t;
    const time1 = { minutes: rounded2, seconds: rateLimitPerUser - 60 * rounded2 };
    return intl2.formatToPlainString(flag ? t2.DARKYm : t2.sY3wlG, time1);
  } else {
    const intl = util.intl;
    const t = util.t;
    const obj = { seconds: rateLimitPerUser };
    return intl.formatToPlainString(flag ? t["9yE8Ga"] : t.IWntYg, obj);
  }
};