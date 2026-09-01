// discord_app/modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../AdPersonalizationStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};
