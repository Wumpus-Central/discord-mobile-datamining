// === Module 14998: useAdPersonalizationTogglesDisabled ===

// Module 14998 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 589 */;
import reset from "reset" /* 13234 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};