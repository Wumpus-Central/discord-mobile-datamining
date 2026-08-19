// === Module 16145: getLimitedOfferTimeLeft ===

// Module 16145 (getLimitedOfferTimeLeft)
import obj132Default from "obj132" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3271 */;
import tDefault from "t" /* 3975 */;
import useIntervalDefault from "useInterval" /* 7416 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

require = fn;
function getLimitedOfferTimeLeft(closure_0) {
  if (null == closure_0) {
    return null;
  } else {
    const diffResult = tDefault(closure_0).diff(tDefault(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const obj = { days: null, hours: null, minutes: null, seconds: null };
      const _Math = Math;
      obj[0] = Math.floor(diffResult / obj132Default.Seconds.DAY);
      const _Math2 = Math;
      const result = diffResult % obj132Default.Seconds.DAY;
      obj[1] = Math.floor(result / obj132Default.Seconds.HOUR);
      const _Math3 = Math;
      const result1 = diffResult % obj132Default.Seconds.HOUR;
      obj[2] = Math.floor(result1 / obj132Default.Seconds.MINUTE);
      obj[3] = diffResult % obj132Default.Seconds.MINUTE;
      tmp4 = obj;
    }
    return tmp4;
  }
}
function formatLimitedOfferTimeLeft(closure_0) {
  const tmp = getLimitedOfferTimeLeft(closure_0);
  if (null == tmp) {
    return null;
  } else {
    ({ days, hours } = tmp);
    if (days > 0) {
      const intl3 = getSystemLocale.intl;
      let obj = { days: null };
      obj[0] = days;
      let formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.BXpdIg, obj);
    } else if (hours > 0) {
      const intl2 = getSystemLocale.intl;
      obj = { hours: null };
      obj[0] = hours;
      formatToPlainStringResult = intl2.formatToPlainString(messagesProxyDefault.PPaJSw, obj);
    } else {
      const intl = getSystemLocale.intl;
      obj = { minutes: null };
      const _Math = Math;
      obj[0] = Math.max(tmp12, 1);
      formatToPlainStringResult = intl.formatToPlainString(messagesProxyDefault["7Z+aIf"], obj);
    }
    return formatToPlainStringResult;
  }
}
let result = require("obj132").fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = function useTickingFormattedLimitedOfferTimeLeft(endDate) {
  closure_0 = endDate;
  const tmp = callback(React.useState(() => formatLimitedOfferTimeLeft(closure_0)), 2);
  importDefault = tmp[1];
  useIntervalDefault(() => {
    callback(formatLimitedOfferTimeLeft(closure_0));
  }, 1000);
  return tmp[0];
};