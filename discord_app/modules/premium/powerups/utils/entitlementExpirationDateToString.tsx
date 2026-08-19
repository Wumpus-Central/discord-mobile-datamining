// discord_app/modules/premium/powerups/utils/entitlementExpirationDateToString.tsx
import _getSystemLocale from "../../../user_settings/LocaleStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};