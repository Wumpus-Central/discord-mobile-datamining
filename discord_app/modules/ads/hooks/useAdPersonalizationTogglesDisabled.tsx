// discord_app/modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import AdPersonalizationStore from "../AdPersonalizationStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [AdPersonalizationStore];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};
