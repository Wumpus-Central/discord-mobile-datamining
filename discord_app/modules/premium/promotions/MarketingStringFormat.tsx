// discord_app/modules/premium/promotions/MarketingStringFormat.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import util from "../../../intl/index.native.tsx";
import intl_util from "../../../intl/util.tsx";

require = fn;
function formatWith(header, arg1, fn) {
  if ("" === header) {
    const obj3 = { ok: true, content: "" };
    return obj3;
  } else {
    try {
      const obj = { ok: true, content: fn(intl_util.parseRuntimeIcuAsIntlMessage(header, util.intl.currentLocale)) };
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

export function formatMarketingString(header, arg1) {
  closure_0 = arg1;
  return formatWith(header, "", (arg0) => {
    closure_0 = arg0;
    const intl = util.intl;
    return intl.format(() => closure_0, closure_0);
  });
}
export function formatMarketingPlainString(header, formatVariableValues) {
  closure_0 = formatVariableValues;
  return formatWith(header, "", (time) => {
    closure_0 = time;
    const intl = util.intl;
    return intl.formatToPlainString(() => closure_0, closure_0);
  });
}
