// === Module 8793: SlowmodeUtils ===

// Module 8793 (SlowmodeUtils)
import DurationsDefault from "Durations" /* 1089 */;
import util from "util" /* 1113 */;
import _modDef2169 from "module_2169" /* 2169 */;
import PermissionStore from "PermissionStore" /* 5238 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export function canBypassSlowmodeHelper(rateLimitPerUser, can) {
  return can.can(Permissions.BYPASS_SLOWMODE, rateLimitPerUser);
}
export function canBypassSlowmode(PressableOpacity) {
  return PermissionStore.can(Permissions.BYPASS_SLOWMODE, PressableOpacity);
}
export function useCanBypassSlowmode(channel) {
  _require = channel;
  items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.BYPASS_SLOWMODE, closure_0));
}
export function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  if (canBypassSlowmode) {
    const intl2 = util.intl;
    return intl2.string(util.t["8+NidX"]);
  } else if (stateFromStores >= DurationsDefault.Millis.HOUR) {
    const time2 = _modDef2169.duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + time2.minutes();
    const tmp2Result = _modDef2169;
    const _HermesInternal4 = HermesInternal;
    const combined1 = "" + time2.seconds();
    const padStartResult = combined.padStart(2, "0");
    const _HermesInternal5 = HermesInternal;
    return "" + time2.hours() + ":" + padStartResult + ":" + combined1.padStart(2, "0");
  } else if (stateFromStores > 0) {
    const time = _modDef2169.duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + time.seconds();
    const tmp2Result2 = _modDef2169;
    const _HermesInternal2 = HermesInternal;
    return "" + time.minutes() + ":" + combined2.padStart(2, "0");
  } else {
    const intl = util.intl;
    return intl.string(util.t.Icu3bf);
  }
}
export function getSlowmodeDescription(seconds) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const rounded = Math.floor(seconds / DurationsDefault.Seconds.HOUR);
  const diff = seconds - rounded * DurationsDefault.Seconds.HOUR;
  const rounded1 = Math.floor(diff / DurationsDefault.Seconds.MINUTE);
  const diff1 = seconds - rounded * DurationsDefault.Seconds.HOUR;
  const diff2 = diff1 - rounded1 * DurationsDefault.Seconds.MINUTE;
  if (rounded > 0) {
    const intl3 = util.intl;
    const t1 = { hours: rounded, minutes: rounded1, seconds: diff2 };
    intl3.formatToPlainString(flag ? t1.oEwLez : t1["3hz51F"], t1);
    const tmp12 = flag ? t1.oEwLez : t1["3hz51F"];
  } else if (rounded1 > 0) {
    const intl2 = util.intl;
    const t2 = { minutes: rounded1, seconds: diff2 };
    intl2.formatToPlainString(flag ? t2.DARKYm : t2.sY3wlG, t2);
    const tmp9 = flag ? t2.DARKYm : t2.sY3wlG;
  } else {
    const intl = util.intl;
    const t = util.t;
    const obj = { seconds };
    return intl.formatToPlainString(flag ? t["9yE8Ga"] : t.IWntYg, obj);
  }
}
export function getSlowmodeTooltipLabel(rateLimitPerUser) {
  const rounded = Math.floor(rateLimitPerUser / DurationsDefault.Seconds.HOUR);
  const diff = rateLimitPerUser - rounded * DurationsDefault.Seconds.HOUR;
  const rounded1 = Math.floor(diff / DurationsDefault.Seconds.MINUTE);
  const diff1 = rateLimitPerUser - rounded * DurationsDefault.Seconds.HOUR;
  const diff2 = diff1 - rounded1 * DurationsDefault.Seconds.MINUTE;
  if (rounded > 0) {
    const intl3 = util.intl;
    const time = { hours: rounded, minutes: rounded1, seconds: diff2 };
    let formatToPlainStringResult = intl3.formatToPlainString(util.t.YiNO8W, time);
  } else if (rounded1 > 0) {
    const intl2 = util.intl;
    const time1 = { minutes: rounded1, seconds: diff2 };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.oSzkf2, time1);
  } else {
    const intl = util.intl;
    const obj = { seconds: rateLimitPerUser };
    formatToPlainStringResult = intl.formatToPlainString(util.t.uaRDmS, obj);
  }
  return formatToPlainStringResult;
}