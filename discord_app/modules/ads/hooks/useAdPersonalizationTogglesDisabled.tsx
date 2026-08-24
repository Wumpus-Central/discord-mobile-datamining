// === Module 15062: useAdPersonalizationTogglesDisabled ===

// Module 15062 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 589 */;
import closure_2 from "reset" /* 13289 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};