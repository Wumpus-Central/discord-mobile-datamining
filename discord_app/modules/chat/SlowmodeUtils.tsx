// discord_app/modules/chat/SlowmodeUtils.tsx
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { set } from "../../utils/Durations.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export const canBypassSlowmodeHelper = function canBypassSlowmodeHelper(rateLimitPerUser, can) {
  return can.can(Permissions.BYPASS_SLOWMODE, rateLimitPerUser);
};
export const canBypassSlowmode = function canBypassSlowmode(channel) {
  return getUncachedChannelPermissions.can(Permissions.BYPASS_SLOWMODE, channel);
};
export const useCanBypassSlowmode = function useCanBypassSlowmode(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  return _initialize.useStateFromStores(items, () => outer1_3.can(outer1_4.BYPASS_SLOWMODE, closure_0));
};
export const getSlowmodeIndicatorText = function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  if (canBypassSlowmode) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["8+NidX"]);
  } else if (stateFromStores >= set.Millis.HOUR) {
    let tmp2Result = tmp2(3975);
    const durationResult = tmp2Result.duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + durationResult.minutes();
    const _HermesInternal4 = HermesInternal;
    const combined1 = "" + durationResult.seconds();
    const padStartResult = combined.padStart(2, "0");
    const _HermesInternal5 = HermesInternal;
    return "" + durationResult.hours() + ":" + padStartResult + ":" + combined1.padStart(2, "0");
  } else if (stateFromStores > 0) {
    tmp2Result = tmp2(3975);
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
  if (rateLimitPerUser >= set.Seconds.HOUR) {
    const _Math2 = Math;
    const rounded = Math.floor(rateLimitPerUser / tmp(687).Seconds.HOUR);
    const _Math3 = Math;
    const diff = rateLimitPerUser - rounded * tmp(687).Seconds.HOUR;
    const rounded1 = Math.floor(diff / tmp(687).Seconds.MINUTE);
    const diff1 = rateLimitPerUser - rounded * tmp(687).Seconds.HOUR;
    const diff2 = diff1 - rounded1 * tmp(687).Seconds.MINUTE;
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