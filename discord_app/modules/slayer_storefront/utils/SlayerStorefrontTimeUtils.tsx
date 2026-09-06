// === Module 16928: SlayerStorefrontTimeUtils ===

// Module 16928 (SlayerStorefrontTimeUtils)
import util from "util" /* 1114 */;
import _modDef3417 from "module_3417" /* 3417 */;
import _modDef4153 from "module_4153" /* 4153 */;
import useIntervalDefault from "useInterval" /* 7445 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function getLimitedOfferTimeLeft(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const diffResult = _modDef4153(arg0).diff(_modDef4153(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const time = { days: null, hours: null, minutes: null, seconds: null };
      const _Math = Math;
      time.days = Math.floor(diffResult / tmp5(1090).Seconds.DAY);
      const _Math2 = Math;
      const result = diffResult % tmp5(1090).Seconds.DAY;
      time.hours = Math.floor(result / tmp5(1090).Seconds.HOUR);
      const _Math3 = Math;
      const result1 = diffResult % tmp5(1090).Seconds.HOUR;
      time.minutes = Math.floor(result1 / tmp5(1090).Seconds.MINUTE);
      time.seconds = diffResult % tmp5(1090).Seconds.MINUTE;
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
      let obj = { days };
      let formatToPlainStringResult = intl3.formatToPlainString(util.t.BXpdIg, obj);
    } else if (hours > 0) {
      const intl2 = util.intl;
      obj = { hours };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3417.PPaJSw, obj);
    } else {
      const intl = util.intl;
      obj = { minutes: null };
      const _Math = Math;
      obj.minutes = Math.max(tmp12, 1);
      formatToPlainStringResult = intl.formatToPlainString(_modDef3417["7Z+aIf"], obj);
    }
    return formatToPlainStringResult;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = function useTickingFormattedLimitedOfferTimeLeft(endDate) {
  closure_0 = endDate;
  const tmp = _slicedToArray(noop.useState(() => formatLimitedOfferTimeLeft(closure_0)), 2);
  importDefault = tmp[1];
  useIntervalDefault(() => {
    closure_1(formatLimitedOfferTimeLeft(closure_0));
  }, 1000);
  return tmp[0];
};