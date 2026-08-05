// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx
import { useContext } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const result = require("initialize").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let overrideSettings = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require("../DisplayNameStylesContext.tsx") /* context */.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};