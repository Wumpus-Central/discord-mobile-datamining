// discord_app/modules/premium/powerups/utils/entitlementExpirationDateToString.tsx
import LocaleStore from "../../../user_settings/LocaleStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
}
