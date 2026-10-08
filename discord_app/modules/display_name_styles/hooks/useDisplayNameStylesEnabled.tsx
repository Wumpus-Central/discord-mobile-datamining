// === Module 5625: useDisplayNameStylesEnabled ===

// Module 5625 (useDisplayNameStylesEnabled)
import _mod19 from "module_19" /* 19 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DisplayNameStylesContext from "DisplayNameStylesContext" /* 5626 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useContext = _mod19.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayNameStylesEnabled() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return AccessibilityStore.displayNameStylesEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let overrideSettings = initialize.useStateFromStores(tmp4, tmp5);
  if (!overrideSettings) {
    overrideSettings = useContext(DisplayNameStylesContext.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
}) : (function useDisplayNameStylesEnabled() {
  const items = [AccessibilityStore];
  let overrideSettings = initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(DisplayNameStylesContext.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
});