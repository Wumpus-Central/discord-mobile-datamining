// discord_app/modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx
import reset from "reset";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [reset];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};