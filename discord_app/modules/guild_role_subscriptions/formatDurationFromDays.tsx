// discord_app/modules/guild_role_subscriptions/formatDurationFromDays.tsx
import intl3 from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/formatDurationFromDays.tsx");

export default function formatDurationFromDays(days) {
  if (days > 0) {
    let formatToPlainStringResult;
    if (days % 7 === 0) {
      const intl2 = intl3.intl;
      const obj2 = { weeks: days / 7 };
      formatToPlainStringResult = intl2.formatToPlainString(intl3.t.EmoBD2, obj2);
    }
    return formatToPlainStringResult;
  }
  const intl = intl3.intl;
  const obj = { days };
  formatToPlainStringResult = intl.formatToPlainString(intl3.t["k2UNz+"], obj);
}
