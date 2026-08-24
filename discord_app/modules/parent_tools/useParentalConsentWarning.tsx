// discord_app/modules/parent_tools/useParentalConsentWarning.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "ParentalConsentWarningStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};