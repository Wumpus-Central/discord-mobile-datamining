// === Module 17499: useAdPersonalizationTogglesDisabled ===

// Module 17499 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 504 */;
import AdPersonalizationStore from "AdPersonalizationStore" /* 15115 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export function useAdPersonalizationTogglesDisabled() {
  items = [AdPersonalizationStore];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
}