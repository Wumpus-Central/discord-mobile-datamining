// discord_app/modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx
import _getSystemLocale from "../../../user_settings/LocaleStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};