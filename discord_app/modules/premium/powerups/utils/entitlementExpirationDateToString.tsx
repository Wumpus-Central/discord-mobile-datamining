// === Module 13463: entitlementExpirationDateToString ===

// Module 13463 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2065 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};