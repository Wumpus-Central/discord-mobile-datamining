// discord_app/modules/guild_role_subscriptions/formatDurationFromDays.tsx
import set from "../../../_runtime/00002_set.js";
import getSystemLocale from "../../intl/index.native.tsx";

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
}
