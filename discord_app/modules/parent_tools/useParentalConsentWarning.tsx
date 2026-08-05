// discord_app/modules/parent_tools/useParentalConsentWarning.tsx
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => warning.getWarning());
};