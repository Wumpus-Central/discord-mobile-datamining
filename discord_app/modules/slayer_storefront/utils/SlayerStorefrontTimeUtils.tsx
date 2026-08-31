// === Module 16472: getLimitedOfferTimeLeft ===

// Module 16472 (getLimitedOfferTimeLeft)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3341 */;
import hooksDefault from "hooks" /* 4045 */;
import useIntervalDefault from "useInterval" /* 7158 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

require = arg1;
function getLimitedOfferTimeLeft(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const diffResult = hooksDefault(arg0).diff(hooksDefault(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const obj = { days: null, hours: null, minutes: null, seconds: null };
      const _Math = Math;
      obj[0] = Math.floor(diffResult / tmp5(687).Seconds.DAY);
      const _Math2 = Math;
      const result = diffResult % tmp5(687).Seconds.DAY;
      obj[1] = Math.floor(result / tmp5(687).Seconds.HOUR);
      const _Math3 = Math;
      const result1 = diffResult % tmp5(687).Seconds.HOUR;
      obj[2] = Math.floor(result1 / tmp5(687).Seconds.MINUTE);
      obj[3] = diffResult % tmp5(687).Seconds.MINUTE;
      tmp4 = obj;
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
let result = require("set").fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = function useTickingFormattedLimitedOfferTimeLeft(endDate) {
  closure_0 = endDate;
  const tmp = callback(React.useState(() => closure_1_6(closure_0)), 2);
  importDefault = tmp[1];
  useIntervalDefault(() => {
    callback(closure_1_6(closure_0));
  }, 1000);
  return tmp[0];
};