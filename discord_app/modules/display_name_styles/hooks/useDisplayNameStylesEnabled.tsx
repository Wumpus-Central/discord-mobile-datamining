// === Module 4795: useDisplayNameStylesEnabled ===

// Module 4795 (useDisplayNameStylesEnabled)
import _mod19 from "module_19" /* 19 */;
import initialize from "initialize" /* 504 */;
import DisplayNameStylesContext from "DisplayNameStylesContext" /* 4796 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import size from "module_2" /* 2 */;

const useContext = _mod19.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled() {
  const items = [AccessibilityStore];
  let overrideSettings = initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(DisplayNameStylesContext.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};