// discord_app/modules/guild_role_subscriptions/formatDurationFromDays.tsx
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/formatDurationFromDays.tsx");

export default function formatDurationFromDays(days) {
  if (days > 0) {
    if (days % 7 === 0) {
      const intl2 = require(1236) /* getSystemLocale */.intl;
      let obj = { weeks: null };
      obj[0] = days / 7;
      let formatToPlainStringResult = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.EmoBD2, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { days };
  formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["k2UNz+"], obj);
};