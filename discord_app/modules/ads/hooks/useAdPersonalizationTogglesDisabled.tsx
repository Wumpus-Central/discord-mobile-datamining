// === Module 15856: useAdPersonalizationTogglesDisabled ===

// Module 15856 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 504 */;
import closure_2 from "reset" /* 13684 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};