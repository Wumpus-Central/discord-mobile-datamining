// discord_app/modules/guild_role_subscriptions/formatDurationFromDays.tsx
import util from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
