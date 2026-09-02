// === Module 17510: formatDurationFromDays ===

// Module 17510 (formatDurationFromDays)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/formatDurationFromDays.tsx");

export default function formatDurationFromDays(days) {
  if (days > 0) {
    if (days % 7 === 0) {
      const intl2 = getSystemLocale.intl;
      let obj = { weeks: null };
      obj[0] = days / 7;
      let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.EmoBD2, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = getSystemLocale.intl;
  obj = { days };
  formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["k2UNz+"], obj);
};