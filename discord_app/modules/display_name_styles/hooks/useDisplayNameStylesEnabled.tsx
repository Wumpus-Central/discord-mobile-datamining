// === Module 4816: useDisplayNameStylesEnabled ===

// Module 4816 (useDisplayNameStylesEnabled)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import context from "context" /* 4817 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

const useContext = noop.useContext;
const result = set.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [closure_3];
  let overrideSettings = initialize.useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(context.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};