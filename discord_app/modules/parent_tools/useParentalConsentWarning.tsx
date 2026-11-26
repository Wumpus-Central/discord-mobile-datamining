// === Module 16373: useParentalConsentWarning ===

// Module 16373 (useParentalConsentWarning)
import initialize from "initialize" /* 504 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 16374 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export function useParentalConsentWarning() {
  items = [ParentalConsentWarningStore];
  return initialize.useStateFromStores(items, () => warning.getWarning());
}