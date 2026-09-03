// === Module 15698: useAdPersonalizationTogglesDisabled ===

// Module 15698 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 586 */;
import closure_2 from "reset" /* 13575 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};