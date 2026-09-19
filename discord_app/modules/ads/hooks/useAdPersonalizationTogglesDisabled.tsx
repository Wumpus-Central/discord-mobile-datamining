// === Module 16175: useAdPersonalizationTogglesDisabled ===

// Module 16175 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 504 */;
import AdPersonalizationStore from "AdPersonalizationStore" /* 13943 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [AdPersonalizationStore];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};