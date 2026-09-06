// === Module 17690: formatDurationFromDays ===

// Module 17690 (formatDurationFromDays)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/formatDurationFromDays.tsx");

export default function formatDurationFromDays(days) {
  if (days > 0) {
    if (days % 7 === 0) {
      const intl2 = util.intl;
      let obj = { weeks: days / 7 };
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.EmoBD2, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = util.intl;
  obj = { days };
  formatToPlainStringResult = intl.formatToPlainString(util.t["k2UNz+"], obj);
};