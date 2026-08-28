// === Module 4714: useDisplayNameStylesEnabled ===

// Module 4714 (useDisplayNameStylesEnabled)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import context from "context" /* 4715 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;

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