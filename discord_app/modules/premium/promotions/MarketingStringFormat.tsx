// === Module 16080: MarketingStringFormat ===

// Module 16080 (MarketingStringFormat)
import LoggerDefault from "Logger" /* 3 */;
import util from "util" /* 1128 */;
import intl_util from "intl/util" /* 1130 */;

require = fn;
function formatWith(acknowledgedBadgeLabel, arg1, fn) {
  if ("" === acknowledgedBadgeLabel) {
    const obj3 = { ok: true, content: "" };
    return obj3;
  } else {
    try {
      const obj = { ok: true, content: fn(intl_util.parseRuntimeIcuAsIntlMessage(acknowledgedBadgeLabel, util.intl.currentLocale)) };
      return obj;
    } catch (tmp4) {
      logger.warn("Failed to format marketing string", tmp4);
      const obj4 = { ok: false, error: null };
      const _String = String;
      obj4.error = String(tmp4);
      return obj4;
    }
  }
}
const logger = new LoggerDefault("MarketingStringFormat.tsx");
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingStringFormat.tsx");

export const formatMarketingString = function formatMarketingString(acknowledgedBadgeLabel, arg1) {
  closure_0 = arg1;
  return formatWith(acknowledgedBadgeLabel, "", (arg0) => {
    closure_0 = arg0;
    const intl = util.intl;
    return intl.format(() => closure_0, closure_0);
  });
};
export const formatMarketingPlainString = function formatMarketingPlainString(acknowledgedBadgeLabel, formatVariableValues) {
  closure_0 = formatVariableValues;
  return formatWith(acknowledgedBadgeLabel, "", (time) => {
    closure_0 = time;
    const intl = util.intl;
    return intl.formatToPlainString(() => closure_0, closure_0);
  });
};