// === Module 10386: SlayerStorefrontTimeUtils ===

// Module 10386 (SlayerStorefrontTimeUtils)
import DurationsDefault from "Durations" /* 1091 */;
import util from "util" /* 1115 */;
import _modDef3585 from "module_3585" /* 3585 */;
import _modDef4421 from "module_4421" /* 4421 */;
import useIntervalDefault from "useInterval" /* 7031 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function getLimitedOfferTimeLeft(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const diffResult = _modDef4421(arg0).diff(_modDef4421(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const time = { days: null, hours: null, minutes: null, seconds: null };
      const _Math = Math;
      time.days = Math.floor(diffResult / DurationsDefault.Seconds.DAY);
      const _Math2 = Math;
      const result = diffResult % DurationsDefault.Seconds.DAY;
      time.hours = Math.floor(result / DurationsDefault.Seconds.HOUR);
      const _Math3 = Math;
      const result1 = diffResult % DurationsDefault.Seconds.HOUR;
      time.minutes = Math.floor(result1 / DurationsDefault.Seconds.MINUTE);
      time.seconds = diffResult % DurationsDefault.Seconds.MINUTE;
      tmp4 = time;
    }
    return tmp4;
  }
}
function formatLimitedOfferTimeLeft(arg0) {
  const tmp = getLimitedOfferTimeLeft(arg0);
  if (null == tmp) {
    return null;
  } else {
    ({ days, hours } = tmp);
    if (days > 0) {
      const intl3 = util.intl;
      const obj2 = { days };
      let formatToPlainStringResult = intl3.formatToPlainString(util.t.BXpdIg, obj2);
    } else if (hours > 0) {
      const intl2 = util.intl;
      const obj3 = { hours };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3585.PPaJSw, obj3);
    } else {
      const intl = util.intl;
      const obj = { minutes: null };
      const _Math = Math;
      obj.minutes = Math.max(tmp12, 1);
      formatToPlainStringResult = intl.formatToPlainString(_modDef3585["7Z+aIf"], obj);
    }
    return formatToPlainStringResult;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export const useIsLimitedOfferExpired = function useIsLimitedOfferExpired(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = null == getLimitedOfferTimeLeft(arg0);
  }
  let SECOND = null;
  if (null != arg0) {
    SECOND = null;
    if (!tmp) {
      SECOND = DurationsDefault.Millis.SECOND;
    }
  }
  useIntervalDefault(_slicedToArray(noop.useReducer((arg0) => arg0 + 1, 0), 2)[1], SECOND);
  return tmp;
};
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = function useTickingFormattedLimitedOfferTimeLeft(endDate) {
  closure_0 = endDate;
  let flag = enabled;
  if (enabled === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(noop.useState(() => formatLimitedOfferTimeLeft(closure_0)), 2);
  importDefault = tmp[1];
  let num = null;
  if (flag) {
    num = 1000;
  }
  useIntervalDefault(() => {
    closure_1(formatLimitedOfferTimeLeft(closure_0));
  }, num);
  let first = null;
  if (flag) {
    first = tmp[0];
  }
  return first;
};