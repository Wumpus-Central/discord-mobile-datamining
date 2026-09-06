// discord_app/modules/parent_tools/useParentalConsentWarning.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ParentalConsentWarningStore from "ParentalConsentWarningStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [ParentalConsentWarningStore];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};
